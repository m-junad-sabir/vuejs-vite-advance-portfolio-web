import { ref, onMounted, onUnmounted } from 'vue'

export function useIntersectionObserver(options = {}) {
  const target = ref(null)
  const isVisible = ref(false)
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        if (options.once !== false && target.value) {
          observer.unobserve(target.value)
        }
        if (options.onVisible) options.onVisible()
      } else if (options.once === false) {
        isVisible.value = false
      }
    }, {
      threshold: options.threshold || 0.15,
      rootMargin: options.rootMargin || '0px'
    })

    if (target.value) observer.observe(target.value)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { target, isVisible }
}
