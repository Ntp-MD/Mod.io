<script setup>
import { ref, onMounted, nextTick } from "vue";

const showDemo = ref(null);
const demoContent = ref(null);

const features = [
  {
    id: "cursor-ripple",
    name: "Cursor Ripple Effect",
    description: "WebGL-based water ripple effect that follows mouse movement and clicks",
    icon: "💧",
    color: "#3b82f6",
    demoHtml: `
      <div style="width: 100%; height: 300px; background-image: url('https://picsum.photos/seed/ripple/600/300.jpg'); background-size: cover; background-position: center; position: relative; overflow: hidden; border-radius: 12px;" id="ripple-demo">
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; text-align: center; font-size: 18px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); pointer-events: none;">
          <div style="font-size: 24px; margin-bottom: 8px;">💧</div>
          <div>Click and move mouse to see ripples</div>
        </div>
      </div>
    `,
    initScript: function () {
      if (typeof window !== "undefined" && window.ModWebGlRipplesInit) {
        window.ModWebGlRipplesInit();
        setTimeout(() => {
          if (typeof $ !== "undefined") {
            $("#ripple-demo").ripples({
              resolution: 512,
              perturbance: 0.04,
            });
          }
        }, 100);
      }
    },
  },
  {
    id: "fill-test",
    name: "Advanced Text Resizing",
    description: "Smart text resizing with grouping support and min/max constraints",
    icon: "📝",
    color: "#10b981",
    demoHtml: `
      <div style="padding: 20px; background: #f8fafc; border-radius: 12px;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div>
            <h4 style="margin-bottom: 16px; color: #374151;">Group 1 - Same Size</h4>
            <div style="border: 2px solid #e5e7eb; padding: 15px; margin-bottom: 10px;" data-fill="80" data-min-size="12" data-max-size="24" data-group-name="group1">
              <span>Short Text</span>
            </div>
            <div style="border: 2px solid #e5e7eb; padding: 15px;" data-fill="80" data-min-size="12" data-max-size="24" data-group-name="group1">
              <span>This is a much longer text that should resize</span>
            </div>
          </div>
          <div>
            <h4 style="margin-bottom: 16px; color: #374151;">Group 2 - Different Size</h4>
            <div style="border: 2px solid #e5e7eb; padding: 15px; margin-bottom: 10px;" data-fill="70" data-min-size="14" data-max-size="20" data-group-name="group2">
              <span>Another group</span>
            </div>
            <div style="border: 2px solid #e5e7eb; padding: 15px;" data-fill="70" data-min-size="14" data-max-size="20" data-group-name="group2">
              <span>With different constraints</span>
            </div>
          </div>
        </div>
      </div>
    `,
    initScript: function () {
      // ModFillTest auto-initializes
    },
  },
  {
    id: "fill-text",
    name: "Simple Text Resizing",
    description: "Basic text resizing to fit container width",
    icon: "🔤",
    color: "#f59e0b",
    demoHtml: `
      <div style="padding: 20px; background: #fef3c7; border-radius: 12px;">
        <h4 style="margin-bottom: 16px; color: #92400e;">Resize your browser to see text adapt</h4>
        <div style="background: white; padding: 20px; margin-bottom: 15px; border-radius: 8px;">
          <div AimSize="90" MinSize="12" style="border: 2px dashed #f59e0b; padding: 10px;">
            This text resizes to 90% of container width
          </div>
        </div>
        <div style="background: white; padding: 20px; border-radius: 8px;">
          <div AimSize="75" MinSize="14" style="border: 2px dashed #f59e0b; padding: 10px;">
            This shorter text resizes to 75% width
          </div>
        </div>
      </div>
    `,
    initScript: function () {
      // ModFillText auto-initializes
    },
  },
  {
    id: "run-count",
    name: "Animated Number Counting",
    description: "Smooth number counting animation when scrolled into view",
    icon: "🔢",
    color: "#ef4444",
    demoHtml: `
      <div style="padding: 20px; background: #fef2f2; border-radius: 12px;">
        <h4 style="margin-bottom: 20px; color: #991b1b; text-align: center;">Scroll to see animations</h4>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: center;">
          <div>
            <div class="set_num" data-start="0" data-stop="1234" data-decimals="false" style="font-size: 32px; font-weight: bold; color: #ef4444;">0</div>
            <div style="margin-top: 8px; color: #6b7280;">Projects</div>
          </div>
          <div>
            <div class="set_num" data-start="0" data-stop="98.7" data-decimals="true" data-places="1" style="font-size: 32px; font-weight: bold; color: #ef4444;">0</div>
            <div style="margin-top: 8px; color: #6b7280;">Success Rate</div>
          </div>
          <div>
            <div class="set_num" data-start="0" data-stop="56789" data-decimals="false" style="font-size: 32px; font-weight: bold; color: #ef4444;">0</div>
            <div style="margin-top: 8px; color: #6b7280;">Users</div>
          </div>
        </div>
      </div>
    `,
    initScript: function () {
      if (typeof window !== "undefined" && window.ModScrollNum) {
        window.ModScrollNum.init(".set_num");
      }
    },
  },
  {
    id: "trick-content",
    name: "Scroll Reveal Animations",
    description: "Content that animates in as you scroll",
    icon: "👁️",
    color: "#8b5cf6",
    demoHtml: `
      <div style="padding: 20px; background: #f3f4f6; border-radius: 12px;">
        <h4 style="margin-bottom: 20px; color: #1f2937; text-align: center;">Scroll the page to see animations</h4>
        <div style="max-height: 400px; overflow-y: auto; padding: 10px; border: 2px dashed #d1d5db; border-radius: 8px;">
          <div class="content" style="margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #8b5cf6;">
            <h5 style="margin-bottom: 8px; color: #1f2937;">First Content Block</h5>
            <p style="color: #6b7280;">This content will reveal as you scroll down through this demo area. Keep scrolling to see more content animate into view.</p>
          </div>
          <div class="content" style="margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #8b5cf6;">
            <h5 style="margin-bottom: 8px; color: #1f2937;">Second Content Block</h5>
            <p style="color: #6b7280;">Each block animates independently based on scroll position. The animation uses intersection observer to detect when elements come into view.</p>
          </div>
          <div class="content" style="margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #8b5cf6;">
            <h5 style="margin-bottom: 8px; color: #1f2937;">Third Content Block</h5>
            <p style="color: #6b7280;">Scroll back up to see the reverse animation! This demonstrates the scroll-up functionality of the ModAosInit library.</p>
          </div>
          <div class="content" style="margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #8b5cf6;">
            <h5 style="margin-bottom: 8px; color: #1f2937;">Fourth Content Block</h5>
            <p style="color: #6b7280;">The animation timing and distance can be customized. This demo uses the default settings with scroll-up enabled.</p>
          </div>
          <div class="content" style="padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #8b5cf6;">
            <h5 style="margin-bottom: 8px; color: #1f2937;">Final Content Block</h5>
            <p style="color: #6b7280;">The end of the scroll reveal demonstration. Try scrolling the entire page (not just this box) to see the full effect!</p>
          </div>
        </div>
        <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
          <p style="margin: 0; color: #92400e; font-size: 14px;">
            <strong>💡 Tip:</strong> Scroll the entire page (not just the box) to see the best animation effect!
          </p>
        </div>
      </div>
    `,
    initScript: function () {
      if (typeof window !== "undefined" && window.ModAosInit) {
        // Add longer delay to account for ModAosInit's internal 500ms delay
        setTimeout(() => {
          try {
            // First, manually hide elements to ensure they start hidden
            const contents = document.querySelectorAll(".content");
            contents.forEach((el) => {
              el.style.opacity = "0";
              el.style.transform = "translateY(50px)";
              el.style.transition = "opacity 1s ease, transform 1s ease";
            });

            // Then initialize ModAosInit
            window.ModAosInit(".content", { scrollUp: true });

            // Force a scroll event after initialization to trigger animations
            setTimeout(() => {
              window.dispatchEvent(new Event("scroll"));
            }, 600);
          } catch (error) {
            console.log("ModAosInit error:", error);
            // Fallback: manually trigger animations
            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                  } else {
                    entry.target.style.opacity = "0";
                    entry.target.style.transform = "translateY(50px)";
                  }
                });
              },
              { threshold: 0.1 },
            );

            document.querySelectorAll(".content").forEach((el) => {
              el.style.opacity = "0";
              el.style.transform = "translateY(50px)";
              el.style.transition = "opacity 1s ease, transform 1s ease";
              observer.observe(el);
            });
          }
        }, 800); // Increased delay to account for ModAosInit's internal timing
      }
    },
  },
];

