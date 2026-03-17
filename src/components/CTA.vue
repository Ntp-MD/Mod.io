<script setup>
const benefits = ["Free tier with 100GB bandwidth", "No credit card required", "Setup in under 5 minutes"];
</script>

<template>
  <section id="get-started" class="section cta-section">
    <div class="container">
      <div class="cta-grid">
        <div class="cta-content">
          <div class="cta-header">
            <span class="badge badge-primary">Get Started</span>
            <h2 class="cta-title">Ready to Ship Faster?</h2>
            <p class="cta-description">
              Join thousands of library creators who trust MOD.io for their CDN needs. Start delivering your libraries globally today.
            </p>
          </div>
          <div class="cta-benefits">
            <div v-for="benefit in benefits" :key="benefit" class="benefit-item">
              <span class="benefit-icon">✓</span>
              <span class="benefit-text">{{ benefit }}</span>
            </div>
          </div>
        </div>
        <div class="cta-actions">
          <div class="action-buttons">
            <a href="#signup" class="btn btn-primary"> Create Free Account </a>
            <a href="#demo" class="btn btn-secondary"> Watch Demo </a>
          </div>
          <p class="cta-note">Already have an account? <a href="#login" class="link">Sign in</a></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  background: linear-gradient(135deg, var(--color-gray-100) 0%, var(--color-secondary) 100%);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, var(--color-primary) 0%, transparent 50%);
  opacity: 0.05;
}

.cta-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: center;
  padding: var(--space-xl);
  background-color: var(--color-primary);
  color: var(--color-secondary);
  border-radius: var(--radius-3);
  position: relative;
  z-index: 1;
  box-shadow: var(--shadow-xl);
}

.cta-header {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.cta-description {
  font-size: var(--font-size-md);
  color: var(--color-gray-300);
  line-height: var(--line-height-base);
}

.cta-benefits {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm);
  background-color: var(--color-gray-800);
  border-radius: var(--radius-2);
  transition: all var(--transition-md);
}

.benefit-item:hover {
  background-color: var(--color-gray-700);
  transform: translateX(4px);
}

.benefit-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: var(--color-secondary);
  color: var(--color-primary);
  border-radius: var(--radius-circle);
  font-size: var(--font-size-xs);
  font-weight: 700;
  flex-shrink: 0;
}

.benefit-text {
  font-size: var(--font-size-sm);
  color: var(--color-gray-300);
  line-height: var(--line-height-base);
}

.cta-actions {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  align-items: flex-start;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  width: 100%;
}

.cta-actions .btn-primary {
  background-color: var(--color-secondary);
  color: var(--color-primary);
  border-color: var(--color-secondary);
  padding: var(--space-md) var(--space-lg);
  font-weight: 600;
  transition: all var(--transition-md);
}

.cta-actions .btn-primary:hover {
  background-color: var(--color-gray-200);
  border-color: var(--color-gray-200);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.cta-actions .btn-secondary {
  background-color: transparent;
  color: var(--color-secondary);
  border-color: var(--color-secondary);
  padding: var(--space-md) var(--space-lg);
  font-weight: 600;
  transition: all var(--transition-md);
}

.cta-actions .btn-secondary:hover {
  background-color: var(--color-secondary);
  color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.cta-note {
  font-size: var(--font-size-sm);
  color: var(--color-gray-400);
  line-height: var(--line-height-base);
}

.link {
  color: var(--color-secondary);
  text-decoration: underline;
  transition: all var(--transition-md);
}

.link:hover {
  color: var(--color-gray-300);
}

@media (max-width: 768px) {
  .cta-content {
    grid-template-columns: 1fr;
    text-align: center;
    padding: var(--space-lg);
  }

  .cta-benefits {
    align-items: center;
  }

  .cta-actions {
    align-items: center;
  }
}
</style>
