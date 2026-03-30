import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com", icon: "\u{1F419}" },
  { label: "Twitter / X", href: "https://twitter.com", icon: "\u{1F426}" },
  { label: "Discord", href: "https://discord.com", icon: "\u{1F3AF}" }
];
const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Documentation", href: "#docs" },
    { label: "API Reference", href: "#api" }
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" }
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" }
  ]
};
const _sfc_main$8 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuOpen = ref(false);
    const navLinks = [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Pricing", href: "#pricing" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header-container",
        role: "banner"
      }, _attrs))} data-v-8d61c530><a href="/" class="nav-logo" aria-label="MOD.io - Home" data-v-8d61c530><span class="logo-mark hover-rotate" aria-hidden="true" data-v-8d61c530>M</span><span class="logo-name" data-v-8d61c530>MOD<span class="logo-dot" data-v-8d61c530>.io</span></span></a><nav class="${ssrRenderClass([{ "nav-open": isMenuOpen.value }, "nav"])}" aria-label="Main navigation"${ssrRenderAttr("aria-hidden", !isMenuOpen.value ? "true" : "false")} data-v-8d61c530><div class="nav-overlay" aria-hidden="true" data-v-8d61c530></div><div class="nav-drawer" data-v-8d61c530><div class="nav-drawer-header" data-v-8d61c530><span class="nav-drawer-logo" data-v-8d61c530>MOD.io</span><button class="nav-close hover-scale" aria-label="Close navigation" data-v-8d61c530>\u2715</button></div><div class="nav-menu" role="list" data-v-8d61c530><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(`<div class="nav-item" data-v-8d61c530><a${ssrRenderAttr("href", link.href)} class="nav-link" data-v-8d61c530>${ssrInterpolate(link.label)}</a></div>`);
      });
      _push(`<!--]--></div><a href="#get-started" class="btn btn-accent btn-primary nav-cta hover-bounce" data-v-8d61c530>\u{1F680} Deploy Free</a></div></nav><div class="header-actions" data-v-8d61c530><a href="#get-started" class="btn btn-accent btn-primary header-cta hover-bounce" aria-label="Deploy Now - Get started with MOD.io" data-v-8d61c530>\u{1F680} Deploy Now</a><button class="menu-toggle hover-scale"${ssrRenderAttr("aria-expanded", isMenuOpen.value.toString())} aria-label="Toggle navigation menu" aria-controls="main-nav" data-v-8d61c530><span class="${ssrRenderClass([{ "menu-icon-open": isMenuOpen.value }, "menu-icon"])}" aria-hidden="true" data-v-8d61c530><span class="menu-line" data-v-8d61c530></span><span class="menu-line" data-v-8d61c530></span><span class="menu-line" data-v-8d61c530></span></span></button></div></header>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-8d61c530"]]);
const codeExample = `<script src="https://cdn.mod.io/v2/latest.min.js"><\/script>

MOD.init({
  project: 'your-project-id',
  version: '2.0.0',
  edge: 'auto'
});

// Verify delivery
MOD.on('ready', ({ latency, node }) => {
  console.log(\`\u26A1 \${latency}ms \xB7 \${node}\`);
});`;
const _sfc_main$7 = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      { number: "100M+", label: "Requests / day" },
      { number: "99.99%", label: "Uptime SLA" },
      { number: "150+", label: "Edge nodes" }
    ];
    const partners = ["Google", "Microsoft", "Amazon", "Meta", "Netflix"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "hero-section",
        "aria-labelledby": "hero-title"
      }, _attrs))} data-v-126f62d9><div class="hero-bg" aria-hidden="true" data-v-126f62d9><div class="gradient-orb orb-1" data-v-126f62d9></div><div class="gradient-orb orb-2" data-v-126f62d9></div><div class="gradient-orb orb-3" data-v-126f62d9></div><div class="grid-pattern" data-v-126f62d9></div></div><div class="container" data-v-126f62d9><div class="hero-layout" data-v-126f62d9><div class="hero-content" data-v-126f62d9><div class="trust-badge" data-v-126f62d9><span class="badge-glow" data-v-126f62d9>\u26A1 Trusted by developers worldwide</span></div><h1 class="hero-title" id="hero-title" data-v-126f62d9><span class="title-line" data-v-126f62d9>Global CDN</span><span class="title-line gradient-text" data-v-126f62d9>for Modern Apps</span></h1><p class="hero-description" data-v-126f62d9> Deploy your libraries and assets to 150+ edge locations worldwide. Sub-20ms latency, intelligent caching, and real-time analytics built for scale. </p><div class="cta-group" data-v-126f62d9><a href="#get-started" class="btn btn-white hover-bounce" data-v-126f62d9><span class="btn-icon" data-v-126f62d9>\u{1F680}</span><span data-v-126f62d9>Start Free</span></a><a href="#docs" class="btn btn-ghost hover-lift" data-v-126f62d9><span data-v-126f62d9>View Documentation</span><span class="btn-arrow" data-v-126f62d9>\u2192</span></a></div><div class="stats-bar" data-v-126f62d9><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div class="stat-item hover-scale" data-v-126f62d9><span class="stat-number" data-v-126f62d9>${ssrInterpolate(stat.number)}</span><span class="stat-label" data-v-126f62d9>${ssrInterpolate(stat.label)}</span></div>`);
      });
      _push(`<!--]--></div><div class="partners" data-v-126f62d9><span class="partners-label" data-v-126f62d9>Used by teams at</span><div class="partners-logos" data-v-126f62d9><!--[-->`);
      ssrRenderList(partners, (partner) => {
        _push(`<span class="partner-logo" data-v-126f62d9>${ssrInterpolate(partner)}</span>`);
      });
      _push(`<!--]--></div></div></div><div class="hero-visual" data-v-126f62d9><div class="code-card hover-perspective" data-v-126f62d9><div class="code-header" data-v-126f62d9><div class="window-controls" data-v-126f62d9><span class="control close" data-v-126f62d9></span><span class="control minimize" data-v-126f62d9></span><span class="control maximize" data-v-126f62d9></span></div><span class="window-title" data-v-126f62d9>mod-setup.js</span><span class="window-status" data-v-126f62d9><span class="status-indicator" data-v-126f62d9></span> Live </span></div><div class="code-content" data-v-126f62d9><pre class="code-block" data-v-126f62d9><code data-v-126f62d9>${ssrInterpolate(codeExample)}</code></pre></div><div class="code-footer" data-v-126f62d9><div class="terminal-line" data-v-126f62d9><span class="prompt" data-v-126f62d9>$</span><span class="command" data-v-126f62d9>mod deploy --production</span></div><div class="terminal-output" data-v-126f62d9><span class="success-check" data-v-126f62d9>\u2713</span><span data-v-126f62d9>Deployed to 150 edge nodes in 2.3s</span></div></div></div><div class="floating-metrics" data-v-126f62d9><div class="metric-pill hover-scale" data-v-126f62d9><span class="metric-icon" data-v-126f62d9>\u26A1</span><span class="metric-value" data-v-126f62d9>12ms</span><span class="metric-label" data-v-126f62d9>Latency</span></div><div class="metric-pill highlight hover-scale" data-v-126f62d9><span class="metric-icon" data-v-126f62d9>\u{1F310}</span><span class="metric-value" data-v-126f62d9>SG-EDGE</span><span class="metric-label" data-v-126f62d9>Nearest Node</span></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-126f62d9"]]);
