<script setup>
const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for side projects and open-source libraries",
    features: ["50 GB bandwidth / month", "Up to 10 libraries", "Global CDN delivery", "Basic analytics", "HTTPS included"],
    highlighted: false,
    cta: "🚀 Deploy Free",
    ctaVariant: "btn-outline",
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    description: "For professional developers and growing teams",
    features: [
      "500 GB bandwidth / month",
      "Unlimited libraries",
      "Advanced analytics + alerts",
      "Priority support",
      "Custom domains + SSL",
      "API access",
      "Smart version control",
      "Real-time monitoring",
      "Auto-optimization",
    ],
    highlighted: true,
    cta: "⚡ Start Pro",
    ctaVariant: "btn-white",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Private edge network and dedicated support for large teams",
    features: [
      "Unlimited bandwidth",
      "Unlimited libraries",
      "Custom analytics SLA",
      "Dedicated support team",
      "Private edge network",
      "Enterprise API suite",
      "SSO + zero-trust",
      "99.99% uptime SLA",
      "Custom contracts",
    ],
    highlighted: false,
    cta: "🎯 Contact Sales",
    ctaVariant: "btn-outline",
  },
];
</script>

<template>
  <section id="pricing" class="section section-dark pricing-section" aria-labelledby="pricing-title">
    <div class="container">
      <header class="section-header">
        <span class="badge badge-primary" aria-label="Section category">💎 Pricing</span>
        <h2 class="section-title" id="pricing-title">Simple, transparent pricing</h2>
        <p class="section-description">Start free. Scale when you need to. No surprises.</p>
      </header>

      <div class="pricing-grid" grid="3,2,2,1,var(--gap-md)">
        <article
          v-for="plan in plans"
          :key="plan.name"
          class="pricing-card card"
          :class="{ 'pricing-card--highlighted': plan.highlighted }"
          :aria-label="`${plan.name} plan`"
        >
          <div class="pricing-popular" v-if="plan.highlighted" aria-label="Most popular plan">
            <span>Most Popular</span>
          </div>

          <div class="pricing-header">
            <h3 class="pricing-name">{{ plan.name }}</h3>
            <div class="pricing-price">
              <span class="price-amount">{{ plan.price }}</span>
              <span v-if="plan.period" class="price-period">{{ plan.period }}</span>
            </div>
            <p class="pricing-desc">{{ plan.description }}</p>
          </div>

          <div class="pricing-features" aria-label="Plan features">
            <div v-for="feature in plan.features" :key="feature" class="feature-row">
              <span class="feature-check" aria-hidden="true">✓</span>
              <span class="feature-text">{{ feature }}</span>
            </div>
          </div>

          <div class="pricing-action">
            <a href="#get-started" class="btn pricing-btn" :class="plan.ctaVariant" :aria-label="`${plan.cta} - ${plan.name} plan`">
              {{ plan.cta }}
            </a>
          </div>
        </article>
      </div>

      <footer class="pricing-footer">
        <p class="pricing-note">All plans include global CDN, SSL, and 99.99% uptime SLA. Zero hidden fees. Cancel anytime.</p>
        <p class="pricing-note">Questions? <a href="#contact" class="pricing-link">Talk to our team →</a></p>
      </footer>
    </div>
  </section>
</template>

<style scoped>
/* Card base */
.pricing-card {
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
  position: relative;
  background: var(--main-color-1);
}

/* Highlighted card */
.pricing-card-highlighted {
  background: var(--main-color-1);
  border-color: var(--main-color-5);
  box-shadow:
    0 0 0 1px var(--main-color-3),
    var(--shadow-xl);
}

.pricing-card--highlighted:hover {
  border-color: var(--main-color-6);
}

.pricing-popular {
  position: absolute;
  top: -1px;
  left: var(--gap-lg);
  right: var(--gap-lg);
  display: flex;
  justify-content: center;
}

.pricing-popular span {
  display: inline-block;
  background: linear-gradient(90deg, var(--accent-secondary), var(--accent-success));
  color: var(--color-white);
  font-size: var(--font-xs);
  font-weight: 600;
  letter-spacing: 0.06px;
  text-transform: uppercase;
  padding: 4px var(--gap-md);
  border-radius: 0 0 var(--radius-sm) var(--radius-sm);
}

/* Header area */
.pricing-header {
  padding-bottom: var(--gap-lg);
  border-bottom: 1px solid var(--main-color-3);
}

.pricing-name {
  color: var(--main-color-6);
  letter-spacing: 0.08px;
  margin: 0 0 var(--gap-sm);
}

.pricing-card-highlighted .pricing-name {
  color: var(--main-color-6);
}

.pricing-price {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: var(--gap-sm);
}

.price-amount {
  font-size: calc(var(--font-xl) * 2.4);
  font-weight: 700;
  color: var(--color-white);
  line-height: 1;
}

.price-period {
  font-size: var(--font-sm);
  color: var(--main-color-5);
  font-weight: 500;
}

.pricing-desc {
  font-size: var(--font-sm);
  line-height: 1.5;
  color: var(--main-color-6);
  margin: 0;
}

/* Features list */
.pricing-features {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
  flex-grow: 1;
}

.feature-row {
  display: flex;
  align-items: flex-start;
  gap: var(--gap-sm);
}

.feature-check {
  color: var(--accent-success);
  font-weight: 700;
  font-size: var(--font-sm);
  flex-shrink: 0;
  margin-top: 1px;
}

.feature-text {
  font-size: var(--font-sm);
  color: var(--main-color-6);
  line-height: 1.4;
}

.pricing-card-highlighted .feature-text {
  color: var(--main-color-6);
}

/* CTA */
.pricing-action {
  margin-top: auto;
}

.pricing-btn {
  width: 100%;
  min-height: 48px;
}

.btn-outline {
  background: transparent;
  border: 1px solid var(--main-color-4);
  color: var(--main-color-6);
}

.btn-outline:hover {
  border-color: var(--main-color-6);
  color: var(--color-white);
  transform: translateY(-1px);
}

.btn-white {
  background: var(--color-white);
  border: 1px solid var(--color-white);
  color: var(--main-color-1);
}

.btn-white:hover {
  background: var(--main-color-8);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Footer */
.pricing-footer {
  margin-top: var(--gap-xl);
  text-align: center;
  padding: var(--gap-lg);
  background: var(--main-color-8);
  border: 1px solid var(--main-color-3);
  border-radius: var(--radius-lg);
}

.pricing-note {
  font-size: var(--font-sm);
  color: var(--main-color-5);
  margin: var(--gap-xs) 0;
}

.pricing-link {
  color: var(--main-color-4);
  text-decoration: none;
  font-weight: 500;
  transition: color var(--transition-fast);
}

.pricing-link:hover {
  color: var(--color-white);
}

@media screen and (min-width: 1201px) {
  .pricing-card-highlighted {
    margin-top: calc(var(--gap-lg) * -1);
    margin-bottom: calc(var(--gap-lg) * -1);
  }
}
</style>
