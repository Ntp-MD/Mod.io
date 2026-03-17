/**
 * Grid Mod - Dynamic Responsive Grid System
 * Usage: Add attributes to any element
 * <div large="6" medium="4" semi="3" small="1" gap="var(--space-md)">
 *
 * Options:
 * - hideAttributes: true/false - Hide grid-mod attributes from DOM
 * - hideGridTemplate: true/false - Hide complex CSS from DevTools
 */

// Configuration
const GRID_MOD_CONFIG = {
  hideAttributes: true, // Show attributes in DevTools
  hideGridTemplate: true, // Hide complex CSS from DevTools
  highPrecision: false, // Set to true for smooth transitions (less IP protection)

  // Cool features
  enableAnimations: true, // Enable cool grid animations
  debugMode: false, // Enable debug mode with visual indicators
  autoNaming: true, // Auto-generate cool grid names
  visualEffects: true, // Enable hover effects and visual feedback
};

function gridModDefault(element) {
  GridModPerformance.startTiming("gridModInit");

  // Skip if already processed
  if (element._gridModProcessed) {
    GridModPerformance.trackCacheHit();
    return;
  }

  let large, medium, semi, small, gap;
  let gridName = "";

  // Check for screen attribute first (most compact)
  const screenAttr = element.getAttribute("screen");
  if (screenAttr) {
    const values = screenAttr.split(",");
    large = values[0] || "4";
    medium = values[1] || "3";
    semi = values[2] || "2";
    small = values[3] || "1";
    gap = values[4] || "var(--space-sm)";

    // Generate cool grid name
    gridName = generateGridName(large, medium, semi, small);
  } else {
    // Use individual attributes (fallback)
    large = element.getAttribute("large") || "4";
    medium = element.getAttribute("medium") || "3";
    semi = element.getAttribute("semi") || "2";
    small = element.getAttribute("small") || "1";
    gap = element.getAttribute("gap") || "var(--space-sm)";

    // Generate cool grid name
    gridName = generateGridName(large, medium, semi, small);
  }

  // Add cool grid name as data attribute
  if (GRID_MOD_CONFIG.autoNaming) {
    element.dataset.gridName = gridName;
    element.classList.add(gridName);
  }

  // Add cool animations
  if (GRID_MOD_CONFIG.enableAnimations) {
    element.classList.add("grid-entrance");
  }

  // Add debug mode
  if (GRID_MOD_CONFIG.debugMode) {
    element.classList.add("grid-debug");
  }

  // Add visual effects
  if (GRID_MOD_CONFIG.visualEffects) {
    element.classList.add("grid-visual");
  }

  // Hide attributes if enabled
  if (GRID_MOD_CONFIG.hideAttributes) {
    hideGridModAttributes(element, { large, medium, semi, small, gap });
  }

  // Simple grid template (hide complex logic from DevTools)
  element.style.display = "grid";
  element.style.gap = gap;

  // Use simple responsive columns instead of complex clamp
  const updateColumns = () => {
    const width = window.innerWidth;
    let columns = large;

    if (GRID_MOD_CONFIG.hideGridTemplate) {
      // Hide complex CSS from DevTools
      if (width <= 480 && small !== "1") columns = small;
      else if (width <= 768 && semi !== "2") columns = semi;
      else if (width <= 1024 && medium !== "3") columns = medium;

      element.style.gridTemplateColumns = columns === "1" ? "1fr" : `repeat(${columns}, 1fr)`;

      // Add resize animation
      if (GRID_MOD_CONFIG.enableAnimations) {
        element.classList.add("grid-resize");
        setTimeout(() => element.classList.remove("grid-resize"), 300);
      }

      // Add cool visual indicator
      addGridIndicator(element, columns, width);
    } else {
      // Show full complex CSS in DevTools
      const gridTemplate = `
        repeat(
          auto-fit,
          minmax(
            clamp(
              calc(100% / ${large} - ${gap}),
              (1200px - 100vw) * 999,
              clamp(calc(100% / ${medium} - ${gap}), (992px - 100vw) * 999, clamp(calc(100% / ${semi} - ${gap}), (480px - 100vw) * 999, 100%))
            ),
            1fr
          )
        )
      `;
      element.style.gridTemplateColumns = gridTemplate;
    }
  };

  updateColumns();

  // Single global resize listener
  if (!window._gridModResizeListener) {
    window._gridModResizeListener = throttle(updateColumns, 16);
    window.addEventListener("resize", window._gridModResizeListener);
  }

  element._gridModProcessed = true;
  GridModPerformance.trackElement();
  const duration = GridModPerformance.endTiming("gridModInit");
  GridModPerformance.metrics.initializationTime += duration;
}

