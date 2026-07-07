<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  target: { type: Number, required: true },
  suffix: { type: String, default: '' },
  duration: { type: Number, default: 2000 },
  label: { type: String, required: true }
})

const current = ref(0)
const animated = ref(false)

function animate() {
  if (animated.value) return
  animated.value = true

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) {
    current.value = props.target
    return
  }

  const start = performance.now()
  function step(now) {
    const elapsed = now - start
    const progress = Math.min(elapsed / props.duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    current.value = Math.round(eased * props.target)
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

defineExpose({ animate })
</script>

<template>
  <div class="stat-counter">
    <div class="stat-counter__number">
      <span>{{ current.toLocaleString() }}</span>
      <span class="stat-counter__suffix">{{ suffix }}</span>
    </div>
    <div class="stat-counter__label">{{ label }}</div>
  </div>
</template>

<style scoped>
.stat-counter {
  text-align: center;
}

.stat-counter__number {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.1;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.125rem;
}

.stat-counter__suffix {
  color: var(--color-accent);
  font-size: 0.75em;
}

.stat-counter__label {
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
  margin-top: 0.5rem;
}
</style>
