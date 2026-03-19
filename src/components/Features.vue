<script setup>
const features = [
  {
    icon: "⚡",
    title: "Supreme Performance",
    description:
      "Intelligent edge network delivers sub-20ms latency globally. Agentic routing ensures optimal content delivery from the nearest node.",
  },
  {
    icon: "🧠",
    title: "Intelligent Versioning",
    description: "AI-powered semantic versioning with automatic dependency resolution. Smart rollback and canary deployment capabilities.",
  },
  {
    icon: "📊",
    title: "Analytics Intelligence",
    description: "Real-time insights with predictive analytics. Machine learning-powered usage patterns and growth forecasting.",
  },
  {
    icon: "�️",
    title: "Zero-Trust Security",
    description: "Military-grade encryption, automated threat detection, and blockchain-verified integrity for supreme protection.",
  },
  {
    icon: "🚀",
    title: "Seamless Integration",
    description: "Framework-agnostic deployment with intelligent auto-configuration. Works with Vue, React, Angular, Svelte, or vanilla JS.",
  },
  {
    icon: "🌐",
    title: "Global Intelligence",
    description: "150+ edge locations with AI-driven failover. Self-healing infrastructure and predictive scaling for maximum reliability.",
  },
];
</script>

<template>
  <section id="features" class="section">
    <div class="container">
      <div class="section-header">
        <span class="badge badge-primary">🎯 Innovation Showcase</span>
        <h2 class="section-title">Supreme Technology Stack</h2>
        <p class="section-description">Agentic tools engineered for modern developers and innovators</p>
      </div>
      <div class="features-grid" screen="6,3,2,1,var(--gap-md)">
        <article v-for="feature in features" :key="feature.title" class="feature-card card-feature card-hover">
          <span class="feature-icon icon-feature icon-hover">{{ feature.icon }}</span>
          <h3 class="feature-title text-primary">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--radius-sm);
  margin-bottom: var(--gap-xs);
}

.section-description {
  font-size: var(--font-md);
  color: var(--main-color-5);
  margin-inline: auto;
  line-height: var(--line-height-base);
}

.feature-card {
  display: flex;
  flex-direction: column;
  gap: var(--radius-sm);
  padding: var(--radius-sm);
  text-align: center;
  container-type: inline-size;
}

.feature-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-lg);
  width: 60px;
  height: 60px;
  margin: 0 auto;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
}

.feature-title {
  font-size: var(--font-lg);
}

.feature-description {
  font-size: var(--font-sm);
  color: var(--main-color-5);
  line-height: var(--line-height-base);
}
</style>
