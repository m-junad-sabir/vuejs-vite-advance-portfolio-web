<script setup>
import { useHead } from '@unhead/vue'
import CeoMessage from '@/components/sections/CeoMessage.vue'

useHead({
  title: 'About Us | Seher International',
  meta: [
    { name: 'description', content: 'Learn about Seher International — over 40 years of excellence in textile industrial machinery import, supply, and service.' }
  ]
})

const values = [
  { title: 'Our Mission', description: 'To empower textile manufacturers with world-class machinery and engineering solutions that drive productivity, efficiency, and sustainable growth.' },
  { title: 'Our Vision', description: 'To be the most trusted and preferred partner for textile industrial machinery, recognized globally for quality, innovation, and service excellence.' },
  { title: 'Our Values', description: 'Integrity, quality, customer focus, and continuous innovation guide every decision we make and every relationship we build.' }
]

const team = [
  { name: 'Muhammad Junaid Sabir', role: 'Founder & CEO', image: '/Profilepicture3.png' },
  { name: 'Ayesha Khan', role: 'Chief Operations Officer', image: '/public/anime-8937917_1280.png' },
  { name: 'Junaid Sabir', role: 'Technical Director', image: '/Profilepicturenew.png' },
  { name: 'Sana Malik', role: 'Sales Manager', image: '/public/girl-8880144_1280.png' }
]

const timeline = [
  { year: '1985', title: 'Company Founded', description: 'Seher International established as a textile machinery trading company.' },
  { year: '1995', title: 'Expansion', description: 'Expanded operations to serve clients across multiple regions.' },
  { year: '2005', title: 'Global Partnerships', description: 'Became authorized stockist for leading European and Asian manufacturers.' },
  { year: '2015', title: 'Service Division', description: 'Launched dedicated after-sales support and technical consultancy services.' },
  { year: '2025', title: 'Digital Transformation', description: 'Modernized operations with digital platforms and expanded online presence.' }
]
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p class="section-label">About Us</p>
        <h1>Four Decades of Engineering Excellence</h1>
        <p>Discover the story, mission, and people behind Seher International.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="about-detail__story">
          <div class="about-detail__story-text">
            <p class="section-label">Our Story</p>
            <h2 class="section-title">A Legacy of Quality and Trust</h2>
            <p>Founded in 1985, Seher International began as a small trading company with a big vision — to bring the world's best textile machinery to local manufacturers. Over four decades, we have grown into one of the region's most respected importers, indenters, and stockists of industrial textile equipment.</p>
            <p>Our journey has been defined by lasting partnerships with leading global manufacturers, a commitment to quality that never compromises, and a service philosophy that puts our clients first. Today, we serve hundreds of textile mills across multiple countries, providing everything from machinery supply to comprehensive after-sales support.</p>
            <p>As we look to the future, we remain dedicated to innovation, sustainability, and the continued success of our clients. Every machine we supply, every service we provide, and every relationship we build is guided by our core belief: great engineering drives great industry.</p>
          </div>
          <div class="about-detail__story-image">
            <img src="/our-story.jpg" alt="Textile manufacturing facility" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <div class="section-header">
          <p class="section-label">Our Principles</p>
          <h2 class="section-title">Mission, Vision &amp; Values</h2>
        </div>
        <div class="grid grid--3">
          <div v-for="v in values" :key="v.title" class="card about-detail__value">
            <h3>{{ v.title }}</h3>
            <p>{{ v.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <p class="section-label">Our Team</p>
          <h2 class="section-title">Meet the Leadership</h2>
        </div>
        <div class="grid grid--4">
          <div v-for="member in team" :key="member.name" class="about-detail__team-member">
            <img :src="member.image" :alt="member.name" loading="lazy" />
            <h3>{{ member.name }}</h3>
            <p>{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <div class="section-header">
          <p class="section-label">Our Journey</p>
          <h2 class="section-title">Company History</h2>
        </div>
        <div class="timeline">
          <div v-for="(item, i) in timeline" :key="item.year" class="timeline__item" :class="{ 'timeline__item--left': i % 2 === 0 }">
            <div class="timeline__content">
              <span class="timeline__year">{{ item.year }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CeoMessage />
  </div>
</template>

<style scoped>
.about-detail__story {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: var(--space-6);
  align-items: center;
}

.about-detail__story-text p {
  margin-bottom: var(--space-2);
  line-height: 1.8;
}

.about-detail__story-image img {
  border-radius: var(--radius-lg);
  width: 100%;
  height: 450px;
  object-fit: cover;
  box-shadow: var(--shadow-lg);
}

.about-detail__value h3 {
  margin-bottom: var(--space-1);
}

.about-detail__team-member {
  text-align: center;
}

.about-detail__team-member img {
  width: 160px;
  height: 160px;
  border-radius: var(--radius-pill);
  object-fit: cover;
  margin: 0 auto var(--space-2);
  border: 3px solid var(--color-accent);
}

.about-detail__team-member h3 {
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
}

.about-detail__team-member p {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--space-3);
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--color-border);
  transform: translateX(-50%);
}

.timeline__item {
  position: relative;
  width: 50%;
  padding: 0 var(--space-4) var(--space-4) 0;
  margin-left: 0;
}

.timeline__item--left {
  margin-left: 50%;
  padding: 0 0 var(--space-4) var(--space-4);
}

.timeline__content {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-3);
  position: relative;
}

.timeline__content::before {
  content: '';
  position: absolute;
  top: var(--space-3);
  width: 12px;
  height: 12px;
  border-radius: var(--radius-pill);
  background-color: var(--color-accent);
  border: 2px solid var(--color-bg);
}

.timeline__item:not(.timeline__item--left) .timeline__content::before {
  right: -38px;
}

.timeline__item--left .timeline__content::before {
  left: -38px;
}

.timeline__year {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-accent);
  margin-bottom: 0.25rem;
}

.timeline__content h3 {
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
}

.timeline__content p {
  font-size: 0.875rem;
}

@media (max-width: 767px) {
  .about-detail__story {
    grid-template-columns: 1fr;
  }
  .timeline::before {
    left: 20px;
  }
  .timeline__item,
  .timeline__item--left {
    width: 100%;
    margin-left: 0;
    padding: 0 0 var(--space-4) 40px;
  }
  .timeline__item:not(.timeline__item--left) .timeline__content::before,
  .timeline__item--left .timeline__content::before {
    left: -28px;
    right: auto;
  }
}
</style>
