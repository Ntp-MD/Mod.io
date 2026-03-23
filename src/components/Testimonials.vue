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
  { number: "50M+", label: "Developers" },
  { number: "99.99%", label: "Satisfaction" },
  { number: "180+", label: "Countries" },
];
</script>

<template>
  <section id="testimonials" class="section section-light" aria-labelledby="testimonials-title">
    <div class="container">
      <header class="section-header">
        <span class="badge badge-primary" aria-label="Section category">💬 Testimonials</span>
        <h2 class="section-title" id="testimonials-title">Trusted by developers worldwide</h2>
        <p class="section-description">From solo hackers to Fortune 500 infrastructure teams</p>
      </header>

      <!-- Stats bar -->
      <dl class="testi-stats" aria-label="Platform statistics">
        <div v-for="stat in stats" :key="stat.label" class="testi-stat">
          <dd class="testi-stat-number">{{ stat.number }}</dd>
          <dt class="testi-stat-label">{{ stat.label }}</dt>
        </div>
      </dl>

      <!-- Grid -->
      <ul class="testi-grid" grid="3,2,1,1,var(--gap-md)" role="list">
        <li v-for="(t, index) in testimonials" :key="t.name" class="testi-card" :style="`--accent-color: ${accentColors[t.accentIndex]}`">
          <article>
            <div class="testi-rating" aria-label="5 out of 5 stars">
              <span v-for="i in 5" :key="i" class="star" aria-hidden="true">★</span>
            </div>

            <blockquote class="testi-quote">
              <p>"{{ t.content }}"</p>
            </blockquote>

            <footer class="testi-author">
              <div class="author-avatar" aria-hidden="true">{{ t.avatar }}</div>
              <div class="author-info">
                <cite class="author-name">{{ t.name }}</cite>
                <p class="author-meta">
                  {{ t.role }} · <span class="author-company">{{ t.company }}</span>
                </p>
              </div>
            </footer>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
/* Grid-Mod handles layout via grid="3,2,1,1,var(--gap-md)" */

/* Stats bar */
.testi-stats {
  display: flex;
  flex-direction: row;
  gap: var(--gap-md);
  margin: 0 0 var(--gap-section);
  padding: var(--gap-lg);
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid var(--main-color-8);
  border-radius: var(--radius-lg);
  text-align: center;
  justify-content: space-evenly;
}

.testi-stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.testi-stat-number {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--main-color-1);
  line-height: 1;
  margin: 0;
}

.testi-stat-label {
  font-size: var(--font-xs);
  color: var(--main-color-4);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Grid-Mod handles columns/gap */
.testi-grid {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Card */
.testi-card {
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid var(--main-color-8);
  border-top: 3px solid var(--accent-color);
  border-radius: var(--radius-lg);
  padding: var(--gap-lg);
  transition:
    border-color var(--transition-normal),
    transform var(--transition-normal);
}

.testi-card:hover {
  border-color: var(--main-color-6);
  border-top-color: var(--accent-color);
  transform: translateY(-2px);
}

/* Stars */
.testi-rating {
  display: flex;
  gap: 2px;
  margin-bottom: var(--gap-sm);
}

.star {
  color: var(--accent-warning);
  font-size: var(--font-sm);
}

/* Quote */
.testi-quote {
  margin: 0 0 var(--gap-lg);
}

.testi-quote p {
  font-size: var(--font-sm);
  line-height: 1.7;
  color: var(--main-color-4);
  margin: 0;
  font-style: italic;
}

/* Author */
.testi-author {
  display: flex;
  align-items: center;
  gap: var(--gap-md);
}

.author-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--main-color-8);
  border: 2px solid var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-xs);
  font-weight: 700;
  color: var(--main-color-4);
  flex-shrink: 0;
  letter-spacing: 0.02em;
}

.author-info {
  flex: 1;
  min-width: 0;
}

.author-name {
  display: block;
  font-size: var(--font-sm);
  font-weight: 600;
  color: var(--main-color-1);
  font-style: normal;
  margin-bottom: 2px;
}

.author-meta {
  font-size: var(--font-xs);
  color: var(--main-color-4);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.author-company {
  color: var(--main-color-5);
}

@media screen and (min-width: 1201px) {
  .testi-stats {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
  }
}
</style>