// Generate cool grid names based on pattern
function generateGridName(large, medium, semi, small) {
  const patterns = {
    "6,3,2,1": "mega-grid",
    "4,3,2,1": "flex-grid",
    "3,2,2,1": "compact-grid",
    "4,2,2,1": "balanced-grid",
    "2,2,1,1": "mobile-grid",
    "3,3,2,1": "uniform-grid",
    "5,3,2,1": "dynamic-grid",
    "4,4,2,1": "wide-grid",
  };

  const key = `${large},${medium},${semi},${small}`;
  return patterns[key] || `custom-grid-${large}-${medium}-${semi}-${small}`;
}

// Add cool visual indicator
function addGridIndicator(element, columns, width) {
  // Add visual feedback in console during development
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    const gridName = element.dataset.gridName;
    const breakpoint = width <= 480 ? "mobile" : width <= 768 ? "tablet" : width <= 1024 ? "desktop" : "large";

    // Cool console logging
    console.log(`🎯 ${gridName} → ${breakpoint}: ${columns} columns`);

    // Add subtle visual indicator
    if (!element.dataset.gridIndicator) {
      element.dataset.gridIndicator = `${gridName} (${breakpoint}: ${columns} cols)`;
      element.style.setProperty("--grid-debug", `"${columns}"`);
    }
  }
}

// Cool initialization message
function showCoolInit() {
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    console.log("%c🚀 Grid-Mod Initialized!", "color: #ff6b6b; font-size: 16px; font-weight: bold;");
    console.log("%c✨ Ultra-compact responsive grid system", "color: #4ecdc4; font-size: 12px;");
    console.log("%c🎯 Features: Auto-naming, animations, visual effects", "color: #45b7d1; font-size: 12px;");
  }
}

// Auto-initialize on DOM load
function initGridMod() {
  showCoolInit(); // Show cool message

  const elements = document.querySelectorAll("[screen], [large], [medium], [semi], [small], [gap]");
  elements.forEach(gridModDefault);

  // Initialize smart observer
  GridModObserver.init();

  // Lazy observe remaining elements
  GridModObserver.observeLazy(elements);
}

// Apply to all elements with the attributes
document.addEventListener("DOMContentLoaded", initGridMod);

// Smart auto-observation with performance optimization
const GridModObserver = {
  observers: new Map(),

  init() {
    // Single global observer for performance
    this.globalObserver = new MutationObserver(this.handleMutations.bind(this));
    this.globalObserver.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ["large", "medium", "semi", "small", "gap"],
    });

    // Smart intersection observer for lazy initialization
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.initElement(entry.target);
            this.intersectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
  },

  handleMutations(mutations) {
    const elementsToProcess = new Set();

    mutations.forEach((mutation) => {
      if (mutation.type === "attributes") {
        const element = mutation.target;
        if (this.hasGridModAttributes(element)) {
          elementsToProcess.add(element);
        }
      }
    });

    // Batch process for performance
    requestAnimationFrame(() => {
      elementsToProcess.forEach((element) => {
        this.initElement(element);
      });
    });
  },

  hasGridModAttributes(element) {
    const attrs = ["large", "medium", "semi", "small", "gap"];
    return attrs.some((attr) => element.hasAttribute(attr));
  },

  initElement(element) {
    // Debounce initialization
    if (element._gridModInitialized) return;

    gridModDefault(element);
    element._gridModInitialized = true;

    // Observe for future changes
    if (!this.observers.has(element)) {
      const observer = new MutationObserver(() => {
        if (this.hasGridModAttributes(element)) {
          gridModDefault(element);
        }
      });

      observer.observe(element, {
        attributes: true,
        attributeFilter: ["large", "medium", "semi", "small", "gap"],
      });

      this.observers.set(element, observer);
    }
  },

  observeLazy(elements) {
    elements.forEach((element) => {
      if (this.hasGridModAttributes(element)) {
        this.intersectionObserver.observe(element);
      }
    });
  },
};

// Hide grid-mod attributes function
function hideGridModAttributes(element, attrs) {
  // Store in dataset for debugging
  Object.keys(attrs).forEach((key) => {
    if (attrs[key]) {
      element.dataset[key] = attrs[key];
    }
  });

  // Remove visible attributes
  element.removeAttribute("large");
  element.removeAttribute("medium");
  element.removeAttribute("semi");
  element.removeAttribute("small");
  element.removeAttribute("gap");

  // Apply direct CSS grid styles with smart variable integration
  applySmartGridStyles(element, attrs);
}

