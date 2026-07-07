<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="hero" id="home">
    <div class="hero__overlay"></div>
    <div class="hero__content container">
      <p class="hero__eyebrow fade-in-up" style="animation-delay: 0.1s">Engineering Excellence</p>
      <h1 class="hero__title fade-in-up" style="animation-delay: 0.3s">
        Premium Textile Machinery &amp; Engineering Solutions
      </h1>
      <p class="hero__subtitle fade-in-up" style="animation-delay: 0.5s">
        Seher International is your trusted partner for importing, stocking, and servicing
        world-class textile industrial machinery — delivering innovation, quality, and reliability.
      </p>
      <div class="hero__actions fade-in-up" style="animation-delay: 0.7s">
        <RouterLink to="/services" class="btn btn--primary">Our Services</RouterLink>
        <RouterLink to="/contact" class="btn btn--ghost-light">Get a Quote</RouterLink>
      </div>
    </div>
    <div class="hero__scroll fade-in" style="animation-delay: 1s">
      <span>Scroll</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"/>
        <polyline points="19 12 12 19 5 12"/>
      </svg>
    </div>
  </section>
  <!-- PLACEHOLDER: Replace background image with real industrial machinery photo -->
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background: linear-gradient(135deg, #0F1B30 0%, #1A2B4A 50%, #2D6A9F 100%);
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/hero-image.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.25;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, transparent 0%, rgba(15,27,48,0.6) 100%);
}

.hero__content {
  position: relative;
  z-index: 2;
  max-width: 800px;
}

.hero__eyebrow {
  display: inline-block;
  font-size: var(--fs-label);
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-2);
}

.hero__title {
  font-size: var(--fs-h1);
  font-weight: 800;
  color: #fff;
  line-height: 1.15;
  margin-bottom: var(--space-3);
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}

.hero__subtitle {
  font-size: 1.125rem;
  color: rgba(255,255,255,0.85);
  max-width: 640px;
  margin: 0 auto var(--space-5);
  line-height: 1.7;
}

.hero__actions {
  display: flex;
  gap: var(--space-2);
  justify-content: center;
  flex-wrap: wrap;
}

.hero__scroll {
  position: absolute;
  bottom: var(--space-4);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255,255,255,0.6);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  z-index: 2;
}

.hero__scroll svg {
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

@media (max-width: 600px) {
  .hero__actions { flex-direction: column; }
  .hero__actions .btn { width: 100%; }
}
</style>
