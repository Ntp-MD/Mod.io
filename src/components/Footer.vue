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

const getSocialIcon = (platform) => {
  const icons = {
    GitHub: "🐙",
    Twitter: "🐦",
    Discord: "💬",
  };
  return icons[platform] || "🔗";
};
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <a href="/" class="logo">
            <span class="logo-text">MOD.io</span>
          </a>
          <p class="footer-tagline">Modern CDN platform for library creators. Fast, secure, and reliable content delivery worldwide.</p>
          <div class="footer-social">
            <a v-for="link in footerLinks.social" :key="link.label" :href="link.href" class="social-link" :aria-label="link.label">
              {{ getSocialIcon(link.label) }}
            </a>
          </div>
        </div>

        <nav class="footer-nav">
          <div v-for="(links, category) in footerLinks" :key="category" class="footer-column" v-if="category !== 'social'">
            <h3 class="footer-heading">{{ category.charAt(0).toUpperCase() + category.slice(1) }}</h3>
            <ul class="footer-links">
              <li v-for="link in links" :key="link.label">
                <a :href="link.href" class="footer-link">{{ link.label }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="copyright">{{ currentYear }} MOD.io. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="#privacy" class="footer-link-small">Privacy</a>
            <a href="#terms" class="footer-link-small">Terms</a>
            <a href="#cookies" class="footer-link-small">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--main-color-2);
  color: var(--main-white);
  padding: var(--gap-xl) 0 var(--gap-lg);
  border-top: 1px solid var(--main-color-3);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--gap-xl);
  margin-bottom: var(--gap-xl);
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: var(--gap-sm);
  font-size: var(--font-xl);
  font-weight: 800;
  letter-spacing: -0.02em;
  text-decoration: none;
  transition: var(--transition-normal);
}

.logo:hover {
  transform: translateY(-2px);
}

.logo-text {
  color: var(--main-white);
}

.footer-tagline {
  font-size: var(--font-md);
  color: var(--main-color-6);
  line-height: var(--line-height-base);
  max-width: 400px;
}

.footer-social {
  display: flex;
  gap: var(--gap-md);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--main-color-3);
  border-radius: var(--radius-circle);
  font-size: var(--font-lg);
  text-decoration: none;
  transition: var(--transition-normal);
}

.social-link:hover {
  background-color: var(--color-primary);
  transform: translateY(-2px);
}

.footer-nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap-lg);
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
}

.footer-heading {
  font-size: var(--font-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-tight);
  color: var(--main-color-6);
  margin-bottom: var(--gap-sm);
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
}

.footer-link {
  font-size: var(--font-sm);
  color: var(--main-color-5);
  text-decoration: none;
  transition: var(--transition-normal);
  padding: var(--gap-xs) 0;
}

.footer-link:hover {
  color: var(--main-white);
  transform: translateX(4px);
}

.footer-bottom {
  padding-top: var(--gap-lg);
  border-top: 1px solid var(--main-color-3);
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-md);
}

.copyright {
  font-size: var(--font-sm);
  color: var(--main-color-5);
}

.footer-bottom-links {
  display: flex;
  gap: var(--gap-lg);
}

.footer-link-small {
  font-size: var(--font-xs);
  color: var(--main-color-6);
  text-decoration: none;
  transition: var(--transition-normal);
}

.footer-link-small:hover {
  color: var(--main-white);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--gap-xl);
    text-align: center;
  }

  .footer-brand {
    align-items: center;
  }

  .footer-nav {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--gap-lg);
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    gap: var(--gap-md);
  }
}

@media (max-width: 480px) {
  .footer {
    padding: var(--gap-lg) 0 var(--gap-md);
  }

  .footer-nav {
    grid-template-columns: 1fr;
    gap: var(--gap-lg);
  }

  .footer-social {
    justify-content: center;
  }

  .footer-bottom-links {
    flex-direction: column;
    gap: var(--gap-sm);
  }
}
</style>
