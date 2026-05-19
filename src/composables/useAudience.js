import { ref, readonly } from 'vue'

const audience = ref(localStorage.getItem('trumpf-audience') || 'operator')

export function useAudience() {
  function setAudience(value) {
    audience.value = value
    localStorage.setItem('trumpf-audience', value)
  }

  return {
    audience: readonly(audience),
    setAudience
  }
}
