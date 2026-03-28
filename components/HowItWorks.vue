<script setup>
const steps = [
  {
    number: "01",
    icon: "📦",
    title: "Upload & Optimize",
    description: "Drop your library files. MOD.io auto-detects formats, compresses assets, and generates optimized bundles in seconds.",
    detail: ".js · .css · .wasm · .json · images",
  },
  {
    number: "02",
    icon: "🧠",
    title: "Version & Configure",
    description: "Semantic versioning kicks in automatically. Generate CDN embed codes, npm packages, and ES module URLs instantly.",
    detail: "Zero-config · canary · rollback",
  },
  {
    number: "03",
    icon: "🌐",
    title: "Distribute Globally",
    description: "Your files propagate to 150+ edge nodes within seconds. Any framework, any runtime — npm, CDN, or ES modules.",
    detail: "npm · yarn · pnpm · CDN · ESM · UMD",
  },
  {
    number: "04",
    icon: "📊",
    title: "Monitor & Scale",
    description: "Real-time analytics surface usage patterns, latency by region, and anomalies. Auto-scaling handles any traffic spike.",
    detail: "Live dashboard · alerts · auto-scale",
  },
];
</script>

<template>
  <section id="how-it-works" class="section section-dark" aria-labelledby="hiw-title">
    <div class="container">
      <header class="section-header">
        <span class="badge badge-primary" aria-label="Section category">🔬 How It Works</span>
        <h2 class="section-title" id="hiw-title">Deploy in four steps</h2>
        <p class="section-description">From upload to global distribution in under 60 seconds</p>
      </header>

      <div class="steps-list" aria-label="Deployment steps">
        <div v-for="(step, index) in steps" :key="step.number" class="step-item">
          <!-- Vertical connector line (between steps) -->
          <div class="step-connector" aria-hidden="true" v-if="index < steps.length - 1"></div>

          <div class="step-inner">
            <div class="step-left">
              <div class="step-num-wrap" aria-hidden="true">
                <span class="step-num">{{ step.number }}</span>
              </div>
            </div>

            <article class="step-card card">
              <div class="step-icon-row">
                <span class="step-icon" aria-hidden="true">{{ step.icon }}</span>
                <h3 class="step-title">{{ step.title }}</h3>
              </div>
              <p class="step-description">{{ step.description }}</p>
              <div class="step-tags" aria-label="Supported formats">
                <span class="step-tag">⚡ {{ step.detail }}</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.steps-list {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
}

.step-item {
  position: relative;
}

/* Vertical connecting line between steps */
.step-connector {
  position: absolute;
  left: 20px;
  top: 64px;
  bottom: -8px;
  width: 2px;
  background: linear-gradient(180deg, var(--main-color-3) 0%, transparent 100%);
  z-index: 0;
}

.step-inner {
  display: flex;
  gap: var(--gap-md);
  padding-bottom: var(--gap-xl);
  position: relative;
  z-index: 1;
}

.step-left {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-num-wrap {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2px solid var(--main-color-3);
  background: var(--main-color-2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.step-num {
  font-size: var(--font-xs);
  font-weight: 700;
  color: var(--main-color-6);
  font-family: "Monaco", "Menlo", monospace;
}

/* Step card */
.step-card {
  background: var(--main-color-2);
  border-radius: var(--radius-lg);
  flex: 1;
  transition:
    border-color var(--transition-normal),
    background var(--transition-normal);
}

.step-card:hover {
  background: var(--main-color-2);
}

.step-icon-row {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  margin-bottom: var(--gap-sm);
}

.step-icon {
  font-size: var(--font-xl);
  line-height: 1;
}

.step-title {
  font-size: var(--font-md);
  font-weight: 600;
  color: var(--color-white);
  margin: 0;
  line-height: 1.3;
}

.step-description {
  font-size: var(--font-sm);
  line-height: 1.6;
  color: var(--main-color-6);
  margin: 0 0 var(--gap-sm);
}

.step-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap-xs);
}

.step-tag {
  font-size: var(--font-xs);
  color: var(--accent-success);
  background: rgba(0, 214, 79, 0.08);
  border: 1px solid rgba(0, 214, 79, 0.15);
  border-radius: var(--radius-full);
  padding: 3px var(--gap-sm);
  font-family: "Monaco", "Menlo", monospace;
}

/* ── DESKTOP (1200px+) ── */
@media screen and (min-width: 1201px) {
  /* Flip to horizontal flow */
  .steps-list {
    flex-direction: row;
    align-items: flex-start;
    gap: 0;
  }

  .step-item {
    flex: 1;
  }

  /* Horizontal connector line between steps */
  .step-connector {
    position: absolute;
    left: auto;
    right: 0;
    top: 24px;
    bottom: auto;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--main-color-3) 0%, transparent 100%);
    transform: translateX(50%);
  }

  .step-inner {
    flex-direction: column;
    padding-bottom: 0;
    padding-right: var(--gap-md);
  }

  .step-left {
    flex-direction: row;
    margin-bottom: var(--gap-md);
  }

  .step-num-wrap {
    width: 48px;
    height: 48px;
  }

  .step-card {
    padding: var(--gap-lg);
  }
}
</style>
