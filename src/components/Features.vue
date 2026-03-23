<script setup>
const features = [
  {
    icon: "⚡",
    title: "Sub-20ms Latency",
    description: "Intelligent edge routing delivers content from the nearest of 150+ nodes. Every request optimized in real time.",
    tag: "Performance",
  },
  {
    icon: "🧠",
    title: "Smart Versioning",
    description: "Semantic version management with automatic dependency resolution, safe rollbacks, and canary deployments.",
    tag: "DevEx",
  },
  {
    icon: "📊",
    title: "Live Analytics",
    description: "Real-time dashboards with usage patterns, geographic distribution, and performance forecasting baked in.",
    tag: "Insights",
  },
  {
    icon: "🔒",
    title: "Zero-Trust Security",
    description: "TLS 1.3, automated threat detection, integrity verification, and audit logs for every delivery event.",
    tag: "Security",
  },
  {
    icon: "🚀",
    title: "Any Framework",
    description: "Works with Vue, React, Angular, Svelte, or vanilla JS. Zero-config detection, auto-optimized bundles.",
    tag: "Integration",
  },
  {
    icon: "🌐",
    title: "Self-Healing Infra",
    description: "AI-driven failover across 150+ edge locations. Predictive scaling ensures zero-downtime at any traffic volume.",
    tag: "Reliability",
  },
];
</script>

<template>
  <section id="features" class="section section-light" aria-labelledby="features-title">
    <div class="container">
      <header class="section-header">
        <span class="badge badge-primary" aria-label="Section category">🎯 Platform Features</span>
        <h2 class="section-title" id="features-title">Built for production scale</h2>
        <p class="section-description">Everything developers need — shipped, not promised</p>
      </header>

      <ul class="features-grid" grid="3,3,2,1,var(--gap-md)" role="list">
        <li v-for="feature in features" :key="feature.title" class="feature-card" role="listitem">
          <article>
            <div class="feature-top">
              <span class="feature-icon" aria-hidden="true">{{ feature.icon }}</span>
              <span class="feature-tag">{{ feature.tag }}</span>
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
/* Grid-Mod handles layout via grid="3,3,2,1,var(--gap-md)" */
.features-grid {
  list-style: none;
  margin: 0;
  padding: 0;
}

.feature-card {
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid var(--main-color-8);
  border-radius: var(--radius-lg);
  padding: var(--gap-lg);
  transition:
    border-color var(--transition-normal),
    transform var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(127, 44, 134, 0.04) 0%, transparent 60%);
  opacity: 0;
  transition: opacity var(--transition-normal);
  pointer-events: none;
}

.feature-card:hover {
  border-color: var(--main-color-6);
  transform: translateY(-2px);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--gap-md);
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: var(--main-color-8);
  border-radius: var(--radius-md);
  font-size: var(--font-xl);
  line-height: 1;
  transition: transform var(--transition-fast);
}

.feature-card:hover .feature-icon {
  transform: scale(1.08);
}

.feature-tag {
  font-size: var(--font-xs);
  font-weight: 500;
  color: var(--main-color-4);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 3px 8px;
  background: var(--main-color-8);
  border-radius: var(--radius-full);
}

.feature-title {
  font-size: var(--font-lg);
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 var(--gap-sm);
  color: var(--main-color-1);
}

.feature-description {
  font-size: var(--font-sm);
  line-height: 1.6;
  color: var(--main-color-4);
  margin: 0;
}
</style>
