<script setup>
import { useHead } from '@unhead/vue'
import ContactSection from '@/components/sections/ContactSection.vue'

useHead({
  title: 'Contact Us | Seher International',
  meta: [
    { name: 'description', content: 'Get in touch with Seher International for textile machinery inquiries, quotes, and support.' }
  ]
})
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p class="section-label">Contact</p>
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you. Reach out for inquiries, quotes, or support.</p>
      </div>
    </section>

    <ContactSection />

    <section class="section section--alt">
      <div class="container">
        <div class="section-header">
          <p class="section-label">Find Us</p>
          <h2 class="section-title">Our Location</h2>
        </div>
        <div class="contact-view__map">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=66.9%2C24.8%2C67.1%2C25.0&amp;layer=mapnik"
            width="100%"
            height="400"
            style="border:0; border-radius: var(--radius-lg);"
            loading="lazy"
            title="Seher International location map"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-view__map {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}
</style>
