<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const show = ref(false)
const STORAGE_KEY = 'seher-cookie-consent'

function accept() {
  localStorage.setItem(STORAGE_KEY, 'accepted')
  show.value = false
}

function decline() {
  localStorage.setItem(STORAGE_KEY, 'declined')
  show.value = false
}

onMounted(() => {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) {
    show.value = true
  }
})
</script>

<template>
  <Transition name="slide-up">
    <div v-if="show" class="cookie-consent" role="dialog" aria-label="Cookie consent">
      <div class="cookie-consent__content">
        <p>
          We use cookies to improve your experience. By using this site, you agree to our
          <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>.
        </p>
      </div>
      <div class="cookie-consent__actions">
        <button class="btn btn--outline cookie-consent__btn" @click="decline">Decline</button>
        <button class="btn btn--primary cookie-consent__btn" @click="accept">Accept All</button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.cookie-consent {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1200;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  box-shadow: var(--shadow-lg);
  padding: var(--space-3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.cookie-consent__content {
  flex: 1;
  min-width: 280px;
}

.cookie-consent__content p {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.cookie-consent__content a {
  color: var(--color-accent);
  font-weight: 600;
}

.cookie-consent__actions {
  display: flex;
  gap: var(--space-2);
}

.cookie-consent__btn {
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform var(--transition-base), opacity var(--transition-base);
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

@media (max-width: 600px) {
  .cookie-consent {
    flex-direction: column;
    text-align: center;
  }
  .cookie-consent__actions {
    width: 100%;
  }
  .cookie-consent__btn {
    flex: 1;
  }
}
</style>
