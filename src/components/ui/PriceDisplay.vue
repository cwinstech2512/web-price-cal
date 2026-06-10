<template>
  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-6 gap-2">
    <span class="text-stone-600 font-medium tracking-wide">{{ label }}</span>
    <div
      class="text-3xl font-bold text-emerald-700 transition-all duration-500"
      :class="{ 'opacity-50 scale-95': isUpdating }"
    >
      <span class="text-lg font-normal mr-1">NT$</span>{{ formattedPrice }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  price: { type: Number, required: true },
  label: { type: String, default: '預估專屬優惠價' },
  isUpdating: { type: Boolean, default: false },
})

const formattedPrice = computed(() => props.price.toLocaleString('zh-TW'))
</script>
