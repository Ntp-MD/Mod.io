<script setup>
const benefits = ["Free tier with 50GB intelligent bandwidth", "Zero credit card required", "Supreme deployment in under 60 seconds"];
</script>

<template>
  <section id="get-started" class="section cta-section">
    <div class="container">
      <div class="cta-grid">
        <div class="cta-content">
          <div class="cta-header">
            <span class="badge badge-primary">🚀 Deploy Innovation</span>
            <h2 class="cta-title">Ready to Scale Intelligently?</h2>
            <p class="cta-description">
              Join 50M+ developers who trust MOD.io for supreme CDN intelligence. Start deploying your libraries globally with agentic optimization
              today.
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
            <a href="#signup" class="btn btn-primary">⚡ Deploy Free Now</a>
            <a href="#demo" class="btn btn-secondary">🎬 Watch Innovation Demo</a>
          </div>
          <p class="cta-note">Already innovating with us? <a href="#login" class="link">Access Dashboard</a></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  background: linear-gradient(135deg, var(--main-color-1) 0%, var(--main-color-2) 100%);
  color: var(--color-white);
  padding: var(--gap-section) 0;
}

.cta-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--gap-xl);
  align-items: center;
}

.cta-content {
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
}

.cta-header {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
}

.cta-title {
  font-size: calc(var(--font-xl) * 1.8);
  font-weight: 700;
  line-height: 1.1;
  margin: 0;
}

.cta-description {
  font-size: var(--font-md);
  line-height: 1.6;
  color: var(--main-color-8);
  margin: 0;
}

.cta-benefits {
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
}

.benefit-icon {
  color: var(--accent-success);
  font-weight: bold;
  font-size: var(--font-md);
}

.benefit-text {
  font-size: var(--font-sm);
  color: var(--main-color-7);
}

.cta-actions {
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
  align-items: flex-start;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
}

.cta-note {
  font-size: var(--font-sm);
  color: var(--main-color-7);
  margin: 0;
}

.link {
  color: var(--accent-primary);
  text-decoration: none;
  font-weight: 500;
}

.link:hover {
  text-decoration: underline;
}

@media screen and (max-width: 992px) {
  .cta-grid {
    grid-template-columns: 1fr;
    gap: var(--gap-lg);
  }

  .cta-title {
    font-size: calc(var(--font-xl) * 1.5);
  }

  .action-buttons {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .btn {
    min-width: auto;
    flex: 1;
  }
}

@media screen and (max-width: 480px) {
  .cta-section {
    padding: var(--gap-lg) 0;
  }

  .cta-title {
    font-size: var(--font-xl);
  }

  .action-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
</style>
