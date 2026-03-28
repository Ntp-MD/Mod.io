<script setup>
const testimonials = [
  {
    name: "Sarah Chen",
    role: "Lead Engineer",
    company: "TechCorp Global",
    content:
      "MOD.io transformed our library distribution. Sub-20ms latency globally and analytics that actually surface actionable data. Night and day vs. our old CDN.",
    avatar: "SC",
    accentClass: "accent-secondary",
  },
  {
    name: "Marcus Johnson",
    role: "Principal Architect",
    company: "StartupHub",
    content:
      "Version management just works. Smart rollbacks, canary deployments — everything we used to script manually is now handled automatically.",
    avatar: "MJ",
    accentClass: "accent-success",
  },
  {
    name: "Emily Rodriguez",
    role: "VP Engineering",
    company: "CloudScale",
    content:
      "Self-healing infra means our on-call rotation is quieter. Our users in APAC, EU, and US all report identical performance. Reliability is genuinely unmatched.",
    avatar: "ER",
    accentClass: "accent-warning",
  },
  {
    name: "David Kim",
    role: "CTO",
    company: "InnovateLabs AI",
    content:
      "The live analytics dashboard gave us visibility we never had. We identified a latency regression in a library update before users even noticed it.",
    avatar: "DK",
    accentClass: "accent-secondary",
  },
  {
    name: "Lisa Thompson",
    role: "Director of Product",
    company: "DevTools Co.",
    content:
      "Production deployment in under 3 minutes. The DX is phenomenal — zero config, intuitive dashboard, and docs that developers actually enjoy reading.",
    avatar: "LT",
    accentClass: "accent-success",
  },
  {
    name: "James Wilson",
    role: "Enterprise Architect",
    company: "Fortune 500 Inc.",
    content:
      "Zero-trust security and TLS 1.3 out of the box satisfied our compliance team in one meeting. The audit logs are thorough and export cleanly to our SIEM.",
    avatar: "JW",
    accentClass: "accent-warning",
  },
];

const stats = [
  { number: "50M+", label: "Developers", icon: "👥" },
  { number: "99.99%", label: "Satisfaction", icon: "⭐" },
  { number: "180+", label: "Countries", icon: "🌍" },
];
</script>

<template>
  <section id="testimonials" class="testimonials-modern" aria-labelledby="testimonials-title">
    <div class="container">
      <header class="section-header">
        <span class="badge badge-primary">💬 Testimonials</span>
        <h2 class="section-title" id="testimonials-title">Loved by developers</h2>
        <p class="section-description">See what teams are saying about MOD.io</p>
      </header>

      <!-- Stats Row -->
      <div class="stats-row">
        <div v-for="stat in stats" :key="stat.label" class="stat-pill" data-hover="scale">
          <span class="stat-icon">{{ stat.icon }}</span>
          <div class="stat-info">
            <span class="stat-number">{{ stat.number }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <!-- Testimonials Masonry Grid -->
      <div class="testimonials-masonry">
        <article
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.name"
          class="testimonial-card-modern"
          :class="[testimonial.accentClass, { 'card-large': index === 0 || index === 3 }]"
          data-hover="lift"
        >
          <div class="card-glow"></div>

          <div class="testimonial-header">
            <div class="author-row">
              <div class="author-avatar-modern">{{ testimonial.avatar }}</div>
              <div class="author-details">
                <span class="author-name">{{ testimonial.name }}</span>
                <span class="author-role">{{ testimonial.role }}</span>
              </div>
            </div>
            <div class="company-badge">{{ testimonial.company }}</div>
          </div>

          <div class="testimonial-rating-modern">
            <span v-for="i in 5" :key="i" class="star">★</span>
          </div>

          <blockquote class="testimonial-quote-modern">
            <p>"{{ testimonial.content }}"</p>
          </blockquote>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Testimonials Section - Modern Masonry */
.testimonials-modern {
  background: var(--main-color-1);
  padding: var(--gap-section) 0;
  position: relative;
  overflow: hidden;
}

.testimonials-modern::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(ellipse at 70% 20%, rgba(127, 44, 134, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse at 30% 80%, rgba(0, 214, 79, 0.08) 0%, transparent 50%);
  pointer-events: none;
}

/* Section Header */
.section-header-modern {
  text-align: center;
  margin-bottom: var(--gap-xl);
  position: relative;
  z-index: 1;
}

.section-tag {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(234, 88, 12, 0.15);
  border: 1px solid rgba(234, 88, 12, 0.3);
  border-radius: var(--radius-full);
  font-size: var(--font-xs);
  font-weight: 600;
  color: var(--accent-warning);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--gap-md);
}

