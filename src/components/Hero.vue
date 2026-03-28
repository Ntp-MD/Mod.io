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

const partners = ["Google", "Microsoft", "Amazon", "Meta", "Netflix"];
</script>

<template>
  <section class="hero-modern" aria-labelledby="hero-title">
    <!-- Animated background -->
    <div class="hero-bg" aria-hidden="true">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
      <div class="grid-pattern"></div>
    </div>

    <div class="container">
      <div class="hero-layout">
        <!-- Content -->
        <div class="hero-content">
          <!-- Trust badge -->
          <div class="trust-badge">
            <span class="badge-glow">⚡ Trusted by developers worldwide</span>
          </div>

          <!-- Main headline -->
          <h1 class="hero-title" id="hero-title">
            <span class="title-line">Global CDN</span>
            <span class="title-line gradient-text">for Modern Apps</span>
          </h1>

          <!-- Description -->
          <p class="hero-description">
            Deploy your libraries and assets to 150+ edge locations worldwide. Sub-20ms latency, intelligent caching, and real-time analytics built
            for scale.
          </p>

          <!-- CTA Group -->
          <div class="cta-group">
            <a href="#get-started" class="btn btn-primary hero-btn" data-hover="bounce">
              <span class="btn-icon">🚀</span>
              <span>Start Free</span>
            </a>
            <a href="#docs" class="btn btn-secondary hero-btn" data-hover="lift">
              <span>View Documentation</span>
              <span class="btn-arrow">→</span>
            </a>
          </div>

          <!-- Stats -->
          <div class="stats-bar">
            <div v-for="stat in stats" :key="stat.label" class="stat-item" data-hover="scale">
              <span class="stat-number">{{ stat.number }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>

          <!-- Partner logos -->
          <div class="partners">
            <span class="partners-label">Used by teams at</span>
            <div class="partners-logos">
              <span v-for="partner in partners" :key="partner" class="partner-logo">{{ partner }}</span>
            </div>
          </div>
        </div>

        <!-- Visual - Code Preview -->
        <div class="hero-visual">
          <div class="code-card" data-hover="perspective">
            <!-- Window header -->
            <div class="code-header">
              <div class="window-controls">
                <span class="control close"></span>
                <span class="control minimize"></span>
                <span class="control maximize"></span>
              </div>
              <span class="window-title">mod-setup.js</span>
              <span class="window-status">
                <span class="status-indicator"></span>
                Live
              </span>
            </div>

            <!-- Code content -->
            <div class="code-content">
              <pre class="code-block"><code>{{ codeExample }}</code></pre>
            </div>

            <!-- Terminal footer -->
            <div class="code-footer">
              <div class="terminal-line">
                <span class="prompt">$</span>
                <span class="command">mod deploy --production</span>
              </div>
              <div class="terminal-output">
                <span class="success-check">✓</span>
                <span>Deployed to 150 edge nodes in 2.3s</span>
              </div>
            </div>
          </div>

          <!-- Floating metrics -->
          <div class="floating-metrics">
            <div class="metric-pill" data-hover="scale">
              <span class="metric-icon">⚡</span>
              <span class="metric-value">12ms</span>
              <span class="metric-label">Latency</span>
            </div>
            <div class="metric-pill highlight" data-hover="scale">
              <span class="metric-icon">🌐</span>
              <span class="metric-value">SG-EDGE</span>
              <span class="metric-label">Nearest Node</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Hero Section - Modern Design */
.hero-modern {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--main-color-1);
  overflow: hidden;
  padding: var(--gap-section) 0 var(--gap-section);
}

/* Animated Background */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.5;
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: var(--accent-secondary);
  top: -200px;
  right: -100px;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: var(--accent-success);
  bottom: -100px;
  left: -100px;
  animation-delay: -7s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: var(--accent-warning);
  top: 50%;
  left: 30%;
  animation-delay: -14s;
  opacity: 0.3;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 40%, transparent 70%);
}

/* Layout */
.hero-layout {
  position: relative;
  z-index: 1;
  display: grid;
  gap: var(--gap-xl);
  align-items: center;
}

@media (min-width: 1024px) {
  .hero-layout {
    grid-template-columns: 1fr 1.2fr;
    gap: 80px;
  }
}

/* Content */
.hero-content {
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
}

/* Trust Badge */
.trust-badge {
  display: inline-flex;
}

.badge-glow {
  display: inline-flex;
  align-items: center;
  gap: var(--gap-xs);
  padding: var(--gap-xs) var(--gap-sm);
  background: rgba(127, 44, 134, 0.15);
  border: 1px solid rgba(127, 44, 134, 0.3);
  border-radius: var(--radius-full);
  font-size: var(--font-xs);
  font-weight: 500;
  color: var(--main-color-6);
  backdrop-filter: blur(10px);
}

/* Title */
.hero-title {
  display: flex;
  flex-direction: column;
  gap: var(--gap-xs);
  margin: 0;
}

.title-line {
  display: block;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--color-white);
}

.gradient-text {
  background: linear-gradient(135deg, var(--accent-secondary) 0%, var(--accent-success) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Description */
.hero-description {
  font-size: var(--font-lg);
  line-height: 1.7;
  color: var(--main-color-6);
  max-width: 540px;
  margin: 0;
}

/* CTA Group */
.cta-group {
  display: flex;
  gap: var(--gap-md);
  flex-wrap: wrap;
}

/* Button overrides - only specific styles not in button.css */
.btn-primary.hero-btn {
  background: var(--color-white);
  color: var(--main-color-1);
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
}

.btn-primary.hero-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(255, 255, 255, 0.3);
}

.btn-secondary.hero-btn {
  background: rgba(255, 255, 255, 0.08);
  color: var(--color-white);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
}

.btn-secondary.hero-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.25);
}

