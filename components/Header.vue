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

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header class="header-container" role="banner">
    <a href="/" class="nav-logo" aria-label="MOD.io - Home">
      <span class="logo-mark hover-rotate" aria-hidden="true">M</span>
      <span class="logo-name">MOD<span class="logo-dot">.io</span></span>
    </a>

    <nav class="nav" :class="{ 'nav-open': isMenuOpen }" aria-label="Main navigation" :aria-hidden="!isMenuOpen ? 'true' : 'false'">
      <div class="nav-overlay" @click="closeMenu" aria-hidden="true"></div>
      <div class="nav-drawer">
        <div class="nav-drawer-header">
          <span class="nav-drawer-logo">MOD.io</span>
          <button class="nav-close hover-scale" @click="closeMenu" aria-label="Close navigation">✕</button>
        </div>
        <div class="nav-menu" role="list">
          <div v-for="link in navLinks" :key="link.label" class="nav-item">
            <a :href="link.href" class="nav-link" @click="closeMenu">{{ link.label }}</a>
          </div>
        </div>
        <a href="#get-started" class="btn btn-accent btn-primary nav-cta" data-hover="bounce" @click="closeMenu">🚀 Deploy Free</a>
      </div>
    </nav>

    <div class="header-actions">
      <a href="#get-started" class="btn btn-accent btn-primary header-cta" data-hover="bounce" aria-label="Deploy Now - Get started with MOD.io"
        >🚀 Deploy Now</a
      >
      <button
        class="menu-toggle hover-scale"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen.toString()"
        aria-label="Toggle navigation menu"
        aria-controls="main-nav"
      >
        <span class="menu-icon" :class="{ 'menu-icon-open': isMenuOpen }" aria-hidden="true">
          <span class="menu-line"></span>
          <span class="menu-line"></span>
          <span class="menu-line"></span>
        </span>
      </button>
    </div>
  </header>
</template>

<style scoped>
/* ── BASE: Mobile (320px+) ── */
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--gap-sm) var(--gap-md);
  background: var(--color-white);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--main-color-8);
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  min-height: 60px;
  transition: box-shadow var(--transition-normal);
}

.header-container:has(+ *) {
  box-shadow: var(--shadow-sm);
}

/* Logo */
.nav-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-xs);
  flex-shrink: 0;
  text-decoration: none;
}

.logo-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--main-color-1);
  border-radius: var(--radius-sm);
  color: var(--color-white);
  font-size: var(--font-md);
  font-weight: 700;
  line-height: 1;
}

.logo-name {
  font-size: var(--font-md);
  font-weight: 700;
  color: var(--main-color-1);
  letter-spacing: -0.02em;
}

.logo-dot {
  color: var(--main-color-5);
  font-weight: 400;
}

/* Mobile nav drawer — base hidden state */
.nav {
  position: fixed;
  inset: 0;
  z-index: var(--z-modal);
  pointer-events: none;
  visibility: hidden;
}

.nav-open {
  pointer-events: auto;
  visibility: visible;
}

.nav-overlay {
  position: absolute;
  inset: 0;
  background: var(--main-color-1);
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.nav-open .nav-overlay {
  opacity: 1;
}

.nav-drawer {
  position: absolute;
  top: 0;
  left: -100%;
  width: min(80vw, 300px);
  height: 100vh;
  background: var(--main-color-1);
  display: flex;
  flex-direction: column;
  padding: var(--gap-md);
  gap: var(--gap-md);
  overflow-y: auto;
  transition: left var(--transition-normal);
}

.nav-open .nav-drawer {
  left: 0;
}

.nav-drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: var(--gap-md);
  border-bottom: 1px solid var(--main-color-3);
}

.nav-drawer-logo {
  font-size: var(--font-lg);
  font-weight: 700;
  color: var(--color-white);
}

.nav-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: var(--main-color-3);
  border: none;
  border-radius: var(--radius-sm);
  color: var(--color-white);
  font-size: var(--font-md);
  cursor: pointer;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  gap: var(--gap-xs);
}

.nav-link {
  display: block;
  padding: var(--gap-sm) var(--gap-md);
  min-height: 44px;
  display: flex;
  align-items: center;
  font-size: var(--font-md);
  font-weight: 500;
  color: var(--main-color-6);
  text-decoration: none;
  border-radius: var(--radius-sm);
  transition:
    background var(--transition-fast),
    color var(--transition-fast);
}

.nav-cta {
  margin-top: auto;
  width: 100%;
  justify-content: center;
  min-height: 48px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
}

.header-cta {
  display: none;
}

/* Hamburger button */
.menu-toggle {
  width: 44px;
  height: 44px;
  background: none;
  border: 1px solid var(--main-color-8);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast);
}

.menu-toggle:focus-visible {
  outline: 2px solid var(--main-color-1);
  outline-offset: 2px;
}

.menu-icon {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.menu-line {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--main-color-1);
  border-radius: 1px;
  transition:
    transform var(--transition-normal),
    opacity var(--transition-normal);
  transform-origin: center;
}

.menu-icon-open .menu-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-icon-open .menu-line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.menu-icon-open .menu-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ── TABLET (992px+) ── */
@media screen and (max-width: 992px) {
  .header-cta {
    display: none;
  }
}

@media screen and (min-width: 993px) {
  .header-container {
    padding: var(--gap-sm) var(--gap-lg);
  }

  .logo-mark {
    width: 40px;
    height: 40px;
  }

  .header-cta {
    display: inline-flex;
  }
}

/* ── DESKTOP (1200px+) ── */
@media screen and (min-width: 1201px) {
  .header-container {
    padding: var(--gap-md) var(--gap-xl);
  }

  .logo-mark {
    width: 44px;
    height: 44px;
  }

  /* Show inline desktop nav, hide hamburger */
  .nav {
    position: static;
    pointer-events: auto;
    visibility: visible;
    inset: auto;
  }

  .nav-overlay,
  .nav-drawer-header,
  .nav-cta {
    display: none;
  }

  .nav-drawer {
    position: static;
    width: auto;
    height: auto;
    background: none;
    padding: 0;
    flex-direction: row;
    align-items: center;
    overflow: visible;
    transition: none;
  }

  .nav-menu {
    flex-direction: row;
    gap: var(--gap-xs);
  }

  .nav-link {
    color: var(--main-color-1);
    padding: var(--gap-xs) var(--gap-sm);
    position: relative;
    min-height: 44px;
  }

  .nav-link::after {
    content: "";
    position: absolute;
    bottom: 4px;
    left: var(--gap-sm);
    right: var(--gap-sm);
    height: 2px;
    background: var(--main-color-1);
    transform: scaleX(0);
    transition: transform var(--transition-fast);
  }

  .menu-toggle {
    display: none;
  }
}
</style>
