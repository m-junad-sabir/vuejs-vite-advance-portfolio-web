<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function handleScroll() {
  visible.value = window.scrollY > 300
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition name="fade-scale">
    <button
      v-if="visible"
      class="back-to-top"
      @click="scrollToTop"
      aria-label="Back to top"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="19" x2="12" y2="5"/>
        <polyline points="5 12 12 5 19 12"/>
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  right: 48px;
  bottom: 100px;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-pill);
  background-color: var(--color-secondary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 900;
  box-shadow: var(--shadow-lg);
  transition: background-color var(--transition-fast), transform var(--transition-fast);
}

.back-to-top:hover {
  background-color: var(--color-secondary-dark);
  transform: translateY(-3px);
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity var(--transition-base), transform var(--transition-base);
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

@media (max-width: 600px) {
  .back-to-top {
    right: 20px;
    bottom: 80px;
  }
}
</style>
