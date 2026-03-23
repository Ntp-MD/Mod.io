Write-Host "🔍 Variable Management Validation Script" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan

# Check if variables.css exists
$variablesPath = "src/styles/variables.css"
if (-not (Test-Path $variablesPath)) {
    Write-Host "❌ src/styles/variables.css not found" -ForegroundColor Red
    exit 1
}

# Extract all variable names from variables.css
$variablesContent = Get-Content $variablesPath
$variables = [regex]::Matches($variablesContent, '--[^:]*') | ForEach-Object { $_.Value } | Sort-Object -Unique

Write-Host "📋 Found $($variables.Count) variables in variables.css" -ForegroundColor Green

# Check all CSS and Vue files for variable usage
Write-Host ""
Write-Host "🔍 Checking for variable usage..." -ForegroundColor Yellow

$issuesFound = 0
$cssFiles = Get-ChildItem -Path "src" -Include "*.css", "*.vue" -Recurse

foreach ($file in $cssFiles) {
    if ($file.FullName -ne (Get-Item $variablesPath).FullName) {
        $content = Get-Content $file.FullName -Raw
        $usedVars = [regex]::Matches($content, 'var\(--[^)]*\)') | ForEach-Object { 
            $_.Value -replace 'var\(--' -replace '\)' 
        } | Sort-Object -Unique
        
        foreach ($var in $usedVars) {
            if ($variables -notcontains $var) {
                Write-Host "❌ $($file.Name): Variable '$var' not found in variables.css" -ForegroundColor Red
                $issuesFound++
            }
        }
    }
}

if ($issuesFound -eq 0) {
    Write-Host "✅ All variables validated successfully!" -ForegroundColor Green
    exit 0
} else {
    Write-Host "❌ Found $issuesFound variable issues" -ForegroundColor Red
    exit 1
}
