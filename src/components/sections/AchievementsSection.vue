<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import StatCounter from '@/components/ui/StatCounter.vue'

const stats = [
  { target: 500, suffix: '+', label: 'Projects Completed' },
  { target: 300, suffix: '+', label: 'Happy Clients' },
  { target: 25, suffix: '+', label: 'Countries Served' },
  { target: 40, suffix: '+', label: 'Years of Experience' }
]

const sectionRef = ref(null)
const counters = ref([])
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      counters.value.forEach(c => c?.animate())
      observer.unobserve(sectionRef.value)
    }
  }, { threshold: 0.3 })

  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <section class="achievements section section--dark" ref="sectionRef" id="achievements">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Achievements</p>
        <h2 class="section-title">Our Track Record</h2>
      </div>
      <div class="achievements__grid">
        <StatCounter
          v-for="(s, i) in stats"
          :key="i"
          :ref="el => { if (el) counters[i] = el }"
          :target="s.target"
          :suffix="s.suffix"
          :label="s.label"
        />
      </div>
    </div>
    <!-- PLACEHOLDER: Replace numbers with real company statistics -->
  </section>
</template>

<style scoped>
.achievements {
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-secondary-dark) 100%);
}

[data-theme="dark"] .achievements {
  background: linear-gradient(135deg, #0A1424 0%, #16243F 100%);
}

.achievements__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
}

@media (max-width: 767px) {
  .achievements__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-5);
  }
}
</style>
