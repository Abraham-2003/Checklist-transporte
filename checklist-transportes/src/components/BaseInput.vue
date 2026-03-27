<template>
  <div class="w-full">
    <label class="block text-sm font-medium text-gray-600 mb-1">
      {{ label }}
    </label>

    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white 
             focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent
             transition"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
defineProps({
  label: String,
  type: { type: String, default: 'text' },
  modelValue: String,
  placeholder: String
})
</script>