<script setup>
const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Global edge network ensures sub-50ms latency worldwide. Your users get content from the nearest server instantly.",
  },
  {
    icon: "📦",
    title: "Version Control",
    description: "Manage multiple versions of your library with semantic versioning. Users can pin specific versions or use latest.",
  },
  {
    icon: "📊",
    title: "Real-time Analytics",
    description: "Track downloads, bandwidth usage, and geographic distribution. Understand your library's reach and growth.",
  },
  {
    icon: "🔒",
    title: "Secure by Default",
    description: "HTTPS everywhere, SRI hashes for integrity verification, and automatic malware scanning for all uploads.",
  },
  {
    icon: "🚀",
    title: "Easy Integration",
    description: "Simple script tags or npm imports. Works with any framework - Vue, React, Angular, or vanilla JavaScript.",
  },
  {
    icon: "🌐",
    title: "Global CDN",
    description: "50+ edge locations across 6 continents. Automatic failover and intelligent routing for maximum reliability.",
  },
];
</script>

<template>
  <section id="features" class="section">
    <div class="container">
      <div class="section-header">
        <span class="badge badge-secondary">Features</span>
        <h2 class="section-title">Everything You Need</h2>
        <p class="section-description">Powerful tools for library creators and maintainers</p>
      </div>
      <div class="features-grid">
        <article v-for="feature in features" :key="feature.title" class="feature-card">
          <span class="feature-icon" aria-hidden="true">{{ feature.icon }}</span>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: var(--space-2xl);
}

.section-title {
  font-size: var(--font-size-3xl);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: var(--space-sm);
}

.section-description {
  font-size: var(--font-size-lg);
  color: var(--color-gray-500);
  max-width: 600px;
  margin-inline: auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.feature-card {
  padding: var(--space-lg);
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-lg);
  transition: all var(--transition-md);
}

.feature-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(48px, 3vw, 64px);
  height: clamp(48px, 3vw, 64px);
  font-size: clamp(24px, 1.5vw, 32px);
  background-color: var(--color-gray-100);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-md);
}

.feature-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-bottom: var(--space-sm);
}

.feature-description {
  font-size: var(--font-size-md);
  color: var(--color-gray-600);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
