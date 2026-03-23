<script setup>
const codeExample = `<script src="https://cdn.mod.io/v2/latest.min.js"><\/script>

MOD.init({
  project: 'your-project-id',
  version: '2.0.0',
  edge: 'auto'
});

// Verify delivery
MOD.on('ready', ({ latency, node }) => {
  console.log(\`⚡ \${latency}ms · \${node}\`);
});`;

const stats = [
  { number: "100M+", label: "Requests / day" },
  { number: "99.99%", label: "Uptime SLA" },
  { number: "150+", label: "Edge nodes" },
];
</script>

<template>
  <section class="section hero" aria-labelledby="hero-title">
    <div class="hero-glow" aria-hidden="true"></div>
    <div class="container">
      <div class="hero-layout">
        <!-- Content column -->
        <div class="hero-content">
          <div class="hero-badge" aria-label="Product category">
            <span class="badge-pill">⚡ CDN Platform</span>
          </div>
          <h1 class="hero-title" id="hero-title">
            Library distribution<br />
            <span class="hero-title-accent">at global scale</span>
          </h1>
          <p class="hero-description">
            MOD.io is an intelligent CDN engineered for developers. Deploy once, distribute globally with sub-20ms latency, smart versioning, and
            real-time analytics.
          </p>
          <div class="hero-actions">
            <a href="#get-started" class="btn btn-primary hero-btn-primary">🚀 Deploy Free</a>
            <a href="#docs" class="btn-ghost">📚 Read the docs →</a>
          </div>

          <!-- Stats row -->
          <dl class="hero-stats">
            <div v-for="stat in stats" :key="stat.label" class="hero-stat">
              <dt class="hero-stat-label">{{ stat.label }}</dt>
              <dd class="hero-stat-number">{{ stat.number }}</dd>
            </div>
          </dl>
        </div>

        <!-- Visual column -->
        <div class="hero-visual" aria-label="Code integration example">
          <div class="code-window">
            <div class="code-titlebar" aria-hidden="true">
              <div class="code-dots">
                <span class="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
              </div>
              <span class="code-filename">index.html</span>
              <span class="code-badge">v2.0</span>
            </div>
            <div class="code-body">
              <pre class="code-pre"><code>{{ codeExample }}</code></pre>
            </div>
            <div class="code-footer" aria-hidden="true">
              <span class="code-status">
                <span class="status-dot"></span>
                Connected · SG-EDGE-14
              </span>
              <span class="code-latency">12ms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── BASE: Mobile (320px+) ── */
.hero {
  background: var(--main-color-1);
  color: var(--color-white);
  padding: var(--gap-xl) 0 var(--gap-section);
  position: relative;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  top: -30%;
  right: -20%;
  width: 60vw;
  height: 60vw;
  background: radial-gradient(circle, rgba(127, 44, 134, 0.15) 0%, transparent 65%);
  pointer-events: none;
  border-radius: 50%;
}

.hero-layout {
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
  position: relative;
  z-index: 1;
}

/* Badge */
.hero-badge {
  margin-bottom: var(--gap-sm);
}

.badge-pill {
  display: inline-flex;
  align-items: center;
  gap: var(--gap-xs);
  padding: 6px var(--gap-md);
  border: 1px solid var(--main-color-3);
  border-radius: var(--radius-full);
  font-size: var(--font-xs);
  font-weight: 500;
  color: var(--main-color-7);
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.04);
}

/* Title */
.hero-title {
  font-size: clamp(28px, 7vw, 32px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin: 0 0 var(--gap-md);
  color: var(--color-white);
}

.hero-title-accent {
  background: linear-gradient(90deg, var(--accent-secondary), var(--accent-success));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Description */
.hero-description {
  font-size: var(--font-md);
  line-height: 1.7;
  color: var(--main-color-6);
  margin: 0 0 var(--gap-lg);
  max-width: 52ch;
}

/* Actions */
.hero-actions {
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
  margin-bottom: var(--gap-xl);
}

.hero-btn-primary {
  min-height: 48px;
  font-size: var(--font-md);
  font-weight: 600;
  justify-content: center;
  background: var(--color-white);
  color: var(--main-color-1);
  border-radius: var(--radius-md);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: var(--gap-xs);
  transition:
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.hero-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.15);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: var(--gap-sm) var(--gap-md);
  font-size: var(--font-sm);
  font-weight: 500;
  color: var(--main-color-6);
  text-decoration: none;
  border-radius: var(--radius-md);
  border: 1px solid var(--main-color-3);
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast);
}

.btn-ghost:hover {
  color: var(--color-white);
  border-color: var(--main-color-5);
}

/* Stats */
.hero-stats {
  display: flex;
  flex-direction: row;
  gap: var(--gap-md);
  padding: var(--gap-md) 0;
  border-top: 1px solid var(--main-color-3);
  margin: 0;
}

.hero-stat {
  display: flex;
  flex-direction: column-reverse;
  gap: 2px;
}

.hero-stat-number {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--color-white);
  line-height: 1;
  margin: 0;
}

.hero-stat-label {
  font-size: var(--font-xs);
  color: var(--main-color-6);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Code window */
.hero-visual {
  width: 100%;
}

.code-window {
  background: var(--main-color-2);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--main-color-3);
  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.4);
}

.code-titlebar {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  padding: var(--gap-sm) var(--gap-md);
  background: var(--main-color-3);
  border-bottom: 1px solid var(--main-color-4);
}

.code-dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
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

.code-filename {
  font-size: var(--font-xs);
  color: var(--main-color-6);
  font-weight: 500;
  flex: 1;
}

.code-badge {
  font-size: var(--font-xs);
  color: var(--accent-success);
  font-weight: 600;
  background: rgba(0, 214, 79, 0.1);
  padding: 2px 8px;
  border-radius: var(--radius-full);
  border: 1px solid rgba(0, 214, 79, 0.2);
}

.code-body {
  padding: var(--gap-md);
  background: var(--main-color-1);
}

.code-pre {
  margin: 0;
  font-family: "Monaco", "Menlo", "Consolas", monospace;
  font-size: var(--font-xs);
  line-height: 1.7;
  color: var(--main-color-7);
  white-space: pre;
  overflow-x: auto;
}

.code-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--gap-sm) var(--gap-md);
  background: var(--main-color-2);
  border-top: 1px solid var(--main-color-3);
}

.code-status {
  display: flex;
  align-items: center;
  gap: var(--gap-xs);
  font-size: var(--font-xs);
  color: var(--main-color-6);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-success);
  box-shadow: 0 0 6px var(--accent-success);
  animation: pulse-dot 2s ease infinite;
}

@keyframes pulse-dot {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

.code-latency {
  font-size: var(--font-xs);
  font-weight: 600;
  color: var(--accent-success);
  font-family: "Monaco", "Menlo", monospace;
}

/* ── TABLET (992px+) ── */
@media screen and (max-width: 992px) {
  .hero-actions {
    flex-direction: column;
  }
}

/* ── DESKTOP (1200px+) ── */
@media screen and (min-width: 1201px) {
  .hero-layout {
    flex-direction: row;
    align-items: center;
    gap: var(--gap-section);
  }

  .hero-content {
    flex: 0 0 50%;
  }

  .hero-visual {
    flex: 1;
  }

  .code-window {
    transform: perspective(1200px) rotateY(-4deg) rotateX(2deg);
    transition: transform var(--transition-slow);
  }

  .code-window:hover {
    transform: perspective(1200px) rotateY(0deg) rotateX(0deg);
  }
}
</style>
