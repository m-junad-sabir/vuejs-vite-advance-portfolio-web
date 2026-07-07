<script setup>
defineProps({
  testimonial: { type: Object, required: true }
})
</script>

<template>
  <article class="testimonial-card card">
    <div class="testimonial-card__stars">
      <svg v-for="n in 5" :key="n" width="18" height="18" viewBox="0 0 24 24" :fill="n <= testimonial.rating ? 'var(--color-accent)' : 'var(--color-border-strong)'">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    </div>
    <p class="testimonial-card__quote">"{{ testimonial.quote }}"</p>
    <div class="testimonial-card__author">
      <img :src="testimonial.avatar" :alt="testimonial.name" class="testimonial-card__avatar" loading="lazy" />
      <div>
        <strong class="testimonial-card__name">{{ testimonial.name }}</strong>
        <span class="testimonial-card__company">{{ testimonial.company }}, {{ testimonial.country }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.testimonial-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.testimonial-card__stars {
  display: flex;
  gap: 0.25rem;
  margin-bottom: var(--space-2);
}

.testimonial-card__quote {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--color-text);
  margin-bottom: var(--space-3);
  flex: 1;
  font-style: italic;
}

.testimonial-card__author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-top: var(--space-2);
  border-top: 1px solid var(--color-border);
}

.testimonial-card__avatar {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-pill);
  object-fit: cover;
  flex-shrink: 0;
}

.testimonial-card__name {
  display: block;
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--color-primary);
}

.testimonial-card__company {
  display: block;
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}
</style>
