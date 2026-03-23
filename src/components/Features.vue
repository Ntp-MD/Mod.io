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
      <div class="features-grid" grid="3,3,2,1,var(--gap-md)">
        <article v-for="feature in features" :key="feature.title" class="feature-card card-hover">
          <span class="feature-icon icon-hover">{{ feature.icon }}</span>
          <h3 class="feature-title text-primary">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Grid-Mod handles layout: grid="3,3,2,1,var(--gap-md)" */
.feature-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--gap-lg);
  border: 1px solid var(--main-color-8);
  transition: var(--transition-normal);
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  height: 100%;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--accent-primary);
}

.feature-icon {
  font-size: calc(var(--font-xl) * 1.5);
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: calc(var(--font-xl) * 2);
  height: calc(var(--font-xl) * 2);
  background: linear-gradient(135deg, var(--accent-primary), var(--main-color-1));
  border-radius: var(--radius-md);
  color: var(--color-white);
}

.icon-hover:hover {
  transform: scale(1.1);
  transition: var(--transition-fast);
}

.feature-title {
  font-size: var(--font-lg);
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
  color: var(--main-color-1);
}

.text-primary {
  color: var(--main-color-1);
}

.feature-description {
  font-size: var(--font-sm);
  line-height: 1.5;
  color: var(--main-color-5);
  margin: 0;
  flex-grow: 1;
}

/* Component-specific responsive styles */
@media screen and (max-width: 480px) {
  .feature-card {
    padding: var(--gap-md);
  }

  .feature-icon {
    font-size: var(--font-xl);
    width: calc(var(--font-xl) * 1.5);
    height: calc(var(--font-xl) * 1.5);
  }
}
</style>