// Smart CSS variable integration with validation
function applySmartGridStyles(element, attrs) {
  // Smart gap handling with fallback
  const gap = validateCSSVariable(attrs.gap) || getComputedVariable("--space-sm") || "16px";
  element.style.gap = gap;

  // Smart column calculation with CSS variable support
  const updateColumns = () => {
    const width = window.innerWidth;
    let columns = attrs.large || "4";

    // Use CSS variables for breakpoints if available
    const breakpointSm = getComputedVariable("--breakpoint-sm") || "480px";
    const breakpointMd = getComputedVariable("--breakpoint-md") || "768px";
    const breakpointLg = getComputedVariable("--breakpoint-lg") || "1024px";

    if (width <= parseInt(breakpointSm) && attrs.small) columns = attrs.small;
    else if (width <= parseInt(breakpointMd) && attrs.semi) columns = attrs.semi;
    else if (width <= parseInt(breakpointLg) && attrs.medium) columns = attrs.medium;

    element.style.gridTemplateColumns = columns === "1" ? "1fr" : `repeat(${columns}, 1fr)`;
  };

  updateColumns();

  // Single global resize listener with throttling
  if (!window._gridModResizeListener) {
    window._gridModResizeListener = throttle(updateColumns, 16); // 60fps
    window.addEventListener("resize", window._gridModResizeListener);
  }
}

// CSS variable validation and extraction
function validateCSSVariable(value) {
  if (!value) return null;

  // Check if it's a CSS variable
  if (value.startsWith("var(")) {
    const varName = value.match(/var\(--([^)]+)\)/)?.[1];
    if (varName) {
      return getComputedVariable(`--${varName}`) || value;
    }
  }

  return value;
}

// Get computed CSS variable value
function getComputedVariable(varName) {
  if (!window._gridModComputedVars) {
    window._gridModComputedVars = new Map();
  }

  if (window._gridModComputedVars.has(varName)) {
    return window._gridModComputedVars.get(varName);
  }

  const element = document.body;
  const styles = getComputedStyle(element);
  const value = styles.getPropertyValue(varName).trim();

  if (value) {
    window._gridModComputedVars.set(varName, value);
    return value;
  }

  return null;
}

// Throttle utility for performance
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Performance monitoring and optimization
const GridModPerformance = {
  metrics: {
    elementsProcessed: 0,
    initializationTime: 0,
    resizeEvents: 0,
    cacheHits: 0,
  },

  startTiming(label) {
    performance.mark(`${label}-start`);
  },

  endTiming(label) {
    performance.mark(`${label}-end`);
    performance.measure(label, `${label}-start`, `${label}-end`);

    const measure = performance.getEntriesByName(label)[0];
    return measure.duration;
  },

  trackElement() {
    this.metrics.elementsProcessed++;
  },

  trackResize() {
    this.metrics.resizeEvents++;
  },

  trackCacheHit() {
    this.metrics.cacheHits++;
  },

  getMetrics() {
    return {
      ...this.metrics,
      averageInitTime: this.metrics.initializationTime / this.metrics.elementsProcessed || 0,
      cacheHitRate: ((this.metrics.cacheHits / this.metrics.elementsProcessed) * 100).toFixed(1) + "%",
    };
  },

  // Performance optimization: batch DOM operations
  batchDOMOperations(operations) {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        const fragment = document.createDocumentFragment();
        operations.forEach((op) => op(fragment));
        resolve(fragment);
      });
    });
  },

  // Memory management
  cleanup() {
    // Clear observers
    GridModObserver.observers.forEach((observer) => observer.disconnect());
    GridModObserver.observers.clear();

    // Clear caches
    if (window._gridModComputedVars) {
      window._gridModComputedVars.clear();
    }

    // Remove global listeners
    if (window._gridModResizeListener) {
      window.removeEventListener("resize", window._gridModResizeListener);
    }
  },
};

// Export performance metrics
window.gridModPerformance = GridModPerformance.getMetrics.bind(GridModPerformance);
window.cleanupGridMod = GridModPerformance.cleanup.bind(GridModPerformance);

// Export for manual usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = { gridModDefault, initGridMod, GridModObserver, GridModPerformance };
}

// Global access
window.gridMod = { gridModDefault, initGridMod, GridModObserver, GridModPerformance };
