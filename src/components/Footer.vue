<script setup>
const currentYear = new Date().getFullYear();

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Documentation", href: "#docs" },
    { label: "API Reference", href: "#api" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
  ],
  social: [
    { label: "GitHub", href: "#github" },
    { label: "Twitter", href: "#twitter" },
    { label: "Discord", href: "#discord" },
  ],
};
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-main">
        <div class="footer-brand">
          <a href="/" class="logo">
            <span class="logo-text">MOD.io</span>
          </a>
          <p class="footer-tagline">Modern CDN platform for library creators. Fast, secure, and reliable content delivery worldwide.</p>
        </div>
        <nav class="footer-nav">
          <div class="footer-column">
            <h4 class="footer-heading">Product</h4>
            <ul class="footer-links">
              <li v-for="link in footerLinks.product" :key="link.label">
                <a :href="link.href" class="footer-link">{{ link.label }}</a>
              </li>
            </ul>
          </div>
          <div class="footer-column">
            <h4 class="footer-heading">Company</h4>
            <ul class="footer-links">
              <li v-for="link in footerLinks.company" :key="link.label">
                <a :href="link.href" class="footer-link">{{ link.label }}</a>
              </li>
            </ul>
          </div>
          <div class="footer-column">
            <h4 class="footer-heading">Legal</h4>
            <ul class="footer-links">
              <li v-for="link in footerLinks.legal" :key="link.label">
                <a :href="link.href" class="footer-link">{{ link.label }}</a>
              </li>
            </ul>
          </div>
          <div class="footer-column">
            <h4 class="footer-heading">Social</h4>
            <ul class="footer-links">
              <li v-for="link in footerLinks.social" :key="link.label">
                <a :href="link.href" class="footer-link">{{ link.label }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="copyright">{{ currentYear }} MOD.io. All rights reserved.</p>
          <p class="footer-note">Made with for the open source community</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-gray-700) 100%);
  color: var(--color-secondary);
  padding-top: var(--space-xl);
  padding-bottom: var(--space-md);
  border-top: 1px solid var(--color-gray-800);
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  opacity: 0.5;
}

.footer-main {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--space-xl);
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--color-gray-800);
  position: relative;
  z-index: 1;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--font-size-xl);
  font-weight: 800;
  letter-spacing: -0.02em;
  text-decoration: none;
  transition: all var(--transition-md);
}

.logo:hover {
  transform: scale(1.05);
}

.logo-text {
  color: var(--color-secondary);
}

.footer-tagline {
  font-size: var(--font-size-sm);
  color: var(--color-gray-400);
  max-width: 300px;
  line-height: var(--line-height-base);
}

.footer-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.footer-column {
  position: relative;
}

.footer-heading {
  font-size: var(--font-size-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-tight);
  color: var(--color-gray-400);
  position: relative;
  margin-bottom: var(--space-sm);
}

.footer-heading::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 20px;
  height: 2px;
  background: linear-gradient(90deg, var(--color-secondary), transparent);
  transition: all var(--transition-md);
}

.footer-column:hover .footer-heading::after {
  width: 40px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.footer-link {
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
  text-decoration: none;
  transition: all var(--transition-md);
  position: relative;
  padding-left: var(--space-xs);
}

.footer-link::before {
  content: "→";
  position: absolute;
  left: -8px;
  opacity: 0;
  transition: all var(--transition-md);
}

.footer-link:hover {
  color: var(--color-secondary);
  transform: translateX(4px);
}

.footer-link:hover::before {
  opacity: 1;
  left: -12px;
}

.footer-bottom {
  position: relative;
  z-index: 1;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-md);
}

.copyright {
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
}

.footer-note {
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

@media (max-width: 768px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }

  .footer-nav {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-bottom {
    flex-direction: column;
    gap: var(--space-sm);
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer-nav {
    grid-template-columns: 1fr;
  }
}
</style>
