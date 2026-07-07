<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import TrustBar from '@/components/layout/TrustBar.vue'
import BackToTop from '@/components/ui/BackToTop.vue'
import WhatsAppButton from '@/components/ui/WhatsAppButton.vue'
import CookieConsent from '@/components/ui/CookieConsent.vue'
import PagePreloader from '@/components/ui/PagePreloader.vue'
import { useTheme } from '@/composables/useTheme'

const { initTheme } = useTheme()
const loading = ref(true)

onMounted(() => {
  initTheme()
  setTimeout(() => { loading.value = false }, 600)
})
</script>

<template>
  <PagePreloader :show="loading" />
  <a href="#main" class="skip-link">Skip to content</a>
  <AppNavbar />
  <main id="main">
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
  <TrustBar />
  <AppFooter />
  <BackToTop />
  <WhatsAppButton />
  <CookieConsent />
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
