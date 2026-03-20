<script setup>
const plans = [
  {
    name: "Innovation Starter",
    price: "Free",
    description: "Perfect for innovators and emerging projects",
    features: ["50GB intelligent bandwidth", "Up to 10 libraries", "AI-powered analytics", "Community intelligence", "Supreme HTTPS delivery"],
    highlighted: false,
    cta: "🚀 Deploy Free",
  },
  {
    name: "Professional Elite",
    price: "$49",
    period: "/month",
    description: "Engineered for professional developers and agentic teams",
    features: [
      "500GB intelligent bandwidth",
      "Unlimited libraries",
      "Predictive analytics AI",
      "Priority intelligence support",
      "Custom domains + SSL",
      "Advanced API access",
      "Intelligent version control",
      "Real-time monitoring",
      "Auto-optimization",
    ],
    highlighted: true,
    cta: "⚡ Start Innovation",
  },
  {
    name: "Enterprise Supreme",
    price: "Custom",
    description: "Tailored intelligence for global organizations",
    features: [
      "Unlimited intelligent bandwidth",
      "Unlimited libraries",
      "AI-powered custom analytics",
      "Dedicated innovation team",
      "Private edge network",
      "Enterprise API suite",
      "SSO + zero-trust security",
      "99.99% SLA guarantee",
      "Blockchain verification",
      "Custom innovation contracts",
    ],
    highlighted: false,
    cta: "🎯 Contact Innovation Team",
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
        <span class="badge badge-primary">💎 Investment Plans</span>
        <h2 class="section-title">Supreme, Transparent Pricing</h2>
        <p class="section-description">Choose your innovation tier. Start free and scale intelligently as you grow.</p>
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
        <p class="pricing-note">All plans include military-grade SSL, intelligent global CDN, and 99.99% supreme uptime guarantee.</p>
        <p class="pricing-note">
          Zero hidden fees. Cancel anytime. Questions?
          <a href="#contact" class="pricing-link">Contact our innovation team</a>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap-md);
  margin-bottom: var(--gap-section);
}

.pricing-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--gap-lg);
  border: 2px solid var(--main-color-8);
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--accent-primary);
}

.pricing-card-highlighted {
  border-color: var(--accent-primary);
  transform: scale(1.05);
  box-shadow: var(--shadow-xl);
}

.pricing-card-highlighted:hover {
  transform: scale(1.05) translateY(-4px);
}

.pricing-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
}

.pricing-header {
  text-align: center;
  margin-bottom: var(--gap-lg);
  padding-bottom: var(--gap-lg);
  border-bottom: 1px solid var(--main-color-8);
}

.pricing-name {
  font-size: var(--font-xl);
  font-weight: 600;
  color: var(--main-color-1);
  margin: 0 0 var(--gap-md) 0;
}

.pricing-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: var(--gap-xs);
  margin-bottom: var(--gap-md);
}

.price-amount {
  font-size: calc(var(--font-xl) * 2.5);
  font-weight: 700;
  color: var(--accent-primary);
  line-height: 1;
}

.price-period {
  font-size: var(--font-md);
  color: var(--main-color-5);
  font-weight: 500;
}

.pricing-description {
  font-size: var(--font-sm);
  line-height: 1.5;
  color: var(--main-color-5);
  margin: 0;
}

.pricing-features {
  flex-grow: 1;
  margin-bottom: var(--gap-lg);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  padding: var(--gap-sm) 0;
  border-bottom: 1px solid var(--main-color-9);
}

.feature-item:last-child {
  border-bottom: none;
}

.feature-icon {
  color: var(--accent-success);
  font-weight: bold;
  font-size: var(--font-md);
  flex-shrink: 0;
  width: 20px;
  text-align: center;
}

.feature-text {
  font-size: var(--font-sm);
  line-height: 1.4;
  color: var(--main-color-4);
}

.pricing-cta {
  margin-top: auto;
}

.pricing-footer {
  text-align: center;
  padding: var(--gap-lg);
  background: var(--main-color-9);
  border-radius: var(--radius-lg);
  margin-top: var(--gap-lg);
}

.pricing-note {
  font-size: var(--font-sm);
  line-height: 1.5;
  color: var(--main-color-5);
  margin: var(--gap-sm) 0;
}

.pricing-link {
  color: var(--accent-primary);
  text-decoration: none;
  font-weight: 500;
}

.pricing-link:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media screen and (max-width: 1200px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    margin: 0 auto var(--gap-section);
    padding: 0 var(--gap-lg);
  }

  .pricing-card-highlighted {
    transform: none;
  }

  .pricing-card-highlighted:hover {
    transform: translateY(-4px);
  }
}

@media screen and (max-width: 768px) {
  .pricing-card {
    padding: var(--gap-md);
  }

  .price-amount {
    font-size: calc(var(--font-xl) * 2);
  }
}

@media screen and (max-width: 480px) {
  .pricing-card {
    padding: var(--gap-sm);
  }

  .price-amount {
    font-size: calc(var(--font-xl) * 1.5);
  }

  .pricing-name {
    font-size: var(--font-lg);
  }

  .btn {
    padding: var(--gap-sm) var(--gap-md);
    font-size: var(--font-sm);
  }

  .pricing-footer {
    padding: var(--gap-md);
  }
}
</style>
