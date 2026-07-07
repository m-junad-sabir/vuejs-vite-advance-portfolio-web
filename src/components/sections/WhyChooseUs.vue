<script setup>
const features = [
  {
    title: 'Quality Assurance',
    description: 'Every product and service meets stringent international quality standards.',
    icon: 'M9 12l2 2 4-4 M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z'
  },
  {
    title: 'Trusted Suppliers',
    description: 'We partner with the world\'s leading textile machinery manufacturers.',
    icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
  },
  {
    title: 'Technical Expertise',
    description: 'Decades of combined engineering experience in textile machinery.',
    icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'
  },
  {
    title: 'After-Sales Support',
    description: 'Dedicated support team available for troubleshooting and repairs.',
    icon: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z'
  },
  {
    title: 'Wide Product Range',
    description: 'Comprehensive inventory covering all textile manufacturing stages.',
    icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10'
  },
  {
    title: 'Timely Delivery',
    description: 'Efficient logistics ensuring your machinery arrives on schedule.',
    icon: 'M1 3h15v13H1z M16 8h4l3 3v5h-7z M5.5 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z M18.5 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z'
  }
]
</script>

<template>
  <section class="why-choose-us section section--dark" id="why-choose-us">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Why Choose Us</p>
        <h2 class="section-title">The Seher Advantage</h2>
        <p class="section-intro">
          We combine global reach with local expertise to deliver unmatched value to our clients.
        </p>
      </div>
      <div class="grid grid--4">
        <div v-for="f in features" :key="f.title" class="why-choose-us__feature">
          <div class="why-choose-us__icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path :d="f.icon" />
            </svg>
          </div>
          <h3 class="why-choose-us__title">{{ f.title }}</h3>
          <p class="why-choose-us__desc">{{ f.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-choose-us__feature {
  text-align: left;
}

.why-choose-us__icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  background-color: rgba(200,150,12,0.15);
  color: var(--color-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-2);
  transition: all var(--transition-base);
}

.why-choose-us__feature:hover .why-choose-us__icon {
  background-color: var(--color-accent);
  color: #fff;
  transform: translateY(-4px);
}

.why-choose-us__title {
  font-size: 1.125rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.why-choose-us__desc {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.6;
}
</style>
