<script setup>
import ProductCard from '@/components/ui/ProductCard.vue'
import productsData from '@/data/products.json'

const products = productsData.slice(0, 6)
</script>

<template>
  <section class="products-section section section--alt" id="products">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Our Products</p>
        <h2 class="section-title">Premium Machinery &amp; Equipment</h2>
        <p class="section-intro">
          A comprehensive range of textile industrial machinery from the world's leading manufacturers.
        </p>
      </div>
      <div class="grid grid--3">
        <ProductCard v-for="p in products" :key="p.id" :product="p" />
      </div>
    </div>
    <!-- PLACEHOLDER: Replace with real product names, images, and descriptions -->
  </section>
</template>
