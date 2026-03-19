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
        <span class="badge badge-primary">Pricing</span>
        <h2 class="section-title">Simple, Transparent Pricing</h2>
        <p class="section-description">Choose the perfect plan for your needs. Start free and scale as you grow.</p>
      </div>

      <div class="pricing-grid" large="3" medium="2" semi="2" small="1" gap="var(--gap-md)">
        <article v-for="plan in plans" :key="plan.name" :class="['pricing-card', { 'pricing-card-highlighted': plan.highlighted }]">
          <div class="pricing-badge" v-if="plan.highlighted">
            <span class="badge badge-accent">MOST POPULAR</span>
          </div>
          <div class="pricing-header">
            <h3 class="pricing-name">{{ plan.name }}</h3>
            <div class="pricing-price">
              <span class="price-amount">{{ plan.price }}</span>
              <span v-if="plan.period" class="price-period">{{ plan.period }}</span>
            </div>
            <p class="pricing-description">{{ plan.description }}</p>
          </div>

          <div class="pricing-features">
            <div v-for="feature in plan.features" :key="feature" class="feature-item">
              <span class="feature-icon">✓</span>
              <span class="feature-text">{{ feature }}</span>
            </div>
          </div>

          <div class="pricing-cta">
            <a href="#get-started" :class="['btn', plan.highlighted ? 'btn-primary' : 'btn-secondary']">
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-sm);
  margin-bottom: var(--gap-xl);
}

.section-description {
  font-size: var(--font-md);
  color: var(--main-color-6);
  margin-inline: auto;
  line-height: var(--line-height-base);
}

.pricing-card {
  background-color: var(--main-white);
  border: 1px solid var(--main-color-8);
  border-radius: var(--radius-lg);
  transition: all var(--transition-md);
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.pricing-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.pricing-card-highlighted {
  border-color: var(--color-primary);
  transform: scale(1.05);
  box-shadow: var(--shadow-lg);
}

.pricing-badge {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--main-color-4) 100%);
  padding: var(--gap-xs);
  text-align: center;
}

.pricing-header {
  padding: var(--gap-lg);
  background: linear-gradient(135deg, var(--main-color-9) 0%, var(--main-color-8) 100%);
  text-align: center;
  border-bottom: 1px solid var(--main-color-8);
}

.pricing-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-sm);
}

.pricing-name {
  color: var(--color-primary);
}

.pricing-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: var(--gap-xs);
}

.price-amount {
  font-size: var(--font-lg);
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
}

.price-period {
  font-size: var(--font-sm);
  color: var(--main-color-5);
}

.pricing-description {
  font-size: var(--font-sm);
  color: var(--main-color-4);
  line-height: var(--line-height-base);
}

.pricing-features {
  padding: var(--gap-lg);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  padding: var(--gap-sm);
  background-color: var(--main-color-9);
  border-radius: var(--radius-md);
  transition: all var(--transition-md);
}

.feature-item:hover {
  background-color: var(--main-color-8);
  transform: translateX(4px);
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: var(--color-primary);
  color: var(--main-white);
  border-radius: var(--radius-circle);
  font-size: var(--font-xs);
  font-weight: 700;
  flex-shrink: 0;
}

.feature-text {
  font-size: var(--font-sm);
  color: var(--main-color-3);
  line-height: var(--line-height-base);
}

.pricing-cta {
  padding: var(--gap-lg);
  padding-top: 0;
  margin-top: auto;
}

.pricing-footer {
  text-align: center;
  padding-top: var(--gap-lg);
  border-top: 1px solid var(--main-color-8);
  margin-top: var(--gap-xl);
}

.pricing-features {
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
}

.pricing-note {
  font-size: var(--font-sm);
  color: var(--main-color-4);
  line-height: var(--line-height-base);
}

.pricing-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-md);
}

.pricing-link:hover {
  color: var(--main-color-4);
  text-decoration: underline;
}

@media (max-width: 480px) {
  .pricing-card {
    padding: var(--gap-md);
  }

  .price-amount {
    /* Let calc() handle responsive sizing */
    font-size: var(--font-lg);
  }
}
</style>
