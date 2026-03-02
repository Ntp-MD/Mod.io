<script setup>
const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for personal projects and small libraries",
    features: ["10GB bandwidth per month", "Up to 5 libraries", "Basic analytics", "Community support", "HTTP/HTTPS delivery"],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Ideal for professional developers and growing teams",
    features: [
      "100GB bandwidth per month",
      "Up to 50 libraries",
      "Advanced analytics",
      "Priority support",
      "Custom domains",
      "API access",
      "Version control",
      "Real-time monitoring",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited bandwidth",
      "Unlimited libraries",
      "Custom analytics",
      "Dedicated support",
      "Private CDN",
      "Advanced API",
      "SSO integration",
      "SLA guarantee",
      "Custom contracts",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];

const toggleBilling = () => {
  // Toggle between monthly and yearly billing
};
</script>

<template>
  <section id="pricing" class="section">
    <div class="container">
      <div class="section-header">
        <span class="badge badge-secondary">Pricing</span>
        <h2 class="section-title">Simple, Transparent Pricing</h2>
        <p class="section-description">Choose the perfect plan for your needs. Start free and scale as you grow.</p>
      </div>

      <div class="pricing-grid">
        <article v-for="plan in plans" :key="plan.name" :class="['pricing-card', { 'pricing-card-highlighted': plan.highlighted }]">
          <div class="pricing-header">
            <h3 class="pricing-name">{{ plan.name }}</h3>
            <div class="pricing-price">
              <span class="price-amount">{{ plan.price }}</span>
              <span v-if="plan.period" class="price-period">{{ plan.period }}</span>
            </div>
            <p class="pricing-description">{{ plan.description }}</p>
          </div>

          <ul class="pricing-features">
            <li v-for="feature in plan.features" :key="feature" class="feature-item">
              <span class="feature-icon">✓</span>
              <span class="feature-text">{{ feature }}</span>
            </li>
          </ul>

          <div class="pricing-cta">
            <a href="#get-started" :class="['btn', plan.highlighted ? 'btn-primary' : 'btn-secondary', 'btn-lg']">
              {{ plan.cta }}
            </a>
          </div>
        </article>
      </div>

      <div class="pricing-footer">
        <p class="pricing-note">All plans include SSL certificates, global CDN, and 99.9% uptime guarantee.</p>
        <p class="pricing-note">
          No hidden fees. Cancel anytime. Questions?
          <a href="#contact" class="pricing-link">Contact our team</a>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: var(--space-2xl);
}

.section-title {
  font-size: var(--font-size-3xl);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: var(--space-sm);
}

.section-description {
  font-size: var(--font-size-lg);
  color: var(--color-gray-600);
  max-width: 600px;
  margin-inline: auto;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
}

.pricing-card {
  background-color: var(--color-secondary);
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  transition: all var(--transition-md);
  position: relative;
  display: flex;
  flex-direction: column;
}

.pricing-card:hover {
  border-color: var(--color-gray-300);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.pricing-card-highlighted {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
  transform: scale(1.05);
}

.pricing-card-highlighted::before {
  content: "MOST POPULAR";
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-primary);
  color: var(--color-secondary);
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.pricing-header {
  text-align: center;
  margin-bottom: var(--space-lg);
}

.pricing-name {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--space-md);
}

.pricing-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: var(--space-xs);
  margin-bottom: var(--space-md);
}

.price-amount {
  font-size: var(--font-size-4xl);
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
}

.price-period {
  font-size: var(--font-size-md);
  color: var(--color-gray-600);
}

.pricing-description {
  font-size: var(--font-size-md);
  color: var(--color-gray-600);
  line-height: 1.5;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space-lg) 0;
  flex: 1;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) 0;
  border-bottom: 1px solid var(--color-gray-100);
}

.feature-item:last-child {
  border-bottom: none;
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(20px, 1.25vw, 24px);
  height: clamp(20px, 1.25vw, 24px);
  background-color: var(--color-primary);
  color: var(--color-secondary);
  border-radius: 50%;
  font-size: var(--font-size-xs);
  font-weight: 700;
  flex-shrink: 0;
}

.feature-text {
  font-size: var(--font-size-md);
  color: var(--color-gray-700);
}

.pricing-cta {
  margin-top: auto;
}

.pricing-footer {
  text-align: center;
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-gray-200);
}

.pricing-note {
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
  margin-bottom: var(--space-sm);
}

.pricing-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
}

.pricing-link:hover {
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .pricing-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
}

@media (max-width: 480px) {
  .pricing-card {
    padding: var(--space-md);
  }

  .price-amount {
    font-size: var(--font-size-3xl);
  }
}
</style>
