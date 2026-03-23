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
  <header class="header-container">
    <a href="/" class="nav-logo">
      <span class="logo-text">M</span>
    </a>
    <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
      <div class="nav-menu">
        <div v-for="link in navLinks" :key="link.label" class="nav-item">
          <a :href="link.href" class="nav-link">{{ link.label }}</a>
        </div>
      </div>
    </nav>
    <div class="header-actions">
      <a href="#get-started" class="btn btn-primary">🚀 Deploy Now</a>
      <div class="menu-toggle" @click="toggleMenu" :aria-expanded="isMenuOpen" aria-label="Toggle navigation menu">
        <div class="menu-icon" :class="{ 'menu-icon-open': isMenuOpen }">
          <span class="menu-icon-line"></span>
          <span class="menu-icon-line"></span>
          <span class="menu-icon-line"></span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Header Container */
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--gap-lg);
  width: 100%;
  padding: var(--gap-md) var(--gap-xl);
  min-height: calc(var(--gap-xl) * 1.5);
  background: var(--color-white);
  border-bottom: 1px solid var(--main-color-8);
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

/* Navigation */
.nav-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-text {
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  background-color: var(--main-color-2);
  border-radius: var(--radius-sm);
  color: var(--color-white);
  padding: var(--gap-md);
  font-size: var(--font-xl);
  font-weight: 700;
  line-height: 1;
  transition: all var(--transition-normal);
}

.logo-text:hover {
  background-color: var(--accent-primary);
  transform: scale(1.05);
}

.nav {
  display: flex;
  align-items: center;
}

.nav-menu {
  display: flex;
  gap: var(--gap-lg);
  align-items: center;
}

.nav-item {
  position: relative;
}

.nav-link {
  font-size: var(--font-lg);
  color: var(--main-color-1);
  text-decoration: none;
  transition: all var(--transition-normal);
  font-weight: 500;
  position: relative;
  padding: var(--gap-xs) var(--gap-sm);
  border-radius: var(--radius-xs);
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--accent-primary);
  transition: all var(--transition-fast);
  transform: translateX(-50%);
}

.nav-link:hover {
  color: var(--accent-primary);
  background: rgba(0, 105, 217, 0.1);
}

.nav-link:hover::after {
  width: 80%;
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: var(--gap-md);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-xs);
  padding: var(--gap-sm) var(--gap-lg);
  border-radius: var(--radius-sm);
  font-size: var(--font-md);
  font-weight: 500;
  text-decoration: none;
  transition: all var(--transition-normal);
  cursor: pointer;
  border: none;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn:hover::before {
  left: 100%;
}

.btn-primary {
  background: var(--accent-primary);
  color: var(--color-white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  background: #000000;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Mobile Menu Toggle */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: none;
  border: none;
  cursor: pointer;
  aspect-ratio: 1;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.menu-toggle:hover {
  background: var(--main-color-8);
}

.menu-icon {
  position: relative;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 7px;
}

.menu-icon-line {
  position: relative;
  display: block;
  width: 28px;
  height: 2px;
  background: var(--main-color-1);
  transition: all var(--transition-normal);
  border-radius: 1px;
}

.menu-icon-open .menu-icon-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.menu-icon-open .menu-icon-line:nth-child(2) {
  opacity: 0;
  transform: translateX(-20px);
}

.menu-icon-open .menu-icon-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Styles */
@media screen and (max-width: 1200px) {
  .header-container {
    padding: var(--gap-sm) var(--gap-md);
    justify-content: space-between;
  }

  .nav {
    position: fixed;
    top: 0;
    left: -100%;
    width: 80%;
    height: 100vh;
    background: var(--main-color-1);
    transition: left var(--transition-normal);
    z-index: var(--z-modal);
    box-shadow: var(--shadow-xl);
  }

  .nav-open {
    left: 0;
  }

  .nav-menu {
    flex-direction: column;
    padding: var(--gap-lg);
    gap: var(--gap-lg);
    width: 100%;
  }

  .nav-link {
    font-size: var(--font-md);
    text-align: center;
    padding: var(--gap-sm);
    color: var(--color-white);
    display: block;
    width: 100%;
    border-radius: var(--radius-sm);
    transition: all var(--transition-fast);
  }

  .nav-link:hover {
    background: var(--accent-primary);
    color: var(--color-white);
  }

  .nav-link::after {
    display: none;
  }

  .logo-text {
    font-size: var(--font-lg);
    padding: var(--gap-sm);
  }

  .btn {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .menu-icon-line {
    background: var(--main-color-1);
  }
}

/* Desktop Styles */
@media screen and (min-width: 1201px) {
  .menu-toggle {
    display: none;
  }

  .nav-menu {
    flex-direction: row;
  }

  .nav-link {
    font-size: var(--font-lg);
  }

  .logo-text {
    font-size: var(--font-xl);
  }
}

@media screen and (max-width: 480px) {
  .header-container {
    padding: var(--gap-xs) var(--gap-sm);
  }

  .nav {
    width: 90%;
  }

  .nav-menu {
    padding: var(--gap-md);
  }

  .logo-text {
    font-size: var(--font-md);
    padding: var(--gap-xs);
  }

  .menu-toggle {
    width: 40px;
    height: 40px;
  }

  .menu-icon-line {
    width: 24px;
  }
}
</style>
