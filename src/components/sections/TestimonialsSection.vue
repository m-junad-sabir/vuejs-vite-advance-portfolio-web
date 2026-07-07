<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import TestimonialCard from '@/components/ui/TestimonialCard.vue'
import testimonialsData from '@/data/testimonials.json'

const testimonials = testimonialsData
const current = ref(0)
let timer = null
const paused = ref(false)

const visible = computed(() => {
  const result = []
  for (let i = 0; i < 3; i++) {
    const idx = (current.value + i) % testimonials.length
    result.push(testimonials[idx])
  }
  return result
})

function next() {
  current.value = (current.value + 1) % testimonials.length
}

function prev() {
  current.value = (current.value - 1 + testimonials.length) % testimonials.length
}

onMounted(() => {
  timer = setInterval(() => {
    if (!paused.value) next()
  }, 5000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <section class="testimonials section section--alt" id="testimonials">
    <div class="container">
      <div class="section-header">
        <p class="section-label">What Our Clients Say</p>
        <h2 class="section-title">Trusted by Industry Leaders</h2>
      </div>
      <div
        class="testimonials__carousel"
        @mouseenter="paused = true"
        @mouseleave="paused = false"
      >
        <button class="testimonials__nav testimonials__nav--prev" @click="prev" aria-label="Previous testimonials">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <div class="testimonials__grid">
          <TestimonialCard
            v-for="(t, i) in visible"
            :key="`${t.id}-${current}-${i}`"
            :testimonial="t"
            class="fade-in"
          />
        </div>
        <button class="testimonials__nav testimonials__nav--next" @click="next" aria-label="Next testimonials">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>
      <div class="testimonials__dots">
        <button
          v-for="n in testimonials.length"
          :key="n"
          :class="['testimonials__dot', { 'testimonials__dot--active': current === n - 1 }]"
          @click="current = n - 1"
          :aria-label="`Go to testimonial ${n}`"
        ></button>
      </div>
    </div>
    <!-- PLACEHOLDER: Replace with real client testimonials -->
  </section>
</template>

<style scoped>
.testimonials__carousel {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.testimonials__grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
}

.testimonials__nav {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-pill);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all var(--transition-fast);
}

.testimonials__nav:hover {
  background-color: var(--color-accent);
  color: #fff;
  border-color: var(--color-accent);
}

.testimonials__dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: var(--space-4);
}

.testimonials__dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-pill);
  background-color: var(--color-border-strong);
  transition: all var(--transition-fast);
}

.testimonials__dot--active {
  width: 24px;
  background-color: var(--color-accent);
}

@media (max-width: 1023px) {
  .testimonials__grid {
    grid-template-columns: 1fr;
  }
  .testimonials__nav {
    display: none;
  }
}
</style>
