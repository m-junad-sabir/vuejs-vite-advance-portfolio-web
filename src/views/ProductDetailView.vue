<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'
import productsData from '@/data/products.json'
import ProductCard from '@/components/ui/ProductCard.vue'

const route = useRoute()
const router = useRouter()

const product = computed(() => {
  return productsData.find(p => p.slug === route.params.slug)
})

const relatedProducts = computed(() => {
  if (!product.value) return []
  return productsData.filter(p => p.category === product.value.category && p.id !== product.value.id).slice(0, 3)
})

useHead({
  title: computed(() => product.value ? `${product.value.name} | Seher International` : 'Product | Seher International'),
  meta: [
    { name: 'description', content: computed(() => product.value?.shortDescription || 'Product details') }
  ]
})
</script>

<template>
  <div v-if="product">
    <section class="page-hero">
      <div class="container">
        <p class="section-label">Product</p>
        <h1>{{ product.name }}</h1>
        <p>{{ product.shortDescription }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="product-detail">
          <div class="product-detail__image">
            <img :src="product.image" :alt="product.name" />
          </div>
          <div class="product-detail__info">
            <span class="product-detail__category">{{ product.category }}</span>
            <h2>{{ product.name }}</h2>
            <p class="product-detail__desc">{{ product.shortDescription }}</p>

            <div class="product-detail__specs">
              <h3>Specifications</h3>
              <table>
                <tbody>
                  <tr v-for="(value, key) in product.specs" :key="key">
                    <th>{{ key }}</th>
                    <td>{{ value }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button class="btn btn--primary" @click="router.push('/contact')">Request a Quote</button>
          </div>
        </div>
      </div>
    </section>

    <section v-if="relatedProducts.length" class="section section--alt">
      <div class="container">
        <div class="section-header">
          <p class="section-label">Related Products</p>
          <h2 class="section-title">You May Also Like</h2>
        </div>
        <div class="grid grid--3">
          <ProductCard v-for="p in relatedProducts" :key="p.id" :product="p" />
        </div>
      </div>
    </section>
  </div>

  <div v-else class="section">
    <div class="container" style="text-align: center; padding: 6rem 0;">
      <h2>Product Not Found</h2>
      <p>The product you're looking for doesn't exist.</p>
      <RouterLink to="/products" class="btn btn--primary" style="margin-top: 1rem;">Back to Products</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.product-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
  align-items: start;
}

.product-detail__image img {
  width: 100%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.product-detail__category {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: var(--color-bg-tint);
  color: var(--color-secondary);
  border-radius: var(--radius-pill);
  margin-bottom: var(--space-2);
}

.product-detail__info h2 {
  margin-bottom: var(--space-2);
}

.product-detail__desc {
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: var(--space-3);
}

.product-detail__specs h3 {
  margin-bottom: var(--space-2);
}

.product-detail__specs table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: var(--space-3);
}

.product-detail__specs th,
.product-detail__specs td {
  padding: 0.625rem 1rem;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
  font-size: 0.9375rem;
}

.product-detail__specs th {
  font-weight: 600;
  color: var(--color-text);
  background-color: var(--color-bg-alt);
  width: 40%;
}

.product-detail__specs td {
  color: var(--color-text-muted);
}

@media (max-width: 767px) {
  .product-detail {
    grid-template-columns: 1fr;
  }
}
</style>
