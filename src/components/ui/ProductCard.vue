<script setup>
defineProps({
  product: { type: Object, required: true }
})
</script>

<template>
  <RouterLink :to="`/products/${product.slug}`" class="product-card card">
    <div class="product-card__image">
      <img :src="product.image" :alt="product.name" loading="lazy" />
      <span class="product-card__category">{{ product.category }}</span>
    </div>
    <div class="product-card__body">
      <h3 class="product-card__title">{{ product.name }}</h3>
      <p class="product-card__desc">{{ product.shortDescription }}</p>
      <span class="product-card__link">Learn More
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </span>
    </div>
  </RouterLink>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
  text-decoration: none;
  height: 100%;
}

.product-card__image {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background-color: var(--color-bg-tint);
}

.product-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.product-card:hover .product-card__image img {
  transform: scale(1.08);
}

.product-card__category {
  position: absolute;
  top: var(--space-2);
  left: var(--space-2);
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: rgba(255, 178, 11, 0.95);
  color: var(--color-surface);
  border-radius: var(--radius-pill);
}

.product-card__body {
  padding: var(--space-3);
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-card__title {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
}

.product-card__desc {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin-bottom: var(--space-2);
  flex: 1;
}

.product-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-accent);
  transition: gap var(--transition-fast);
}

.product-card:hover .product-card__link {
  gap: 0.625rem;
}
</style>
