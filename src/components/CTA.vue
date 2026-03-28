<script setup>
const benefits = ["50 GB bandwidth — no credit card needed", "Deploy globally in under 60 seconds", "Cancel or upgrade anytime"];

const stats = [
  { number: "50M+", label: "Developers" },
  { number: "99.99%", label: "Uptime" },
  { number: "150+", label: "Countries" },
];
</script>

<template>
  <section id="get-started" class="cta-modern" aria-labelledby="cta-title">
    <!-- Background effects -->
    <div class="cta-bg" aria-hidden="true">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="grid-overlay"></div>
    </div>

    <div class="container">
      <div class="cta-content-modern">
        <!-- Left side - Main CTA -->
        <div class="cta-main">
          <span class="cta-tag">🚀 Get Started</span>
          <h2 class="cta-title-modern" id="cta-title">Ready to deploy at scale?</h2>
          <p class="cta-description-modern">
            Join millions of developers shipping faster with MOD.io's intelligent global CDN. Free forever, no credit card required.
          </p>

          <div class="cta-buttons">
            <a href="#signup" class="btn btn-primary-modern" data-hover="bounce">
              <span>Deploy Free Now</span>
              <span class="btn-arrow">→</span>
            </a>
            <a href="#demo" class="btn btn-secondary-modern" data-hover="lift">
              <span>Watch Demo</span>
            </a>
          </div>

          <p class="cta-note">Already have an account? <a href="#login" class="login-link">Sign in →</a></p>
        </div>

        <!-- Right side - Stats & Benefits -->
        <div class="cta-side">
          <div class="stats-card" data-hover="lift">
            <div v-for="stat in stats" :key="stat.label" class="stat-block">
              <span class="stat-value">{{ stat.number }}</span>
              <span class="stat-name">{{ stat.label }}</span>
            </div>
          </div>

          <div class="benefits-card-modern" data-hover="lift">
            <h3 class="benefits-title">Why developers love us</h3>
            <div class="benefits-list">
              <div v-for="benefit in benefits" :key="benefit" class="benefit-item-modern">
                <span class="benefit-check">✓</span>
                <span class="benefit-text">{{ benefit }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust logos -->
      <div class="trust-section">
        <p class="trust-text">Trusted by engineering teams at</p>
        <div class="trust-logos">
          <span class="trust-logo">Vercel</span>
          <span class="trust-logo">Stripe</span>
          <span class="trust-logo">Linear</span>
          <span class="trust-logo">Notion</span>
          <span class="trust-logo">Figma</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* CTA Section - Modern */
.cta-modern {
  background: var(--main-color-1);
  padding: var(--gap-section) 0;
  position: relative;
  overflow: hidden;
}

/* Background Effects */
.cta-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.4;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: var(--accent-secondary);
  top: -200px;
  right: -100px;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: var(--accent-success);
  bottom: -150px;
  left: -100px;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
}

/* Content Layout */
.cta-content-modern {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--gap-xl);
  position: relative;
  z-index: 1;
  margin-bottom: var(--gap-xl);
}

@media (min-width: 1024px) {
  .cta-content-modern {
    grid-template-columns: 1.2fr 1fr;
    gap: 80px;
    align-items: start;
  }
}

/* Main CTA */
.cta-main {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
}

.cta-tag {
  display: inline-block;
  width: fit-content;
  padding: 6px 14px;
  background: rgba(127, 44, 134, 0.2);
  border: 1px solid rgba(127, 44, 134, 0.4);
  border-radius: var(--radius-full);
  font-size: var(--font-xs);
  font-weight: 600;
  color: var(--accent-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.cta-title-modern {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  color: var(--color-white);
  margin: 0;
  letter-spacing: -0.02em;
}

.cta-description-modern {
  font-size: var(--font-lg);
  line-height: 1.7;
  color: var(--main-color-6);
  margin: 0;
  max-width: 500px;
}

/* CTA Buttons */
.cta-buttons {
  display: flex;
  gap: var(--gap-md);
  margin-top: var(--gap-sm);
  flex-wrap: wrap;
}

/* Button overrides - only specific styles not in button.css */
.btn-primary-modern {
  background: var(--color-white);
  color: var(--main-color-1);
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
}

.btn-primary-modern:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(255, 255, 255, 0.3);
}

.btn-primary-modern:hover .btn-arrow {
  transform: translateX(4px);
}

.btn-secondary-modern {
  background: rgba(255, 255, 255, 0.08);
  color: var(--color-white);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
}

.btn-secondary-modern:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.25);
}

/* CTA Note */
.cta-note {
  font-size: var(--font-sm);
  color: var(--main-color-6);
  margin: var(--gap-sm) 0 0;
}

.login-link {
  color: var(--accent-secondary);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.login-link:hover {
  color: var(--accent-success);
}

/* Side Content */
.cta-side {
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
}

/* Stats Card */
.stats-card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap-md);
  padding: var(--gap-lg);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
}

.stats-card:hover {
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.stat-block {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--color-white);
  line-height: 1;
}

.stat-name {
  font-size: var(--font-xs);
  color: var(--main-color-5);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 4px;
}

/* Benefits Card */
.benefits-card-modern {
  padding: var(--gap-lg);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
}

.benefits-card-modern:hover {
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.benefits-title {
  font-size: var(--font-lg);
  font-weight: 600;
  color: var(--color-white);
  margin: 0 0 var(--gap-md);
}

.benefits-list {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
}

.benefit-item-modern {
  display: flex;
  align-items: flex-start;
  gap: var(--gap-sm);
}

.benefit-check {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 214, 79, 0.15);
  border-radius: 50%;
  font-size: 10px;
  color: var(--accent-success);
  flex-shrink: 0;
  margin-top: 2px;
}

.benefit-text {
  font-size: var(--font-sm);
  color: var(--main-color-6);
  line-height: 1.5;
}

/* Trust Section */
.trust-section {
  text-align: center;
  position: relative;
  z-index: 1;
  padding-top: var(--gap-xl);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.trust-text {
  font-size: var(--font-xs);
  color: var(--main-color-5);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 var(--gap-md);
}

.trust-logos {
  display: flex;
  justify-content: center;
  gap: var(--gap-xl);
  flex-wrap: wrap;
}

.trust-logo {
  font-size: var(--font-lg);
  font-weight: 700;
  color: var(--main-color-4);
  opacity: 0.6;
  transition: all 0.3s ease;
}

.trust-logo:hover {
  opacity: 1;
  color: var(--color-white);
}

/* Mobile: Remove gradients, use solid colors */
@media (max-width: 768px) {
  .cta-modern {
    background: var(--main-color-1) !important;
  }

  .gradient-orb {
    display: none;
  }

  .grid-overlay {
    display: none;
  }
}

/* Responsive */
@media (max-width: 640px) {
  .cta-title-modern {
    font-size: 2.2rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .btn {
    justify-content: center;
  }

  .stats-card {
    grid-template-columns: 1fr;
    gap: var(--gap-sm);
  }

  .stat-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
  }
}
</style>
