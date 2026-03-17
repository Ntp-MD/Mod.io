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
      <div class="testimonials-grid" large="3" medium="2" semi="2" small="1" gap="var(--space-md)">
        <article v-for="testimonial in testimonials" :key="testimonial.name" class="testimonial-card">
          <div class="testimonial-header">
            <div class="testimonial-avatar">
              <span class="avatar-emoji">{{ testimonial.avatar }}</span>
            </div>
            <div class="testimonial-info">
              <h3 class="testimonial-name">{{ testimonial.name }}</h3>
              <p class="testimonial-role">{{ testimonial.role }}</p>
              <p class="testimonial-company">{{ testimonial.company }}</p>
            </div>
          </div>
          <div class="testimonial-content">
            <blockquote>{{ testimonial.content }}</blockquote>
          </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
}

.section-description {
  font-size: var(--font-size-md);
  color: var(--color-gray-400);
  max-width: 600px;
  margin-inline: auto;
  line-height: var(--line-height-base);
}

.testimonial-card {
  padding: var(--space-lg);
  background-color: var(--color-gray-900);
  border: 1px solid var(--color-gray-800);
  border-radius: var(--radius-3);
  transition: all var(--transition-md);
  text-align: center;
}

.testimonial-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.testimonial-header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.testimonial-avatar {
  width: 50px;
  height: 50px;
  background-color: var(--color-primary);
  border-radius: var(--radius-circle);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all var(--transition-md);
}

.testimonial-card:hover .testimonial-avatar {
  transform: scale(1.1);
}

.avatar-emoji {
  font-size: var(--font-size-lg);
  filter: grayscale(1) brightness(2);
}

.testimonial-info {
  flex: 1;
}

.testimonial-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.testimonial-name {
  color: var(--color-secondary);
}

.testimonial-role {
  font-size: var(--font-size-sm);
  color: var(--color-gray-400);
}

.testimonial-company {
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
}

.testimonial-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.testimonial-content blockquote {
  font-size: var(--font-size-sm);
  color: var(--color-gray-300);
  line-height: var(--line-height-base);
  font-style: italic;
  margin: 0;
}

.testimonial-rating {
  display: flex;
  justify-content: center;
  gap: var(--space-xs);
  margin-top: var(--space-md);
}

.star {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  transition: all var(--transition-md);
}

.testimonial-card:hover .star {
  transform: scale(1.2);
}
</style>
