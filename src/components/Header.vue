<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Documentation', href: '#docs' },
  { label: 'GitHub', href: '#github' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="header">
    <div class="container header-content">
      <a href="/" class="logo">
        <span class="logo-icon">M</span>
        <span class="logo-text">MOD.io</span>
      </a>

      <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
        <ul class="nav-list">
          <li v-for="link in navLinks" :key="link.label">
            <a :href="link.href" class="nav-link">{{ link.label }}</a>
          </li>
        </ul>
      </nav>

      <div class="header-actions">
        <a href="#get-started" class="btn btn-primary">Get Started</a>
        <button 
          class="menu-toggle" 
          @click="toggleMenu"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <span class="menu-icon" :class="{ 'menu-icon-open': isMenuOpen }"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  background-color: var(--color-secondary);
  border-bottom: 1px solid var(--color-gray-200);
  padding: var(--space-md) 0;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-lg);
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--font-size-xl);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(32px + 1vw);
  height: calc(32px + 1vw);
  background-color: var(--color-primary);
  color: var(--color-secondary);
  border-radius: var(--radius-md);
  font-weight: 800;
}

.logo-text {
  color: var(--color-primary);
}

.nav-list {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

.nav-link {
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-gray-600);
  transition: color var(--transition-fast);
}

.nav-link:hover {
  color: var(--color-primary);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.menu-toggle {
  display: none;
  width: 32px;
  height: 32px;
  position: relative;
}

.menu-icon,
.menu-icon::before,
.menu-icon::after {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--color-primary);
  position: absolute;
  left: 4px;
  transition: all var(--transition-fast);
}

.menu-icon {
  top: 50%;
  transform: translateY(-50%);
}

.menu-icon::before {
  content: '';
  top: -8px;
}

.menu-icon::after {
  content: '';
  top: 8px;
}

.menu-icon-open {
  background-color: transparent;
}

.menu-icon-open::before {
  top: 0;
  transform: rotate(45deg);
}

.menu-icon-open::after {
  top: 0;
  transform: rotate(-45deg);
}

@media (max-width: 768px) {
  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--color-secondary);
    border-bottom: 1px solid var(--color-gray-200);
    padding: var(--space-md);
    display: none;
  }

  .nav-open {
    display: block;
  }

  .nav-list {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-md);
  }

  .menu-toggle {
    display: block;
  }

  .header-actions .btn {
    display: none;
  }
}
</style>
