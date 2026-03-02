<script setup>
const testimonials = [
  {
    name: "Sarah Chen",
    role: "Frontend Developer",
    company: "TechCorp",
    content:
      "MOD.io transformed how we distribute our UI components. The CDN is incredibly fast and the analytics help us understand usage patterns.",
    avatar: "👩‍💻",
  },
  {
    name: "Marcus Johnson",
    role: "Full Stack Engineer",
    company: "StartupHub",
    content:
      "The version management is brilliant. We can roll back instantly if something breaks, and our users always get the latest stable version.",
    avatar: "👨‍💻",
  },
  {
    name: "Emily Rodriguez",
    role: "DevOps Lead",
    company: "CloudScale",
    content: "Global distribution is flawless. Our users in Asia get the same speed as those in Europe. The reliability is outstanding.",
    avatar: "👩‍💼",
  },
  {
    name: "David Kim",
    role: "CTO",
    company: "InnovateLabs",
    content: "The real-time analytics are game-changing. We can see which versions are most popular and make data-driven decisions.",
    avatar: "👨‍🎓",
  },
  {
    name: "Lisa Thompson",
    role: "Product Manager",
    company: "DevTools Inc",
    content: "Simple setup, powerful features. Our team was up and running in minutes. The documentation is excellent.",
    avatar: "👩‍🏫",
  },
  {
    name: "James Wilson",
    role: "Software Architect",
    company: "Enterprise Solutions",
    content: "The security features give us peace of mind. SRI hashes and malware scanning are exactly what we need for enterprise clients.",
    avatar: "👨‍💼",
  },
];
</script>

<template>
  <section id="testimonials" class="section section-dark">
    <div class="container">
      <div class="section-header">
        <span class="badge badge-primary">Testimonials</span>
        <h2 class="section-title">Trusted by Developers Worldwide</h2>
        <p class="section-description">See what leading developers and companies say about MOD.io</p>
      </div>
      <div class="testimonials-grid">
        <article v-for="testimonial in testimonials" :key="testimonial.name" class="testimonial-card">
          <div class="testimonial-header">
            <span class="testimonial-avatar" aria-hidden="true">{{ testimonial.avatar }}</span>
            <div class="testimonial-info">
              <h3 class="testimonial-name">{{ testimonial.name }}</h3>
              <p class="testimonial-role">{{ testimonial.role }}</p>
              <p class="testimonial-company">{{ testimonial.company }}</p>
            </div>
          </div>
          <blockquote class="testimonial-content">"{{ testimonial.content }}"</blockquote>
          <div class="testimonial-rating">
            <span class="star">⭐</span>
            <span class="star">⭐</span>
            <span class="star">⭐</span>
            <span class="star">⭐</span>
            <span class="star">⭐</span>
          </div>
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
  color: var(--color-gray-400);
  max-width: 600px;
  margin-inline: auto;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-lg);
}

.testimonial-card {
  background-color: var(--color-gray-900);
  border: 1px solid var(--color-gray-800);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  transition: all var(--transition-md);
  position: relative;
}

.testimonial-card:hover {
  border-color: var(--color-gray-600);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.testimonial-header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.testimonial-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(48px, 3vw, 64px);
  height: clamp(48px, 3vw, 64px);
  font-size: clamp(24px, 1.5vw, 32px);
  background-color: var(--color-gray-800);
  border-radius: var(--radius-lg);
  flex-shrink: 0;
}

.testimonial-info {
  flex: 1;
}

.testimonial-name {
  font-size: var(--font-size-md);
  font-weight: 700;
  color: var(--color-secondary);
  margin-bottom: var(--space-xs);
}

.testimonial-role {
  font-size: var(--font-size-sm);
  color: var(--color-gray-400);
  margin-bottom: var(--space-xs);
}

.testimonial-company {
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
}

.testimonial-content {
  font-size: var(--font-size-md);
  color: var(--color-gray-300);
  line-height: 1.6;
  margin-bottom: var(--space-md);
  font-style: italic;
}

.testimonial-rating {
  display: flex;
  gap: var(--space-xs);
}

.star {
  font-size: var(--font-size-sm);
  color: #fbbf24;
}

@media (max-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}
</style>
