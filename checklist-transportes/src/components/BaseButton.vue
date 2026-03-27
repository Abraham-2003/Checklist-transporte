<template>
  <button
    class="w-full bg-gray-900 text-white py-2.5 rounded-lg font-medium 
           hover:bg-gray-800 transition duration-200 
           active:scale-[0.98]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>