<script setup>
import PortfolioCard from '@/components/ui/PortfolioCard.vue'
import portfolioData from '@/data/portfolio.json'

const projects = portfolioData.slice(0, 6)
</script>

<template>
  <section class="portfolio-section section" id="portfolio">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Our Portfolio</p>
        <h2 class="section-title">Projects That Define Excellence</h2>
        <p class="section-intro">
          Explore our successful installations and partnerships across the textile industry.
        </p>
      </div>
      <div class="grid grid--3">
        <PortfolioCard v-for="p in projects" :key="p.id" :project="p" />
      </div>
    </div>
    <!-- PLACEHOLDER: Replace with real project images and descriptions -->
  </section>
</template>
