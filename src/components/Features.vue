<script setup>
import { ref, onMounted } from "vue";

const features = ref([
  {
    icon: "⚡",
    title: "Supreme Performance",
    description:
      "Intelligent edge network delivers sub-20ms latency globally. Agentic routing ensures optimal content delivery from the nearest node.",
  },
  {
    icon: "🧠",
    title: "Intelligent Versioning",
    description: "AI-powered semantic versioning with automatic dependency resolution. Smart rollback and canary deployment capabilities.",
  },
  {
    icon: "📊",
    title: "Analytics Intelligence",
    description: "Real-time insights with predictive analytics. Machine learning-powered usage patterns and growth forecasting.",
  },
  {
    icon: "🛡️",
    title: "Zero-Trust Security",
    description: "Military-grade encryption, automated threat detection, and blockchain-verified integrity for supreme protection.",
  },
  {
    icon: "🚀",
    title: "Seamless Integration",
    description: "Framework-agnostic deployment with intelligent auto-configuration. Works with Vue, React, Angular, Svelte, or vanilla JS.",
  },
  {
    icon: "🌐",
    title: "Global Intelligence",
    description: "150+ edge locations with AI-driven failover. Self-healing infrastructure and predictive scaling for maximum reliability.",
  },
]);

const isVisible = ref(false);

onMounted(() => {
  // Intersection Observer for performance
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      });
    },
    { threshold: 0.1 },
  );

  // Observe the section when component is mounted
  setTimeout(() => {
    const section = document.querySelector(".features-grid");
    if (section) observer.observe(section);
  }, 100);
});
</script>

<template>
  <section id="features" class="section" role="region" aria-label="MOD.io Features">
    <div class="container">
      <header class="section-header">
        <span class="badge badge-primary" role="status" aria-label="Featured category">
          <span aria-hidden="true">🎯</span>
          <span>Innovation Showcase</span>
        </span>
        <h2 class="section-title">Supreme Technology Stack</h2>
        <p class="section-description">Agentic tools engineered for modern developers and innovators</p>
      </header>

      <div class="features-grid">
        <article
          v-for="(feature, index) in features"
          :key="feature.title"
          class="feature-card"
          :class="{ 'feature-visible': isVisible }"
          :style="{ animationDelay: `${index * 0.1}s` }"
          role="article"
          aria-labelledby="feature-title-${index}"
        >
          <div class="feature-icon-wrapper">
            <span class="feature-icon" :aria-hidden="true">{{ feature.icon }}</span>
          </div>
          <h3 class="feature-title text-primary" :id="`feature-title-${index}`">
            {{ feature.title }}
          </h3>
          <p class="feature-description">{{ feature.description }}</p>
          <div class="feature-cta">
            <span class="cta-text" aria-hidden="true">Learn more →</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Base: Mobile Styles (320px+) */
.section {
  padding: var(--gap-lg) 0;
  background: linear-gradient(180deg, var(--color-white) 0%, var(--main-color-9) 100%);
}

.section-header {
  text-align: center;
  margin-bottom: calc(var(--gap-xl) * 1.5);
  padding: 0 var(--gap-md);
}

.section-title {
  font-size: calc(var(--font-xl) * 1.8);
  font-weight: 700;
  line-height: 1.1;
  margin: 0 0 var(--gap-md) 0;
  color: var(--main-color-1);
}

.section-description {
  font-size: var(--font-md);
  line-height: 1.6;
  margin: 0;
  color: var(--main-color-5);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--gap-lg);
  padding: 0 var(--gap-md);
}

.feature-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--gap-lg);
  border: 1px solid var(--main-color-8);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  height: 100%;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
}

.feature-visible {
  opacity: 1;
  transform: translateY(0);
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.feature-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: var(--accent-primary);
}

