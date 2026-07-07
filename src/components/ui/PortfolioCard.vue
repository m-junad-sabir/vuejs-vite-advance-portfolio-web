<script setup>
defineProps({
  project: { type: Object, required: true }
})
</script>

<template>
  <article class="portfolio-card">
    <div class="portfolio-card__image">
      <img :src="project.image" :alt="project.title" loading="lazy" />
      <div class="portfolio-card__overlay">
        <RouterLink to="/portfolio" class="btn btn--light portfolio-card__btn">View Project</RouterLink>
      </div>
    </div>
    <div class="portfolio-card__body">
      <span class="portfolio-card__category">{{ project.category }}</span>
      <h3 class="portfolio-card__title">{{ project.title }}</h3>
      <p class="portfolio-card__desc">{{ project.description }}</p>
    </div>
  </article>
</template>

<style scoped>
.portfolio-card {
  border-radius: var(--radius-lg);
  overflow: hidden;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  height: 100%;
}

.portfolio-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.portfolio-card__image {
  position: relative;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  background-color: var(--color-bg-tint);
}

.portfolio-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.portfolio-card:hover .portfolio-card__image img {
  transform: scale(1.08);
}

.portfolio-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(26,43,74,0.85) 100%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: var(--space-3);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.portfolio-card:hover .portfolio-card__overlay {
  opacity: 1;
}

.portfolio-card__btn {
  transform: translateY(10px);
  transition: transform var(--transition-base);
  background-color: var(--color-primary);
  color: var(--color-surface);
}

.portfolio-card:hover .portfolio-card__btn {
  transform: translateY(0);
  background-color: var(--color-primary-dark);
}

.portfolio-card__body {
  padding: var(--space-3);
}

.portfolio-card__category {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: var(--color-bg-tint);
  color: var(--color-secondary);
  border-radius: var(--radius-pill);
  margin-bottom: 0.5rem;
}

.portfolio-card__title {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
}

.portfolio-card__desc {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}
</style>
