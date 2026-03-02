<script setup>
const steps = [
  {
    number: "01",
    title: "Upload Your Library",
    description: "Drag and drop your minified JS, CSS, or any static files. We support all major formats and automatically optimize for delivery.",
    detail: "Supports: .js, .css, .wasm, .json, images",
  },
  {
    number: "02",
    title: "Configure & Customize",
    description: "Set version numbers, access permissions, and custom domains. Generate embed codes and npm packages with one click.",
    detail: "Semantic versioning, private/public access",
  },
  {
    number: "03",
    title: "Share & Integrate",
    description: "Copy your CDN URL or embed code. Users can install via npm, yarn, or direct script tag - whatever works for them.",
    detail: "npm, yarn, script tag, ES modules",
  },
  {
    number: "04",
    title: "Monitor & Iterate",
    description: "Track performance, usage patterns, and user feedback. Push updates seamlessly with automatic cache invalidation.",
    detail: "Real-time dashboard, usage alerts",
  },
];
</script>

<template>
  <section id="how-it-works" class="section section-dark">
    <div class="container">
      <div class="section-header">
        <span class="badge badge-primary">How It Works</span>
        <h2 class="section-title">Simple 4-Step Process</h2>
        <p class="section-description">From upload to global distribution in minutes</p>
      </div>
      <div class="steps-grid">
        <article v-for="(step, index) in steps" :key="step.number" class="step-card">
          <div class="step-number">{{ step.number }}</div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-description">{{ step.description }}</p>
          <span class="step-detail">{{ step.detail }}</span>
          <div v-if="index < steps.length - 1" class="step-connector" aria-hidden="true"></div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: var(--space-2xl);
}

.section-title {
  font-size: var(--font-size-3xl);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: var(--space-sm);
}

.section-description {
  font-size: var(--font-size-lg);
  color: var(--color-gray-400);
  max-width: 600px;
  margin-inline: auto;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.step-card {
  position: relative;
  padding: var(--space-lg);
  background-color: var(--color-gray-900);
  border: 1px solid var(--color-gray-800);
  border-radius: var(--radius-lg);
  transition: all var(--transition-md);
}

.step-card:hover {
  border-color: var(--color-gray-600);
  transform: translateY(-4px);
}

.step-number {
  font-size: var(--font-size-2xl);
  font-weight: 800;
  color: var(--color-gray-600);
  margin-bottom: var(--space-sm);
}

.step-title {
  font-size: var(--font-size-lg);
  font-weight: 700;
  margin-bottom: var(--space-sm);
}

.step-description {
  font-size: var(--font-size-sm);
  color: var(--color-gray-400);
  line-height: 1.6;
  margin-bottom: var(--space-md);
}

.step-detail {
  display: inline-block;
  font-size: var(--font-size-xs);
  color: var(--color-gray-500);
  padding: var(--space-xs) var(--space-sm);
  background-color: var(--color-gray-800);
  border-radius: var(--radius-sm);
}

.step-connector {
  display: none;
}

@media (min-width: 1025px) {
  .step-connector {
    display: block;
    position: absolute;
    top: 50%;
    right: calc(-1 * var(--space-lg) / 2);
    width: var(--space-md);
    height: 2px;
    background: linear-gradient(90deg, var(--color-gray-700), var(--color-gray-600));
    transform: translateY(-50%);
  }

  .step-card:last-child .step-connector {
    display: none;
  }
}

@media (max-width: 1024px) {
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .steps-grid {
    grid-template-columns: 1fr;
  }
}
</style>
