<script setup>
const benefits = [
  'Free tier with 100GB bandwidth',
  'No credit card required',
  'Setup in under 5 minutes'
]
</script>

<template>
  <section id="get-started" class="section cta-section">
    <div class="container">
      <div class="cta-content">
        <div class="cta-text">
          <h2 class="cta-title">Ready to Ship Faster?</h2>
          <p class="cta-description">
            Join thousands of library creators who trust MOD.io for their CDN needs. 
            Start delivering your libraries globally today.
          </p>
          <ul class="cta-benefits">
            <li v-for="benefit in benefits" :key="benefit" class="benefit-item">
              <span class="benefit-check" aria-hidden="true">✓</span>
              {{ benefit }}
            </li>
          </ul>
        </div>
        <div class="cta-actions">
          <a href="#signup" class="btn btn-primary btn-lg">
            Create Free Account
          </a>
          <a href="#demo" class="btn btn-secondary btn-lg">
            Watch Demo
          </a>
          <p class="cta-note">
            Already have an account? <a href="#login" class="link">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  background: linear-gradient(180deg, var(--color-gray-100) 0%, var(--color-secondary) 100%);
}

.cta-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  align-items: center;
  padding: var(--space-2xl);
  background-color: var(--color-primary);
  color: var(--color-secondary);
  border-radius: var(--radius-xl);
}

.cta-title {
  font-size: var(--font-size-3xl);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: var(--space-md);
}

.cta-description {
  font-size: var(--font-size-lg);
  color: var(--color-gray-400);
  margin-bottom: var(--space-lg);
}

.cta-benefits {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--font-size-base);
  color: var(--color-gray-300);
}

.benefit-check {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: var(--color-gray-800);
  border-radius: 50%;
  font-size: var(--font-size-xs);
  color: #27ca40;
}

.cta-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-md);
}

.cta-actions .btn-primary {
  background-color: var(--color-secondary);
  color: var(--color-primary);
  border-color: var(--color-secondary);
}

.cta-actions .btn-primary:hover {
  background-color: var(--color-gray-200);
  border-color: var(--color-gray-200);
}

.cta-actions .btn-secondary {
  background-color: transparent;
  color: var(--color-secondary);
  border-color: var(--color-secondary);
}

.cta-actions .btn-secondary:hover {
  background-color: var(--color-secondary);
  color: var(--color-primary);
}

.cta-note {
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
}

.link {
  color: var(--color-secondary);
  text-decoration: underline;
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
