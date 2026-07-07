<script setup>
import { ref, computed } from 'vue'
import { useHead } from '@unhead/vue'
import PortfolioCard from '@/components/ui/PortfolioCard.vue'
import portfolioData from '@/data/portfolio.json'

useHead({
  title: 'Portfolio | Seher International',
  meta: [
    { name: 'description', content: 'Explore our portfolio of successful textile machinery installations and projects across multiple industries.' }
  ]
})

const categories = ['All', ...new Set(portfolioData.map(p => p.category))]
const activeCategory = ref('All')

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return portfolioData
  return portfolioData.filter(p => p.category === activeCategory.value)
})
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p class="section-label">Portfolio</p>
        <h1>Our Projects</h1>
        <p>A showcase of successful installations and partnerships across the textile industry.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="portfolio-view__filters">
          <button
            v-for="cat in categories"
            :key="cat"
            :class="['filter-btn', { 'filter-btn--active': activeCategory === cat }]"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
        <div class="grid grid--3">
          <PortfolioCard v-for="p in filteredProjects" :key="p.id" :project="p" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.portfolio-view__filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: var(--space-5);
}

.filter-btn {
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: var(--radius-pill);
  background-color: var(--color-bg-alt);
  color: var(--color-text-muted);
  transition: all var(--transition-fast);
}

.filter-btn:hover {
  background-color: var(--color-bg-tint);
  color: var(--color-text);
}

.filter-btn--active {
  background-color: var(--color-accent);
  color: #fff;
}
</style>
