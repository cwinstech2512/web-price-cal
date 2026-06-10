import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as authService from '@/services/authService'

const STORAGE_KEY = 'nb_auth_user'

function loadUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref(loadUser())
  const isLoading = ref(false)
  const error = ref('')

  const isAuthenticated = computed(() => user.value !== null)

  const persist = (authUser) => {
    if (authUser) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(authUser))
    } else {
      localStorage.removeItem(STORAGE_KEY)
    }
  }

  const login = async (payload) => {
    isLoading.value = true
    error.value = ''
    try {
      const authUser = await authService.login(payload)
      user.value = authUser
      persist(authUser)
      return authUser
    } catch (err) {
      error.value = err.message || '登入失敗'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    user.value = null
    persist(null)
  }

  return {
    user,
    isLoading,
    error,
    isAuthenticated,
    login,
    logout,
  }
})
