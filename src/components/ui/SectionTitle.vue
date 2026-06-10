<template>
  <div class="text-center mb-12">
    <h2 class="text-3xl md:text-4xl font-bold text-stone-800 tracking-wider">
      {{ title }}
      <span v-if="subtitle" class="text-xl md:text-2xl text-emerald-600/60 font-light ml-2">{{ subtitle }}</span>
    </h2>
    <div class="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>
