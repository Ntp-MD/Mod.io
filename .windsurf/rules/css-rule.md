---
trigger: auto Mod.io
---

- Only use CSS variables from src/styles/variables.css for consistent theming across the application.
- Use flexbox and grid for layout, avoid float.
- Use CSS custom properties for theme colors and spacing.
- Use BEM (Block-Element-Modifier) naming convention for classes. (block-element-modifier not \_\_ , --) Maximum 3 BEM levels per block. Use multiple separate classes like "btn primary-color" is good practice.
- **Unit Usage**: Do not use em or rem units. Use px for fixed values and clamp() for responsive typography.
- **Calc() Usage**: Allow multiplication in calc() functions only with these factors: *1.5, *2, \*3.
- **Variable Creation**: Do not create new CSS variables. Only users can create new variables in variables.css. Choose and use existing variables appropriately for your needs. Exception: .grid-mod class can use local variables for advanced responsive grid behavior.
- **Theme Reference**: Design with modern and clean website aesthetics - minimal, spacious, high contrast, and professional.

## Grid-Mod Usage Guidelines

- **When to Use Grid-Mod**: Use for components with 3+ items that require complex responsive behavior (e.g., Features, HowItWorks, Testimonials, Pricing).
- **When NOT to Use Grid-Mod**: Avoid for simple 2-column layouts or fixed layouts (e.g., Hero, CTA, Header, Footer). Use regular CSS grid or flexbox instead.
- **Grid-Mod Attributes**: Use `large`, `medium`, `semi`, `small` attributes for responsive breakpoints, and `gap` attribute for spacing.
- **Local Variables Exception**: Grid-mod classes can use local variables for advanced responsive grid behavior (this is the only exception to the "no new variables" rule).

## Gap vs Margin Best Practices

- **Use Gap on Parent**: For flex/grid containers with multiple children that need consistent spacing, use `gap` on the parent container instead of `margin-bottom` on individual children.
- **When to Use Gap**: Flex/Grid containers with 3+ elements, consistent spacing across all children, responsive layouts, cleaner code maintenance.
- **When to Use Margin**:
  - **Single element spacing**: Individual elements that need specific spacing without siblings
  - **Asymmetric spacing**: Different spacing needed for top vs bottom (top ≠ bottom)
  - **Override default spacing**: When you need to override parent gap spacing
  - **Negative spacing**: For special positioning effects (negative margins)
  - **Responsive exceptions**: Different spacing rules for specific breakpoints
  - **Complex positioning**: Advanced layout requirements that gap cannot handle
- **Modern Approach**: Prefer `gap` for modern CSS Grid/Flexbox layouts. Only use margins for exceptional spacing needs.
- **Example**:

  ```css
  /* ✅ Good - use gap on parent */
  .container {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  /* ✅ Good - use margin for specific cases */
  .special-element {
    margin-bottom: var(--space-xl); /* Override spacing */
  }
  .single-element {
    margin-top: var(--space-md); /* Single element */
  }
  .asymmetric {
    margin-top: var(--space-xs);
    margin-bottom: var(--space-lg); /* Different spacing */
  }
  .negative {
    margin-top: -20px; /* Negative spacing */
  }

  /* ❌ Avoid - margin on each child when gap works */
  .child-1 {
    margin-bottom: var(--space-sm);
  }
  .child-2 {
    margin-bottom: var(--space-sm);
  }
  ```

## CSS Variable Consistency Requirements

- **No Hard-coded Values**: All colors must use `--color-*` variables (no #fff, #000, etc.), all spacing must use `--space-*` variables, all typography must use `--font-*` variables, all transitions must use `--transition-*` variables, all shadows must use `--shadow-*` variables, all border radius must use `--radius-*` variables.
- **Required Variables for Common Values**: Opacity values use `--opacity-disabled: 0.6;`, line height uses `--line-height-base: 1.6;`, letter spacing uses `--letter-spacing-tight: 0.05em;`, outline offset uses `--outline-offset: 2px;`.
- **Responsive Sizing Consistency**: Use clamp() with variables for responsive typography, standardize icon sizes with `--icon-size-sm`, `--icon-size-lg`, all clamp() functions should reference variable ranges.
- **Validation Requirements**: No direct color codes in CSS files, check for hard-coded values before committing, all new CSS must pass variable usage validation.
