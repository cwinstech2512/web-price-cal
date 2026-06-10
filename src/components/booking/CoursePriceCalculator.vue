<template>
  <div class="calculator-container px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
    <div class="calculator-card w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100">
      <header class="calculator-card__header bg-emerald-800 px-6 py-8 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white tracking-widest">課程預約與試算</h2>
        <p class="text-emerald-100 mt-2 text-sm font-light tracking-wide">Course Booking & Price Estimate</p>
      </header>

      <form class="calculator-card__form p-6 md:p-8 space-y-8" @submit.prevent="handleSubmit">
        <section class="form-section">
          <h3 class="text-lg font-semibold text-stone-800 border-b pb-2 border-stone-200 mb-4 flex items-center gap-2">
            <span class="bg-emerald-100 text-emerald-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
            選擇您的專屬課程
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormSelect
              id="category"
              label="保養需求"
              v-model="form.categoryId"
              :options="categories"
              placeholder="請選擇您的需求"
              required
            />
            <FormSelect
              id="course"
              label="精選課程"
              v-model="form.courseId"
              :options="filteredCourses"
              placeholder="請先選擇保養需求"
              :disabled="!form.categoryId"
              required
            />
          </div>
        </section>

        <section class="form-section">
          <h3 class="text-lg font-semibold text-stone-800 border-b pb-2 border-stone-200 mb-4 flex items-center gap-2">
            <span class="bg-emerald-100 text-emerald-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
            聯絡資訊
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormInput id="name" label="姓名" v-model="form.name" placeholder="請輸入您的姓名" required />
            <FormInput id="phone" label="手機號碼" type="tel" v-model="form.phone" placeholder="例如：0912345678" required />
          </div>
        </section>

        <section class="form-section bg-stone-50 p-6 rounded-xl border border-stone-200 mt-6">
          <PriceDisplay :price="estimatedPrice" :is-updating="isSubmitting" />
          <SubmitButton
            text="立即確認預約"
            loading-text="預約處理中..."
            :is-loading="isSubmitting"
            :disabled="!isFormValid"
          />
        </section>
      </form>
    </div>
  </div>
</template>

<script setup>
import FormSelect from '@/components/ui/FormSelect.vue'
import FormInput from '@/components/ui/FormInput.vue'
import SubmitButton from '@/components/ui/SubmitButton.vue'
import PriceDisplay from '@/components/ui/PriceDisplay.vue'
import { useBookingForm } from '@/composables/useBookingForm'

const {
  categories,
  form,
  filteredCourses,
  estimatedPrice,
  isFormValid,
  isSubmitting,
  handleSubmit,
} = useBookingForm()
</script>