const openDemo = (feature) => {
  showDemo.value = feature;
  nextTick(() => {
    if (demoContent.value && feature.initScript) {
      feature.initScript();
    }
  });
};

const closeDemo = () => {
  showDemo.value = null;
};

onMounted(() => {
  // Load any required scripts
  const scripts = ["/js/ModCursorRipple.js", "/js/ModFillTest.js", "/js/ModFillText.js", "/js/ModRunCount.js", "/js/ModTrickContent.js"];

  scripts.forEach((src) => {
    const script = document.createElement("script");
    script.src = src;
    document.head.appendChild(script);
  });
});
</script>

<template>
  <section class="showcase-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Interactive Feature Showcase</h2>
        <p class="section-subtitle">Try our powerful UI components with live popup demos</p>
      </div>

      <div class="features-grid">
        <div v-for="feature in features" :key="feature.id" class="feature-card" @click="openDemo(feature)">
          <div class="feature-icon" :style="{ background: feature.color + '20', color: feature.color }">
            {{ feature.icon }}
          </div>
          <h3 class="feature-title">{{ feature.name }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
          <button class="demo-button" :style="{ background: feature.color }">Try Live Demo</button>
        </div>
      </div>
    </div>

    <!-- Demo Popup Modal -->
    <div v-if="showDemo" class="demo-modal" @click="closeDemo">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <div class="modal-title">
            <span class="modal-icon" :style="{ color: showDemo.color }">{{ showDemo.icon }}</span>
            {{ showDemo.name }}
          </div>
          <button class="close-button" @click="closeDemo">×</button>
        </div>
        <div class="modal-body">
          <div class="demo-description">
            <p>{{ showDemo.description }}</p>
          </div>
          <div class="demo-container" ref="demoContent" v-html="showDemo.demoHtml"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.showcase-section {
  padding: var(--gap-section) 0;
  background: var(--main-color-7);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--gap-md);
}

