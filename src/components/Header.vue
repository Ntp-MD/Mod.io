<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Documentation", href: "#docs" },
  { label: "GitHub", href: "#github" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="header">
    <div class="header-content">
      <a href="/" class="logo">
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
        <button class="menu-toggle" @click="toggleMenu" :aria-expanded="isMenuOpen" aria-label="Toggle navigation menu">
          <span class="menu-icon" :class="{ 'menu-icon-open': isMenuOpen }"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: relative;
  top: 0;
  z-index: var(--z-sticky);
  background-color: var(--color-secondary);
  border-bottom: 1px solid var(--color-gray-200);
  padding: var(--space-sm) var(--space-md);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.95);
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
  font-size: var(--font-size-lg);
  font-weight: 800;
  letter-spacing: -0.02em;
  text-decoration: none;
  transition: all var(--transition-md);
}

.logo:hover {
  transform: scale(1.05);
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
  text-decoration: none;
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-1);
  transition: all var(--transition-md);
  position: relative;
}

.nav-link::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--color-primary);
  transition: all var(--transition-md);
  transform: translateX(-50%);
}

.nav-link:hover {
  color: var(--color-primary);
  background-color: var(--color-gray-100);
}

.nav-link:hover::before {
  width: 80%;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.header-actions .btn {
  padding: var(--space-sm) var(--space-lg);
  font-weight: 600;
  transition: all var(--transition-md);
}

.header-actions .btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.menu-toggle {
  display: none;
  width: 40px;
  height: 40px;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: var(--radius-1);
  transition: all var(--transition-md);
}

.menu-toggle:hover {
  background-color: var(--color-gray-100);
}

.menu-icon,
.menu-icon::before,
.menu-icon::after {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--color-primary);
  position: absolute;
  left: 8px;
  transition: all var(--transition-sm);
}

.menu-icon {
  top: 50%;
  transform: translateY(-50%);
}

.menu-icon::before {
  content: "";
  top: -8px;
}

.menu-icon::after {
  content: "";
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
