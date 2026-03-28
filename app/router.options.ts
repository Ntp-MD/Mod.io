import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top on page refresh or initial load
    if (savedPosition) {
      return savedPosition
    }
    
    // Scroll to top for all navigation
    return { top: 0, behavior: 'smooth' }
  }
}
