<template>
  <div class="calculator-container min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
    <div class="calculator-card w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100">
      
      <!-- 卡片標頭 -->
      <header class="calculator-card__header bg-emerald-800 px-6 py-8 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white tracking-widest">課程預約與試算</h2>
        <p class="text-emerald-100 mt-2 text-sm font-light tracking-wide">Course Booking & Price Estimate</p>
      </header>

      <!-- 表單區塊 -->
      <form class="calculator-card__form p-6 md:p-8 space-y-8" @submit.prevent="handleSubmit">
        
        <!-- 區段 1: 服務選擇 -->
        <section class="form-section">
          <h3 class="text-lg font-semibold text-stone-800 border-b pb-2 border-stone-200 mb-4 flex items-center gap-2">
            <span class="bg-emerald-100 text-emerald-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
            選擇您的專屬課程
          </h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormSelect
              id="category"
              label="保養需求"
              v-model="formState.categoryId"
              :options="mockCategories"
              placeholder="請選擇您的需求"
              required
            />

            <FormSelect
              id="course"
              label="精選課程"
              v-model="formState.courseId"
              :options="filteredCourses"
              placeholder="請先選擇保養需求"
              :disabled="!formState.categoryId"
              required
            />
          </div>
        </section>

        <!-- 區段 2: 聯絡資訊 -->
        <section class="form-section">
          <h3 class="text-lg font-semibold text-stone-800 border-b pb-2 border-stone-200 mb-4 flex items-center gap-2">
             <span class="bg-emerald-100 text-emerald-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
            聯絡資訊
          </h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormInput
              id="name"
              label="姓名"
              v-model="formState.name"
              placeholder="請輸入您的姓名"
              required
            />
            
            <FormInput
              id="phone"
              label="手機號碼"
              type="tel"
              v-model="formState.phone"
              placeholder="例如：0912345678"
              required
            />
          </div>
        </section>

        <!-- 區段 3: 價格試算與提交 -->
        <section class="form-section bg-stone-50 p-6 rounded-xl border border-stone-200 mt-6">
          <PriceDisplay :price="estimatedPrice" />

          <SubmitButton
            text="立即確認預約"
            loadingText="預約處理中..."
            :isLoading="isSubmitting"
            :disabled="!isFormValid"
          />
        </section>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import FormSelect from './FormSelect.vue'
import FormInput from './FormInput.vue'
import SubmitButton from './SubmitButton.vue'
import PriceDisplay from './PriceDisplay.vue'

const mockCategories = [
  { id: 'cat_01', name: 'AI科技美容課程' },
  { id: 'cat_02', name: '專業手技 SPA' },
  { id: 'cat_03', name: '美體輕盈課程' }
]

const mockCourses = [
  { id: 'course_001', categoryId: 'cat_01', name: '胜肽水光護理課程', price: 3500 },
  { id: 'course_002', categoryId: 'cat_01', name: 'NB-1晶鑽肽彈力護理', price: 4200 },
  { id: 'course_003', categoryId: 'cat_02', name: '全身芳香精油深層按摩', price: 2800 },
  { id: 'course_004', categoryId: 'cat_02', name: '瑞典式肌肉放鬆護理', price: 3200 },
  { id: 'course_005', categoryId: 'cat_03', name: '下半身排導輕盈美體', price: 2500 }
]

const formState = reactive({
  categoryId: '',
  courseId: '',
  name: '',
  phone: ''
})

const isSubmitting = ref(false)

const filteredCourses = computed(() => {
  if (!formState.categoryId) return []
  return mockCourses.filter(course => course.categoryId === formState.categoryId)
})

const estimatedPrice = computed(() => {
  if (!formState.courseId) return 0
  const selectedCourse = mockCourses.find(course => course.id === formState.courseId)
  return selectedCourse ? selectedCourse.price : 0
})

const isFormValid = computed(() => {
  return formState.categoryId !== '' && 
         formState.courseId !== '' && 
         formState.name.trim().length > 0 && 
         formState.phone.trim().length >= 8
})

watch(() => formState.categoryId, (newVal, oldVal) => {
  if (oldVal !== '') {
    formState.courseId = ''
  }
})

const handleSubmit = async () => {
  if (!isFormValid.value) return
  
  isSubmitting.value = true
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1500))
    alert(`🎉 預約申請成功！\n\n預約人：${formState.name}\n聯絡電話：${formState.phone}\n專屬優惠價：NT$ ${estimatedPrice.value.toLocaleString('zh-TW')}\n\n客服人員將盡快與您聯繫。`)
    
    formState.categoryId = ''
    formState.courseId = ''
    formState.name = ''
    formState.phone = ''
  } catch (error) {
    alert('系統忙碌中，請稍後再試。')
  } finally {
    isSubmitting.value = false
  }
}
</script>