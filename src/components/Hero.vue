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
      <div class="hero-grid" grid="2,2,1,1,var(--gap-md)">
        <div class="hero-content" grid="1,var(--gap-md)">
          <div class="hero-badge">
            <span class="badge badge-accent">⚡ CDN Innovation</span>
          </div>
          <h1 class="hero-title">Intelligent Library Distribution at Scale</h1>
          <p>
            MOD.io is an agentic CDN platform engineered for modern developers. Deploy once, distribute globally with supreme performance
            optimization, intelligent version control, and real-time analytics intelligence.
          </p>
          <div class="hero-actions">
            <a href="#get-started" class="btn btn-primary">🚀 Deploy Now</a>
            <a href="#docs" class="btn btn-secondary">📚 Explore Innovation</a>
          </div>
          <div class="hero-stats" grid="3,3,3,1,var(--gap-md)">
            <div class="stat" grid="1,var(--gap-xs)">
              <div class="stat-number">100M+</div>
              <div class="stat-label">Intelligent Requests</div>
            </div>
            <div class="stat" grid="1,var(--gap-xs)">
              <div class="stat-number">99.99%</div>
              <div class="stat-label">Supreme Uptime</div>
            </div>
            <div class="stat" grid="1,var(--gap-xs)">
              <div class="stat-number">150+</div>
              <div class="stat-label">Global Edge Nodes</div>
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
  background: linear-gradient(135deg, var(--main-color-9) 0%, var(--color-white) 100%);
  padding: var(--gap-section) 0;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(0, 105, 217, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(0, 214, 79, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.hero-grid {
  position: relative;
  z-index: 1;
}

.hero-content {
  position: relative;
}

.hero-badge {
  margin-bottom: var(--gap-sm);
}

.hero-title {
  font-size: calc(var(--font-xl) * 2.5);
  font-weight: 700;
  line-height: 1.1;
  margin: 0;
  color: var(--main-color-1);
  background: linear-gradient(135deg, var(--main-color-1) 0%, var(--accent-primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-content p {
  font-size: var(--font-lg);
  line-height: 1.6;
  color: var(--main-color-5);
  margin: 0;
}

.hero-actions {
  display: flex;
  gap: var(--gap-md);
  flex-wrap: wrap;
}

.hero-stats {
  margin-top: var(--gap-lg);
}

.stat {
  position: relative;
}

.stat:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.stat-number {
  font-size: calc(var(--font-lg) * 1.5);
  font-weight: 700;
  color: var(--accent-primary);
  margin-bottom: var(--gap-xs);
}

.stat-label {
  color: var(--main-color-6);
  text-transform: uppercase;
  font-size: var(--font-xs);
  font-weight: 500;
  letter-spacing: 0.05em;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.code-preview {
  background: var(--main-color-2);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  width: 100%;
  transform: perspective(1000px) rotateY(-5deg);
  transition: var(--transition-normal);
}

.code-preview:hover {
  transform: perspective(1000px) rotateY(0deg);
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
  min-height: 300px;
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

/* Responsive Design */
@media screen and (max-width: 992px) {
  .hero {
    padding: var(--gap-lg) 0;
  }

  .hero-visual {
    justify-self: stretch;
  }
}

@media screen and (max-width: 480px) {
  .hero-actions {
    flex-direction: column;
  }

  .hero {
    padding: var(--gap-md) 0;
  }

  .code-content {
    padding: var(--gap-sm);
    min-height: 200px;
  }
}
</style>
