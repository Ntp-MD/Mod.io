<script setup>
const currentYear = new Date().getFullYear()

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Documentation', href: '#docs' },
    { label: 'API Reference', href: '#api' }
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' }
  ],
  legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Cookie Policy', href: '#cookies' }
  ],
  social: [
    { label: 'GitHub', href: '#github' },
    { label: 'Twitter', href: '#twitter' },
    { label: 'Discord', href: '#discord' }
  ]
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-main">
        <div class="footer-brand">
          <a href="/" class="logo">
            <span class="logo-icon">M</span>
            <span class="logo-text">MOD.io</span>
          </a>
          <p class="footer-tagline">
            Modern CDN platform for library creators. 
            Fast, secure, and reliable content delivery worldwide.
          </p>
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
        <p class="copyright">© {{ currentYear }} MOD.io. All rights reserved.</p>
        <p class="footer-note">Made with ❤️ for the open source community</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-primary);
  color: var(--color-secondary);
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-lg);
  border-top: 1px solid var(--color-gray-800);
}

.footer-main {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: var(--space-2xl);
  padding-bottom: var(--space-xl);
  border-bottom: 1px solid var(--color-gray-800);
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--font-size-xl);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: var(--space-md);
}

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(32px + 1vw);
  height: calc(32px + 1vw);
  background-color: var(--color-secondary);
  color: var(--color-primary);
  border-radius: var(--radius-md);
  font-weight: 800;
}

.logo-text {
  color: var(--color-secondary);
}

.footer-tagline {
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
  max-width: 300px;
  line-height: 1.6;
}

.footer-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.footer-heading {
  font-size: var(--font-size-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-md);
  color: var(--color-gray-400);
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.footer-link {
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
  transition: color var(--transition-fast);
}

.footer-link:hover {
  color: var(--color-secondary);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-lg);
}

.copyright {
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
}

.footer-note {
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
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
