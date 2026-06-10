<template>
  <div class="app-wrapper min-h-screen bg-white flex flex-col">
    <AppHeader @open-login="showLoginModal = true" />

    <main class="pt-16 flex-1">
      <RouterView v-slot="{ Component, route }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>

    <AppFooter />

    <LoginModal v-model:is-visible="showLoginModal" @login-success="onLoginSuccess" />
    <ToastContainer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import LoginModal from '@/components/auth/LoginModal.vue'
import ToastContainer from '@/components/ui/ToastContainer.vue'
import { useToast } from '@/composables/useToast'

const showLoginModal = ref(false)
const { success } = useToast()

const onLoginSuccess = () => {
  success('歡迎回來！登入成功。')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
