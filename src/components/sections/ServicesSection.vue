<script setup>
import ServiceCard from '@/components/ui/ServiceCard.vue'
import servicesData from '@/data/services.json'

const services = servicesData.slice(0, 6)
</script>

<template>
  <section class="services-section section" id="services">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Our Services</p>
        <h2 class="section-title">Comprehensive Engineering Solutions</h2>
        <p class="section-intro">
          From machinery import and installation to maintenance and technical consultancy,
          we provide end-to-end solutions for the textile industry.
        </p>
      </div>
      <div class="grid grid--3">
        <ServiceCard v-for="s in services" :key="s.id" :service="s" />
      </div>
    </div>
    <!-- PLACEHOLDER: Replace with real service names and descriptions -->
  </section>
</template>
