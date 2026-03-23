# Variable Change Management - Testing Guide

## Test Scenarios

### Scenario 1: Variable Deletion Test

**Objective**: Test deleting a variable and finding replacements

#### Step 1: Create Test Files

```bash
# Create test directory
mkdir test-variables
cd test-variables

# Create test variables.css
cat > variables.css << 'EOF'
:root {
  --main-color-1: #000000;
  --main-color-2: #171717;
  --deprecated-color: #ff0000;
  --gap-sm: 10px;
  --gap-md: 20px;
  --old-spacing: 15px;
}
EOF

# Create test component using deprecated variable
cat > test-component.css << 'EOF'
.test-component {
  color: var(--deprecated-color);
  background: var(--main-color-1);
  padding: var(--old-spacing);
  margin: var(--gap-sm);
}
EOF
```

#### Step 2: Run Variable Deletion Test

```bash
# Find all usages of --deprecated-color
echo "=== Finding usages of --deprecated-color ==="
grep -r "var(--deprecated-color)" . --include="*.css" --include="*.vue"

# Find all usages of --old-spacing  
echo "=== Finding usages of --old-spacing ==="
grep -r "var(--old-spacing)" . --include="*.css" --include="*.vue"

# Check if variables exist in variables.css
echo "=== Checking variable existence ==="
grep -E "(--deprecated-color|--old-spacing)" variables.css
```

#### Step 3: Replace Variables

```bash
# Replace --deprecated-color with --main-color-2
sed -i 's/var(--deprecated-color)/var(--main-color-2)/g' test-component.css

# Replace --old-spacing with --gap-md
sed -i 's/var(--old-spacing)/var(--gap-md)/g' test-component.css

# Remove old variables from variables.css
sed -i '/--deprecated-color/d' variables.css
sed -i '/--old-spacing/d' variables.css
```

#### Step 4: Validate Changes

```bash
echo "=== Validate no broken references ==="
grep -r "var(--deprecated-color)" . --include="*.css" --include="*.vue"
grep -r "var(--old-spacing)" . --include="*.css" --include="*.vue"

echo "=== Check final result ==="
cat test-component.css
```

### Scenario 2: Variable Addition Test

**Objective**: Test adding new variables properly

#### Step 1: Identify Need for New Variable

```bash
# Check if similar variable exists
echo "=== Checking for similar spacing variables ==="
grep -E "--gap-" variables.css

# Check if similar color exists
echo "=== Checking for similar color variables ==="
grep -E "--main-color" variables.css
```

#### Step 2: Add New Variable Properly

```bash
# Add new variable to variables.css
cat >> variables.css << 'EOF'
  /* New spacing for special components */
  --gap-special: 25px;
  /* New accent color */
  --accent-special: #0066cc;
EOF
```

#### Step 3: Use New Variable

```bash
# Create component using new variable
cat > new-component.css << 'EOF'
.special-component {
  padding: var(--gap-special);
  color: var(--accent-special);
}
EOF
```

#### Step 4: Validate Addition

```bash
echo "=== Validate new variable exists ==="
grep -E "(--gap-special|--accent-special)" variables.css

echo "=== Validate new variable usage ==="
grep -E "(--gap-special|--accent-special)" new-component.css
```

### Scenario 3: Variable Modification Test

**Objective**: Test changing variable values safely

#### Step 1: Modify Variable Value

```bash
# Change gap-md from 20px to 24px
sed -i 's/--gap-md: 20px/--gap-md: 24px/' variables.css

echo "=== Variable changed ==="
grep -E "--gap-md" variables.css
```

#### Step 2: Test Impact

```bash
# Create test file to check visual impact
cat > impact-test.html << 'EOF'
<style>
:root {
  --gap-md: 24px;
}
.test-box {
  background: #f0f0f0;
  padding: var(--gap-md);
  margin: var(--gap-md);
}
</style>
<div class="test-box">Test box with modified gap</div>
EOF
```

#### Step 3: Validate Consistency

```bash
echo "=== Check all components using --gap-md ==="
grep -r "var(--gap-md)" . --include="*.css" --include="*.vue" --include="*.html"
```

## Automated Testing Script

### Create Validation Script

