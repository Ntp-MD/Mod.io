<script setup>
const steps = [
  {
    number: "01",
    title: "Intelligent Deployment",
    description:
      "AI-powered upload with automatic optimization and compression. Smart format detection and intelligent bundling for supreme performance.",
    detail: "Auto-optimization: .js, .css, .wasm, .json, images",
  },
  {
    number: "02",
    title: "Agentic Configuration",
    description:
      "Self-configuring version management with predictive routing. One-click generation of optimized embed codes and intelligent npm packages.",
    detail: "AI versioning, zero-config deployment",
  },
  {
    number: "03",
    title: "Universal Integration",
    description:
      "Framework-agnostic distribution with intelligent auto-detection. Seamless installation via npm, yarn, pnpm, or direct CDN injection.",
    detail: "npm, yarn, pnpm, CDN, ES modules, UMD",
  },
  {
    number: "04",
    title: "Predictive Analytics",
    description: "Machine learning-powered insights with real-time monitoring. Automated performance optimization and intelligent cache management.",
    detail: "AI dashboard, predictive scaling, auto-optimization",
  },
];

const getStepIcon = (index) => {
  const icons = ["�", "🧠", "🌐", "�"];
  return icons[index] || "⚡";
};
</script>

<template>
  <section id="how-it-works" class="section section-dark">
    <div class="container">
      <div class="section-header">
        <span class="badge badge-primary">🔬 Innovation Process</span>
        <h2 class="section-title">Intelligent 4-Phase Deployment</h2>
        <p class="section-description">From deployment to global intelligence in seconds</p>
      </div>

      <!-- Visual Step Flow -->
      <div class="steps-flow">
        <div class="steps-visual">
          <div class="flow-line"></div>
          <div v-for="(step, index) in steps" :key="step.number" class="step-node" :class="`step-${index + 1}`">
            <div class="step-circle">
              <span class="step-icon">{{ getStepIcon(index) }}</span>
            </div>
            <div class="step-connector" v-if="index < steps.length - 1"></div>
          </div>
        </div>
      </div>

      <!-- Step Cards -->
      <div class="steps-grid" large="4" medium="2" semi="2" small="1" gap="var(--gap-md)">
        <article v-for="(step, index) in steps" :key="step.number" class="step-card" :class="`step-card-${index + 1}`">
          <div class="step-header">
            <div class="step-number">{{ step.number }}</div>
            <h3 class="step-title">{{ step.title }}</h3>
          </div>
          <p class="step-description">{{ step.description }}</p>
          <div class="step-detail">
            <span class="detail-icon">⚡</span>
            <span>{{ step.detail }}</span>
          </div>
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
  gap: var(--gap-sm);
  margin-bottom: var(--gap-xl);
}

.section-description {
  font-size: var(--font-md);
  color: var(--main-color-7);
  margin-inline: auto;
  line-height: var(--line-height-base);
}

/* Visual Step Flow */
.steps-flow {
  margin-bottom: var(--gap-xl);
  position: relative;
}

.steps-visual {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}

.flow-line {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary), var(--main-color-5));
  transform: translateY(-50%);
  z-index: 1;
}

.step-node {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-sm);
}

.step-circle {
  width: 60px;
  height: 60px;
  background-color: var(--main-color-2);
  border: 3px solid var(--color-primary);
  border-radius: var(--radius-circle);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-normal);
  position: relative;
}

.step-circle::before {
  content: "";
  position: absolute;
  inset: -3px;
  border-radius: var(--radius-circle);
  background: linear-gradient(45deg, var(--color-primary), transparent);
  opacity: 0;
  transition: var(--transition-normal);
}

.step-node:hover .step-circle {
  transform: scale(1.1);
  background-color: var(--color-primary);
}

.step-node:hover .step-circle::before {
  opacity: 0.4;
}

.step-icon {
  font-size: var(--font-xl);
  filter: grayscale(1) brightness(2);
  transition: var(--transition-normal);
}

.step-node:hover .step-icon {
  filter: none;
}

.step-connector {
  position: absolute;
  top: 50%;
  left: 100%;
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary), transparent);
  transform: translateY(-50%);
  z-index: 1;
}

/* Step Cards */
.step-card {
  position: relative;
  padding: var(--gap-lg);
  background-color: var(--main-color-2);
  border: 1px solid var(--main-color-3);
  border-radius: var(--radius-lg);
  transition: var(--transition-normal);
  text-align: center;
  overflow: hidden;
}

.step-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--main-color-5));
  transform: scaleX(0);
  transform-origin: left;
  transition: var(--transition-normal);
}

.step-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.step-card:hover::before {
  transform: scaleX(1);
}

.step-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-sm);
  margin-bottom: var(--gap-md);
}

.step-number {
  font-size: var(--font-lg);
  color: var(--main-white);
  font-weight: 800;
  width: 50px;
  height: 50px;
  background-color: var(--main-color-3);
  border-radius: var(--radius-circle);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-primary);
  transition: var(--transition-normal);
}

.step-card:hover .step-number {
  background-color: var(--color-primary);
  color: var(--main-white);
  transform: rotate(360deg);
}

.step-title {
  color: var(--main-white);
  font-size: var(--font-lg);
  font-weight: 600;
}

.step-description {
  font-size: var(--font-sm);
  color: var(--main-color-7);
  line-height: var(--line-height-base);
  margin-bottom: var(--gap-md);
}

.step-detail {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-sm);
  font-size: var(--font-xs);
  color: var(--main-color-6);
  padding: var(--gap-sm) var(--gap-md);
  background-color: var(--main-color-3);
  border-radius: var(--radius-md);
  border: 1px solid var(--main-color-4);
  transition: var(--transition-normal);
}

.detail-icon {
  font-size: var(--font-sm);
}

.step-card:hover .step-detail {
  background-color: var(--color-primary);
  color: var(--main-white);
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .steps-visual {
    flex-direction: column;
    gap: var(--gap-lg);
  }

  .flow-line {
    width: 2px;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .step-connector {
    display: none;
  }

  .step-circle {
    width: 50px;
    height: 50px;
  }

  .step-icon {
    font-size: var(--font-lg);
  }
}

@media (max-width: 480px) {
  .step-card {
    padding: var(--gap-md);
  }

  .step-circle {
    width: 40px;
    height: 40px;
  }

  .step-icon {
    font-size: var(--font-md);
  }
}
</style>
