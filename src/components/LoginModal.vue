<template>
  <!-- 遮罩與彈窗容器 (加入 Vue 的 Transition 實現簡單的淡入淡出動效) -->
  <Transition name="fade">
    <div v-if="isVisible" @click="closeModal" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      
      <!-- 彈窗內容區塊 -->
      <div 
        class="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all"
        @click.stop
      >
        <!-- 標頭 -->
        <header class="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-stone-50/50">
          <h4 class="text-xl font-bold text-stone-800">會員登入</h4>
          <button 
            @click="closeModal"
            class="text-stone-400 hover:text-stone-600 transition-colors p-1 rounded-full hover:bg-stone-200"
            aria-label="Close"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        <!-- 內容區 -->
        <div class="p-6 md:p-8">
          
          <!-- 錯誤提示訊息 (有錯誤時顯示) -->
          <Transition name="slide-down">
            <div v-if="errorMessage" class="mb-6 p-3 rounded-lg bg-rose-50 text-rose-600 text-sm font-medium flex items-center gap-2">
              <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              {{ errorMessage }}
            </div>
          </Transition>

          <!-- 登入表單 -->
          <form @submit.prevent="handleLogin" class="space-y-5">
            
            <!-- 帳號輸入框 -->
            <div class="space-y-1.5">
              <label for="account" class="block text-sm font-medium text-stone-700">帳號</label>
              <input 
                id="account"
                type="text" 
                v-model="form.account" 
                class="block w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 placeholder-stone-400 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
                placeholder="請輸入帳號"
                required
              />
            </div>

            <!-- 密碼輸入框 -->
            <div class="space-y-1.5">
              <label for="password" class="block text-sm font-medium text-stone-700">密碼</label>
              <input 
                id="password"
                type="password" 
                v-model="form.password" 
                class="block w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 placeholder-stone-400 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
                placeholder="請輸入密碼"
                required
              />
            </div>

            <!-- 驗證碼區塊 (重構原有結構，使其更乾淨且響應式) -->
            <div class="space-y-1.5">
              <label for="authcode" class="block text-sm font-medium text-stone-700">驗證碼</label>
              <div class="flex flex-col sm:flex-row gap-3">
                <input 
                  id="authcode"
                  type="text" 
                  v-model="form.authcode" 
                  class="block w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 placeholder-stone-400 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
                  placeholder="請輸入驗證碼"
                  required
                />
                
                <!-- 驗證碼圖片與重新整理按鈕 -->
                <button 
                  type="button"
                  @click="refreshAuthCode"
                  class="flex items-center justify-center h-[50px] sm:w-[140px] px-3 bg-white border border-stone-200 rounded-xl hover:bg-stone-50 transition-colors flex-shrink-0 relative group overflow-hidden"
                  title="點擊重新整理驗證碼"
                >
                  <!-- 模擬的驗證碼圖片 -->
                  <img 
                    v-if="authImgSrc" 
                    :src="authImgSrc" 
                    alt="驗證碼" 
                    class="h-full object-cover rounded-lg group-hover:opacity-50 transition-opacity"
                  />
                  <!-- 重整 Icon，Hover 時顯示 -->
                  <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900/10">
                    <svg class="w-6 h-6 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            <!-- 登入按鈕 -->
            <div class="pt-4">
              <button 
                type="submit" 
                class="w-full flex justify-center items-center py-3.5 px-4 rounded-xl shadow-md text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 transform active:scale-[0.98]"
                :disabled="isLoading"
              >
                <!-- Loading 動畫 -->
                <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ isLoading ? '登入中...' : '登入' }}
              </button>
            </div>

            <!-- 其他連結 -->
            <div class="flex justify-center pt-2">
              <a href="#" class="text-sm font-medium text-stone-500 hover:text-emerald-600 transition-colors border-b border-transparent hover:border-emerald-600 pb-0.5">
                忘記密碼？
              </a>
            </div>

          </form>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

// 定義 Props 與 Emits (控制彈窗顯示)
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false // 預設改為 false，由外部控制
  }
})

const emit = defineEmits(['update:isVisible', 'login-success'])

// 表單狀態
const form = reactive({
  account: '',
  password: '',
  authcode: ''
})

// UI 狀態
const isLoading = ref(false)
const errorMessage = ref('')
const authImgSrc = ref('')

// 關閉彈窗
const closeModal = () => {
  emit('update:isVisible', false)
  // 也可以在這裡重置表單
  resetForm()
}

// 重置表單
const resetForm = () => {
  form.account = ''
  form.password = ''
  form.authcode = ''
  errorMessage.value = ''
}

// 模擬重新獲取驗證碼圖片
const refreshAuthCode = () => {
  // 實際應用中這裡會是呼叫 API 獲取新的圖片 URL 或 base64
  // 這裡我們用一個時間戳來模擬 URL 變更，強制重新載入圖片
  // 您可以將這個 URL 換成您實際的 /bin/authimg.php 邏輯
  authImgSrc.value = `https://dummyimage.com/140x50/e5e7eb/6b7280.png&text=1234+${new Date().getTime()}`
}

// 處理登入提交
const handleLogin = async () => {
  // 基礎驗證
  if (!form.account || !form.password || !form.authcode) {
    errorMessage.value = '請填寫完整登入資訊'
    return
  }

  isLoading.value = true
  errorMessage.value = ''

  try {
    // 模擬 API 請求 (延遲 1 秒)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // 模擬驗證失敗 (可以改為 true 測試成功)
    const isSuccess = Math.random() > 0.3 

    if (isSuccess) {
      alert('登入成功！')
      emit('login-success')
      closeModal()
    } else {
      errorMessage.value = '帳號、密碼或驗證碼錯誤，請再試一次。'
      refreshAuthCode() // 失敗時通常會重整驗證碼
      form.authcode = '' // 清空驗證碼讓用戶重填
    }
  } catch (error) {
    errorMessage.value = '系統發生錯誤，請稍後再試。'
  } finally {
    isLoading.value = false
  }
}

// 組件掛載時初始化驗證碼
onMounted(() => {
  refreshAuthCode()
})
</script>

<style scoped>
/* Vue Transition 動畫樣式 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 內容區塊彈出動畫 (搭配 fade) */
.fade-enter-active .transform,
.fade-leave-active .transform {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); /* 帶點彈性的貝茲曲線 */
}

.fade-enter-from .transform {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}

.fade-leave-to .transform {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}

/* 錯誤提示下滑動畫 */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>