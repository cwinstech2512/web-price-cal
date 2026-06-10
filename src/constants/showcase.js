export const TECH_STACK = [
  { name: 'Vue 3.4', category: 'Framework', description: 'Composition API + `<script setup>` 語法糖' },
  { name: 'Vue Router 4', category: 'Routing', description: 'Lazy-loaded routes、scroll behavior、meta guards' },
  { name: 'Pinia', category: 'State', description: '模組化 store、Setup Store 風格、持久化認證狀態' },
  { name: 'Vite 5', category: 'Build', description: 'ESM 原生開發、path alias、GitHub Pages 部署' },
  { name: 'Tailwind CSS', category: 'Styling', description: 'Utility-first、響應式設計、表單插件' },
]

export const ARCHITECTURE_PATTERNS = [
  {
    title: 'Composables 邏輯抽離',
    description: '將輪播、表單驗證、Toast 通知等可複用邏輯封裝為 composable，保持元件精簡。',
    files: ['useCarousel.js', 'useBookingForm.js', 'useToast.js'],
  },
  {
    title: 'Service Layer 抽象',
    description: 'API 呼叫集中於 services 層，元件與 store 只關心業務結果，方便 mock 與替換。',
    files: ['authService.js', 'bookingService.js'],
  },
  {
    title: '元件分層設計',
    description: 'layout / ui / feature 三層結構，單向資料流 + v-model 雙向綁定。',
    files: ['AppLayout.vue', 'FormInput.vue', 'LoginModal.vue'],
  },
  {
    title: '漸進式狀態管理',
    description: '本地 reactive 處理表單，Pinia 管理跨頁面認證，避免過度全域化。',
    files: ['auth.js', 'booking.js'],
  },
]

export const CODE_HIGHLIGHTS = [
  { label: '路由懶加載', code: "component: () => import('@/views/CalculatorView.vue')" },
  { label: 'Computed 衍生狀態', code: 'const filteredCourses = computed(() => ...)' },
  { label: 'Watch 聯動重置', code: "watch(() => form.categoryId, () => form.courseId = '')" },
  { label: 'defineModel', code: 'const isVisible = defineModel("isVisible", { type: Boolean })' },
]
