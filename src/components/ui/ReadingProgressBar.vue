<script setup>
import { useScrollProgress } from '@/composables/useScrollProgress'

const { progress } = useScrollProgress()
</script>

<template>
  <div class="reading-progress" :style="{ width: progress + '%' }" aria-hidden="true"></div>
</template>

<style scoped>
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--color-accent), var(--color-accent-light));
  z-index: 1100;
  transition: width 0.1s linear;
}
</style>
