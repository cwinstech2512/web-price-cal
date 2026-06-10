<template>
  <div class="form-group flex flex-col space-y-1.5">
    <label :for="id" class="text-sm font-medium text-stone-700">
      {{ label }} <span v-if="required" class="text-rose-500">*</span>
    </label>
    <input
      :type="type"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="block w-full rounded-lg border-stone-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 py-2.5 px-3 border text-stone-700 placeholder-stone-400 transition-colors"
      :placeholder="placeholder"
      :required="required"
    />
  </div>
</template>

<script setup>
defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  modelValue: { type: [String, Number], default: '' },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  required: { type: Boolean, default: false },
})
defineEmits(['update:modelValue'])
</script>
