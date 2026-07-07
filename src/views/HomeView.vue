<script setup>
import { useHead } from '@unhead/vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import CeoMessage from '@/components/sections/CeoMessage.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import WhyChooseUs from '@/components/sections/WhyChooseUs.vue'
import ProductsSection from '@/components/sections/ProductsSection.vue'
import PortfolioSection from '@/components/sections/PortfolioSection.vue'
import AchievementsSection from '@/components/sections/AchievementsSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

useHead({
  title: 'Seher International | Textile Industrial Machinery',
  meta: [
    { name: 'description', content: 'Seher International — importer, indenter, and stockist of textile industrial machinery and engineering solutions. Serving manufacturers worldwide for over 40 years.' },
    { property: 'og:title', content: 'Seher International | Textile Industrial Machinery' },
    { property: 'og:description', content: 'Premium textile industrial machinery importer and stockist serving manufacturers worldwide.' },
    { property: 'og:type', content: 'website' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Seher International',
        description: 'Textile industrial machinery importer and stockist',
        address: { '@type': 'PostalAddress', addressCountry: 'PK' }
      })
    }
  ]
})
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <CeoMessage />
    <ServicesSection />
    <WhyChooseUs />
    <ProductsSection />
    <PortfolioSection />
    <AchievementsSection />
    <TestimonialsSection />
    <ContactSection />
  </div>
</template>
