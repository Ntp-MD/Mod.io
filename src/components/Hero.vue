<script setup>
import { ref, onMounted } from "vue";

const codeExample = `<script src="https://cdn.mod.io/library/latest.min.js"><\/script>

MOD.init({
  project: 'your-project-id',
  version: '1.0.0'
});`;

const isVisible = ref(false);
const stats = ref([
  { number: "100M+", label: "Intelligent Requests", suffix: "+" },
  { number: "99.99%", label: "Supreme Uptime", suffix: "%" },
  { number: "150+", label: "Global Edge Nodes", suffix: "+" },
]);

onMounted(() => {
  isVisible.value = true;
});
</script>

<template>
  <section class="hero" role="banner" aria-label="MOD.io CDN Platform">
    <div class="hero-background">
      <div class="hero-gradient"></div>
      <div class="hero-particles" aria-hidden="true"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <header class="hero-header">
          <div class="hero-badge">
            <span class="badge badge-accent" role="status" aria-label="Featured innovation">
              <span aria-hidden="true">⚡</span>
              <span>CDN Innovation</span>
            </span>
          </div>

          <h1 class="hero-title">
            <span class="title-gradient">Intelligent Library</span>
            <span class="title-gradient">Distribution at Scale</span>
          </h1>

          <p class="hero-description">
            MOD.io is an agentic CDN platform engineered for modern developers. Deploy once, distribute globally with supreme performance
            optimization, intelligent version control, and real-time analytics intelligence.
          </p>
        </header>

        <div class="hero-actions">
          <a href="#get-started" class="btn btn-primary btn-large" role="button" aria-label="Get started with MOD.io deployment">
            <span aria-hidden="true">🚀</span>
            <span>Deploy Now</span>
          </a>
          <a href="#docs" class="btn btn-secondary btn-large" role="button" aria-label="Explore MOD.io documentation and features">
            <span aria-hidden="true">📚</span>
            <span>Explore Innovation</span>
          </a>
        </div>

        <div class="hero-stats" role="region" aria-label="Platform statistics">
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="stat"
            :class="{ 'stat-visible': isVisible }"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="stat-number" :data-suffix="stat.suffix">
              {{ stat.number }}
            </div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <aside class="hero-visual" role="complementary" aria-label="Code example preview">
        <div class="code-preview">
          <div class="code-header">
            <div class="code-controls" aria-label="Window controls">
              <button class="code-dot dot-red" aria-label="Close window" tabindex="0"></button>
              <button class="code-dot dot-yellow" aria-label="Minimize window" tabindex="0"></button>
              <button class="code-dot dot-green" aria-label="Maximize window" tabindex="0"></button>
            </div>
            <span class="code-title">index.html</span>
          </div>
          <div class="code-content">
            <pre><code>{{ codeExample }}</code></pre>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
/* Base: Mobile Styles (320px+) */
.hero {
  background: linear-gradient(135deg, var(--main-color-9) 0%, var(--color-white) 100%);
  padding: var(--gap-lg) 0;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(0, 105, 217, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(0, 214, 79, 0.04) 0%, transparent 50%),
    radial-gradient(circle at 50% 20%, rgba(127, 44, 134, 0.03) 0%, transparent 50%);
}

