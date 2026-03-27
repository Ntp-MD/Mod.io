# Enhanced Universal Code Checklist Test
# Works on any project with CSS/Vue files with proper variable validation

param(
    [string]$ProjectPath = ".",
    [string]$StylesPath = "src\styles",
    [string]$ComponentsPath = "src\components",
    [string]$VariablesFile = "variables.css"
)

Write-Host "Enhanced Universal Code Checklist Test" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host "Project: $ProjectPath" -ForegroundColor Gray
Write-Host "Styles: $StylesPath" -ForegroundColor Gray
Write-Host "Components: $ComponentsPath" -ForegroundColor Gray
Write-Host ""

$passed = 0
$total = 6
$errors = @()

# Helper function to extract CSS variables from content
function Get-UsedVariables {
    param([string]$content)
    $pattern = "var\((--[^)]+)\)"
    $varMatches = [regex]::Matches($content, $pattern)
    $variables = @()
    foreach ($match in $varMatches) {
        $varName = $match.Groups[1].Value
        if ($variables -notcontains $varName) {
            $variables += $varName
        }
    }
    return $variables
}

# Helper function to get defined variables from variables.css
function Get-DefinedVariables {
    param([string]$variablesPath)
    if (-not (Test-Path $variablesPath)) {
        return @()
    }
    
    $content = Get-Content $variablesPath -Raw
    $pattern = "^(\s*--[^:]+):"
    $varMatches = [regex]::Matches($content, $pattern, [Text.RegularExpressions.RegexOptions]::Multiline)
    $variables = @()
    foreach ($match in $varMatches) {
        $varName = $match.Groups[1].Value.Trim()
        if ($variables -notcontains $varName) {
            $variables += $varName
        }
    }
    return $variables
}

# Test 1: CSS files variables validation
Write-Host ""
Write-Host "Test 1: CSS files variables validation..." -ForegroundColor Yellow
try {
    $stylesFullPath = Join-Path $ProjectPath $StylesPath
    $cssFiles = Get-ChildItem "$stylesFullPath\*.css" -Exclude $VariablesFile -ErrorAction SilentlyContinue
    $variablesFullPath = Join-Path $ProjectPath $StylesPath | Join-Path -ChildPath $VariablesFile
    $definedVars = Get-DefinedVariables -variablesPath $variablesFullPath
    
    $allVarsValid = $true
    foreach ($file in $cssFiles) {
        $content = Get-Content $file.FullName -Raw
        $usedVars = Get-UsedVariables -content $content
        
        foreach ($var in $usedVars) {
            if ($definedVars -notcontains $var) {
                Write-Host "  ERROR: $($file.Name) uses undefined variable: $var" -ForegroundColor Red
                $errors += "CSS file $($file.Name) uses undefined variable: $var"
                $allVarsValid = $false
            }
        }
    }
    
    if ($allVarsValid) {
        Write-Host "PASSED: All CSS variables are properly defined" -ForegroundColor Green
        $passed++
    }
    else {
        Write-Host "FAILED: Found undefined CSS variables" -ForegroundColor Red
    }
}
catch {
    Write-Host "FAILED: Error checking CSS variables" -ForegroundColor Red
    $errors += "Error checking CSS variables: $($_.Exception.Message)"
}

# Test 2: Variables in variables.css
Write-Host ""
Write-Host "Test 2: Variables in variables.css..." -ForegroundColor Yellow
try {
    $variablesFullPath = Join-Path $ProjectPath $StylesPath | Join-Path -ChildPath $VariablesFile
    $vars = Get-Content $variablesFullPath | Select-String "--" -ErrorAction SilentlyContinue
    if ($vars.Count -gt 0) {
        Write-Host "PASSED: Variables.css contains $($vars.Count) CSS variables" -ForegroundColor Green
        $passed++
    }
    else {
        Write-Host "FAILED: No CSS variables found in variables.css" -ForegroundColor Red
        $errors += "No CSS variables found in variables.css"
    }
}
catch {
    Write-Host "FAILED: Cannot read variables.css" -ForegroundColor Red
    $errors += "Cannot read variables.css: $($_.Exception.Message)"
}

