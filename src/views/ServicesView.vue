<script setup>
import { useHead } from '@unhead/vue'
import ServiceCard from '@/components/ui/ServiceCard.vue'
import servicesData from '@/data/services.json'

useHead({
  title: 'Our Services | Seher International',
  meta: [
    { name: 'description', content: 'Explore our comprehensive range of textile industrial machinery services — from import and installation to maintenance and technical consultancy.' }
  ]
})

const services = servicesData
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p class="section-label">Our Services</p>
        <h1>Comprehensive Engineering Solutions</h1>
        <p>End-to-end services for the textile industry, backed by decades of expertise.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid grid--3">
          <ServiceCard v-for="s in services" :key="s.id" :service="s" />
        </div>
      </div>
    </section>
  </div>
</template>
