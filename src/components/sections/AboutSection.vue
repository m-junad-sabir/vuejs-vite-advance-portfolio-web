<script setup>
import { RouterLink } from 'vue-router'

const stats = [
  { value: 40, label: 'Years of Experience', suffix: '+' },
  { value: 500, label: 'Projects Completed', suffix: '+' },
  { value: 300, label: 'Happy Clients', suffix: '+' }
]
</script>

<template>
  <section class="about-section section" id="about">
    <div class="container">
      <div class="about-section__grid">
        <div class="about-section__content">
          <p class="section-label">About Us</p>
          <h2 class="section-title">High Quality Solutions &amp; Innovative Engineering</h2>
          <p class="about-section__text">
            For over four decades, Seher International has been at the forefront of the textile
            industrial machinery sector. As a premier importer, indenter, and stockist, we connect
            manufacturers with the world's leading engineering solutions — combining global expertise
            with local service excellence.
          </p>
          <p class="about-section__text">
            Our commitment to quality, innovation, and customer satisfaction has made us a trusted
            partner for textile mills across the region. From machinery supply to after-sales support,
            we deliver end-to-end solutions that drive productivity and growth.
          </p>
          <div class="about-section__stats">
            <div v-for="s in stats" :key="s.label" class="about-section__stat">
              <div class="about-section__stat-value">{{ s.value }}{{ s.suffix }}</div>
              <div class="about-section__stat-label">{{ s.label }}</div>
            </div>
          </div>
          <RouterLink to="/about" class="btn btn--primary">Learn More</RouterLink>
        </div>
        <div class="about-section__image">
          <img src="/about-image.jpg" alt="Industrial textile machinery in operation" loading="lazy" />
          <div class="about-section__badge">
            <strong>40+</strong>
            <span>Years of Experience</span>
          </div>
        </div>
      </div>
    </div>
    <!-- PLACEHOLDER: Replace story text and image with client-provided content -->
  </section>
</template>

<style scoped>
.about-section__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  align-items: center;
}

.about-section__text {
  margin-bottom: var(--space-2);
  line-height: 1.8;
}

.about-section__stats {
  display: flex;
  gap: var(--space-4);
  margin: var(--space-4) 0;
  flex-wrap: wrap;
}

.about-section__stat-value {
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-accent);
  line-height: 1;
}

.about-section__stat-label {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  margin-top: 0.25rem;
}

.about-section__image {
  position: relative;
}

.about-section__image img {
  border-radius: var(--radius-lg);
  width: 100%;
  height: 500px;
  object-fit: cover;
  box-shadow: var(--shadow-lg);
}

.about-section__badge {
  position: absolute;
  bottom: -20px;
  left: -20px;
  background-color: #ffb515;
  color: #fff;
  padding: var(--space-3);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--shadow-lg);
  min-width: 140px;
}

.about-section__badge strong {
  font-size: 2rem;
  font-weight: 800;
  color: #000000;
  line-height: 1;
}

.about-section__badge span {
  font-size: 0.75rem;
  text-align: center;
  margin-top: 0.25rem;
  color: rgba(0, 0, 0, 0.8);
}

@media (max-width: 1023px) {
  .about-section__grid {
    grid-template-columns: 1fr;
  }
  .about-section__image {
    order: -1;
  }
  .about-section__image img {
    height: 350px;
  }
  .about-section__badge {
    left: 0;
  }
}

@media (max-width: 600px) {
  .about-section__stats {
    gap: var(--space-3);
  }
  .about-section__stat-value {
    font-size: 1.5rem;
  }
}
</style>
