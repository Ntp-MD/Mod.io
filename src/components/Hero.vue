<script setup>
const codeExample = `<script src="https://cdn.mod.io/library/latest.min.js"><\/script>

MOD.init({
  project: 'your-project-id',
  version: '1.0.0'
});`;
</script>

<template>
  <section class="hero">
    <div class="container hero-content">
      <div class="hero-text">
        <span class="badge badge-primary">CDN Library Creator</span>
        <h1 class="hero-title">
          Deliver Your Libraries
          <span class="text-highlight">Faster</span>
        </h1>
        <p class="hero-description">
          MOD.io is a modern CDN platform designed for library creators. Upload once, deliver globally with lightning-fast performance, version
          management, and real-time analytics.
        </p>
        <div class="hero-actions">
          <a href="#get-started" class="btn btn-primary btn-lg"> Start Free </a>
          <a href="#docs" class="btn btn-secondary btn-lg"> View Docs </a>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-value">10M+</span>
            <span class="stat-label">Daily Requests</span>
          </div>
          <div class="stat">
            <span class="stat-value">99.9%</span>
            <span class="stat-label">Uptime</span>
          </div>
          <div class="stat">
            <span class="stat-value">50+</span>
            <span class="stat-label">Edge Locations</span>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="code-block">
          <div class="code-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-title">index.html</span>
          </div>
          <pre class="code-content"><code>{{ codeExample }}</code></pre>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: var(--space-3xl);
  padding-bottom: var(--space-3xl);
  background: linear-gradient(180deg, var(--color-secondary) 0%, var(--color-gray-100) 100%);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  align-items: center;
}

.hero-text {
  display: flex;
  flex-direction: column;
}

.hero-visual {
  display: flex;
  justify-content: flex-end;
}

.hero-title {
  font-size: var(--font-size-5xl);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: var(--space-md);
}

.text-highlight {
  position: relative;
  display: inline-block;
}

.text-highlight::after {
  content: "";
  position: absolute;
  bottom: 0.1em;
  left: 0;
  right: 0;
  height: 0.3em;
  background-color: var(--color-primary);
  opacity: 0.2;
  z-index: -1;
}

.hero-description {
  font-size: var(--font-size-lg);
  color: var(--color-gray-600);
  max-width: 540px;
  margin-bottom: var(--space-lg);
}

.hero-actions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: var(--space-xl);
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: var(--font-size-2xl);
  font-weight: 800;
  color: var(--color-primary);
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
}

.code-block {
  background-color: var(--color-primary);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  width: 100%;
  max-width: 500px;
}

.code-header {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-sm) var(--space-md);
  background-color: var(--color-gray-900);
  border-bottom: 1px solid var(--color-gray-800);
}

.code-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--color-gray-700);
}

.code-dot:nth-child(1) {
  background-color: #ff5f56;
}
.code-dot:nth-child(2) {
  background-color: #ffbd2e;
}
.code-dot:nth-child(3) {
  background-color: #27ca40;
}

.code-title {
  margin-left: var(--space-sm);
  font-size: var(--font-size-sm);
  color: var(--color-gray-400);
}

.code-content {
  padding: var(--space-lg);
  margin: 0;
  overflow-x: auto;
}

.code-content code {
  font-family: "Fira Code", "Monaco", monospace;
  font-size: var(--font-size-sm);
  color: var(--color-gray-300);
  line-height: 1.7;
  white-space: pre;
}

@media (max-width: 1200px) {
  .hero-content {
    gap: var(--space-xl);
  }
}

@media (max-width: 992px) {
  .hero-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
    text-align: center;
  }

  .hero-text {
    order: 1;
  }

  .hero-visual {
    order: 2;
    justify-content: center;
  }

  .hero-description {
    margin-inline: auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-stats {
    justify-content: center;
    flex-wrap: wrap;
  }
}

@media (max-width: 480px) {
  .hero {
    padding-top: var(--space-lg);
    padding-bottom: var(--space-lg);
  }

  .hero-title {
    font-size: var(--font-size-2xl);
  }

  .hero-description {
    font-size: var(--font-size-sm);
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .hero-stats {
    flex-direction: column;
    gap: var(--space-md);
    width: 100%;
  }

  .stat {
    align-items: center;
  }

  .code-block {
    max-width: 100%;
  }

  .code-content {
    padding: var(--space-sm);
  }
  .code-content code {
    font-size: var(--font-size-md);
  }
}
</style>
