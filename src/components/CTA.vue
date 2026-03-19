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
  background: linear-gradient(135deg, var(--main-color-9) 0%, var(--main-white) 100%);
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
  gap: var(--gap-md);
  align-items: center;
  padding: var(--gap-md);
  background-color: var(--color-primary);
  color: var(--main-white);
  border-radius: var(--radius-sm);
  position: relative;
  z-index: 1;
  box-shadow: var(--shadow-xl);
}

.cta-header {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  margin-bottom: var(--gap-xs);
}

.cta-description {
  font-size: var(--font-md);
  color: var(--main-color-4);
  line-height: var(--line-height-base);
}

.cta-benefits {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  padding: var(--gap-sm);
  background-color: var(--main-color-3);
  border-radius: var(--radius-md);
  transition: all var(--transition-md);
}

.benefit-item:hover {
  background-color: var(--main-color-4);
  transform: translateX(4px);
}

.benefit-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: var(--color-primary);
  color: var(--main-white);
  border-radius: var(--radius-sm);
  position: relative;
  z-index: 1;
  font-weight: 700;
  flex-shrink: 0;
}

.benefit-text {
  font-size: var(--font-sm);
  color: var(--main-color-4);
  line-height: var(--line-height-base);
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
  gap: var(--gap-sm);
  width: 100%;
}

.cta-actions .btn-primary {
  background-color: var(--main-white);
  color: var(--color-primary);
  border-color: var(--main-white);
  padding: var(--gap-md) var(--gap-lg);
  font-weight: 600;
  transition: all var(--transition-md);
}

.cta-actions .btn-primary:hover {
  background-color: var(--main-color-8);
  border-color: var(--main-color-8);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.cta-actions .btn-secondary {
  background-color: transparent;
  color: var(--main-white);
  border-color: var(--main-white);
  padding: var(--gap-md) var(--gap-lg);
  font-weight: 600;
  transition: all var(--transition-md);
}

.cta-actions .btn-secondary:hover {
  background-color: var(--main-white);
  color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.cta-note {
  font-size: var(--font-sm);
  color: var(--main-color-6);
  line-height: var(--line-height-base);
}

.link {
  color: var(--main-white);
  text-decoration: underline;
  transition: all var(--transition-md);
}

.link:hover {
  color: var(--main-color-4);
}

@media (max-width: 768px) {
  .cta-grid {
    display: flex;
    flex-direction: column;
  }

  .cta-content {
    grid-template-columns: 1fr;
    text-align: center;
    padding: var(--gap-lg);
  }

  .cta-benefits {
    align-items: center;
  }

  .cta-actions {
    align-items: center;
  }
}
</style>