.section-header {
  text-align: center;
  margin-bottom: var(--gap-section);
}

.section-title {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--main-color-1);
  margin-bottom: var(--gap-sm);
}

.section-subtitle {
  font-size: var(--font-md);
  color: var(--main-color-4);
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--gap-lg);
}

.feature-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--gap-lg);
  box-shadow: var(--shadow-md);
  cursor: pointer;
  transition: all var(--transition-normal);
  border: 2px solid transparent;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--main-color-6);
}

.feature-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: var(--gap-md);
}

.feature-title {
  font-size: var(--font-lg);
  font-weight: 600;
  color: var(--main-color-1);
  margin-bottom: var(--gap-sm);
}

.feature-description {
  font-size: var(--font-sm);
  color: var(--main-color-4);
  line-height: 1.6;
  margin-bottom: var(--gap-md);
}

.demo-button {
  color: white;
  border: none;
  padding: var(--gap-sm) var(--gap-md);
  border-radius: var(--radius-sm);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.demo-button:hover {
  opacity: 0.9;
  transform: scale(1.05);
}

/* Modal Styles */
.demo-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
  padding: var(--gap-md);
}

.modal-content {
  background: white;
  border-radius: var(--radius-lg);
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--shadow-xl);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--gap-lg);
  border-bottom: 1px solid var(--main-color-6);
}

.modal-title {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  font-size: var(--font-lg);
  font-weight: 600;
  color: var(--main-color-1);
}

.modal-icon {
  font-size: 24px;
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--main-color-4);
  padding: var(--gap-xs);
  border-radius: var(--radius-xs);
  transition: all var(--transition-fast);
}

.close-button:hover {
  background: var(--main-color-6);
  color: var(--main-color-1);
}

.modal-body {
  padding: var(--gap-lg);
}

.demo-description {
  margin-bottom: var(--gap-lg);
  padding: var(--gap-md);
  background: var(--main-color-7);
  border-radius: var(--radius-sm);
  border-left: 4px solid var(--accent-primary);
}

.demo-description p {
  margin: 0;
  color: var(--main-color-2);
  font-size: var(--font-sm);
}

.demo-container {
  border-radius: var(--radius-md);
  overflow: hidden;
}

/* Responsive Design */
@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: var(--gap-md);
  }

  .modal-content {
    margin: var(--gap-md);
    max-height: 95vh;
  }

  .modal-header {
    padding: var(--gap-md);
  }

  .modal-body {
    padding: var(--gap-md);
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: var(--font-lg);
  }

  .feature-card {
    padding: var(--gap-md);
  }

  .demo-modal {
    padding: var(--gap-sm);
  }
}
</style>
