<script setup>
defineProps({
  service: { type: Object, required: true }
})

const icons = {
  wrench: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
  gear: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
  truck: 'M1 3h15v13H1z M16 8h4l3 3v5h-7z M5.5 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z M18.5 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  chart: 'M18 20V10 M12 20V4 M6 20v-6',
  tools: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
  headset: 'M3 18v-6a9 9 0 0 1 18 0v6 M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z M3 16a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'
}
</script>

<template>
  <RouterLink :to="`/services/${service.slug}`" class="service-card card">
    <div class="service-card__icon">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path :d="icons[service.icon] || icons.wrench" />
      </svg>
    </div>
    <h3 class="service-card__title">{{ service.title }}</h3>
    <p class="service-card__desc">{{ service.shortDescription }}</p>
    <span class="service-card__link">Learn More
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"/>
        <polyline points="12 5 19 12 12 19"/>
      </svg>
    </span>
  </RouterLink>
</template>

<style scoped>
.service-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  height: 100%;
}

.service-card__icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-md);
  background-color: var(--color-bg-tint);
  color: var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-3);
  transition: all var(--transition-base);
}

.service-card:hover .service-card__icon {
  background-color: var(--color-accent);
  color: #fff;
  transform: scale(1.05);
}

.service-card__title {
  font-size: var(--fs-h3);
  margin-bottom: var(--space-1);
  color: var(--color-primary);
}

.service-card__desc {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  margin-bottom: var(--space-3);
  flex: 1;
}

.service-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-accent);
  transition: gap var(--transition-fast);
}

.service-card:hover .service-card__link {
  gap: 0.625rem;
}
</style>
