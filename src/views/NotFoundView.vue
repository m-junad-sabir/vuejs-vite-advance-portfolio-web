<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Page Not Found | Seher International'
})
</script>

<template>
  <section class="not-found">
    <div class="container not-found__content">
      <div class="not-found__code">404</div>
      <h1>Oops! Page Not Found</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <RouterLink to="/" class="btn btn--primary">Go Back Home</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.not-found {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-6) var(--space-3);
}

.not-found__content {
  max-width: 500px;
}

.not-found__code {
  font-size: clamp(5rem, 15vw, 8rem);
  font-weight: 800;
  color: var(--color-accent);
  line-height: 1;
  margin-bottom: var(--space-2);
}

.not-found h1 {
  font-size: var(--fs-h2);
  margin-bottom: var(--space-1);
}

.not-found p {
  margin-bottom: var(--space-4);
  color: var(--color-text-muted);
}
</style>
