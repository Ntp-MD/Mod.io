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
.testimonials-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap-md);
  margin: 0 auto var(--gap-section);
  padding: var(--gap-lg);
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-item {
  text-align: center;
  padding: var(--gap-md);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap-md);
}

.testimonial-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--gap-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--main-color-8);
  transition: var(--transition-normal);
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  height: 100%;
  position: relative;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.testimonial-quote {
  position: relative;
  padding-left: var(--gap-lg);
  margin-bottom: var(--gap-md);
}

.quote-icon {
  position: absolute;
  top: -10px;
  left: 0;
  font-size: calc(var(--font-xl) * 3);
  color: var(--accent-primary);
  opacity: 0.2;
  line-height: 1;
}

.testimonial-quote blockquote {
  font-size: var(--font-sm);
  line-height: 1.6;
  color: var(--main-color-4);
  margin: 0;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--gap-md);
  margin-top: auto;
}

.author-avatar {
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-emoji {
  font-size: calc(var(--font-xl) * 1.5);
  line-height: 1;
  z-index: 2;
  position: relative;
}

.avatar-ring {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid var(--accent-primary);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.author-info {
  flex-grow: 1;
}

.author-name {
  font-size: var(--font-md);
  font-weight: 600;
  color: var(--main-color-1);
  margin: 0 0 var(--gap-xs) 0;
}

.author-role {
  font-size: var(--font-sm);
  color: var(--main-color-5);
  margin: 0 0 var(--gap-xs) 0;
}

.author-company {
  font-size: var(--font-sm);
  color: var(--accent-primary);
  font-weight: 500;
  margin: 0;
}

.testimonial-rating {
  display: flex;
  gap: var(--gap-xs);
  margin-top: var(--gap-sm);
}

.star {
  font-size: var(--font-sm);
  color: var(--accent-warning);
}

/* Testimonial card variations */
.testimonial-1 {
  border-top: 3px solid var(--accent-primary);
}

.testimonial-2 {
  border-top: 3px solid var(--accent-success);
}

.testimonial-3 {
  border-top: 3px solid var(--accent-warning);
}

.testimonial-4 {
  border-top: 3px solid var(--accent-error);
}

.testimonial-5 {
  border-top: 3px solid var(--main-color-1);
}

.testimonial-6 {
  border-top: 3px solid var(--main-color-2);
}

/* Responsive Design */
@media screen and (max-width: 1200px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .testimonials-stats {
    grid-template-columns: 1fr;
    padding: var(--gap-md);
  }
}

@media screen and (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .testimonial-card {
    padding: var(--gap-md);
  }

  .author-avatar {
    width: 50px;
    height: 50px;
  }

  .avatar-emoji {
    font-size: var(--font-xl);
  }
}

@media screen and (max-width: 480px) {
  .testimonials-stats {
    padding: var(--gap-md);
    gap: var(--gap-sm);
  }

  .testimonial-card {
    padding: var(--gap-sm);
  }

  .testimonial-quote {
    padding-left: var(--gap-md);
  }

  .quote-icon {
    font-size: calc(var(--font-xl) * 2);
  }

  .author-avatar {
    width: 40px;
    height: 40px;
  }

  .avatar-emoji {
    font-size: var(--font-lg);
  }

  .author-name {
    font-size: var(--font-sm);
  }

  .author-role,
  .author-company {
    font-size: var(--font-xs);
  }

  .testimonial-quote blockquote {
    font-size: var(--font-xs);
  }
}
</style>
