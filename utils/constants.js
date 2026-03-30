/**
 * Application constants and configuration
 */

export const SCROLL_CONFIG = {
  HEADER_OFFSET: 80,
  ANIMATION_DURATION: 800,
  EASING: 'easeInOutCubic'
};

export const BREAKPOINTS = {
  LARGE: 1200,
  MEDIUM: 992,
  SMALL: 480
};

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com", icon: "🐙" },
  { label: "Twitter / X", href: "https://twitter.com", icon: "🐦" },
  { label: "Discord", href: "https://discord.com", icon: "🎯" },
];

export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Documentation", href: "#docs" },
    { label: "API Reference", href: "#api" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
  ]
};
