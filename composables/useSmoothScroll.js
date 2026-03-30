/**
 * Smooth scroll composable for navigation
 * @returns {Object} Smooth scroll utilities
 */
export const useSmoothScroll = () => {
  /**
   * Handles smooth scroll to element with offset
   * @param {Event} event - Click event
   * @param {string} href - Target href
   * @param {Object} config - Scroll configuration
   */
  const scrollToElement = (event, href, config = {}) => {
    const {
      headerOffset = 80,
      duration = 800,
      easing = 'easeInOutCubic'
    } = config;

    // Handle anchor links
    if (href && href.startsWith("#")) {
      event.preventDefault();
      
      const element = document.querySelector(href);
      if (!element) {
        console.warn(`Element not found: ${href}`);
        return;
      }

      const startPosition = window.scrollY;
      const targetPosition = element.getBoundingClientRect().top + window.scrollY - headerOffset;
      const distance = targetPosition - startPosition;
      let start = null;

      /**
       * Animation frame callback
       * @param {number} currentTime - Current animation time
       */
      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function
        const easeValue = easing === 'easeInOutCubic' 
          ? (progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2)
          : progress;
        
        window.scrollTo(0, startPosition + (distance * easeValue));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return {
    scrollToElement
  };
};
