<script setup>
const benefits = ["50 GB bandwidth — no credit card needed", "Deploy globally in under 60 seconds", "Cancel or upgrade anytime"];
</script>

<template>
  <section id="get-started" class="section cta-section section-light" aria-labelledby="cta-title">
    <div class="cta-glow" aria-hidden="true"></div>
    <div class="container">
      <div class="cta-layout">
        <!-- Left: copy -->
        <div class="cta-copy">
          <span class="badge badge-primary" aria-label="Section category">🚀 Get started</span>
          <h2 class="cta-title" id="cta-title">Start distributing in minutes</h2>
          <p class="cta-description">
            Join 50M+ developers who rely on MOD.io for fast, reliable library delivery. Free tier is generous — no tricks.
          </p>
          <ul class="cta-benefits" aria-label="Benefits">
            <li v-for="benefit in benefits" :key="benefit" class="benefit-row">
              <span class="benefit-check" aria-hidden="true">✓</span>
              <span class="benefit-text">{{ benefit }}</span>
            </li>
          </ul>
        </div>

        <!-- Right: actions -->
        <div class="cta-actions">
          <div class="action-group">
            <a href="#signup" class="cta-btn cta-btn-primary" aria-label="Deploy free — create your MOD.io account"> ⚡ Deploy Free Now </a>
            <a href="#demo" class="cta-btn cta-btn-ghost" aria-label="Watch a live demo of MOD.io"> 🎬 Watch demo </a>
          </div>
          <p class="cta-sub">
            Already have an account?
            <a href="#login" class="cta-link">Sign in →</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── BASE: Mobile (320px+) ── */
.cta-section {
  background: var(--color-white);
  color: var(--main-color-1);
  padding: var(--gap-section) 0;
  position: relative;
  overflow: hidden;
}

.cta-glow {
  position: absolute;
  bottom: -20%;
  left: -10%;
  width: 50vw;
  height: 50vw;
  background: radial-gradient(circle, rgba(127, 44, 134, 0.06) 0%, transparent 70%);
  pointer-events: none;
  border-radius: 50%;
}

.cta-layout {
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
  position: relative;
  z-index: 1;
  padding: var(--gap-xl);
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid var(--main-color-8);
  border-radius: var(--radius-xl);
}

/* Copy */
.cta-copy {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
}

.cta-title {
  font-size: clamp(24px, 6vw, 36px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0;
  color: var(--main-color-1);
}

.cta-description {
  font-size: var(--font-md);
  line-height: 1.6;
  color: var(--main-color-4);
  margin: 0;
  max-width: 48ch;
}

.cta-benefits {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
}

.benefit-row {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
}

.benefit-check {
  color: var(--accent-success);
  font-weight: 700;
  font-size: var(--font-sm);
  flex-shrink: 0;
}

.benefit-text {
  font-size: var(--font-sm);
  color: var(--main-color-4);
}

/* Actions */
.cta-actions {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  justify-content: center;
}

.action-group {
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
}

.cta-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: var(--gap-sm) var(--gap-lg);
  border-radius: var(--radius-md);
  font-size: var(--font-md);
  font-weight: 600;
  text-decoration: none;
  transition:
    transform var(--transition-fast),
    box-shadow var(--transition-fast),
    background var(--transition-fast);
  gap: var(--gap-xs);
}

.cta-btn-primary {
  background: var(--color-white);
  color: var(--main-color-1);
  border: 2px solid var(--color-white);
}

.cta-btn-primary:hover {
  background: var(--main-color-8);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.12);
}

.cta-btn-ghost {
  background: transparent;
  color: var(--main-color-4);
  border: 1px solid var(--main-color-8);
}

.cta-btn-ghost:hover {
  border-color: var(--main-color-6);
  color: var(--main-color-1);
  transform: translateY(-1px);
}

.cta-sub {
  font-size: var(--font-sm);
  color: var(--main-color-4);
  margin: 0;
  text-align: center;
}

.cta-link {
  color: var(--main-color-1);
  text-decoration: none;
  font-weight: 500;
  transition: color var(--transition-fast);
}

.cta-link:hover {
  color: var(--accent-secondary);
}

/* ── TABLET (992px+) ── */
@media screen and (max-width: 992px) {
  .action-group {
    flex-direction: column;
  }
}

/* ── DESKTOP (1200px+) ── */
@media screen and (min-width: 1201px) {
  .cta-layout {
    flex-direction: row;
    align-items: center;
    gap: var(--gap-xl);
    padding: var(--gap-section);
  }

  .cta-copy {
    flex: 1;
  }

  .cta-actions {
    flex: 0 0 auto;
    min-width: 260px;
  }

  .cta-sub {
    text-align: left;
  }
}
</style>
