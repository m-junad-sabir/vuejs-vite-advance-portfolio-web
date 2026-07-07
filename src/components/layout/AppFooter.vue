<script setup>
import servicesData from '@/data/services.json'

const quickLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Products', to: '/products' },
  { name: 'Portfolio', to: '/portfolio' },
  { name: 'Testimonials', to: '/testimonials' },
  { name: 'Contact', to: '/contact' }
]

const topServices = servicesData.slice(0, 6)

const socials = [
  { name: 'LinkedIn', icon: 'linkedin', url: '#' },
  { name: 'Facebook', icon: 'facebook', url: '#' },
  { name: 'Twitter/X', icon: 'twitter', url: '#' },
  { name: 'Instagram', icon: 'instagram', url: '#' },
  { name: 'YouTube', icon: 'youtube', url: '#' }
]
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__col">
          <div class="footer__logo">
            <svg width="44" height="44" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#C8960C"/>
              <text x="20" y="27" font-family="Inter" font-size="20" font-weight="800" fill="#1A2B4A" text-anchor="middle">S</text>
            </svg>
            <span class="footer__logo-text">
              <strong>SEHER</strong>
              <small>INTERNATIONAL</small>
            </span>
          </div>
          <p class="footer__desc">Importer, indenter, and stockist of textile industrial machinery and engineering solutions, serving manufacturers worldwide.</p>
          <div class="footer__socials">
            <a
              v-for="s in socials"
              :key="s.name"
              :href="s.url"
              :aria-label="s.name"
              class="footer__social"
            >
              <svg v-if="s.icon === 'linkedin'" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              <svg v-else-if="s.icon === 'facebook'" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/></svg>
              <svg v-else-if="s.icon === 'twitter'" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.91l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              <svg v-else-if="s.icon === 'instagram'" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38A5.89 5.89 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.89 5.89 0 0 0 2.13-1.38 5.89 5.89 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.89 5.89 0 0 0-1.38-2.13A5.89 5.89 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-10.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z"/></svg>
              <svg v-else-if="s.icon === 'youtube'" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.8zM9.6 15.6V8.4l6.2 3.6z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer__col">
          <h3 class="footer__heading">Quick Links</h3>
          <ul class="footer__list">
            <li v-for="link in quickLinks" :key="link.to">
              <RouterLink :to="link.to">{{ link.name }}</RouterLink>
            </li>
          </ul>
        </div>

        <div class="footer__col">
          <h3 class="footer__heading">Services</h3>
          <ul class="footer__list">
            <li v-for="s in topServices" :key="s.slug">
              <RouterLink :to="`/services/${s.slug}`">{{ s.title }}</RouterLink>
            </li>
          </ul>
        </div>

        <div class="footer__col">
          <h3 class="footer__heading">Contact</h3>
          <ul class="footer__contact">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>123 Industrial Zone, Karachi, Pakistan</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:info@seherinternational.com">info@seherinternational.com</a>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:+922112345678">+92 21 1234 5678</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p>&copy; 2025 Seher International. All rights reserved.</p>
        <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-primary-dark);
  color: rgba(255,255,255,0.8);
  padding: var(--space-10) 0 var(--space-4);
}

[data-theme="dark"] .footer {
  background-color: #0A1424;
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: var(--space-5);
  margin-bottom: var(--space-6);
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: var(--space-2);
}

.footer__logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.footer__logo-text strong {
  font-size: 1.125rem;
  font-weight: 800;
  color: #fff;
}

.footer__logo-text small {
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
}

.footer__desc {
  color: rgba(255,255,255,0.6);
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: var(--space-3);
}

.footer__socials {
  display: flex;
  gap: 0.5rem;
}

.footer__social {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  background-color: rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.7);
  transition: all var(--transition-fast);
}

.footer__social:hover {
  background-color: var(--color-accent);
  color: #fff;
  transform: translateY(-2px);
}

.footer__heading {
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: var(--space-3);
}

.footer__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.footer__list a {
  color: rgba(255,255,255,0.6);
  font-size: 0.875rem;
  transition: color var(--transition-fast);
}

.footer__list a:hover {
  color: var(--color-accent);
}

.footer__contact {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.footer__contact li {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  font-size: 0.875rem;
  color: rgba(255,255,255,0.6);
}

.footer__contact svg {
  flex-shrink: 0;
  margin-top: 3px;
  color: var(--color-accent);
}

.footer__contact a {
  color: rgba(255,255,255,0.6);
}

.footer__contact a:hover {
  color: var(--color-accent);
}

.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: var(--space-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.footer__bottom p {
  font-size: 0.8125rem;
  color: rgba(255,255,255,0.5);
}

.footer__bottom a {
  font-size: 0.8125rem;
  color: rgba(255,255,255,0.6);
}

.footer__bottom a:hover {
  color: var(--color-accent);
}

@media (max-width: 1023px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .footer__grid {
    grid-template-columns: 1fr;
  }
  .footer__bottom {
    justify-content: center;
    text-align: center;
  }
}
</style>
