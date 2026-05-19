import { ref, readonly } from 'vue'

const VALID_AUDIENCES = ['operator', 'management', 'quality']
const stored = localStorage.getItem('trumpf-audience')
const audience = ref(VALID_AUDIENCES.includes(stored) ? stored : 'operator')

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
