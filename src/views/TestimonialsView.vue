<script setup>
import { useHead } from '@unhead/vue'
import TestimonialCard from '@/components/ui/TestimonialCard.vue'
import testimonialsData from '@/data/testimonials.json'
import AchievementsSection from '@/components/sections/AchievementsSection.vue'

useHead({
  title: 'Testimonials | Seher International',
  meta: [
    { name: 'description', content: 'Read what our clients say about Seher International — trusted by textile manufacturers worldwide.' }
  ]
})

const testimonials = testimonialsData
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p class="section-label">Testimonials</p>
        <h1>What Our Clients Say</h1>
        <p>Real stories from the manufacturers who trust us with their machinery needs.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid grid--3">
          <TestimonialCard v-for="t in testimonials" :key="t.id" :testimonial="t" />
        </div>
      </div>
    </section>

    <AchievementsSection />
  </div>
</template>