.hero-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
    radial-gradient(circle at 60% 70%, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
    radial-gradient(circle at 80% 20%, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
  background-size:
    50px 50px,
    80px 80px,
    60px 60px;
  background-position:
    0 0,
    25px 25px,
    50px 10px;
  animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.hero-header {
  margin-bottom: var(--gap-xl);
}

.hero-badge {
  margin-bottom: var(--gap-md);
  display: flex;
  justify-content: center;
}

.hero-title {
  font-size: calc(var(--font-xl) * 1.8);
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 var(--gap-lg) 0;
  color: var(--main-color-1);
}

.title-gradient {
  display: block;
  background: linear-gradient(135deg, var(--main-color-1) 0%, var(--accent-primary) 50%, var(--accent-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 3s ease-in-out infinite;
}

@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.hero-description {
  font-size: var(--font-md);
  line-height: 1.6;
  color: var(--main-color-5);
  margin: 0 0 var(--gap-xl) 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  align-items: center;
  margin-bottom: var(--gap-xl);
}

.btn-large {
  padding: var(--gap-md) var(--gap-xl);
  font-size: var(--font-lg);
  min-height: 48px;
  min-width: 280px;
  border-radius: var(--radius-lg);
}

.hero-stats {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  align-items: center;
}

.stat {
  text-align: center;
  padding: var(--gap-md);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 280px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.stat-visible {
  opacity: 1;
  transform: translateY(0);
}

.stat:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  background: rgba(255, 255, 255, 0.95);
}

.stat-number {
  font-size: calc(var(--font-xl) * 1.8);
  font-weight: 700;
  color: var(--accent-primary);
  margin-bottom: var(--gap-xs);
  line-height: 1;
}

.stat-label {
  color: var(--main-color-6);
  text-transform: uppercase;
  font-size: var(--font-xs);
  font-weight: 600;
  letter-spacing: 0.05em;
  line-height: 1.3;
}

.hero-visual {
  position: relative;
  z-index: 2;
  margin-top: var(--gap-xl);
  display: flex;
  justify-content: center;
}

.code-preview {
  background: var(--main-color-2);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  width: 100%;
  max-width: 400px;
  transform: perspective(1000px) rotateY(-5deg);
  transition: var(--transition-normal);
  border: 1px solid var(--main-color-3);
}

.code-preview:hover {
  transform: perspective(1000px) rotateY(0deg) scale(1.02);
}

.code-header {
  background: var(--main-color-3);
  padding: var(--gap-sm);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--main-color-4);
}

.code-controls {
  display: flex;
  gap: var(--gap-xs);
}

.code-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: var(--transition-fast);
}

.code-dot:hover {
  transform: scale(1.2);
}

.dot-red {
  background: #ff5f56;
}
.dot-yellow {
  background: #ffbd2e;
}
.dot-green {
  background: #27c93f;
}

.code-title {
  font-size: var(--font-xs);
  color: var(--main-color-7);
  font-weight: 500;
}

.code-content {
  padding: var(--gap-md);
  background: var(--main-color-1);
  aspect-ratio: 16/10;
  min-height: 250px;
  overflow: hidden;
}

.code-content pre {
  margin: 0;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: var(--font-sm);
  line-height: 1.5;
  color: var(--main-color-8);
  white-space: pre-wrap;
  word-break: break-all;
}

.code-content code {
  color: var(--main-color-8);
}

/* Enhancement: Tablet (768px+) */
@media (min-width: 768px) {
  .hero {
    padding: var(--gap-xl) 0;
  }

  .hero-title {
    font-size: calc(var(--font-xl) * 2.2);
  }

  .hero-description {
    font-size: var(--font-lg);
    margin-bottom: calc(var(--gap-xl) * 1.5);
  }

  .hero-actions {
    flex-direction: row;
    justify-content: center;
    gap: var(--gap-lg);
  }

  .btn-large {
    min-width: 200px;
  }

  .hero-stats {
    flex-direction: row;
    justify-content: center;
    gap: var(--gap-lg);
  }

  .stat {
    max-width: 180px;
  }

  .code-preview {
    max-width: 500px;
  }

  .code-content {
    min-height: 300px;
  }
}

/* Enhancement: Desktop (1200px+) */
@media (min-width: 1200px) {
  .hero {
    padding: calc(var(--gap-section) * 1.5) 0;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--gap-xl);
    align-items: center;
  }

  .hero-content {
    text-align: left;
    max-width: none;
  }

  .hero-badge {
    justify-content: flex-start;
  }

  .hero-title {
    font-size: calc(var(--font-xl) * 2.8);
  }

  .hero-description {
    margin-left: 0;
    margin-right: 0;
    max-width: 500px;
  }

  .hero-actions {
    justify-content: flex-start;
  }

  .hero-stats {
    justify-content: flex-start;
  }

  .stat {
    max-width: 160px;
  }

  .hero-visual {
    margin-top: 0;
    justify-self: end;
  }

  .code-preview {
    max-width: 600px;
    transform: perspective(1000px) rotateY(-8deg) rotateX(5deg);
  }

  .code-preview:hover {
    transform: perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.05);
  }

  .code-content {
    min-height: 350px;
  }
}

/* Performance optimizations */
.hero-particles {
  will-change: transform;
}

.code-preview {
  will-change: transform;
}

.stat {
  will-change: transform, opacity;
}

/* Accessibility improvements */
.btn:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

.code-dot:focus-visible {
  outline: 2px solid var(--main-color-7);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .hero-particles,
  .title-gradient,
  .stat,
  .code-preview {
    animation: none;
    transition: none;
  }
}
</style>
