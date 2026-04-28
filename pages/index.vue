<script setup>
import { defineAsyncComponent } from "vue";

// Critical components - load immediately
import Hero from "~/components/Hero.vue";
import Header from "~/components/Header.vue";

// Non-critical components - lazy load for better performance
const Features = defineAsyncComponent(() => import("~/components/Features.vue"));
const HowItWorks = defineAsyncComponent(() => import("~/components/HowItWorks.vue"));
const Testimonials = defineAsyncComponent(() => import("~/components/Testimonials.vue"));
const Pricing = defineAsyncComponent(() => import("~/components/Pricing.vue"));
const CTA = defineAsyncComponent(() => import("~/components/CTA.vue"));
const Footer = defineAsyncComponent(() => import("~/components/Footer.vue"));
</script>

<template>
  <div>
    <Header />
    <main>
      <Hero />
      <Transition name="slide-up" appear>
        <Features />
      </Transition>
      <Transition name="slide-up" appear>
        <HowItWorks />
      </Transition>
      <Transition name="slide-up" appear>
        <Testimonials />
      </Transition>
      <Transition name="slide-up" appear>
        <Pricing />
      </Transition>
      <Transition name="slide-up" appear>
        <CTA />
      </Transition>
    </main>
    <Transition name="fade" appear>
      <Footer />
    </Transition>
  </div>
</template>
