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
      <div class="steps-grid" large="4" medium="2" semi="2" small="1" gap="var(--space-md)">
        <article v-for="step in steps" :key="step.number" class="step-card">
          <div class="step-number">{{ step.number }}</div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-description">{{ step.description }}</p>
          <span class="step-detail">{{ step.detail }}</span>
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
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
}

.section-description {
  font-size: var(--font-size-md);
  color: var(--color-gray-400);
  max-width: 600px;
  margin-inline: auto;
  line-height: var(--line-height-base);
}

.step-card {
  position: relative;
  padding: var(--space-lg);
  background-color: var(--color-gray-900);
  border: 1px solid var(--color-gray-800);
  border-radius: var(--radius-3);
  transition: all var(--transition-md);
  text-align: center;
}

.step-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.step-number {
  font-size: var(--font-size-xl);
  font-weight: 800;
  color: var(--color-primary);
  width: 50px;
  height: 50px;
  background-color: var(--color-gray-800);
  border-radius: var(--radius-circle);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-md);
  border: 2px solid var(--color-primary);
  transition: all var(--transition-md);
}

.step-card:hover .step-number {
  transform: scale(1.1);
  background-color: var(--color-primary);
  color: var(--color-secondary);
}

.step-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
}

.step-title {
  color: var(--color-secondary);
}

.step-description {
  font-size: var(--font-size-sm);
  color: var(--color-gray-400);
  line-height: var(--line-height-base);
}

.step-detail {
  display: inline-block;
  font-size: var(--font-size-xs);
  color: var(--color-gray-500);
  padding: var(--space-xs) var(--space-sm);
  background-color: var(--color-gray-800);
  border-radius: var(--radius-1);
  border: 1px solid var(--color-gray-700);
  transition: all var(--transition-md);
}

.step-card:hover .step-detail {
  background-color: var(--color-primary);
  color: var(--color-secondary);
  border-color: var(--color-primary);
}
</style>
