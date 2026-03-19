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
        <span class="badge badge-primary">Features</span>
        <h2 class="section-title">Everything You Need</h2>
        <p class="section-description">Powerful tools for library creators and maintainers</p>
      </div>
      <div class="features-grid" screen="6,3,2,1,var(--gap-md)">
        <article v-for="feature in features" :key="feature.title" class="feature-card card-feature card-hover">
          <span class="feature-icon icon-feature icon-hover">{{ feature.icon }}</span>
          <h3 class="feature-title text-primary">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
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
  gap: var(--radius-sm);
  margin-bottom: var(--gap-xs);
}

.section-description {
  font-size: var(--font-md);
  color: var(--main-color-5);
  margin-inline: auto;
  line-height: var(--line-height-base);
}

.feature-card {
  display: flex;
  flex-direction: column;
  gap: var(--radius-sm);
  padding: var(--radius-sm);
  text-align: center;
  container-type: inline-size;
}

.feature-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-lg);
  width: 60px;
  height: 60px;
  margin: 0 auto;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
}

.feature-title {
  font-size: var(--font-lg);
}

.feature-description {
  font-size: var(--font-sm);
  color: var(--main-color-5);
  line-height: var(--line-height-base);
}
</style>
