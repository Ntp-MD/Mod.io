#!/bin/bash

echo "🔍 Variable Management Validation Script"
echo "======================================"

# Check if variables.css exists
if [ ! -f "src/styles/variables.css" ]; then
    echo "❌ src/styles/variables.css not found"
    exit 1
fi

# Extract all variable names from variables.css
VARIABLES=$(grep -o -- '--[^:]*' src/styles/variables.css | sort | uniq)

echo "📋 Found $(echo $VARIABLES | wc -w) variables in variables.css"

# Check all CSS and Vue files for variable usage
echo ""
echo "🔍 Checking for variable usage..."

ISSUES_FOUND=0

for file in $(find src -name "*.css" -o -name "*.vue"); do
    if [ "$file" != "src/styles/variables.css" ]; then
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