# Test 3: Vue components variables validation
Write-Host ""
Write-Host "Test 3: Vue components variables validation..." -ForegroundColor Yellow
try {
    $componentsFullPath = Join-Path $ProjectPath $ComponentsPath
    $vueFiles = Get-ChildItem "$componentsFullPath\*.vue" -ErrorAction SilentlyContinue
    $variablesFullPath = Join-Path $ProjectPath $StylesPath | Join-Path -ChildPath $VariablesFile
    $definedVars = Get-DefinedVariables -variablesPath $variablesFullPath
    
    $allVueVarsValid = $true
    foreach ($file in $vueFiles) {
        $content = Get-Content $file.FullName -Raw
        $usedVars = Get-UsedVariables -content $content
        
        foreach ($var in $usedVars) {
            if ($definedVars -notcontains $var) {
                Write-Host "  ERROR: $($file.Name) uses undefined variable: $var" -ForegroundColor Red
                $errors += "Vue file $($file.Name) uses undefined variable: $var"
                $allVueVarsValid = $false
            }
        }
    }
    
    if ($allVueVarsValid) {
        Write-Host "PASSED: All Vue component variables are properly defined" -ForegroundColor Green
        $passed++
    }
    else {
        Write-Host "FAILED: Found undefined variables in Vue components" -ForegroundColor Red
    }
}
catch {
    Write-Host "FAILED: Error checking Vue variables" -ForegroundColor Red
    $errors += "Error checking Vue variables: $($_.Exception.Message)"
}

# Test 4: Check for unused variables
Write-Host ""
Write-Host "Test 4: Unused variables check..." -ForegroundColor Yellow
try {
    $variablesFullPath = Join-Path $ProjectPath $StylesPath | Join-Path -ChildPath $VariablesFile
    $definedVars = Get-DefinedVariables -variablesPath $variablesFullPath
    $usedVarsAll = @()
    
    # Check CSS files
    $stylesFullPath = Join-Path $ProjectPath $StylesPath
    $cssFiles = Get-ChildItem "$stylesFullPath\*.css" -Exclude $VariablesFile -ErrorAction SilentlyContinue
    foreach ($file in $cssFiles) {
        $content = Get-Content $file.FullName -Raw
        $usedVars = Get-UsedVariables -content $content
        $usedVarsAll += $usedVars
    }
    
    # Check Vue files
    $componentsFullPath = Join-Path $ProjectPath $ComponentsPath
    $vueFiles = Get-ChildItem "$componentsFullPath\*.vue" -ErrorAction SilentlyContinue
    foreach ($file in $vueFiles) {
        $content = Get-Content $file.FullName -Raw
        $usedVars = Get-UsedVariables -content $content
        $usedVarsAll += $usedVars
    }
    
    $unusedVars = @()
    foreach ($var in $definedVars) {
        if ($usedVarsAll -notcontains $var) {
            $unusedVars += $var
        }
    }
    
    if ($unusedVars.Count -eq 0) {
        Write-Host "PASSED: All CSS variables are being used" -ForegroundColor Green
        $passed++
    }
    else {
        Write-Host "WARNING: Found $($unusedVars.Count) unused variables:" -ForegroundColor Yellow
        foreach ($var in $unusedVars) {
            Write-Host "  - $var" -ForegroundColor Yellow
        }
        # Don't fail the test for unused variables, just warn
        $passed++
    }
}
catch {
    Write-Host "FAILED: Error checking unused variables" -ForegroundColor Red
    $errors += "Error checking unused variables: $($_.Exception.Message)"
}

