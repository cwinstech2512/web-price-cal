import { ref, reactive, computed, watch } from 'vue'
import { CATEGORIES, COURSES } from '@/constants/courses'
import { submitBooking } from '@/services/bookingService'
import { useToast } from './useToast'

/**
 * 課程預約表單邏輯 composable
 * 將表單狀態、驗證、提交從元件中抽離
 */
export function useBookingForm() {
  const { success, error } = useToast()

  const form = reactive({
    categoryId: '',
    courseId: '',
    name: '',
    phone: '',
  })

  const isSubmitting = ref(false)

  const filteredCourses = computed(() => {
    if (!form.categoryId) return []
    return COURSES.filter((course) => course.categoryId === form.categoryId)
  })

  const estimatedPrice = computed(() => {
    if (!form.courseId) return 0
    const selected = COURSES.find((course) => course.id === form.courseId)
    return selected?.price ?? 0
  })

  const isFormValid = computed(() => {
    return (
      form.categoryId !== '' &&
      form.courseId !== '' &&
      form.name.trim().length > 0 &&
      form.phone.trim().length >= 8
    )
  })

  watch(
    () => form.categoryId,
    (newVal, oldVal) => {
      if (oldVal !== '') form.courseId = ''
    }
  )

  const resetForm = () => {
    form.categoryId = ''
    form.courseId = ''
    form.name = ''
    form.phone = ''
  }

  const handleSubmit = async () => {
    if (!isFormValid.value || isSubmitting.value) return

    isSubmitting.value = true
    try {
      const result = await submitBooking({
        ...form,
        price: estimatedPrice.value,
      })
      success(`預約成功！訂單編號 ${result.orderId}，客服將盡快與您聯繫。`)
      resetForm()
    } catch {
      error('系統忙碌中，請稍後再試。')
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    categories: CATEGORIES,
    form,
    filteredCourses,
    estimatedPrice,
    isFormValid,
    isSubmitting,
    handleSubmit,
    resetForm,
  }
}
