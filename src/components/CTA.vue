<script setup>
const benefits = ["50 GB bandwidth — no credit card needed", "Deploy globally in under 60 seconds", "Cancel or upgrade anytime"];

const stats = [
  { number: "50M+", label: "Developers" },
  { number: "99.99%", label: "Uptime" },
  { number: "150+", label: "Countries" },
];
</script>

<template>
  <section id="get-started" class="section cta-section section-dark" aria-labelledby="cta-title">
    <div class="cta-glow" aria-hidden="true"></div>
    <div class="container">
      <div class="cta-header">
        <span class="badge badge-primary" aria-label="Section category">🚀 Get Started</span>
        <h2 class="cta-title" id="cta-title">Ready to scale?</h2>
        <p class="cta-description">Join millions of developers deploying faster with MOD.io's global CDN.</p>
      </div>

      <!-- Stats Preview -->
      <div class="cta-stats">
        <div class="stats-row">
          <div v-for="stat in stats" :key="stat.label" class="stat-item">
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- Main CTA Content -->
      <div class="cta-content">
        <div class="cta-left">
          <div class="benefits-card card">
            <h3>Why choose MOD.io?</h3>
            <ul class="benefits-list" aria-label="Key benefits">
              <li v-for="benefit in benefits" :key="benefit" class="benefit-item">
                <span class="benefit-icon">✓</span>
                <span class="benefit-text">{{ benefit }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="cta-right">
          <div class="action-card card">
            <div class="action-header">
              <h3>Start building today</h3>
              <p>Free forever, no credit card required</p>
            </div>

            <div class="action-buttons">
              <a href="#signup" class="btn cta-btn-primary" aria-label="Deploy free — create your MOD.io account">
                <span class="btn-icon">⚡</span>
                <span class="btn-text">Deploy Free Now</span>
              </a>
              <a href="#demo" class="btn cta-btn-secondary" aria-label="Watch a live demo of MOD.io">
                <span class="btn-icon">🎬</span>
                <span class="btn-text">Watch Demo</span>
              </a>
            </div>

            <div class="action-footer">
              <p>Already have an account? <a href="#login" class="sign-in-link">Sign in →</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── BASE: Mobile (320px+) ── */
.cta-section {
  background: var(--main-color-1);
  color: var(--color-white);
  padding: var(--gap-section) 0;
  position: relative;
  overflow: hidden;
}

.cta-glow {
  position: absolute;
  top: -20%;
  right: -10%;
  width: 60vw;
  height: 60vw;
  background: radial-gradient(circle, var(--accent-secondary) 0%, transparent 65%);
  pointer-events: none;
  border-radius: 50%;
}

.cta-header {
  text-align: center;
  margin-bottom: var(--gap-section);
  position: relative;
  z-index: 2;
}

.cta-title {
  font-size: calc(var(--font-xl) * 1.8);
  font-weight: 700;
  line-height: 1.1;
  margin: var(--gap-md) 0;
  background: linear-gradient(135deg, var(--color-white), var(--main-color-7));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta-description {
  font-size: var(--font-md);
  line-height: 1.6;
  color: var(--main-color-6);
  max-width: 600px;
  margin: 0 auto;
}

/* Stats Preview */
.cta-stats {
  margin: 0 0 var(--gap-section);
  position: relative;
  z-index: 2;
}

.stats-row {
  display: flex;
  justify-content: center;
  gap: var(--gap-xl);
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: calc(var(--font-xl) * 1.5);
  font-weight: 800;
  color: var(--color-white);
  line-height: 1;
  margin-bottom: var(--gap-xs);
}

.stat-label {
  font-size: var(--font-sm);
  color: var(--main-color-6);
  text-transform: uppercase;
  letter-spacing: 0.05px;
}

/* Main Content */
.cta-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--gap-xl);
  position: relative;
  z-index: 2;
}

/* Benefits Card */
.benefits-card {
  background: var(--main-color-8);
  border: 1px solid var(--main-color-8);
  border-radius: var(--radius-xl);
  backdrop-filter: blur(10px);
}

.benefits-card h3 {
  font-size: var(--font-xl);
  font-weight: 600;
  color: var(--color-white);
  margin: 0 0 var(--gap-lg);
}

.benefits-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: var(--gap-sm);
}

.benefit-icon {
  color: var(--accent-success);
  font-weight: 700;
  font-size: var(--font-md);
  flex-shrink: 0;
  margin-top: 2px;
}

.benefit-text {
  font-size: var(--font-md);
  color: var(--main-color-6);
  line-height: 1.5;
}

/* Action Card */
.action-card {
  background: var(--main-color-8);
  border: 1px solid var(--main-color-8);
  border-radius: var(--radius-xl);
  backdrop-filter: blur(10px);
  text-align: center;
}

.action-header {
  margin-bottom: var(--gap-lg);
}

.action-header h3 {
  font-size: var(--font-xl);
  font-weight: 600;
  color: var(--color-white);
  margin: 0 0 var(--gap-sm);
}

.action-header p {
  font-size: var(--font-md);
  color: var(--main-color-6);
  margin: 0;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  margin-bottom: var(--gap-lg);
}

.cta-btn-primary {
  background: var(--color-white);
  color: var(--main-color-1);
  width: 100%;
}

.cta-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.cta-btn-secondary {
  background: transparent;
  color: var(--color-white);
  border: 1px solid var(--main-color-8);
  width: 100%;
}

.cta-btn-secondary:hover {
  background: var(--main-color-8);
  border-color: var(--main-color-6);
  transform: translateY(-1px);
}

.btn-icon {
  font-size: var(--font-lg);
}

.action-footer {
  font-size: var(--font-sm);
  color: var(--main-color-6);
}

.sign-in-link {
  color: var(--color-white);
  text-decoration: none;
  font-weight: 500;
  transition: color var(--transition-fast);
}

.sign-in-link:hover {
  color: var(--accent-success);
}

/* ── TABLET (768px+) ── */
@media screen and (min-width: 768px) {
  .cta-content {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }

  .stats-row {
    gap: var(--gap-xl);
  }
}

/* ── DESKTOP (1200px+) ── */
@media screen and (min-width: 1201px) {
  .cta-title {
    font-size: calc(var(--font-xl) * 2.2);
  }

  .action-buttons {
    flex-direction: row;
  }

  .cta-btn-primary {
    flex: 2;
  }

  .cta-btn-secondary {
    flex: 1;
  }
}
</style>
