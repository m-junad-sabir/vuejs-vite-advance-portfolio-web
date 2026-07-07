import { ref, watch } from 'vue'

const theme = ref('light')
const STORAGE_KEY = 'seher-theme'

function applyTheme(value) {
  document.documentElement.setAttribute('data-theme', value)
}

function initTheme() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark' || stored === 'light') {
    theme.value = stored
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme.value = 'dark'
  }
  applyTheme(theme.value)
}

export function useTheme() {
  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  watch(theme, (value) => {
    localStorage.setItem(STORAGE_KEY, value)
    applyTheme(value)
  })

  return { theme, toggle, initTheme }
}
