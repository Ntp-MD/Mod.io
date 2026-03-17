<script setup>
const codeExample = `<script src="https://cdn.mod.io/library/latest.min.js"><\/script>

MOD.init({
  project: 'your-project-id',
  version: '1.0.0'
});`;
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge badge-primary">CDN Library Creator</span>
          </div>
          <h1 class="hero-title">Deliver Your Libraries Faster</h1>
          <p>
            MOD.io is a modern CDN platform designed for library creators. Upload once, deliver globally with lightning-fast performance, version
            management, and real-time analytics.
          </p>
          <div class="hero-actions">
            <a href="#get-started" class="btn btn-primary"> Start Free </a>
            <a href="#docs" class="btn btn-secondary"> View Docs </a>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <div class="stat-number">10M+</div>
              <div class="stat-label">Daily Requests</div>
            </div>
            <div class="stat">
              <div class="stat-number">99.9%</div>
              <div class="stat-label">Uptime</div>
            </div>
            <div class="stat">
              <div class="stat-number">50+</div>
              <div class="stat-label">Edge Locations</div>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="code-preview">
            <div class="code-header">
              <div class="code-controls">
                <span class="code-dot dot-red"></span>
                <span class="code-dot dot-yellow"></span>
                <span class="code-dot dot-green"></span>
              </div>
              <span class="code-title">index.html</span>
            </div>
            <div class="code-content">
              <pre><code>{{ codeExample }}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: var(--space-xl) 0;
  background: var(--color-secondary);
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.hero-grid {
  display: grid;
  grid-template-columns: 55% 1fr;
  gap: var(--space-lg);
}

.hero-content {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.hero-title {
  line-height: 1.1;
}

.hero-actions {
  display: flex;
  gap: var(--space-sm);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}

.stat {
  display: grid;
  text-align: center;
  gap: var(--space-xs);
  transition: all var(--transition-md);
}

.stat-number {
  font-size: var(--font-size-md);
  font-weight: 800;
  color: var(--color-primary);
}

.stat-label {
  font-size: var(--font-size-xs);
  color: var(--color-gray-500);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.code-preview {
  background-color: var(--color-primary);
  border-radius: var(--radius-3);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  width: stretch;
  transition: all var(--transition-md);
}

.code-preview:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-sm) var(--space-md);
  background-color: var(--color-gray-900);
  border-bottom: 1px solid var(--color-gray-800);
}

.code-controls {
  display: flex;
  gap: var(--space-xs);
}

.code-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot-red {
  background-color: #ff5f56;
}

.dot-yellow {
  background-color: #ffbd2e;
}

.dot-green {
  background-color: #27ca40;
}

.code-title {
  font-size: var(--font-size-xs);
  color: var(--color-gray-400);
}

.code-content {
  padding: var(--space-lg);
  margin: 0;
  overflow-x: auto;
  background-color: var(--color-gray-900);
}

.code-content pre {
  margin: 0;
}

.code-content code {
  font-family: "Fira Code", "Monaco", monospace;
  font-size: var(--font-size-xs);
  color: var(--color-gray-300);
  line-height: var(--line-height-base);
  white-space: pre;
}

@media (max-width: 1200px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
}

@media (max-width: 992px) {
  .hero-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
    text-align: center;
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
    padding-top: var(--space-md);
    padding-bottom: var(--space-md);
  }

  .hero-title {
    font-size: var(--font-size-lg);
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

  .code-content {
    padding: var(--space-sm);
  }
  .code-content code {
    font-size: var(--font-size-xs);
  }
}
</style>
