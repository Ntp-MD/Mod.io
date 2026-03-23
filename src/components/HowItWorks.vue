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
      <div class="steps-grid" grid="4,2,2,1,var(--gap-md)">
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
.steps-flow {
  margin-bottom: var(--gap-section);
  position: relative;
}

.steps-visual {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0 auto var(--gap-lg);
  padding: 0 var(--gap-lg);
}

.flow-line {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-primary) 0%, var(--accent-success) 100%);
  z-index: 1;
  transform: translateY(-50%);
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
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-primary), var(--main-color-1));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  border: 3px solid var(--color-white);
  transition: var(--transition-normal);
}

.step-circle:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow-xl);
}

.step-icon {
  font-size: calc(var(--font-xl) * 1.5);
  line-height: 1;
}

.step-connector {
  position: absolute;
  top: 50%;
  right: -50%;
  width: 50%;
  height: 2px;
  background: var(--accent-primary);
  transform: translateY(-50%);
  z-index: 1;
}

/* Grid-Mod handles layout: grid="4,2,2,1,var(--gap-md)" */
@media screen and (min-width: 1200px) {
  .step-card {
    transform: translateY(-4px);
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .step-card {
    transform: translateY(-2px);
  }
}

.step-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--gap-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--main-color-8);
  transition: var(--transition-normal);
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  height: 100%;
}

.step-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--accent-primary);
}

.step-header {
  display: flex;
  align-items: flex-start;
  gap: var(--gap-md);
}

.step-number {
  font-size: calc(var(--font-xl) * 1.5);
  font-weight: 700;
  color: var(--accent-primary);
  line-height: 1;
  min-width: 50px;
  text-align: center;
}

.step-title {
  font-size: var(--font-lg);
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
  color: var(--main-color-1);
}

.step-description {
  font-size: var(--font-sm);
  line-height: 1.6;
  color: var(--main-color-5);
  margin: 0;
  flex-grow: 1;
}

.step-detail {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  padding: var(--gap-sm);
  background: var(--main-color-9);
  border-radius: var(--radius-sm);
  font-size: var(--font-xs);
  color: var(--main-color-4);
}

.detail-icon {
  color: var(--accent-success);
}

/* Step-specific colors */
.step-1 .step-circle {
  background: linear-gradient(135deg, var(--accent-primary), #0056b3);
}

.step-2 .step-circle {
  background: linear-gradient(135deg, var(--accent-success), #00a846);
}

.step-3 .step-circle {
  background: linear-gradient(135deg, var(--accent-warning), #cc4a00);
}

.step-4 .step-circle {
  background: linear-gradient(135deg, var(--accent-error), #b91c1c);
}

/* Responsive Design */
@media screen and (max-width: 1200px) {
  .steps-visual {
    transform: scale(0.9);
  }

  .step-circle {
    width: 70px;
    height: 70px;
  }

  .step-icon {
    font-size: var(--font-xl);
  }
}

@media screen and (max-width: 992px) {
  .steps-visual {
    flex-direction: column;
    gap: var(--gap-lg);
    padding: 0 var(--gap-md);
  }

  .flow-line {
    width: 2px;
    height: 100%;
    top: 0;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
  }

  .step-node {
    flex-direction: row;
    width: 100%;
  }

  .step-connector {
    display: none;
  }
}

@media screen and (max-width: 480px) {
  .step-circle {
    width: 60px;
    height: 60px;
  }

  .step-icon {
    font-size: var(--font-lg);
  }

  .step-card {
    padding: var(--gap-md);
  }

  .step-number {
    font-size: var(--font-lg);
    min-width: 40px;
  }

  .step-title {
    font-size: var(--font-md);
  }
}
</style>
