<script setup>
const partners = [
  'Rieter', 'Saurer', 'Itema', 'Tsudakoma', 'Picanol', 'Toyota', 'Murata', 'Savio'
]
</script>

<template>
  <section class="trustbar" aria-label="Certifications and partners">
    <div class="container">
      <p class="trustbar__label">Certifications &amp; Partners</p>
      <div class="trustbar__track">
        <div class="trustbar__logos">
          <span v-for="p in partners" :key="p" class="trustbar__logo">{{ p }}</span>
        </div>
        <div class="trustbar__logos trustbar__logos--clone" aria-hidden="true">
          <span v-for="p in partners" :key="p + '-clone'" class="trustbar__logo">{{ p }}</span>
        </div>
      </div>
    </div>
    <!-- PLACEHOLDER: Replace with real certification badges and brand logos -->
  </section>
</template>

<style scoped>
.trustbar {
  background-color: var(--color-bg-alt);
  padding: var(--space-5) 0;
  overflow: hidden;
  border-top: 1px solid var(--color-border);
}

.trustbar__label {
  text-align: center;
  font-size: var(--fs-label);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: var(--space-3);
}

.trustbar__track {
  display: flex;
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
}

.trustbar__logos {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  flex-shrink: 0;
  animation: marquee 30s linear infinite;
  padding-right: var(--space-6);
}

.trustbar__logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text-light);
  white-space: nowrap;
  filter: grayscale(100%);
  opacity: 0.6;
  transition: filter var(--transition-base), opacity var(--transition-base), color var(--transition-base);
  cursor: default;
}

.trustbar__logo:hover {
  filter: grayscale(0%);
  opacity: 1;
  color: var(--color-secondary);
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}

@media (prefers-reduced-motion: reduce) {
  .trustbar__logos { animation: none; }
  .trustbar__logos--clone { display: none; }
}
</style>
