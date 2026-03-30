class GridMod {
  constructor() {
    this.BREAKPOINTS = {
      LARGE: 1200,
      MEDIUM: 992,
      SMALL: 480,
    };

    this.init();
  }

  init() {
    this.processGridElements();
    // Re-process on DOM changes
    this.observeChanges();
  }

  processGridElements() {
    const gridElements = document.querySelectorAll("[grid]");

    gridElements.forEach((element) => {
      const gridAttr = element.getAttribute("grid");
      if (gridAttr) {
        this.generateGridCSS(element, gridAttr);
      }
    });
  }

  parseGridAttribute(gridAttr) {
    // Validate gridAttr
    if (!gridAttr || typeof gridAttr !== "string") {
      console.warn("GridMod: Invalid grid attribute");
      return { columns: [1, 1, 1, 1], gap: "var(--gap-md)" };
    }

    // Parse array-like string: "4,3,2,1,var(--gap-sm)"
    const parts = gridAttr.split(",").map((part) => part.trim());

    const columns = parts.slice(0, 4).map((col) => {
      // Remove quotes if present and convert to number
      const cleanCol = col.replace(/[']/g, "");
      const numValue = parseInt(cleanCol);
      return isNaN(numValue) ? 1 : numValue; // Default to 1 if invalid
    });

    return {
      columns: columns,
      gap: parts[4] || "var(--gap-md)",
    };
  }

  generateGridCSS(element, gridAttr) {
    const { columns, gap } = this.parseGridAttribute(gridAttr);

    // Validate element has className
    if (!element.className || element.className.trim() === "") {
      console.warn("GridMod: Element has no className, skipping CSS generation");
      return;
    }

    const className = element.className.split(" ")[0]; // Use first class as selector

    // Validate element has parentNode
    if (!element.parentNode) {
      console.warn("GridMod: Element has no parentNode, skipping CSS injection");
      return;
    }

    // Generate unique style ID to avoid duplicates
    const styleId = `grid-mod-${className}`;

    // Remove existing style if present
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
      existingStyle.remove();
    }

    // Validate columns array
    if (!columns || columns.length < 3 || columns.some((col) => col === undefined || col === null || isNaN(col))) {
      console.warn("GridMod: Invalid columns array, skipping CSS generation");
      return;
    }

    // Create CSS
    const css = this.generateGridCSSString(className, columns, gap);

    // Create and inject style element
    const style = document.createElement("style");
    style.id = styleId;
    style.style.display = "none"; // Hide from inspector
    style.textContent = css;

    // Insert after the element
    element.parentNode.insertBefore(style, element.nextSibling);
  }

  generateGridCSSString(className, columns, gap) {
    return `
  .${className} {
    display: grid;
    gap: ${gap};
    grid-template-columns: repeat(
      auto-fit,
      minmax(
        clamp(
          calc(100% / ${columns[0]} - ${gap}),
          (${this.BREAKPOINTS.LARGE}px - 100vw) * 999,
          clamp(calc(100% / ${columns[1]} - ${gap}), (${this.BREAKPOINTS.MEDIUM}px - 100vw) * 999, clamp(calc(100% / ${columns[2]} - ${gap}), (${this.BREAKPOINTS.SMALL}px - 100vw) * 999, 100%))
        ),
        1fr
      )
    );
  }`;
  }

  observeChanges() {
    // Watch for DOM changes to process new grid elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node && node.nodeType === Node.ELEMENT_NODE) {
              // Check if the added node has grid attribute
              if (node.hasAttribute && node.hasAttribute("grid")) {
                try {
                  this.generateGridCSS(node, node.getAttribute("grid"));
                } catch (error) {
                  console.warn("GridMod: Failed to process grid element", error);
                }
              }

              // Check child nodes for grid attributes
              try {
                const gridElements = node.querySelectorAll && node.querySelectorAll("[grid]");
                if (gridElements && gridElements.length > 0) {
                  gridElements.forEach((element) => {
                    try {
                      this.generateGridCSS(element, element.getAttribute("grid"));
                    } catch (error) {
                      console.warn("GridMod: Failed to process child grid element", error);
                    }
                  });
                }
              } catch (error) {
                console.warn("GridMod: Failed to query grid elements", error);
              }
            }
          });
        }
      });
    });

    try {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    } catch (error) {
      console.warn("GridMod: Failed to start mutation observer", error);
    }
  }

  // Public method to manually reprocess all grid elements
  refresh() {
    this.processGridElements();
  }

  // Public method to process specific element
  processElement(element) {
    if (element.hasAttribute("grid")) {
      this.generateGridCSS(element, element.getAttribute("grid"));
    }
  }
}

// Auto-initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  window.gridMod = new GridMod();
});

// Also initialize immediately if DOM is already loaded
if (document.readyState === "loading") {
  // DOM is still loading
} else {
  // DOM is already loaded
  if (!window.gridMod) {
    window.gridMod = new GridMod();
  }
}
