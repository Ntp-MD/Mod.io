<script setup>
const testimonials = [
  {
    name: "Sarah Chen",
    role: "Lead Engineer",
    company: "TechCorp Global",
    content:
      "MOD.io transformed our library distribution. Sub-20ms latency globally and analytics that actually surface actionable data. Night and day vs. our old CDN.",
    avatar: "SC",
    accentIndex: 0,
  },
  {
    name: "Marcus Johnson",
    role: "Principal Architect",
    company: "StartupHub",
    content:
      "Version management just works. Smart rollbacks, canary deployments — everything we used to script manually is now handled automatically.",
    avatar: "MJ",
    accentIndex: 1,
  },
  {
    name: "Emily Rodriguez",
    role: "VP Engineering",
    company: "CloudScale",
    content:
      "Self-healing infra means our on-call rotation is quieter. Our users in APAC, EU, and US all report identical performance. Reliability is genuinely unmatched.",
    avatar: "ER",
    accentIndex: 2,
  },
  {
    name: "David Kim",
    role: "CTO",
    company: "InnovateLabs AI",
    content:
      "The live analytics dashboard gave us visibility we never had. We identified a latency regression in a library update before users even noticed it.",
    avatar: "DK",
    accentIndex: 0,
  },
  {
    name: "Lisa Thompson",
    role: "Director of Product",
    company: "DevTools Co.",
    content:
      "Production deployment in under 3 minutes. The DX is phenomenal — zero config, intuitive dashboard, and docs that developers actually enjoy reading.",
    avatar: "LT",
    accentIndex: 1,
  },
  {
    name: "James Wilson",
    role: "Enterprise Architect",
    company: "Fortune 500 Inc.",
    content:
      "Zero-trust security and TLS 1.3 out of the box satisfied our compliance team in one meeting. The audit logs are thorough and export cleanly to our SIEM.",
    avatar: "JW",
    accentIndex: 2,
  },
];

const accentColors = ["var(--accent-secondary)", "var(--accent-success)", "var(--accent-warning)"];

const stats = [
  { number: "50M+", label: "Developers", icon: "👥" },
  { number: "99.99%", label: "Satisfaction", icon: "⭐" },
  { number: "180+", label: "Countries", icon: "🌍" },
];

const accentColorMap = {
  0: "primary",
  1: "success",
  2: "warning",
};
</script>

<template>
  <section id="testimonials" class="section section-dark testimonials-section" aria-labelledby="testimonials-title">
    <div class="container">
      <header class="section-header">
        <span class="badge badge-primary" aria-label="Section category">💬 Testimonials</span>
        <h2 class="section-title" id="testimonials-title">What developers say</h2>
        <p class="section-description">Real feedback from teams using MOD.io every day</p>
      </header>

      <!-- Stats showcase -->
      <div class="stats-showcase">
        <div class="stats-grid">
          <div v-for="stat in stats" :key="stat.label" class="stat-card card">
            <div class="stat-icon">{{ stat.icon }}</div>
            <div class="stat-content">
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonials grid -->
      <div class="testimonials-grid" grid="3,2,1,1,var(--gap-lg)">
        <article
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.name"
          class="testimonial-card card"
          :class="`testimonial-card--${accentColors[testimonial.accentIndex]}`"
        >
          <div class="testimonial-content">
            <div class="testimonial-rating">
              <span v-for="i in 5" :key="i" class="rating-star">⭐</span>
            </div>

            <blockquote class="testimonial-quote">
              <p>{{ testimonial.content }}</p>
            </blockquote>

            <div class="testimonial-author">
              <div class="author-avatar">{{ testimonial.avatar }}</div>
              <div class="author-info">
                <div class="author-name">{{ testimonial.name }}</div>
                <div class="author-role">{{ testimonial.role }}</div>
                <div class="author-company">{{ testimonial.company }}</div>
              </div>
            </div>
          </div>

          <div class="testimonial-decoration"></div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Stats Showcase */
.stats-showcase {
  margin: 0 0 var(--gap-section);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap-md);
  max-width: 800px;
  margin: 0 auto;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  background: var(--main-color-8);
  border: 1px solid var(--main-color-8);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(10px);
  transition: var(--transition-normal);
}

.stat-card:hover {
  transform: translateY(-2px);
  background: var(--main-color-7);
  border-color: var(--main-color-6);
}

.stat-icon {
  font-size: var(--font-xl);
  opacity: 0.8;
}

.stat-content {
  flex: 1;
}

.stat-number {
  font-size: var(--font-lg);
  font-weight: 700;
  color: var(--color-white);
  line-height: 1;
  margin-bottom: 2px;
}

.stat-label {
  font-size: var(--font-xs);
  color: var(--main-color-6);
  text-transform: uppercase;
  letter-spacing: 0.05px;
}

/* Testimonials Grid */
.testimonials-grid {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Testimonial Card */
.testimonial-card {
  position: relative;
  background: var(--main-color-8);
  border: 1px solid var(--main-color-8);
  border-radius: var(--radius-xl);
  transition: var(--transition-normal);
  overflow: hidden;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  border-color: var(--main-color-6);
  box-shadow: var(--shadow-xl);
}

.testimonial-card--primary {
  border-top: 3px solid var(--accent-primary);
}

.testimonial-card--success {
  border-top: 3px solid var(--accent-success);
}

.testimonial-card--warning {
  border-top: 3px solid var(--accent-warning);
}

.testimonial-content {
  position: relative;
  z-index: 2;
}

.testimonial-rating {
  margin-bottom: var(--gap-md);
}

.rating-star {
  font-size: var(--font-sm);
  color: var(--accent-warning);
  margin-right: 2px;
}

.testimonial-quote {
  margin: 0 0 var(--gap-lg);
}

.testimonial-quote p {
  font-size: var(--font-md);
  line-height: 1.6;
  color: var(--main-color-6);
  margin: 0;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--gap-md);
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  background: var(--main-color-8);
  border: 2px solid var(--main-color-8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-sm);
  font-weight: 700;
  color: var(--color-white);
  flex-shrink: 0;
}

.author-info {
  flex: 1;
}

.author-name {
  font-size: var(--font-md);
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 2px;
}

.author-role {
  font-size: var(--font-sm);
  color: var(--main-color-6);
  margin-bottom: 2px;
}

.author-company {
  font-size: var(--font-sm);
  color: var(--main-color-5);
}

.testimonial-decoration {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, var(--main-color-8) 0%, transparent 70%);
  pointer-events: none;
}

/* Responsive */
@media screen and (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: var(--gap-sm);
  }

  .testimonial-author {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--gap-sm);
  }
}
</style>