.btn-secondary.hero-btn:hover .btn-arrow {
  transform: translateX(4px);
}

/* Stats Bar */
.stats-bar {
  display: flex;
  gap: var(--gap-xl);
  padding-top: var(--gap-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-number {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--color-white);
  line-height: 1;
}

.stat-label {
  font-size: var(--font-xs);
  color: var(--main-color-5);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Partners */
.partners {
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
  padding-top: var(--gap-md);
}

.partners-label {
  font-size: var(--font-xs);
  color: var(--main-color-5);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.partners-logos {
  display: flex;
  gap: var(--gap-lg);
  flex-wrap: wrap;
}

.partner-logo {
  font-size: var(--font-md);
  font-weight: 600;
  color: var(--main-color-4);
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.partner-logo:hover {
  opacity: 1;
}

/* Hero Visual - Code Card */
.hero-visual {
  position: relative;
  perspective: 1000px;
  width: 100%;
  max-width: 100%;
}

.code-card {
  background: rgba(23, 23, 23, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  overflow: hidden;
  backdrop-filter: blur(20px);
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
  max-width: 100%;
  width: 100%;
}

.code-card:hover {
  transform: perspective(1000px) rotateY(-5deg) rotateX(5deg) translateY(-10px);
}

.code-header {
  display: flex;
  align-items: center;
  gap: var(--gap-md);
  padding: var(--gap-md);
  background: rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.window-controls {
  display: flex;
  gap: var(--gap-xs);
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.control.close {
  background: var(--accent-error);
}
.control.minimize {
  background: var(--accent-warning);
}
.control.maximize {
  background: var(--accent-success);
}

.window-title {
  flex: 1;
  font-size: var(--font-xs);
  color: var(--main-color-6);
  font-family: monospace;
}

.window-status {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--font-xs);
  color: var(--accent-success);
  padding: var(--gap-xs) var(--gap-sm);
  background: rgba(0, 214, 79, 0.1);
  border-radius: var(--radius-full);
}

.status-indicator {
  width: 6px;
  height: 6px;
  background: var(--accent-success);
  border-radius: 50%;
  animation: pulse 2s ease infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.8);
  }
}

.code-content {
  padding: var(--gap-md);
  background: var(--main-color-1);
}

.code-block {
  margin: 0;
  font-family: "JetBrains Mono", "Fira Code", monospace;
  font-size: var(--font-sm);
  line-height: 1.6;
  color: var(--main-color-6);
  overflow-x: auto;
}

.code-footer {
  padding: var(--gap-md);
  background: rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.terminal-line {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  font-family: monospace;
  font-size: var(--font-sm);
  margin-bottom: 8px;
}

.prompt {
  color: var(--accent-success);
  font-weight: 600;
}

.command {
  color: var(--color-white);
}

.terminal-output {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  font-family: monospace;
  font-size: var(--font-xs);
  color: var(--main-color-6);
  padding-left: 20px;
}

.success-check {
  color: var(--accent-success);
}

/* Floating Metrics */
.floating-metrics {
  position: absolute;
  bottom: -20px;
  right: -20px;
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
  z-index: 10;
}

.metric-pill {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  padding: var(--gap-sm) var(--gap-md);
  background: rgba(23, 23, 23, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  backdrop-filter: blur(20px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.metric-pill.highlight {
  background: rgba(127, 44, 134, 0.2);
  border-color: rgba(127, 44, 134, 0.4);
}

.metric-icon {
  font-size: var(--font-md);
}

.metric-value {
  font-weight: 600;
  color: var(--color-white);
  font-size: var(--font-sm);
}

.metric-label {
  font-size: var(--font-xs);
  color: var(--main-color-6);
}

/* Mobile: Remove gradients, use solid colors */
@media (max-width: 768px) {
  .hero-modern {
    background: var(--main-color-1) !important;
  }

  .gradient-orb {
    display: none;
  }

  .grid-pattern {
    display: none;
  }

  .gradient-text {
    background: none;
    -webkit-text-fill-color: var(--color-white);
    color: var(--color-white);
  }
}

/* Responsive */
@media (max-width: 1200px) {
  .hero-layout {
    display: flex;
    gap: var(--gap-xl);
    flex-direction: column;
  }

  .hero-content {
    text-align: center;
    align-items: center;
  }

  .hero-description {
    max-width: 100%;
  }

  .stats-bar {
    justify-content: center;
  }

  .partners {
    align-items: center;
  }

  .floating-metrics {
    display: none;
  }
}

@media (max-width: 640px) {
  .cta-group {
    flex-direction: column;
    width: 100%;
  }

  .btn {
    justify-content: center;
  }

  .stats-bar {
    flex-direction: column;
    gap: var(--gap-md);
    align-items: center;
  }

  .stat-item {
    align-items: center;
  }

  /* Mobile: Fix code card overflow */
  .hero-visual {
    width: 100%;
    max-width: 100%;
  }

  .code-card {
    max-width: 100%;
    width: 100%;
  }

  .code-block {
    max-width: 100%;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .code-header {
    padding: var(--gap-sm);
    gap: var(--gap-sm);
  }

  .window-title {
    font-size: var(--font-xs);
  }

  .window-status {
    padding: 2px 6px;
  }
}
</style>
