import { ref, onMounted, onUnmounted } from 'vue'

/**
 * 可複用的輪播 composable
 * @param {number} totalSlides
 * @param {number} [intervalMs]
 */
export function useCarousel(totalSlides, intervalMs = 5000) {
  const currentIndex = ref(0)
  let timer = null

  const goTo = (index) => {
    currentIndex.value = index
  }

  const next = () => {
    currentIndex.value = (currentIndex.value + 1) % totalSlides
  }

  const start = () => {
    stop()
    timer = setInterval(next, intervalMs)
  }

  const stop = () => {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }

  onMounted(start)
  onUnmounted(stop)

  return { currentIndex, goTo, next, start, stop }
}
