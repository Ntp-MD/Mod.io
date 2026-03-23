# MOD.io · Windsurf Rules

## Identity

- Stack: Vue 3 (`<script setup>`) · Vite · CSS Variables · Grid-Mod system
- Deploy: GitHub Pages (`/Mod.io/` base path)
- **Plan First**: summarize plan in chat → wait for confirmation before writing code
- **Verify Build**: run `npm run build` after significant changes
- Async operations: always wrap in try-catch

## Naming

- CSS files: kebab-case (`shared.css`)
- Vue components: PascalCase (`Hero.vue`)
- JS files: kebab-case (`grid-mod.js`)

---

## CSS Hard Rules (never break)

- **No auto-create variables** — only use what exists in `variables.css`
- **No hard-coded values** — all values via CSS variables
- **No inline styles** — use classes only
- Use `display: flex; flex-direction: column;` NOT `display: grid; grid-template-columns: 1fr`
- Animations: `transform` and `opacity` only (60fps)

## Shared Classes — always check `shared.css` first

- Sections: `.section` `.section-dark` `.section-header` `.section-title` `.section-description`
- Badges: `.badge` `.badge-primary` `.badge-accent`
- Buttons: `.btn` `.btn-primary` `.btn-secondary`
- Cards: `.feature-card` `.card-feature` `.card-hover`
- Icons: `.icon-feature` `.icon-hover`
- Text: `.text-primary` `.text-secondary`

## Common Variable Replacements

| Wrong                | Correct             |
| -------------------- | ------------------- |
| `--color-border`     | `--main-color-8`    |
| `--color-background` | `--color-white`     |
| `--color-text`       | `--main-color-2`    |
| `--color-text-muted` | `--main-color-6`    |
| `--color-primary`    | `--main-color-1`    |
| `--space-sm/md/lg`   | `--gap-sm/md/lg`    |
| `--transition-quick` | `--transition-fast` |

## Spacing: Gap vs Margin

- **Gap**: flex/grid containers with 3+ children
- **Margin**: single elements, asymmetric spacing, negative spacing, breakpoint exceptions

## Media Queries (exact breakpoints only)

```css
@media screen and (min-width: 1201px) {
  /* Large   */
}
@media screen and (max-width: 1200px) {
  /* Medium  */
}
@media screen and (max-width: 992px) {
  /* Semi    */
}
@media screen and (max-width: 676px) {
  /* Small   */
}
@media screen and (max-width: 480px) {
  /* X-Small */
}
```

## CSS Import Order

```css
@import "./variables.css";
@import "./reset.css";
@import "./shared.css";
@import "./button.css";
@import "./form.css";
@import "./animations.css";
```

---

## Vue Component Structure (always follow this order)

```vue
<script setup>
// imports
</script>

<template>
  <!-- semantic HTML + shared classes -->
</template>

<style scoped>
/* component-specific only */
</style>
```

- Semantic HTML: use `<section>` `<article>` `<header>` `<nav>` `<main>`
- Components auto-imported via `unplugin-vue-components` — no manual imports needed
- Composition over inheritance: prefer composables for shared logic

## Grid-Mod System

- **Use when**: 3+ items with complex responsive behavior
- **Skip for**: Hero, CTA, Header, Footer

```html
<div grid="large,medium,semi,small,gap">
  <!-- Common patterns -->
  <div grid="6,3,2,1,var(--gap-md)">
    <!-- Features     -->
    <div grid="4,2,1,1,var(--gap-lg)">
      <!-- Testimonials -->
      <div grid="3,2,1,1,var(--gap-xl)"><!-- Pricing      --></div>
    </div>
  </div>
</div>
```

---

## Variable Change Protocol

Before any add / edit / delete on `variables.css`:

1. Search all usages: `grep -r "var(--name)" src/ --include="*.css" --include="*.vue"`
2. Update all dependent components
3. Run `npm run validate:variables`

Replacement priority: `--gap-xs → sm → md → lg → xl` · `--radius-xs → sm → md → lg → xl` · `--transition-fast → normal → slow`