const _sfc_main$6 = {
  __name: "Features",
  __ssrInlineRender: true,
  setup(__props) {
    const mediumFeatures = [
      {
        icon: "\u{1F9E0}",
        title: "Smart Versioning",
        description: "Semantic version management with automatic dependency resolution and safe rollbacks.",
        gradient: "linear-gradient(135deg, #7f2c86 0%, #4a1c4e 100%)"
      },
      {
        icon: "\u{1F4CA}",
        title: "Live Analytics",
        description: "Real-time dashboards with usage patterns, geographic distribution, and performance forecasting.",
        gradient: "linear-gradient(135deg, #00d64f 0%, #009e3a 100%)"
      },
      {
        icon: "\u{1F512}",
        title: "Zero-Trust Security",
        description: "TLS 1.3, automated threat detection, and integrity verification for every delivery event.",
        gradient: "linear-gradient(135deg, #ea580c 0%, #b34509 100%)"
      },
      {
        icon: "\u{1F680}",
        title: "Any Framework",
        description: "Works with Vue, React, Angular, Svelte. Zero-config detection and auto-optimized bundles.",
        gradient: "linear-gradient(135deg, #7f2c86 0%, #ea580c 100%)"
      },
      {
        icon: "\u{1F310}",
        title: "Self-Healing Infra",
        description: "AI-driven failover across 150+ edge locations. Predictive scaling ensures zero-downtime.",
        gradient: "linear-gradient(135deg, #00d64f 0%, #7f2c86 100%)"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "features",
        class: "features-section",
        "aria-labelledby": "features-title"
      }, _attrs))} data-v-419d89ff><div class="container" data-v-419d89ff><header class="section-header" data-v-419d89ff><span class="badge badge-primary" data-v-419d89ff>\u{1F680} Features</span><h2 class="section-title" id="features-title" data-v-419d89ff>Everything you need to scale</h2><p class="section-description" data-v-419d89ff>Built for modern development workflows with zero configuration</p></header><div class="features-bento" role="list" data-v-419d89ff><article class="feature-card feature-large hover-lift" role="listitem" data-v-419d89ff><div class="feature-glow" data-v-419d89ff></div><div class="feature-content" data-v-419d89ff><div class="feature-header" data-v-419d89ff><span class="feature-icon-large" data-v-419d89ff>\u26A1</span><span class="feature-badge" data-v-419d89ff>Performance</span></div><h3 class="feature-title" data-v-419d89ff>Lightning Fast Delivery</h3><p class="feature-description" data-v-419d89ff> Sub-20ms latency with intelligent edge routing. Your content is served from the nearest of 150+ global nodes, optimized in real-time for maximum speed. </p><div class="feature-metrics" data-v-419d89ff><div class="metric" data-v-419d89ff><span class="metric-value" data-v-419d89ff>20ms</span><span class="metric-desc" data-v-419d89ff>Average latency</span></div><div class="metric" data-v-419d89ff><span class="metric-value" data-v-419d89ff>150+</span><span class="metric-desc" data-v-419d89ff>Edge nodes</span></div></div></div></article><!--[-->`);
      ssrRenderList(mediumFeatures, (feature, index) => {
        _push(`<article class="feature-card feature-medium hover-lift" data-v-419d89ff><div class="feature-icon-wrap" style="${ssrRenderStyle({ background: feature.gradient })}" data-v-419d89ff><span class="feature-icon" data-v-419d89ff>${ssrInterpolate(feature.icon)}</span></div><div class="feature-content" data-v-419d89ff><h3 class="feature-title" data-v-419d89ff>${ssrInterpolate(feature.title)}</h3><p class="feature-description" data-v-419d89ff>${ssrInterpolate(feature.description)}</p></div><div class="feature-arrow" data-v-419d89ff><span data-v-419d89ff>\u2192</span></div></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Features.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-419d89ff"]]);
const _sfc_main$5 = {
  __name: "HowItWorks",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = [
      {
        number: "01",
        icon: "\u{1F4E6}",
        title: "Upload & Optimize",
        description: "Drop your library files. MOD.io auto-detects formats, compresses assets, and generates optimized bundles in seconds.",
        detail: ".js \xB7 .css \xB7 .wasm \xB7 .json \xB7 images"
      },
      {
        number: "02",
        icon: "\u{1F9E0}",
        title: "Version & Configure",
        description: "Semantic versioning kicks in automatically. Generate CDN embed codes, npm packages, and ES module URLs instantly.",
        detail: "Zero-config \xB7 canary \xB7 rollback"
      },
      {
        number: "03",
        icon: "\u{1F310}",
        title: "Distribute Globally",
        description: "Your files propagate to 150+ edge nodes within seconds. Any framework, any runtime \u2014 npm, CDN, or ES modules.",
        detail: "npm \xB7 yarn \xB7 pnpm \xB7 CDN \xB7 ESM \xB7 UMD"
      },
      {
        number: "04",
        icon: "\u{1F4CA}",
        title: "Monitor & Scale",
        description: "Real-time analytics surface usage patterns, latency by region, and anomalies. Auto-scaling handles any traffic spike.",
        detail: "Live dashboard \xB7 alerts \xB7 auto-scale"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "how-it-works",
        class: "section section-dark",
        "aria-labelledby": "hiw-title"
      }, _attrs))} data-v-70ab2fee><div class="container" data-v-70ab2fee><header class="section-header" data-v-70ab2fee><span class="badge badge-primary" aria-label="Section category" data-v-70ab2fee>\u{1F52C} How It Works</span><h2 class="section-title" id="hiw-title" data-v-70ab2fee>Deploy in four steps</h2><p class="section-description" data-v-70ab2fee>From upload to global distribution in under 60 seconds</p></header><div class="steps-list" aria-label="Deployment steps" data-v-70ab2fee><!--[-->`);
      ssrRenderList(steps, (step, index) => {
        _push(`<div class="step-item" data-v-70ab2fee>`);
        if (index < steps.length - 1) {
          _push(`<div class="step-connector" aria-hidden="true" data-v-70ab2fee></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="step-inner" data-v-70ab2fee><div class="step-left" data-v-70ab2fee><div class="step-num-wrap" aria-hidden="true" data-v-70ab2fee><span class="step-num" data-v-70ab2fee>${ssrInterpolate(step.number)}</span></div></div><article class="step-card card" data-v-70ab2fee><div class="step-icon-row" data-v-70ab2fee><span class="step-icon" aria-hidden="true" data-v-70ab2fee>${ssrInterpolate(step.icon)}</span><h3 class="step-title" data-v-70ab2fee>${ssrInterpolate(step.title)}</h3></div><p class="step-description" data-v-70ab2fee>${ssrInterpolate(step.description)}</p><div class="step-tags" aria-label="Supported formats" data-v-70ab2fee><span class="step-tag" data-v-70ab2fee>\u26A1 ${ssrInterpolate(step.detail)}</span></div></article></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HowItWorks.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-70ab2fee"]]);
const _sfc_main$4 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const testimonials = [
      {
        name: "Sarah Chen",
        role: "Lead Engineer",
        company: "TechCorp Global",
        content: "MOD.io transformed our library distribution. Sub-20ms latency globally and analytics that actually surface actionable data. Night and day vs. our old CDN.",
        avatar: "SC",
        accentClass: "accent-secondary"
      },
      {
        name: "Marcus Johnson",
        role: "Principal Architect",
        company: "StartupHub",
        content: "Version management just works. Smart rollbacks, canary deployments \u2014 everything we used to script manually is now handled automatically.",
        avatar: "MJ",
        accentClass: "accent-success"
      },
      {
        name: "Emily Rodriguez",
        role: "VP Engineering",
        company: "CloudScale",
        content: "Self-healing infra means our on-call rotation is quieter. Our users in APAC, EU, and US all report identical performance. Reliability is genuinely unmatched.",
        avatar: "ER",
        accentClass: "accent-warning"
      },
      {
        name: "David Kim",
        role: "CTO",
        company: "InnovateLabs AI",
        content: "The live analytics dashboard gave us visibility we never had. We identified a latency regression in a library update before users even noticed it.",
        avatar: "DK",
        accentClass: "accent-secondary"
      },
      {
        name: "Lisa Thompson",
        role: "Director of Product",
        company: "DevTools Co.",
        content: "Production deployment in under 3 minutes. The DX is phenomenal \u2014 zero config, intuitive dashboard, and docs that developers actually enjoy reading.",
        avatar: "LT",
        accentClass: "accent-success"
      },
      {
        name: "James Wilson",
        role: "Enterprise Architect",
        company: "Fortune 500 Inc.",
        content: "Zero-trust security and TLS 1.3 out of the box satisfied our compliance team in one meeting. The audit logs are thorough and export cleanly to our SIEM.",
        avatar: "JW",
        accentClass: "accent-warning"
      }
    ];
    const stats = [
      { number: "50M+", label: "Developers", icon: "\u{1F465}" },
      { number: "99.99%", label: "Satisfaction", icon: "\u2B50" },
      { number: "180+", label: "Countries", icon: "\u{1F30D}" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "testimonials",
        class: "testimonials-section",
        "aria-labelledby": "testimonials-title"
      }, _attrs))} data-v-05ca5fe1><div class="container" data-v-05ca5fe1><header class="section-header" data-v-05ca5fe1><span class="badge badge-primary" data-v-05ca5fe1>\u{1F4AC} Testimonials</span><h2 class="section-title" id="testimonials-title" data-v-05ca5fe1>Loved by developers</h2><p class="section-description" data-v-05ca5fe1>See what teams are saying about MOD.io</p></header><div class="stats-row" data-v-05ca5fe1><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div class="stat-pill hover-scale" data-v-05ca5fe1><span class="stat-icon" data-v-05ca5fe1>${ssrInterpolate(stat.icon)}</span><div class="stat-info" data-v-05ca5fe1><span class="stat-number" data-v-05ca5fe1>${ssrInterpolate(stat.number)}</span><span class="stat-label" data-v-05ca5fe1>${ssrInterpolate(stat.label)}</span></div></div>`);
      });
      _push(`<!--]--></div><div class="testimonials-masonry" data-v-05ca5fe1><!--[-->`);
      ssrRenderList(testimonials, (testimonial, index) => {
        _push(`<article class="${ssrRenderClass([[testimonial.accentClass, { "card-large": index === 0 || index === 3 }], "testimonial-card hover-lift"])}" data-v-05ca5fe1><div class="card-glow" data-v-05ca5fe1></div><div class="testimonial-header" data-v-05ca5fe1><div class="author-row" data-v-05ca5fe1><div class="author-avatar" data-v-05ca5fe1>${ssrInterpolate(testimonial.avatar)}</div><div class="author-details" data-v-05ca5fe1><span class="author-name" data-v-05ca5fe1>${ssrInterpolate(testimonial.name)}</span><span class="author-role" data-v-05ca5fe1>${ssrInterpolate(testimonial.role)}</span></div></div><div class="company-badge" data-v-05ca5fe1>${ssrInterpolate(testimonial.company)}</div></div><div class="testimonial-rating" data-v-05ca5fe1><!--[-->`);
        ssrRenderList(5, (i) => {
          _push(`<span class="star" data-v-05ca5fe1>\u2605</span>`);
        });
        _push(`<!--]--></div><blockquote class="testimonial-quote" data-v-05ca5fe1><p data-v-05ca5fe1>&quot;${ssrInterpolate(testimonial.content)}&quot;</p></blockquote></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonials.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-05ca5fe1"]]);
const _sfc_main$3 = {
  __name: "Pricing",
  __ssrInlineRender: true,
  setup(__props) {
    const plans = [
      {
        name: "Starter",
        price: "Free",
        description: "Perfect for side projects and open-source libraries",
        features: ["50 GB bandwidth / month", "Up to 10 libraries", "Global CDN delivery", "Basic analytics", "HTTPS included"],
        highlighted: false,
        cta: "\u{1F680} Deploy Free",
        ctaVariant: "btn-ghost"
      },
      {
        name: "Pro",
        price: "$49",
        period: "/mo",
        description: "For professional developers and growing teams",
        features: [
          "500 GB bandwidth / month",
          "Unlimited libraries",
          "Advanced analytics + alerts",
          "Priority support",
          "Custom domains + SSL",
          "API access",
          "Smart version control",
          "Real-time monitoring",
          "Auto-optimization"
        ],
        highlighted: true,
        cta: "\u26A1 Start Pro",
        ctaVariant: "btn-white"
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "Private edge network and dedicated support for large teams",
        features: [
          "Unlimited bandwidth",
          "Unlimited libraries",
          "Custom analytics SLA",
          "Dedicated support team",
          "Private edge network",
          "Enterprise API suite",
          "SSO + zero-trust",
          "99.99% uptime SLA",
          "Custom contracts"
        ],
        highlighted: false,
        cta: "\u{1F3AF} Contact Sales",
        ctaVariant: "btn-ghost"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "pricing",
        class: "section section-dark pricing-section",
        "aria-labelledby": "pricing-title"
      }, _attrs))} data-v-2cdbcb3d><div class="pricing-bg" aria-hidden="true" data-v-2cdbcb3d><div class="gradient-orb orb-1" data-v-2cdbcb3d></div><div class="gradient-orb orb-2" data-v-2cdbcb3d></div><div class="gradient-orb orb-3" data-v-2cdbcb3d></div><div class="grid-pattern" data-v-2cdbcb3d></div></div><div class="container" data-v-2cdbcb3d><header class="section-header" data-v-2cdbcb3d><span class="badge badge-primary" aria-label="Section category" data-v-2cdbcb3d>\u{1F48E} Pricing</span><h2 class="section-title" id="pricing-title" data-v-2cdbcb3d>Simple, transparent pricing</h2><p class="section-description" data-v-2cdbcb3d>Start free. Scale when you need to. No surprises.</p></header><div class="pricing-grid" data-v-2cdbcb3d><!--[-->`);
      ssrRenderList(plans, (plan) => {
        _push(`<article class="${ssrRenderClass([{ "pricing-card--highlighted": plan.highlighted }, "pricing-card card"])}"${ssrRenderAttr("aria-label", `${plan.name} plan`)} data-v-2cdbcb3d>`);
        if (plan.highlighted) {
          _push(`<div class="pricing-popular" aria-label="Most popular plan" data-v-2cdbcb3d><span data-v-2cdbcb3d>Most Popular</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="pricing-header" data-v-2cdbcb3d><h3 class="pricing-name" data-v-2cdbcb3d>${ssrInterpolate(plan.name)}</h3><div class="pricing-price" data-v-2cdbcb3d><span class="price-amount" data-v-2cdbcb3d>${ssrInterpolate(plan.price)}</span>`);
        if (plan.period) {
          _push(`<span class="price-period" data-v-2cdbcb3d>${ssrInterpolate(plan.period)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><p class="pricing-desc" data-v-2cdbcb3d>${ssrInterpolate(plan.description)}</p></div><div class="pricing-features" aria-label="Plan features" data-v-2cdbcb3d><!--[-->`);
        ssrRenderList(plan.features, (feature) => {
          _push(`<div class="feature-row" data-v-2cdbcb3d><span class="feature-check" aria-hidden="true" data-v-2cdbcb3d>\u2713</span><span class="feature-text" data-v-2cdbcb3d>${ssrInterpolate(feature)}</span></div>`);
        });
        _push(`<!--]--></div><div class="pricing-action" data-v-2cdbcb3d><a href="#get-started" class="${ssrRenderClass([plan.ctaVariant, "btn pricing-btn"])}"${ssrRenderAttr("aria-label", `${plan.cta} - ${plan.name} plan`)} data-v-2cdbcb3d>${ssrInterpolate(plan.cta)}</a></div></article>`);
      });
      _push(`<!--]--></div><footer class="pricing-footer" data-v-2cdbcb3d><p class="pricing-note" data-v-2cdbcb3d>All plans include global CDN, SSL, and 99.99% uptime SLA. Zero hidden fees. Cancel anytime.</p><p class="pricing-note" data-v-2cdbcb3d>Questions? <a href="#contact" class="pricing-link" data-v-2cdbcb3d>Talk to our team \u2192</a></p></footer></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pricing.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2cdbcb3d"]]);
const _sfc_main$2 = {
  __name: "CTA",
  __ssrInlineRender: true,
  setup(__props) {
    const benefits = ["50 GB bandwidth \u2014 no credit card needed", "Deploy globally in under 60 seconds", "Cancel or upgrade anytime"];
    const stats = [
      { number: "50M+", label: "Developers" },
      { number: "99.99%", label: "Uptime" },
      { number: "150+", label: "Countries" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "get-started",
        class: "cta-section",
        "aria-labelledby": "cta-title"
      }, _attrs))} data-v-bfb54dea><div class="cta-bg" aria-hidden="true" data-v-bfb54dea><div class="gradient-orb orb-1" data-v-bfb54dea></div><div class="gradient-orb orb-2" data-v-bfb54dea></div><div class="grid-overlay" data-v-bfb54dea></div></div><div class="container" data-v-bfb54dea><div class="cta-content-section" data-v-bfb54dea><div class="cta-main" data-v-bfb54dea><span class="cta-tag" data-v-bfb54dea>\u{1F680} Get Started</span><h2 class="cta-title-section" id="cta-title" data-v-bfb54dea>Ready to deploy at scale?</h2><p class="cta-description-section" data-v-bfb54dea> Join millions of developers shipping faster with MOD.io&#39;s intelligent global CDN. Free forever, no credit card required. </p><div class="cta-buttons" data-v-bfb54dea><a href="#signup" class="btn btn-white hover-lift" data-v-bfb54dea><span data-v-bfb54dea>Deploy Free Now</span><span class="btn-arrow" data-v-bfb54dea>\u2192</span></a><a href="#demo" class="btn btn-white hover-lift" data-v-bfb54dea><span data-v-bfb54dea>Watch Demo</span></a></div><p class="cta-note" data-v-bfb54dea>Already have an account? <a href="#login" class="login-link" data-v-bfb54dea>Sign in \u2192</a></p></div><div class="cta-side" data-v-bfb54dea><div class="stats-card hover-lift" data-v-bfb54dea><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div class="stat-block" data-v-bfb54dea><span class="stat-value" data-v-bfb54dea>${ssrInterpolate(stat.number)}</span><span class="stat-name" data-v-bfb54dea>${ssrInterpolate(stat.label)}</span></div>`);
      });
      _push(`<!--]--></div><div class="benefits-card-section hover-lift" data-v-bfb54dea><h3 class="benefits-title" data-v-bfb54dea>Why developers love us</h3><div class="benefits-list" data-v-bfb54dea><!--[-->`);
      ssrRenderList(benefits, (benefit) => {
        _push(`<div class="benefit-item-section" data-v-bfb54dea><span class="benefit-check" data-v-bfb54dea>\u2713</span><span class="benefit-text" data-v-bfb54dea>${ssrInterpolate(benefit)}</span></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="trust-section" data-v-bfb54dea><p class="trust-text" data-v-bfb54dea>Trusted by engineering teams at</p><div class="trust-logos" data-v-bfb54dea><span class="trust-logo" data-v-bfb54dea>Vercel</span><span class="trust-logo" data-v-bfb54dea>Stripe</span><span class="trust-logo" data-v-bfb54dea>Linear</span><span class="trust-logo" data-v-bfb54dea>Notion</span><span class="trust-logo" data-v-bfb54dea>Figma</span></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CTA.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-bfb54dea"]]);
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const navGroups = [
      {
        heading: "Product",
        links: FOOTER_LINKS.product
      },
      {
        heading: "Company",
        links: FOOTER_LINKS.company
      },
      {
        heading: "Legal",
        links: FOOTER_LINKS.legal
      }
    ];
    const socialLinks = SOCIAL_LINKS;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "section footer",
        role: "contentinfo"
      }, _attrs))} data-v-ee9ace92><div class="container" data-v-ee9ace92><div class="footer-main" data-v-ee9ace92><div class="footer-brand" data-v-ee9ace92><a href="/" class="brand-logo flex-row-center gap-xs link-reset" aria-label="MOD.io home" data-v-ee9ace92><span class="brand-mark flex-center" aria-hidden="true" data-v-ee9ace92>M</span><span class="brand-name" data-v-ee9ace92>MOD<span class="brand-dot" data-v-ee9ace92>.io</span></span></a><p class="brand-tagline" data-v-ee9ace92>Intelligent CDN for developers. Fast, reliable library delivery at global scale.</p><div class="social-row flex-row-center gap-xs" aria-label="Social media links" data-v-ee9ace92><!--[-->`);
      ssrRenderList(unref(socialLinks), (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)} class="social-btn flex-center"${ssrRenderAttr("aria-label", link.label)} data-v-ee9ace92>${ssrInterpolate(link.icon)}</a>`);
      });
      _push(`<!--]--></div></div><nav class="footer-nav" aria-label="Footer navigation" data-v-ee9ace92><div class="footer-nav-grid" data-v-ee9ace92><!--[-->`);
      ssrRenderList(navGroups, (group) => {
        _push(`<div class="footer-col" data-v-ee9ace92><h3 class="footer-col-heading" data-v-ee9ace92>${ssrInterpolate(group.heading)}</h3><div class="footer-col-links" role="list" data-v-ee9ace92><!--[-->`);
        ssrRenderList(group.links, (link) => {
          _push(`<div data-v-ee9ace92><a${ssrRenderAttr("href", link.href)} class="footer-link link-reset" data-v-ee9ace92>${ssrInterpolate(link.label)}</a></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></nav></div><div class="footer-bottom" data-v-ee9ace92><p class="footer-copy" data-v-ee9ace92>\xA9 ${ssrInterpolate(unref(currentYear))} MOD.io. All rights reserved.</p><div class="footer-bottom-links flex-row-center gap-md" data-v-ee9ace92><a href="#privacy" class="footer-small-link link-reset" data-v-ee9ace92>Privacy</a><a href="#terms" class="footer-small-link link-reset" data-v-ee9ace92>Terms</a><a href="#cookies" class="footer-small-link" data-v-ee9ace92>Cookies</a></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ee9ace92"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_Hero = __nuxt_component_1;
      const _component_Features = __nuxt_component_2;
      const _component_HowItWorks = __nuxt_component_3;
      const _component_Testimonials = __nuxt_component_4;
      const _component_Pricing = __nuxt_component_5;
      const _component_CTA = __nuxt_component_6;
      const _component_Footer = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_Hero, null, null, _parent));
      _push(ssrRenderComponent(_component_Features, null, null, _parent));
      _push(ssrRenderComponent(_component_HowItWorks, null, null, _parent));
      _push(ssrRenderComponent(_component_Testimonials, null, null, _parent));
      _push(ssrRenderComponent(_component_Pricing, null, null, _parent));
      _push(ssrRenderComponent(_component_CTA, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-YBxoOBEt.mjs.map
