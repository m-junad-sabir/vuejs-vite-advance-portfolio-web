<script setup>
defineProps({
  show: { type: Boolean, default: false }
})
</script>

<template>
  <Transition name="preloader-fade">
    <div v-if="show" class="preloader" aria-label="Loading">
      <div class="preloader__content">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="64" height="64" rx="14" fill="var(--color-primary)"/>
          <text x="32" y="44" font-family="Inter" font-size="32" font-weight="800" fill="var(--color-accent)" text-anchor="middle">S</text>
        </svg>
        <div class="preloader__text">
          <strong>SEHER</strong>
          <small>INTERNATIONAL</small>
        </div>
        <div class="preloader__bar"></div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.preloader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background-color: var(--color-bg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.preloader__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
}

.preloader__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.1;
}

.preloader__text strong {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-primary);
  letter-spacing: 0.05em;
}

.preloader__text small {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.preloader__bar {
  width: 120px;
  height: 3px;
  background-color: var(--color-bg-tint);
  border-radius: var(--radius-pill);
  overflow: hidden;
  margin-top: var(--space-2);
  position: relative;
}

.preloader__bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 40%;
  background-color: var(--color-accent);
  border-radius: var(--radius-pill);
  animation: loading 1s ease-in-out infinite;
}

@keyframes loading {
  0% { left: -40%; }
  100% { left: 100%; }
}

.preloader-fade-leave-active {
  transition: opacity 0.4s ease;
}

.preloader-fade-leave-to {
  opacity: 0;
}
</style>
