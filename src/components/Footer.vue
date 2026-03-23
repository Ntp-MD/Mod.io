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
          <div class="footer-grid" grid="3,2,2,1,var(--gap-lg)">
            <div v-for="(links, category) in footerLinks" :key="category" class="footer-column" v-if="category !== 'social'">
              <h3 class="footer-heading">{{ category.charAt(0).toUpperCase() + category.slice(1) }}</h3>
              <div class="footer-links" grid="1,1,1,1,var(--gap-sm)">
                <div v-for="link in links" :key="link.label" class="footer-item">
                  <a :href="link.href" class="footer-link">{{ link.label }}</a>
                </div>
              </div>
            </div>
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
  background: var(--main-color-1);
  color: var(--color-white);
  padding: var(--gap-section) 0 var(--gap-md) 0;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: var(--gap-section);
  margin-bottom: var(--gap-section);
}

@media screen and (min-width: 992px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  padding-right: var(--gap-lg);
}

.logo {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

.logo-text {
  font-size: calc(var(--font-xl) * 1.5);
  font-weight: 700;
  color: var(--color-white);
  line-height: 1;
}

.footer-description {
  font-size: var(--font-sm);
  line-height: 1.6;
  color: var(--main-color-7);
  margin: 0;
}

.social-links {
  display: flex;
  gap: var(--gap-sm);
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--main-color-2);
  border-radius: var(--radius-sm);
  color: var(--color-white);
  text-decoration: none;
  transition: var(--transition-normal);
}

.social-link:hover {
  background: var(--accent-primary);
  transform: translateY(-2px);
}

/* Grid-Mod handles layout: grid="3,2,2,1,var(--gap-lg)" */
.footer-column h3 {
  font-size: var(--font-md);
  font-weight: 600;
  margin: 0 0 var(--gap-md) 0;
  color: var(--color-white);
}

/* Grid-Mod handles layout: grid="1,1,1,1,var(--gap-sm)" */
.footer-link {
  color: var(--main-color-7);
  text-decoration: none;
  font-size: var(--font-sm);
  transition: var(--transition-fast);
}

.footer-link:hover {
  color: var(--accent-primary);
}

.footer-bottom {
  border-top: 1px solid var(--main-color-3);
  padding-top: var(--gap-md);
  margin-top: var(--gap-lg);
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--gap-md);
}

.copyright {
  font-size: var(--font-sm);
  color: var(--main-color-7);
  margin: 0;
}

.footer-bottom-links {
  display: flex;
  gap: var(--gap-md);
}

.footer-social {
  display: flex;
  gap: var(--gap-xs);
}

@media screen and (max-width: 992px) {
  .footer {
    padding: var(--gap-lg) 0 var(--gap-md) 0;
  }

  .footer-brand {
    padding-right: 0;
  }

  .footer-bottom-content {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--gap-sm);
  }
}

@media screen and (max-width: 480px) {
  .footer-bottom-links {
    gap: var(--gap-md);
  }
}
</style>
