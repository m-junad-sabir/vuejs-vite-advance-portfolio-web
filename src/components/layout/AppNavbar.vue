<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import DarkModeToggle from '@/components/ui/DarkModeToggle.vue'
import ReadingProgressBar from '@/components/ui/ReadingProgressBar.vue'

const scrolled = ref(false)
const drawerOpen = ref(false)
const route = useRoute()

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Products', to: '/products' },
  { name: 'Portfolio', to: '/portfolio' },
  { name: 'Testimonials', to: '/testimonials' }
]

function handleScroll() {
  scrolled.value = window.scrollY > 80
}

function closeDrawer() {
  drawerOpen.value = false
}

function handleClickOutside(e) {
  if (drawerOpen.value && !e.target.closest('.mobile-drawer') && !e.target.closest('.hamburger-btn')) {
    drawerOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('click', handleClickOutside)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})

const navbarClass = computed(() => ({
  'navbar--scrolled': scrolled.value || route.path !== '/'
}))
</script>

<template>
  <header class="navbar" :class="navbarClass">
    <ReadingProgressBar />
    <div class="navbar__inner">
      <RouterLink to="/" class="navbar__logo" @click="closeDrawer" aria-label="Seher International home">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" :fill="scrolled || route.path !== '/' ? 'var(--color-primary)' : '#fff'"/>
          <text x="20" y="27" font-family="Inter" font-size="20" font-weight="800" :fill="scrolled || route.path !== '/' ? '#C8960C' : '#1A2B4A'" text-anchor="middle">S</text>
        </svg>
        <span class="navbar__logo-text">
          <strong>SEHER</strong>
          <small>INTERNATIONAL</small>
        </span>
      </RouterLink>

      <nav class="navbar__links" aria-label="Main navigation">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="navbar__link"
          active-class="navbar__link--active"
        >
          {{ link.name }}
        </RouterLink>
      </nav>

      <div class="navbar__actions">
        <DarkModeToggle />
        <RouterLink to="/contact" class="btn btn--primary navbar__cta">Contact Us</RouterLink>
        <button
          class="hamburger-btn"
          :aria-label="drawerOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="drawerOpen"
          @click.stop="drawerOpen = !drawerOpen"
        >
          <span :class="['hamburger-icon', { 'hamburger-icon--open': drawerOpen }]"></span>
        </button>
      </div>
    </div>

    <Transition name="drawer">
      <div v-if="drawerOpen" class="mobile-drawer" @click.stop>
        <nav class="mobile-drawer__nav" aria-label="Mobile navigation">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="mobile-drawer__link"
            active-class="mobile-drawer__link--active"
            @click="closeDrawer"
          >
            {{ link.name }}
          </RouterLink>
          <RouterLink to="/contact" class="btn btn--primary btn--block" @click="closeDrawer">Contact Us</RouterLink>
        </nav>
      </div>
    </Transition>
    <Transition name="backdrop">
      <div v-if="drawerOpen" class="mobile-backdrop" @click="closeDrawer"></div>
    </Transition>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color var(--transition-base), box-shadow var(--transition-base);
  background-color: transparent;
}

.navbar--scrolled {
  background-color: var(--color-bg);
  box-shadow: var(--shadow-md);
}

.navbar__inner {
  max-width: var(--container-max);
  margin: 0 var(--space-3);
  height: var(--navbar-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
  padding: 0 var(--space-3);
}

.navbar--scrolled .navbar__inner {
  margin: 0 auto;
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
}

.navbar__logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.navbar__logo-text strong {
  font-size: 1.125rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  color: var(--color-primary);
}

.navbar:not(.navbar--scrolled) .navbar__logo-text strong {
  color: #fff;
}

.navbar__logo-text small {
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.navbar:not(.navbar--scrolled) .navbar__logo-text small {
  color: rgba(255,255,255,0.7);
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin: 0 auto;
}

.navbar__link {
  padding: 0.5rem 0.875rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-text);
  border-radius: var(--radius-pill);
  transition: color var(--transition-fast), background-color var(--transition-fast);
}

.navbar:not(.navbar--scrolled) .navbar__link {
  color: rgba(255,255,255,0.9);
}

.navbar__link:hover {
  color: var(--color-accent);
}

.navbar:not(.navbar--scrolled) .navbar__link:hover {
  color: var(--color-accent-light);
}

.navbar__link--active {
  color: var(--color-accent) !important;
  font-weight: 600;
}

.navbar__actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.navbar__cta {
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
}

.hamburger-btn {
  display: none;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
}

.hamburger-icon,
.hamburger-icon::before,
.hamburger-icon::after {
  display: block;
  width: 22px;
  height: 2px;
  background-color: var(--color-text);
  border-radius: 2px;
  transition: transform var(--transition-fast), opacity var(--transition-fast);
}

.navbar:not(.navbar--scrolled) .hamburger-icon,
.navbar:not(.navbar--scrolled) .hamburger-icon::before,
.navbar:not(.navbar--scrolled) .hamburger-icon::after {
  background-color: #fff;
}

.hamburger-icon {
  position: relative;
}

.hamburger-icon::before,
.hamburger-icon::after {
  content: '';
  position: absolute;
  left: 0;
}

.hamburger-icon::before { top: -7px; }
.hamburger-icon::after { top: 7px; }

.hamburger-icon--open {
  background-color: transparent;
}

.hamburger-icon--open::before {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-icon--open::after {
  transform: rotate(-45deg) translate(5px, -5px);
}

.mobile-drawer {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  max-width: 80vw;
  background-color: var(--color-bg);
  box-shadow: var(--shadow-xl);
  z-index: 1001;
  padding: var(--space-6) var(--space-3);
  display: flex;
  flex-direction: column;
}

.mobile-drawer__nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: var(--space-4);
}

.mobile-drawer__link {
  padding: 0.875rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text);
  border-radius: var(--radius-md);
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

.mobile-drawer__link:hover,
.mobile-drawer__link--active {
  background-color: var(--color-bg-tint);
  color: var(--color-accent);
}

.mobile-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 1000;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: transform var(--transition-base);
}

.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(-100%);
}

.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity var(--transition-base);
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

@media (max-width: 1023px) {
  .navbar__links { display: none; }
  .navbar__cta { display: none; }
  .hamburger-btn { display: flex; }
  .navbar__inner { margin: 0 var(--space-2); }
}

@media (min-width: 1024px) {
  .navbar__inner {
    margin: 0 5%;
  }
}
</style>
