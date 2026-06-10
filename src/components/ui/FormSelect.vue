<template>
  <div class="form-group flex flex-col space-y-1.5">
    <label :for="id" class="text-sm font-medium text-stone-700">
      {{ label }} <span v-if="required" class="text-rose-500">*</span>
    </label>
    <select
      :id="id"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="block w-full rounded-lg border-stone-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 transition-colors py-2.5 px-3 border bg-white text-stone-700 disabled:bg-stone-50 disabled:text-stone-400 disabled:cursor-not-allowed"
      :disabled="disabled"
      :required="required"
    >
      <option value="" disabled>{{ placeholder }}</option>
      <option v-for="option in options" :key="option.id || option.value" :value="option.id || option.value">
        {{ option.name || option.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  modelValue: { type: [String, Number], default: '' },
  options: { type: Array, required: true },
  placeholder: { type: String, default: '請選擇' },
  disabled: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
})
defineEmits(['update:modelValue'])
</script>
