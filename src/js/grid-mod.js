/**
 * Grid Mod - Dynamic Responsive Grid System
 * Usage: Add grid attribute to any element
 * <div grid="6,4,3,1,var(--space-md)">
 *
 * Options:
 * - TogglePrecision: true/false - Use precision or simple grid template
 */

// Configuration
const GRID_MOD_CONFIG = {
  TogglePrecision: false, // true = use TogglePrecision, false = use GridTemplate
};

// Breakpoint constants - ensure consistency
const BREAKPOINTS = {
  SMALL: 480,
  SEMI: 992,
  MEDIUM: 1200,
};

function gridModDefault(element) {
  try {
    // Skip if already processed
    if (element._gridModProcessed) {
      return;
    }

    let large, medium, semi, small, gap;

    // Check for grid attribute first (most compact)
    const gridAttr = element.getAttribute("grid");
    if (gridAttr) {
      // Validate input format (temporarily disabled for debugging)
      // if (!/^[\d,\s\-\(\)\.var\-\-]+$/.test(gridAttr.trim())) {
      //   console.warn(`Invalid grid attribute: "${gridAttr}"`);
      //   return;
      // }
      console.log(`Processing grid attribute: "${gridAttr}"`);

      const values = gridAttr.split(",").map((v) => v.trim());

      // Handle variable number of parameters
      if (values.length === 2) {
        // Format: "1,var(--gap-md)" - single column with gap
        const columns = parseInt(values[0]) || 1;
        // Temporarily disabled for debugging
        // if (columns < 1 || columns > 12) {
        //   console.warn(`Invalid column count: "${values[0]}" (must be 1-12)`);
        //   return;
        // }
        console.log(`Columns: ${columns}`);
        large = medium = semi = small = columns.toString();
        gap = values[1] || "20px";
      } else if (values.length === 5) {
        // Format: "2,2,1,1,var(--gap-md)" - full responsive
        const cols = [values[0], values[1], values[2], values[3]].map((v) => parseInt(v) || 1);
        // Temporarily disabled for debugging
        // if (cols.some((c) => c < 1 || c > 12)) {
        //   console.warn(`Invalid column count in "${gridAttr}" (must be 1-12)`);
        //   return;
        // }
        console.log(`Cols array: [${cols.join(",")}]`);
        large = cols[0].toString();
        medium = cols[1].toString();
        semi = cols[2].toString();
        small = cols[3].toString();
        gap = values[4] || "20px";
      } else {
        // Default fallback
        large = values[0] || "4";
        medium = values[1] || values[0] || "3";
        semi = values[2] || values[0] || "2";
        small = values[3] || values[0] || "1";
        gap = values[4] || values[values.length - 1] || "20px";
      }
    } else {
      // Use individual attributes (fallback)
      large = element.getAttribute("large") || "4";
      medium = element.getAttribute("medium") || "3";
      semi = element.getAttribute("semi") || "2";
      small = element.getAttribute("small") || "1";
      gap = element.getAttribute("gap") || "20px";
    }

    // Apply grid styles
    if (element.style.display !== "grid") {
      element.style.display = "grid";
    }
    element.style.gap = gap;

    // Responsive columns
    const updateColumns = () => {
      const width = window.innerWidth;
      let columns = large;

      if (!GRID_MOD_CONFIG.TogglePrecision) {
        // Hide complex CSS from DevTools
        if (width <= BREAKPOINTS.SMALL && small !== "1") columns = small;
        else if (width <= BREAKPOINTS.SEMI && semi !== "2") columns = semi;
        else if (width <= BREAKPOINTS.MEDIUM && medium !== "3") columns = medium;

        element.style.gridTemplateColumns = columns === "1" ? "1fr" : `repeat(${columns}, 1fr)`;
      } else {
        // TogglePrecision mode - complex CSS
        const gridTemplate = `
        repeat(
          auto-fit,
          minmax(
            clamp(
              calc(100% / ${large} - ${gap}),
              (${BREAKPOINTS.MEDIUM}px - 100vw) * 999,
              clamp(calc(100% / ${medium} - ${gap}), (${BREAKPOINTS.SEMI}px - 100vw) * 999, clamp(calc(100% / ${semi} - ${gap}), (${BREAKPOINTS.SMALL}px - 100vw) * 999, 100%))
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
  } catch (error) {
    console.error("Grid-mod error:", error);
  }
}

// Auto-initialize on DOM load
function initGridMod() {
  const elements = document.querySelectorAll("[grid], [large], [medium], [semi], [small], [gap]");
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
      attributeFilter: ["grid", "large", "medium", "semi", "small", "gap"],
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
    const attrs = ["grid", "large", "medium", "semi", "small", "gap"];
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
        attributeFilter: ["grid", "large", "medium", "semi", "small", "gap"],
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
  element.removeAttribute("screen");
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

// Export for manual usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = { gridModDefault, initGridMod, GridModObserver };
}

// Global access
window.gridMod = { gridModDefault, initGridMod, GridModObserver };
