;(function ($) {
  const _canvas = document.createElement('canvas')
  const _ctx = _canvas.getContext('2d')

  const measureTextWidth = (text, fontInfo) => {
    _ctx.font = fontInfo
    return _ctx.measureText(text).width
  }

  const getFontInfo = (el) => {
    const style = window.getComputedStyle(el)
    return `${style.fontWeight} 100px ${style.fontFamily}`
  }

  const cache = new WeakMap()

  const getCache = ($el) => {
    const el = $el[0]
    const fillAttr = $el.attr('data-fill')
    if (fillAttr === undefined) return null

    if (!cache.has(el)) {
      cache.set(el, {
        fill: parseFloat(fillAttr) || 100,
        minSize: parseFloat($el.attr('data-min-size')) || 0,
        maxSize: parseFloat($el.attr('data-max-size')) || Infinity,
        groupName: $el.attr('data-group-name') || null,
        parent: $el.closest('[data-resize-parent]')[0] || $el.parent()[0],
      })
    }
    return cache.get(el)
  }

  const modResizer = () => {
    const groups = new Map()

    // Phase 1: Grouping by Global Name OR Parent+Tag
    $('[data-fill]').each(function () {
      const $el = $(this)
      const config = getCache($el)
      if (!config) return

      const tagName = $el.prop('tagName')
      // If groupName exists, sync across all parents. Otherwise, sync only within parent.
      const groupKey = config.groupName
        ? `global-${config.groupName}-${tagName}`
        : `${$(config.parent).index()}-${tagName}`

      if (!groups.has(groupKey)) {
        groups.set(groupKey, {
          masterEl: $el,
          maxChars: $el.text().trim().length,
          elements: [],
          config: config,
        })
      }

      const group = groups.get(groupKey)
      group.elements.push($el)

      // The element with the most characters dictates the font-size for the group
      if ($el.text().trim().length > group.maxChars) {
        group.maxChars = $el.text().trim().length
        group.masterEl = $el
        group.config = config
      }
    })

    // Phase 2: Calculate Size
    const updates = []
    groups.forEach((group) => {
      const { elements, config } = group
      let groupSmallestSize = Infinity

      // 1. Calculate the ideal size for EVERY element in this group
      elements.forEach(($el) => {
        const text = $el.text().trim()
        const parentWidth = config.parent.offsetWidth
        if (parentWidth <= 0 || !text) return

        const fontInfo = getFontInfo($el[0])
        const widthAt100px = measureTextWidth(text, fontInfo)
        const targetWidth = parentWidth * (config.fill / 100)

        const idealSize = (targetWidth / widthAt100px) * 100

        // 2. Track which one is the absolute smallest
        if (idealSize < groupSmallestSize) {
          groupSmallestSize = idealSize
        }
      })

      // 3. Apply the "Winner" (the smallest size) to everyone
      // Also apply global min/max constraints here
      const finalSize = Math.max(Math.min(groupSmallestSize, config.maxSize), config.minSize)

      elements.forEach(($el) => {
        updates.push({ $el, fontSize: finalSize })
      })
    })
    // Phase 3: Apply Styles
    if (updates.length) {
      requestAnimationFrame(() => {
        updates.forEach(({ $el, fontSize }) => {
          $el.css({
            'font-size': `${fontSize}px`,
            display: 'block',
            'line-height': '1.1',
          })
        })
      })
    }
  }

  $(function () {
    const init = () => {
      modResizer()
      if (window.ResizeObserver) {
        const ro = new ResizeObserver(modResizer)
        $('[data-fill]').each(function () {
          const c = getCache($(this))
          if (c) ro.observe(c.parent)
        })
      }
      new MutationObserver(modResizer).observe(document.body, { childList: true, subtree: true })
    }
    if (document.fonts) document.fonts.ready.then(init)
    else $(window).on('load', init)

    let rt
    $(window).on('resize', () => {
      clearTimeout(rt)
      rt = setTimeout(modResizer, 150)
    })
  })
})(jQuery)