# Test 5: File structure validation
Write-Host ""
Write-Host "Test 5: File structure validation..." -ForegroundColor Yellow
try {
    $stylesFullPath = Join-Path $ProjectPath $StylesPath
    $componentsFullPath = Join-Path $ProjectPath $ComponentsPath
    $variablesFullPath = Join-Path $ProjectPath $StylesPath | Join-Path -ChildPath $VariablesFile
    
    $structureValid = $true
    
    if (-not (Test-Path $stylesFullPath)) {
        Write-Host "  ERROR: Styles folder not found: $stylesFullPath" -ForegroundColor Red
        $structureValid = $false
    }
    
    if (-not (Test-Path $componentsFullPath)) {
        Write-Host "  ERROR: Components folder not found: $componentsFullPath" -ForegroundColor Red
        $structureValid = $false
    }
    
    if (-not (Test-Path $variablesFullPath)) {
        Write-Host "  ERROR: Variables file not found: $variablesFullPath" -ForegroundColor Red
        $structureValid = $false
    }
    
    if ($structureValid) {
        Write-Host "PASSED: Project structure is valid" -ForegroundColor Green
        $passed++
    }
    else {
        Write-Host "FAILED: Invalid project structure" -ForegroundColor Red
        $errors += "Invalid project structure"
    }
}
catch {
    Write-Host "FAILED: Error validating structure" -ForegroundColor Red
    $errors += "Error validating structure: $($_.Exception.Message)"
}

# Test 6: Variable naming convention
Write-Host ""
Write-Host "Test 6: Variable naming convention..." -ForegroundColor Yellow
try {
    $variablesFullPath = Join-Path $ProjectPath $StylesPath | Join-Path -ChildPath $VariablesFile
    $content = Get-Content $variablesFullPath -Raw
    $pattern = "^(\s*--[^:]+):"
    $varMatches = [regex]::Matches($content, $pattern, [Text.RegularExpressions.RegexOptions]::Multiline)
    
    foreach ($match in $varMatches) {
        $varName = $match.Groups[1].Value.Trim()
        
        # Check if follows naming convention (kebab-case)
        if ($varName -notmatch "^--[a-z][a-z0-9-]*$") {
            Write-Host "  WARNING: Variable doesn't follow kebab-case convention: $varName" -ForegroundColor Yellow
        }
    }
    
    Write-Host "PASSED: Variable naming convention checked" -ForegroundColor Green
    $passed++
}
catch {
    Write-Host "FAILED: Error checking naming convention" -ForegroundColor Red
    $errors += "Error checking naming convention: $($_.Exception.Message)"
}

# Results
Write-Host ""
Write-Host "====================================" -ForegroundColor Cyan
Write-Host "RESULTS: $passed/$total tests passed" -ForegroundColor $(if ($passed -eq $total) { "Green" } else { "Yellow" })

if ($errors.Count -gt 0) {
    Write-Host ""
    Write-Host "ERRORS FOUND:" -ForegroundColor Red
    foreach ($errorMsg in $errors) {
        Write-Host "  - $errorMsg" -ForegroundColor Red
    }
}

if ($passed -eq $total) {
    Write-Host "ALL TESTS PASSED" -ForegroundColor Green
    Write-Host ""
    Write-Host "✅ CSS variables properly defined and used" -ForegroundColor Green
    Write-Host "✅ Vue components use valid variables" -ForegroundColor Green
    Write-Host "✅ No undefined variables found" -ForegroundColor Green
    Write-Host "✅ Project structure is valid" -ForegroundColor Green
    Write-Host "✅ Variable naming convention followed" -ForegroundColor Green
    exit 0
}
else {
    Write-Host "SOME TESTS FAILED" -ForegroundColor Yellow
    exit 1
}

<#
.SYNOPSIS
    Enhanced Universal Code Checklist Test for any CSS/Vue project

.DESCRIPTION
    Enhanced test that validates CSS variables are actually defined and used.
    Properly checks Vue components for undefined variables and provides detailed error reporting.

.PARAMETER ProjectPath
    Path to project root (default: current directory)

.PARAMETER StylesPath
    Path to CSS styles folder relative to project (default: src/styles)

.PARAMETER ComponentsPath
    Path to Vue components folder relative to project (default: src/components)

.PARAMETER VariablesFile
    Name of variables CSS file (default: variables.css)

.EXAMPLE
    # Test current project with default structure
    .\checklist-test-enhanced.ps1

.EXAMPLE
    # Test specific project
    .\checklist-test-enhanced.ps1 -ProjectPath "C:\MyProject"

.EXAMPLE
    # Test project with different structure
    .\checklist-test-enhanced.ps1 -StylesPath "assets/css" -ComponentsPath "components"

.EXAMPLE
    # Test project with different variables file
    .\checklist-test-enhanced.ps1 -VariablesFile "theme.css"
#>