```bash
# Create validate-variables.sh
cat > validate-variables.sh << 'EOF'
#!/bin/bash

echo "🔍 Variable Management Validation Script"
echo "======================================"

# Check if variables.css exists
if [ ! -f "variables.css" ]; then
    echo "❌ variables.css not found"
    exit 1
fi

# Extract all variable names from variables.css
VARIABLES=$(grep -o -- '--[^:]*' variables.css | sort | uniq)

echo "📋 Found $(echo $VARIABLES | wc -w) variables in variables.css"

# Check all CSS and Vue files for variable usage
echo ""
echo "🔍 Checking for variable usage..."

ISSUES_FOUND=0

for file in $(find . -name "*.css" -o -name "*.vue"); do
    if [ "$file" != "./variables.css" ]; then
        USED_VARS=$(grep -o 'var(--[^)]*)' "$file" 2>/dev/null | sed 's/var(--//' | sed 's/)//' | sort | uniq)
        
        for var in $USED_VARS; do
            if ! echo "$VARIABLES" | grep -q "$var"; then
                echo "❌ $file: Variable '$var' not found in variables.css"
                ISSUES_FOUND=$((ISSUES_FOUND + 1))
            fi
        done
    fi
done

if [ $ISSUES_FOUND -eq 0 ]; then
    echo "✅ All variables validated successfully!"
else
    echo "❌ Found $ISSUES_FOUND variable issues"
    exit 1
fi
EOF

chmod +x validate-variables.sh
```

### Run Validation Tests

```bash
echo "=== Running automated validation ==="
./validate-variables.sh
```

## Pre-Commit Hook Test

### Create Test Hook

```bash
# Create test pre-commit hook
mkdir -p .git/hooks
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash

echo "🔍 Checking variable changes..."

# Check if variables.css was modified
if git diff --cached --name-only | grep -q "variables.css"; then
    echo "variables.css changed - running validation..."
    
    # Run validation script
    if ./validate-variables.sh; then
        echo "✅ Variable validation passed"
    else
        echo "❌ Variable validation failed. Fix issues before committing."
        exit 1
    fi
fi

exit 0
EOF

chmod +x .git/hooks/pre-commit
```

### Test Pre-Commit Hook

```bash
# Stage variables.css changes
git add variables.css

# Try to commit (should trigger validation)
git commit -m "Test variable changes"

# If validation passes, commit should succeed
# If validation fails, commit should be blocked
```

## Integration Test Scenarios

### Test 1: Complete Variable Lifecycle

```bash
#!/bin/bash
echo "🧪 Complete Variable Lifecycle Test"

# 1. Add new variable
echo "1. Adding new variable..."
echo "  --test-var: #test-value;" >> variables.css

# 2. Use variable in component
echo "2. Using variable in component..."
echo ".test { color: var(--test-var); }" > test.css

# 3. Run validation (should pass)
echo "3. Running validation..."
./validate-variables.sh

# 4. Delete variable without replacement (should fail)
echo "4. Deleting variable without replacement..."
sed -i '/--test-var/d' variables.css
./validate-variables.sh && echo "❌ Should have failed!" || echo "✅ Correctly failed"

# 5. Replace variable properly
echo "5. Replacing variable properly..."
sed -i 's/var(--test-var)/var(--main-color-1)/g' test.css
./validate-variables.sh && echo "✅ Validation passed after replacement"
```

### Test 2: Emergency Replacement Test

```bash
#!/bin/bash
echo "🚨 Emergency Replacement Test"

# Create scenario with deprecated variables
cat > emergency-test.css << 'EOF'
.old-component {
  color: var(--color-primary);
  padding: var(--space-sm);
  border-radius: var(--border-radius-sm);
  transition: var(--transition-quick);
}
EOF

# Apply emergency replacements
echo "Applying emergency replacements..."
sed -i 's/var(--color-primary)/var(--main-color-1)/g' emergency-test.css
sed -i 's/var(--space-sm)/var(--gap-sm)/g' emergency-test.css
sed -i 's/var(--border-radius-sm)/var(--radius-sm)/g' emergency-test.css
sed -i 's/var(--transition-quick)/var(--transition-fast)/g' emergency-test.css

echo "Emergency replacement result:"
cat emergency-test.css

# Validate replacements
./validate-variables.sh
```

## Performance Test

### Test Large Project Validation

```bash
#!/bin/bash
echo "⚡ Performance Test - Large Project"

# Create many test files
for i in {1..100}; do
    cat > "component-$i.css" << EOF
.component-$i {
    color: var(--main-color-1);
    padding: var(--gap-md);
    background: var(--color-white);
}
EOF
done

# Time the validation
echo "Running validation on 100 files..."
time ./validate-variables.sh

# Clean up
rm component-*.css
```

## Expected Test Results

### ✅ Successful Test Indicators:
- Validation script runs without errors
- All variables found in variables.css
- No broken references after changes
- Pre-commit hook blocks invalid commits
- Emergency replacements work correctly

### ❌ Failure Indicators:
- Variables used but not defined
- Variables defined but not used (warning)
- Pre-commit hook allows invalid commits
- Emergency replacements don't match expected patterns

## Continuous Integration Integration

### GitHub Actions Example

```yaml
name: Variable Validation
on: [push, pull_request]

jobs:
  validate-variables:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Validate Variables
        run: |
          chmod +x validate-variables.sh
          ./validate-variables.sh
```

This comprehensive testing approach ensures the Variable Change Management Process works reliably in real-world scenarios.
