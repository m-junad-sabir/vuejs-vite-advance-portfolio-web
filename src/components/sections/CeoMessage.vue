<script setup>
</script>

<template>
  <section class="ceo-message section section--tint" id="ceo">
    <div class="container">
      <div class="ceo-message__card">
        <div class="ceo-message__quote-mark">&ldquo;</div>
        <p class="section-label">From the CEO's Desk</p>
        <div class="ceo-message__content">
          <div class="ceo-message__photo">
            <img src="/Profilepicture3.png" alt="CEO portrait" loading="lazy" />
          </div>
          <div class="ceo-message__text">
            <blockquote>
              At Seher International, we believe that great engineering is the foundation of a thriving
              textile industry. For over 40 years, we have dedicated ourselves to bringing the world's
              best machinery and technical expertise to our clients. Our mission is not just to supply
              equipment, but to build lasting partnerships that drive innovation, efficiency, and
              sustainable growth in every mill we serve.
            </blockquote>
            <div class="ceo-message__author">
              <strong>Muhammad Junaid Sabir</strong>
              <span>Founder &amp; CEO, Seher International</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- PLACEHOLDER: Replace with actual CEO name, photo, and statement -->
  </section>
</template>

<style scoped>
.ceo-message__card {
  position: relative;
  background-color: var(--color-surface);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
  max-width: 900px;
  margin: 0 auto;
}

.ceo-message__quote-mark {
  position: absolute;
  top: var(--space-3);
  right: var(--space-5);
  font-size: 6rem;
  font-family: Georgia, serif;
  color: var(--color-accent);
  opacity: 0.2;
  line-height: 1;
}

.ceo-message__content {
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;
  margin-top: var(--space-2);
}

.ceo-message__photo {
  flex-shrink: 0;
}

.ceo-message__photo img {
  width: 160px;
  height: 160px;
  border-radius: var(--radius-pill);
  object-fit: cover;
  border: 4px solid var(--color-accent);
}

.ceo-message__text blockquote {
  font-size: 1.0625rem;
  line-height: 1.8;
  color: var(--color-text);
  font-style: italic;
  margin-bottom: var(--space-3);
}

.ceo-message__author strong {
  display: block;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-primary);
}

.ceo-message__author span {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

@media (max-width: 767px) {
  .ceo-message__content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .ceo-message__quote-mark {
    font-size: 4rem;
    right: var(--space-3);
  }
}
</style>
