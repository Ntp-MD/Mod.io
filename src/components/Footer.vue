<script setup>
const currentYear = new Date().getFullYear();

const navGroups = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Documentation", href: "#docs" },
      { label: "API Reference", href: "#api" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
    ],
  },
];

const socialLinks = [
  { label: "GitHub", href: "#github", icon: "🐙" },
  { label: "Twitter / X", href: "#twitter", icon: "🐦" },
  { label: "Discord", href: "#discord", icon: "🎯" },
];
</script>

<template>
  <footer class="section footer" role="contentinfo">
    <div class="container">
      <!-- Main footer grid -->
      <div class="footer-main">
        <!-- Brand column -->
        <div class="footer-brand">
          <a href="/" class="brand-logo flex-row-center gap-xs link-reset" aria-label="MOD.io home">
            <span class="brand-mark flex-center" aria-hidden="true">M</span>
            <span class="brand-name">MOD<span class="brand-dot">.io</span></span>
          </a>
          <p class="brand-tagline">Intelligent CDN for developers. Fast, reliable library delivery at global scale.</p>
          <div class="social-row flex-row-center gap-xs" aria-label="Social media links">
            <a v-for="link in socialLinks" :key="link.label" :href="link.href" class="social-btn flex-center" :aria-label="link.label">
              {{ link.icon }}
            </a>
          </div>
        </div>

        <!-- Nav columns -->
        <nav class="footer-nav" aria-label="Footer navigation">
          <div class="footer-nav-grid">
            <div v-for="group in navGroups" :key="group.heading" class="footer-col">
              <h3 class="footer-col-heading">{{ group.heading }}</h3>
              <ul class="footer-col-links" role="list">
                <li v-for="link in group.links" :key="link.label">
                  <a :href="link.href" class="footer-link link-reset">{{ link.label }}</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <!-- Bottom bar -->
      <div class="footer-bottom">
        <p class="footer-copy">© {{ currentYear }} MOD.io. All rights reserved.</p>
        <div class="footer-bottom-links flex-row-center gap-md">
          <a href="#privacy" class="footer-small-link link-reset">Privacy</a>
          <a href="#terms" class="footer-small-link link-reset">Terms</a>
          <a href="#cookies" class="footer-small-link">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* ── BASE: Mobile (320px+) ── */
.footer {
  background: var(--main-color-1);
  color: var(--color-white);
  padding: var(--gap-section) 0 var(--gap-md);
  border-top: 1px solid var(--main-color-3);
}

.footer-main {
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
  padding-bottom: var(--gap-xl);
  border-bottom: 1px solid var(--main-color-3);
  margin-bottom: var(--gap-md);
}

/* Brand */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
}

.brand-logo {
  width: fit-content;
}

.brand-mark {
  width: 36px;
  height: 36px;
  background: var(--main-color-3);
  border-radius: var(--radius-sm);
  color: var(--color-white);
  font-size: var(--font-md);
  font-weight: 700;
  line-height: 1;
  transition: background var(--transition-fast);
}

.brand-logo:hover .brand-mark {
  background: var(--main-color-4);
}

.brand-name {
  font-size: var(--font-lg);
  font-weight: 700;
  color: var(--color-white);
  letter-spacing: -0.02em;
}

.brand-dot {
  color: var(--main-color-5);
  font-weight: 400;
}

.brand-tagline {
  font-size: var(--font-sm);
  line-height: 1.6;
  color: var(--main-color-5);
  margin: 0;
  max-width: 36ch;
}

.social-btn {
  width: 40px;
  height: 40px;
  background: var(--main-color-2);
  border: 1px solid var(--main-color-3);
  border-radius: var(--radius-sm);
  font-size: var(--font-md);
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast),
    transform var(--transition-fast);
}

.social-btn:hover {
  background: var(--main-color-3);
  border-color: var(--main-color-4);
  transform: translateY(-2px);
}

/* Nav columns */
.footer-nav-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--gap-xl) var(--gap-lg);
}

.footer-col {
  flex: 1 1 120px;
}

.footer-col-heading {
  font-size: var(--font-xs);
  font-weight: 600;
  color: var(--main-color-7);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 var(--gap-md);
}

.footer-col-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
}

.footer-link {
  font-size: var(--font-sm);
  color: var(--main-color-5);
  min-height: 28px;
  transition: color var(--transition-fast);
}

.footer-link:hover {
  color: var(--color-white);
}

/* Bottom bar */
.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
  padding-top: var(--gap-md);
}

.footer-copy {
  font-size: var(--font-xs);
  color: var(--main-color-5);
  margin: 0;
}

.footer-bottom-links {
  flex-wrap: wrap;
}

.footer-small-link {
  font-size: var(--font-xs);
  color: var(--main-color-5);
  transition: color var(--transition-fast);
}

.footer-small-link:hover {
  color: var(--main-color-7);
}

@media screen and (max-width: 992px) {
  .footer-main {
    flex-direction: column;
  }
}

@media screen and (min-width: 1201px) {
  .footer-main {
    flex-direction: row;
    align-items: flex-start;
    gap: var(--gap-section);
  }

  .footer-brand {
    flex: 0 0 260px;
  }

  .footer-nav {
    flex: 1;
  }

  .footer-bottom {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
