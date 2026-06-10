<template>
  <header class="fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md shadow-sm z-40 flex items-center justify-between px-6 md:px-12">
    <RouterLink to="/" class="font-bold text-xl text-stone-800 tracking-wider hover:opacity-80 transition-opacity">
      <span class="text-emerald-600">N</span>atural<span class="text-emerald-600">B</span>eauty
    </RouterLink>

    <nav class="flex items-center gap-1 md:gap-4">
      <RouterLink
        v-for="link in navLinks"
        :key="link.name"
        :to="link.to"
        class="px-3 py-2 text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors rounded-lg"
        :class="{ '!text-emerald-600 font-bold': isNavActive(link.to) }"
      >
        {{ link.label }}
      </RouterLink>

      <template v-if="authStore.isAuthenticated">
        <span class="hidden sm:inline text-sm text-stone-500">
          嗨，{{ authStore.user?.name }}
        </span>
        <button
          @click="authStore.logout()"
          class="px-4 py-2 text-sm text-stone-600 hover:text-rose-600 transition-colors"
        >
          登出
        </button>
      </template>
      <button
        v-else
        @click="$emit('open-login')"
        class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm rounded-full font-medium shadow transition-colors"
      >
        會員登入
      </button>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

defineEmits(['open-login'])

const route = useRoute()
const authStore = useAuthStore()

const isNavActive = (to) => (to === '/' ? route.path === '/' : route.path === to)

const navLinks = [
  { name: 'home', to: '/', label: '首頁' },
  { name: 'calculator', to: '/calculator', label: '預約試算' },
  { name: 'showcase', to: '/showcase', label: '技術展示' },
]
</script>
