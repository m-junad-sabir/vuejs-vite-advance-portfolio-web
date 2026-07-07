<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'
import servicesData from '@/data/services.json'
import productsData from '@/data/products.json'
import ProductCard from '@/components/ui/ProductCard.vue'

const route = useRoute()
const router = useRouter()

const service = computed(() => {
  return servicesData.find(s => s.slug === route.params.slug)
})

useHead({
  title: computed(() => service.value ? `${service.value.title} | Seher International` : 'Service | Seher International'),
  meta: [
    { name: 'description', content: computed(() => service.value?.shortDescription || 'Service details') }
  ]
})

const relatedProducts = productsData.slice(0, 3)
</script>

<template>
  <div v-if="service">
    <section class="page-hero">
      <div class="container">
        <p class="section-label">Service</p>
        <h1>{{ service.title }}</h1>
        <p>{{ service.shortDescription }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="service-detail">
          <div class="service-detail__content">
            <p class="section-label">Overview</p>
            <h2 class="section-title">{{ service.title }}</h2>
            <p class="service-detail__desc">{{ service.fullDescription }}</p>

            <div class="service-detail__features">
              <h3>Key Features</h3>
              <ul>
                <li v-for="f in service.features" :key="f">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>{{ f }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <div class="section-header">
          <p class="section-label">Related Products</p>
          <h2 class="section-title">Machinery We Supply</h2>
        </div>
        <div class="grid grid--3">
          <ProductCard v-for="p in relatedProducts" :key="p.id" :product="p" />
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container service-detail__cta">
        <h2>Need This Service?</h2>
        <p>Get in touch with our team for a personalized consultation and quote.</p>
        <button class="btn btn--primary" @click="router.push('/contact')">Request a Quote</button>
      </div>
    </section>
  </div>

  <div v-else class="section">
    <div class="container" style="text-align: center; padding: 6rem 0;">
      <h2>Service Not Found</h2>
      <p>The service you're looking for doesn't exist.</p>
      <RouterLink to="/services" class="btn btn--primary" style="margin-top: 1rem;">Back to Services</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.service-detail__desc {
  font-size: 1.0625rem;
  line-height: 1.8;
  margin-bottom: var(--space-4);
  max-width: 800px;
}

.service-detail__features h3 {
  margin-bottom: var(--space-2);
}

.service-detail__features ul {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2);
}

.service-detail__features li {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.9375rem;
  color: var(--color-text);
}

.service-detail__features svg {
  color: var(--color-success);
  flex-shrink: 0;
}

.service-detail__cta {
  text-align: center;
}

.service-detail__cta h2 {
  color: #fff;
  margin-bottom: var(--space-1);
}

.service-detail__cta p {
  color: rgba(255,255,255,0.75);
  margin-bottom: var(--space-3);
}

@media (max-width: 600px) {
  .service-detail__features ul {
    grid-template-columns: 1fr;
  }
}
</style>