.section-title-modern {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--color-white);
  margin: 0 0 var(--gap-sm);
  letter-spacing: -0.02em;
}

.section-description-modern {
  font-size: var(--font-lg);
  color: var(--main-color-6);
  margin: 0;
}

/* Stats Row */
.stats-row {
  display: flex;
  justify-content: center;
  gap: var(--gap-lg);
  margin-bottom: var(--gap-xl);
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.stat-pill {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-full);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.stat-pill:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.12);
  transform: scale(1.05);
}

.stat-icon {
  font-size: var(--font-xl);
  line-height: 1;
}

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: var(--font-lg);
  font-weight: 700;
  color: var(--color-white);
  line-height: 1;
}

.stat-label {
  font-size: var(--font-xs);
  color: var(--main-color-5);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Testimonials Masonry */
.testimonials-masonry {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap-lg);
  position: relative;
  z-index: 1;
}

@media (max-width: 1023px) {
  .testimonials-masonry {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .testimonials-masonry {
    grid-template-columns: 1fr;
  }
}

/* Testimonial Card */
.testimonial-card-modern {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-lg);
  padding: var(--gap-lg);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
}

.testimonial-card-modern:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-large {
  grid-row: span 2;
}

.card-glow {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(127, 44, 134, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.testimonial-card-modern:hover .card-glow {
  opacity: 1;
}

/* Accent Variants */
.testimonial-card-modern.accent-secondary {
  border-color: rgba(127, 44, 134, 0.2);
}

.testimonial-card-modern.accent-secondary:hover {
  border-color: rgba(127, 44, 134, 0.4);
  box-shadow: 0 20px 40px rgba(127, 44, 134, 0.15);
}

.testimonial-card-modern.accent-success {
  border-color: rgba(0, 214, 79, 0.2);
}

.testimonial-card-modern.accent-success:hover {
  border-color: rgba(0, 214, 79, 0.4);
  box-shadow: 0 20px 40px rgba(0, 214, 79, 0.15);
}

.testimonial-card-modern.accent-warning {
  border-color: rgba(234, 88, 12, 0.2);
}

.testimonial-card-modern.accent-warning:hover {
  border-color: rgba(234, 88, 12, 0.4);
  box-shadow: 0 20px 40px rgba(234, 88, 12, 0.15);
}

/* Testimonial Header */
.testimonial-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--gap-md);
  gap: var(--gap-sm);
}

.author-row {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
}

.author-avatar-modern {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--main-color-3) 0%, var(--main-color-4) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-xs);
  font-weight: 700;
  color: var(--color-white);
  flex-shrink: 0;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.author-details {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-size: var(--font-sm);
  font-weight: 600;
  color: var(--color-white);
  line-height: 1.3;
}

.author-role {
  font-size: var(--font-xs);
  color: var(--main-color-5);
}

.company-badge {
  padding: 3px 10px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-full);
  font-size: 11px;
  color: var(--main-color-6);
  white-space: nowrap;
}

/* Rating */
.testimonial-rating-modern {
  margin-bottom: var(--gap-sm);
}

.star {
  color: var(--accent-warning);
  font-size: var(--font-sm);
  margin-right: 2px;
}

/* Quote */
.testimonial-quote-modern {
  margin: 0;
  flex: 1;
}

.testimonial-quote-modern p {
  font-size: var(--font-sm);
  line-height: 1.7;
  color: var(--main-color-6);
  margin: 0;
}

.card-large .testimonial-quote-modern p {
  font-size: var(--font-md);
}

/* Responsive */
@media (max-width: 640px) {
  .stats-row {
    flex-direction: column;
    gap: var(--gap-md);
  }

  .card-large {
    grid-row: span 1;
  }
  .testimonial-header {
    flex-direction: column;
  }

  .company-badge {
    align-self: flex-start;
  }
}
</style>
