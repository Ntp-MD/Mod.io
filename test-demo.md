# Variable Management Testing - Quick Demo

## How to Test the Variable Change Management Rules

### Step 1: Manual Validation Test

**Open PowerShell/CMD and run:**

```powershell
# Navigate to project directory
cd "c:\Users\ITOP\Desktop\MOD@ITOPPLUS\Mod.io"

# Check current variables
Get-Content "src/styles/variables.css" | Select-String "--"

# Check for variable usage in files
Select-String -Path "src\*.css", "src\*.vue" -Pattern "var\(--" | Select-Object -First 5
```

### Step 2: Create Test Scenario

**1. Add a test variable:**
```powershell
Add-Content "src/styles/variables.css" "`n  --test-deprecated: #ff0000;"
```

**2. Use the variable in a test file:**
```powershell
Set-Content "test-component.css" @"
.test-component {
  color: var(--test-deprecated);
  background: var(--main-color-1);
}
"@
```

**3. Check for broken references:**
```powershell
# This should find the test-deprecated usage
Select-String -Path "*.css" -Pattern "var\(--test-deprecated"
```

### Step 3: Test Variable Deletion

**1. Remove the variable from variables.css:**
```powershell
(Get-Content "src/styles/variables.css") | Where-Object { $_ -notmatch "--test-deprecated" } | Set-Content "src/styles/variables.css"
```

**2. Check for broken references (should find issues):**
```powershell
$usedVars = Select-String -Path "*.css" -Pattern "var\(--test-deprecated"
if ($usedVars) {
    Write-Host "❌ Found broken reference: $($usedVars.Line)" -ForegroundColor Red
} else {
    Write-Host "✅ No broken references found" -ForegroundColor Green
}
```

### Step 4: Test Variable Replacement

**1. Replace the broken variable:**
```powershell
(Get-Content "test-component.css") -replace "var\(--test-deprecated\)", "var(--main-color-2)" | Set-Content "test-component.css"
```

**2. Verify replacement:**
```powershell
Get-Content "test-component.css"
```

### Step 5: Clean Up

```powershell
Remove-Item "test-component.css" -Force
```

## Expected Results

### ✅ Successful Test:
- Variable deletion detected broken references
- Replacement fixed the broken references  
- No errors after proper replacement

### ❌ Failed Test:
- Broken references not detected
- Replacement didn't work correctly

## Automated Testing Commands

### Quick Validation Script:
```powershell
# Simple validation check
$variables = Get-Content "src/styles/variables.css" | Select-String "--[^:]*" | ForEach-Object { $_.Matches.Value }
$issues = 0

Get-ChildItem -Path "src" -Include "*.css", "*.vue" -Recurse | ForEach-Object {
    if ($_.FullName -ne "src/styles/variables.css") {
        $content = Get-Content $_.FullName -Raw
        $usedVars = [regex]::Matches($content, 'var\(--[^)]*\)') | ForEach-Object { $_.Value -replace 'var\(--' -replace '\)' }
        
        foreach ($var in $usedVars) {
            if ($variables -notcontains $var) {
                Write-Host "❌ $($_.Name): Variable '$var' not found" -ForegroundColor Red
                $issues++
            }
        }
    }
}

if ($issues -eq 0) {
    Write-Host "✅ All variables validated!" -ForegroundColor Green
} else {
    Write-Host "❌ Found $issues issues" -ForegroundColor Red
}
```

## Integration with Git

### Pre-commit Hook Test:
```powershell
# Test if variables.css changed
$gitStatus = git status --porcelain
if ($gitStatus -match "M.*variables.css") {
    Write-Host "variables.css modified - running validation..."
    # Run validation script here
    if ($issues -eq 0) {
        Write-Host "✅ Validation passed"
    } else {
        Write-Host "❌ Validation failed - fix before committing"
        exit 1
    }
}
```

## Performance Test

### Test with Multiple Files:
```powershell
# Create 50 test files
for ($i = 1; $i -le 50; $i++) {
    Set-Content "test-$i.css" @"
.test-$i {
    color: var(--main-color-1);
    padding: var(--gap-md);
}
"@
}

# Time the validation
$stopwatch = [System.Diagnostics.Stopwatch]::StartNew()
# Run validation here
$stopwatch.Stop()
Write-Host "Validation completed in $($stopwatch.ElapsedMilliseconds)ms"

# Clean up
Remove-Item "test-*.css" -Force
```

## Real-World Test Scenarios

### Scenario 1: Designer Changes Variable
1. Designer changes `--gap-md` from `20px` to `24px`
2. Run validation to check impact
3. Test all components using `--gap-md`
4. Verify visual consistency

### Scenario 2: Deprecated Variable Removal
1. Team decides to remove deprecated `--color-old-primary`
2. Find all usages across project
3. Replace with `--main-color-1`
4. Validate no broken references remain

### Scenario 3: New Variable Addition
1. Developer needs `--gap-special` for new component
2. Check if similar variable exists
3. Add to variables.css with proper documentation
4. Update component to use new variable
5. Validate integration

This testing approach ensures the Variable Change Management Process works reliably in real development scenarios.
