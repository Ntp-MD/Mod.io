<script setup>
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import Features from "@/components/Features.vue";
import HowItWorks from "@/components/HowItWorks.vue";
import Testimonials from "@/components/Testimonials.vue";
import Pricing from "@/components/Pricing.vue";
import CTA from "@/components/CTA.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="app">
    <Header />
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