.feature-icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: calc(var(--font-xl) * 2.5);
  height: calc(var(--font-xl) * 2.5);
  background: linear-gradient(135deg, var(--accent-primary), var(--main-color-1));
  border-radius: var(--radius-md);
  position: relative;
  overflow: hidden;
}

.feature-icon-wrapper::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  transition: transform 0.6s ease;
}

.feature-card:hover .feature-icon-wrapper::after {
  transform: rotate(45deg) translate(100%, 100%);
}

.feature-icon {
  font-size: calc(var(--font-xl) * 1.2);
  line-height: 1;
  color: var(--color-white);
  position: relative;
  z-index: 1;
}

.feature-title {
  font-size: var(--font-lg);
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
  color: var(--main-color-1);
  transition: color 0.3s ease;
}

.feature-card:hover .feature-title {
  color: var(--accent-primary);
}

.text-primary {
  color: var(--main-color-1);
}

.feature-description {
  font-size: var(--font-sm);
  line-height: 1.5;
  color: var(--main-color-5);
  margin: 0;
  flex-grow: 1;
}

.feature-cta {
  margin-top: var(--gap-sm);
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.feature-card:hover .feature-cta {
  opacity: 1;
  transform: translateX(0);
}

.cta-text {
  font-size: var(--font-sm);
  font-weight: 500;
  color: var(--accent-primary);
  display: inline-flex;
  align-items: center;
  gap: var(--gap-xs);
}

/* Enhancement: Tablet (768px+) */
@media (min-width: 768px) {
  .section {
    padding: var(--gap-xl) 0;
  }

  .section-header {
    margin-bottom: calc(var(--gap-xl) * 2);
    padding: 0 var(--gap-lg);
  }

  .section-title {
    font-size: calc(var(--font-xl) * 2.2);
  }

  .section-description {
    font-size: var(--font-lg);
    max-width: 600px;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--gap-xl);
    padding: 0 var(--gap-lg);
  }

  .feature-card {
    padding: calc(var(--gap-lg) * 1.2);
  }

  .feature-icon-wrapper {
    width: calc(var(--font-xl) * 3);
    height: calc(var(--font-xl) * 3);
  }

  .feature-icon {
    font-size: calc(var(--font-xl) * 1.5);
  }
}

/* Enhancement: Desktop (1200px+) */
@media (min-width: 1200px) {
  .section {
    padding: calc(var(--gap-section) * 1.2) 0;
  }

  .section-header {
    margin-bottom: calc(var(--gap-section) * 1.5);
    padding: 0;
  }

  .section-title {
    font-size: calc(var(--font-xl) * 2.8);
  }

  .section-description {
    font-size: calc(var(--font-lg) * 1.1);
    max-width: 700px;
  }

  .features-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: calc(var(--gap-xl) * 1.5);
    padding: 0;
  }

  .feature-card {
    padding: calc(var(--gap-lg) * 1.5);
    min-height: 320px;
  }

  .feature-card:hover {
    transform: translateY(-12px);
  }

  .feature-icon-wrapper {
    width: calc(var(--font-xl) * 3.5);
    height: calc(var(--font-xl) * 3.5);
  }

  .feature-icon {
    font-size: calc(var(--font-xl) * 1.8);
  }

  .feature-title {
    font-size: calc(var(--font-lg) * 1.1);
  }

  .feature-description {
    font-size: var(--font-md);
  }
}

/* Performance optimizations */
.feature-card {
  will-change: transform, opacity;
}

.feature-icon-wrapper {
  will-change: transform;
}

/* Accessibility improvements */
.feature-card:focus-within {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

.feature-card:focus-within .feature-title {
  color: var(--accent-primary);
}

@media (prefers-reduced-motion: reduce) {
  .feature-card,
  .feature-icon-wrapper,
  .feature-card::before,
  .feature-cta {
    animation: none;
    transition: none;
  }

  .feature-card:hover {
    transform: none;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .feature-card {
    border-width: 2px;
  }

  .feature-card::before {
    height: 4px;
  }
}
</style>
