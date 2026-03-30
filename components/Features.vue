<script setup>
const mediumFeatures = [
  {
    icon: "🧠",
    title: "Smart Versioning",
    description: "Semantic version management with automatic dependency resolution and safe rollbacks.",
    gradient: "linear-gradient(135deg, #7f2c86 0%, #4a1c4e 100%)",
  },
  {
    icon: "📊",
    title: "Live Analytics",
    description: "Real-time dashboards with usage patterns, geographic distribution, and performance forecasting.",
    gradient: "linear-gradient(135deg, #00d64f 0%, #009e3a 100%)",
  },
  {
    icon: "🔒",
    title: "Zero-Trust Security",
    description: "TLS 1.3, automated threat detection, and integrity verification for every delivery event.",
    gradient: "linear-gradient(135deg, #ea580c 0%, #b34509 100%)",
  },
  {
    icon: "🚀",
    title: "Any Framework",
    description: "Works with Vue, React, Angular, Svelte. Zero-config detection and auto-optimized bundles.",
    gradient: "linear-gradient(135deg, #7f2c86 0%, #ea580c 100%)",
  },
  {
    icon: "🌐",
    title: "Self-Healing Infra",
    description: "AI-driven failover across 150+ edge locations. Predictive scaling ensures zero-downtime.",
    gradient: "linear-gradient(135deg, #00d64f 0%, #7f2c86 100%)",
  },
];
</script>

<template>
  <section id="features" class="features-section" aria-labelledby="features-title">
    <div class="container">
      <header class="section-header">
        <span class="badge badge-primary">🚀 Features</span>
        <h2 class="section-title" id="features-title">Everything you need to scale</h2>
        <p class="section-description">Built for modern development workflows with zero configuration</p>
      </header>

      <div class="features-bento" role="list">
        <!-- Large feature card -->
        <article class="feature-card feature-large hover-lift" role="listitem">
          <div class="feature-glow"></div>
          <div class="feature-content">
            <div class="feature-header">
              <span class="feature-icon-large">⚡</span>
              <span class="feature-badge">Performance</span>
            </div>
            <h3 class="feature-title">Lightning Fast Delivery</h3>
            <p class="feature-description">
              Sub-20ms latency with intelligent edge routing. Your content is served from the nearest of 150+ global nodes, optimized in real-time for
              maximum speed.
            </p>
            <div class="feature-metrics">
              <div class="metric">
                <span class="metric-value">20ms</span>
                <span class="metric-desc">Average latency</span>
              </div>
              <div class="metric">
                <span class="metric-value">150+</span>
                <span class="metric-desc">Edge nodes</span>
              </div>
            </div>
          </div>
        </article>

        <!-- Medium feature cards -->
        <article v-for="(feature, index) in mediumFeatures" :key="feature.title" class="feature-card feature-medium hover-lift">
          <div class="feature-icon-wrap" :style="{ background: feature.gradient }">
            <span class="feature-icon">{{ feature.icon }}</span>
          </div>
          <div class="feature-content">
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
          <div class="feature-arrow">
            <span>→</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Features Section - Modern Bento Grid */
.features-section {
  background: var(--main-color-1);
  padding: var(--gap-section) 0;
  position: relative;
  overflow: hidden;
}

.features-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(ellipse at 20% 30%, rgba(127, 44, 134, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 70%, rgba(0, 214, 79, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

/* Section Header - Using global utilities */

.section-tag {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(127, 44, 134, 0.2);
  border: 1px solid rgba(127, 44, 134, 0.4);
  border-radius: var(--radius-full);
  font-size: var(--font-xs);
  font-weight: 600;
  color: var(--accent-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: var(--gap-md);
}

/* Bento Grid Layout */
.features-bento {
  display: grid;
  gap: var(--gap-lg);
  position: relative;
  z-index: 1;
}

@media (min-width: 768px) {
  .features-bento {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
}

@media (min-width: 1024px) {
  .features-bento {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
  }

  .feature-large {
    grid-column: span 2;
    grid-row: span 1;
  }
}

/* Feature Cards */
.feature-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  padding: var(--gap-lg);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.feature-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Large Feature Card */
.feature-large {
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, rgba(127, 44, 134, 0.15) 0%, rgba(0, 214, 79, 0.05) 100%);
  border-color: rgba(127, 44, 134, 0.3);
  min-height: 320px;
}

.feature-large .feature-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.feature-glow {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(127, 44, 134, 0.3) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.feature-large:hover .feature-glow {
  opacity: 1;
}

.feature-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--gap-md);
}

.feature-icon-large {
  font-size: 48px;
  line-height: 1;
}

.feature-badge {
  padding: 4px 12px;
  background: rgba(0, 214, 79, 0.15);
  border: 1px solid rgba(0, 214, 79, 0.3);
  border-radius: var(--radius-full);
  font-size: var(--font-xs);
  font-weight: 600;
  color: var(--accent-success);
}

.feature-large .feature-description {
  flex: 1;
  font-size: var(--font-md);
  line-height: 1.7;
  color: var(--main-color-6);
  margin: 0 0 var(--gap-lg);
}

.feature-metrics {
  display: flex;
  gap: var(--gap-xl);
}

.feature-metrics .metric {
  display: flex;
  flex-direction: column;
}

.feature-metrics .metric-value {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--color-white);
  line-height: 1;
}

.feature-metrics .metric-desc {
  font-size: var(--font-xs);
  color: var(--main-color-5);
  margin-top: 4px;
}

/* Medium Feature Cards */
.feature-medium {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
}

.feature-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-icon {
  font-size: var(--font-xl);
  line-height: 1;
}

.feature-medium .feature-content {
  flex: 1;
}

.feature-medium .feature-title {
  font-size: var(--font-lg);
  font-weight: 600;
  color: var(--color-white);
  margin: 0 0 var(--gap-xs);
}

.feature-medium .feature-description {
  font-size: var(--font-sm);
  line-height: 1.6;
  color: var(--main-color-6);
  margin: 0;
}

.feature-arrow {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  font-size: var(--font-md);
  color: var(--main-color-5);
  transition: all 0.3s ease;
}

.feature-card:hover .feature-arrow {
  background: var(--accent-secondary);
  color: var(--color-white);
  transform: translateX(4px);
}

/* Common Title */
.feature-title {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--color-white);
  margin: 0 0 var(--gap-sm);
  line-height: 1.3;
}

/* Mobile: Remove gradients, use solid colors */
@media (max-width: 768px) {
  .feature-arrow {
    bottom: unset;
  }

  .feature-card {
    background: rgba(255, 255, 255, 0.03) !important;
  }

  .feature-large {
    background: rgba(255, 255, 255, 0.05) !important;
  }

  .feature-icon-wrap {
    background: var(--main-color-3) !important;
  }

  .feature-glow {
    display: none;
  }

  .features-bg {
    display: none;
  }
}

/* Responsive */
@media (max-width: 767px) {
  .features-bento {
    grid-template-columns: 1fr;
  }

  .feature-large {
    grid-column: span 1;
  }

  .feature-metrics {
    flex-direction: column;
    gap: var(--gap-md);
  }
}

@media (max-width: 640px) {
  .feature-card {
    padding: var(--gap-md);
  }
}
</style>
