<script setup>
const testimonials = [
  {
    name: "Sarah Chen",
    role: "Lead Innovation Engineer",
    company: "TechCorp Global",
    content:
      "MOD.io revolutionized our component distribution strategy. The intelligent edge network delivers sub-20ms latency globally, and the AI-powered analytics provide unprecedented insights.",
    avatar: "👩‍💻",
  },
  {
    name: "Marcus Johnson",
    role: "Principal Architect",
    company: "StartupHub Ventures",
    content:
      "The agentic version management is extraordinary. Intelligent rollback capabilities and predictive deployment ensure our users always receive optimal builds.",
    avatar: "👨‍💻",
  },
  {
    name: "Emily Rodriguez",
    role: "VP of Engineering",
    company: "CloudScale Systems",
    content:
      "Supreme global distribution with self-healing infrastructure. Our users worldwide experience identical performance. The reliability is unmatched in the industry.",
    avatar: "👩‍💼",
  },
  {
    name: "David Kim",
    role: "Chief Technology Officer",
    company: "InnovateLabs AI",
    content:
      "The predictive analytics intelligence is transformative. Machine learning-powered insights enable data-driven decisions that accelerate our innovation cycle.",
    avatar: "👨‍🎓",
  },
  {
    name: "Lisa Thompson",
    role: "Director of Product",
    company: "DevTools Innovation",
    content:
      "Zero-configuration deployment with supreme features. Our engineering team achieved production deployment in under 3 minutes. The documentation is world-class.",
    avatar: "👩‍🏫",
  },
  {
    name: "James Wilson",
    role: "Enterprise Architect",
    company: "Fortune 500 Solutions",
    content:
      "Military-grade security with blockchain-verified integrity. The zero-trust architecture and automated threat detection exceed enterprise compliance requirements.",
    avatar: "👨‍💼",
  },
];
</script>

<template>
  <section id="testimonials" class="section section-dark">
    <div class="container">
      <div class="section-header">
        <span class="badge badge-primary">💬 Innovation Voices</span>
        <h2 class="section-title">Trusted by Elite Developers Globally</h2>
        <p class="section-description">Discover why industry leaders choose our supreme platform</p>
      </div>

      <!-- Stats Bar -->
      <div class="testimonials-stats">
        <div class="stat-item">
          <div class="stat-number">50M+</div>
          <div class="stat-label">Empowered Developers</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">99.99%</div>
          <div class="stat-label">Supreme Satisfaction</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">180+</div>
          <div class="stat-label">Global Nations</div>
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
