<script setup>
const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-900",
  secondary: "bg-gray-600 text-white hover:bg-gray-900",
  success: "bg-green-600 text-white hover:bg-green-900",
  danger: "bg-red-600 text-white hover:bg-red-900",
};

defineProps({
  variant: {
    type: String,
    default: "primary",
  },
});
</script>

<template>
  <button
    class="px-4 py-2 min-h-[48px] rounded-lg
    font-semibold flex items-center justify-center gap-2 transition-all duration-200"
    :class="[variants[variant]]"
  >
    <span
      v-if="$slots.icon"
      class="flex items-center"
    >
      <slot name="icon" />
    </span>

    <span>
      <slot name="text">BUTTON</slot>
    </span>

    <span
      v-if="$slots.loader"
      class="ml-2"
    >
      <slot name="loader" />
    </span>
  </button>
</template>
