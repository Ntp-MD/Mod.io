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

      <!-- Stats Bar -->
      <div class="testimonials-stats">
        <div class="stat-item">
          <div class="stat-number">10M+</div>
          <div class="stat-label">Happy Developers</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">99.9%</div>
          <div class="stat-label">Satisfaction Rate</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">150+</div>
          <div class="stat-label">Countries</div>
        </div>
      </div>

      <!-- Testimonials Grid -->
      <div class="testimonials-grid" large="3" medium="2" semi="2" small="1" gap="var(--gap-md)">
        <article v-for="(testimonial, index) in testimonials" :key="testimonial.name" class="testimonial-card" :class="`testimonial-${index + 1}`">
          <div class="testimonial-quote">
            <span class="quote-icon">"</span>
            <blockquote>{{ testimonial.content }}</blockquote>
          </div>

          <div class="testimonial-author">
            <div class="author-avatar">
              <span class="avatar-emoji">{{ testimonial.avatar }}</span>
              <div class="avatar-ring"></div>
            </div>
            <div class="author-info">
              <h3 class="author-name">{{ testimonial.name }}</h3>
              <p class="author-role">{{ testimonial.role }}</p>
              <p class="author-company">{{ testimonial.company }}</p>
            </div>
          </div>

          <div class="testimonial-rating">
            <span v-for="i in 5" :key="i" class="star">⭐</span>
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
  gap: var(--gap-sm);
  margin-bottom: var(--gap-xl);
}

.section-description {
  font-size: var(--font-md);
  color: var(--main-color-7);
  margin-inline: auto;
  line-height: var(--line-height-base);
}

/* Stats Bar */
.testimonials-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap-lg);
  margin-bottom: var(--gap-xl);
  padding: var(--gap-lg);
  background: linear-gradient(135deg, var(--main-color-3), var(--main-color-2));
  border-radius: var(--radius-lg);
  border: 1px solid var(--main-color-4);
}

.stat-item {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--gap-xs);
}

.stat-number {
  font-size: var(--font-xl);
  font-weight: 800;
  line-height: 1;
}

.stat-label {
  font-size: var(--font-sm);
  color: var(--main-color-6);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-tight);
}

/* Testimonial Cards */
.testimonial-card {
  padding: var(--gap-lg);
  background-color: var(--main-color-2);
  border: 1px solid var(--main-color-3);
  border-radius: var(--radius-lg);
  transition: var(--transition-normal);
  text-align: center;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
}

.testimonial-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--main-color-5));
  transform: scaleX(0);
  transform-origin: left;
  transition: var(--transition-normal);
}

.testimonial-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.testimonial-card:hover::before {
  transform: scaleX(1);
}

.testimonial-quote {
  position: relative;
  padding: 0 var(--gap-md);
}

.quote-icon {
  position: absolute;
  top: -10px;
  left: 0;
  font-size: 3rem;
  color: var(--main-color-7);
  opacity: 0.6;
  font-family: Georgia, serif;
}

.testimonial-quote blockquote {
  font-size: var(--font-md);
  color: var(--main-color-7);
  line-height: var(--line-height-base);
  font-style: italic;
  margin: 0;
  position: relative;
  z-index: 1;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--gap-md);
  padding-top: var(--gap-md);
  border-top: 1px solid var(--main-color-3);
}

.author-avatar {
  position: relative;
  flex-shrink: 0;
}

.avatar-emoji {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--color-primary), var(--main-color-4));
  border-radius: var(--radius-circle);
  font-size: var(--font-xl);
  filter: grayscale(1) brightness(2);
  transition: var(--transition-normal);
}

.avatar-ring {
  position: absolute;
  inset: -3px;
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-circle);
  opacity: 0;
  transform: scale(0.8);
  transition: var(--transition-normal);
}

.testimonial-card:hover .avatar-emoji {
  transform: scale(1.05);
  filter: none;
}

.testimonial-card:hover .avatar-ring {
  opacity: 1;
  transform: scale(1);
}

.author-info {
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: var(--gap-xs);
}

.author-name {
  color: var(--main-white);
  font-size: var(--font-lg);
  font-weight: 600;
}

.author-role {
  font-size: var(--font-sm);
  color: var(--main-color-6);
}

.author-company {
  font-size: var(--font-sm);
  color: var(--main-color-5);
}

.testimonial-rating {
  display: flex;
  justify-content: center;
  gap: var(--gap-xs);
  margin-top: auto;
}

.star {
  font-size: var(--font-sm);
  color: var(--main-color-5);
  transition: var(--transition-normal);
}

.testimonial-card:hover .star {
  color: var(--color-primary);
  transform: scale(1.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .testimonials-stats {
    grid-template-columns: 1fr;
    gap: var(--gap-md);
    padding: var(--gap-md);
  }

  .testimonial-author {
    flex-direction: column;
    text-align: center;
    gap: var(--gap-sm);
  }

  .author-info {
    text-align: center;
  }

  .testimonial-quote {
    padding: 0;
  }

  .quote-icon {
    position: static;
    margin-bottom: var(--gap-sm);
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .testimonial-card {
    padding: var(--gap-md);
    gap: var(--gap-md);
  }

  .avatar-emoji {
    width: 50px;
    height: 50px;
    font-size: var(--font-lg);
  }

  .testimonial-quote blockquote {
    font-size: var(--font-sm);
  }

  .stat-number {
    font-size: var(--font-lg);
  }
}
</style>
