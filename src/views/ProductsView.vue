<script setup>
import { ref, computed } from 'vue'
import { useHead } from '@unhead/vue'
import ProductCard from '@/components/ui/ProductCard.vue'
import productsData from '@/data/products.json'

useHead({
  title: 'Our Products | Seher International',
  meta: [
    { name: 'description', content: 'Browse our comprehensive range of textile industrial machinery — spinning, weaving, knitting, dyeing, and finishing equipment.' }
  ]
})

const categories = ['All', ...new Set(productsData.map(p => p.category))]
const activeCategory = ref('All')

const filteredProducts = computed(() => {
  if (activeCategory.value === 'All') return productsData
  return productsData.filter(p => p.category === activeCategory.value)
})
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p class="section-label">Our Products</p>
        <h1>Premium Machinery &amp; Equipment</h1>
        <p>High-quality textile industrial machinery from the world's leading manufacturers.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="products-view__filters">
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
          <ProductCard v-for="p in filteredProducts" :key="p.id" :product="p" />
        </div>
        <p v-if="filteredProducts.length === 0" class="products-view__empty">No products in this category.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.products-view__filters {
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

.products-view__empty {
  text-align: center;
  color: var(--color-text-muted);
  padding: var(--space-6) 0;
}
</style>
