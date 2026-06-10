<template>
  <div class="app-wrapper min-h-screen bg-white">
    <!-- 固定在頂部的導覽列 -->
    <header class="fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md shadow-sm z-40 flex items-center justify-between px-6 md:px-12">
      <div class="font-bold text-xl text-stone-800 tracking-wider">
        <span class="text-emerald-600">N</span>atural<span class="text-emerald-600">B</span>eauty
      </div>
      <div class="flex items-center gap-4">
        <!-- 導向我們之前做的價格試算表 -->
        <button 
          @click="currentView = 'calculator'"
          class="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors"
          :class="{ 'text-emerald-600 font-bold': currentView === 'calculator' }"
        >
          預約試算
        </button>
        <button 
          @click="currentView = 'home'"
          class="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors"
          :class="{ 'text-emerald-600 font-bold': currentView === 'home' }"
        >
          回首頁
        </button>
        <button 
          @click="showLoginModal = true"
          class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm rounded-full font-medium shadow transition-colors"
        >
          會員登入
        </button>
      </div>
    </header>

    <!-- 內容切換區 (加上 16px top padding 避免被 Header 蓋住) -->
    <main class="pt-16">
      <Transition name="fade" mode="out-in">
        <HomePage v-if="currentView === 'home'" />
        <div v-else-if="currentView === 'calculator'" class="py-12 bg-stone-50">
          <CoursePriceCalculator />
        </div>
      </Transition>
    </main>

    <!-- 登入彈窗組件 -->
    <LoginModal 
      v-model:isVisible="showLoginModal" 
      @login-success="onLoginSuccess"
    />
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HomePage from './components/HomePage.vue'
import CoursePriceCalculator from './components/CoursePriceCalculator.vue'
import LoginModal from './components/LoginModal.vue'

// 控制當前顯示的視圖 ('home' | 'calculator')
const currentView = ref('home')

// 控制登入彈窗顯示與否的響應式變數
const showLoginModal = ref(false)

// 登入成功後的回呼函式
const onLoginSuccess = () => {
  console.log('使用者已成功登入！')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>