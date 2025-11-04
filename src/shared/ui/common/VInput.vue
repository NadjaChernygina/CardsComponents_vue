<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: { type: String, default: "Enter text..." },
  errorText: { type: String, default: "" },
  type: { type: String, default: "text" },
  variant: {
    type: String,
    default: "primary", // primary | secondary | minimal
  },
});

defineEmits(["update:modelValue", "blur"]);

const variantClasses = {
  primary:
    "border border-gray-400 focus:border-blue-500 focus:ring-blue-300 bg-white text-gray-800 shadow-sm",
  secondary:
    "border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-300 shadow-sm",
  minimal:
    "border border-transparent bg-gray-100 text-gray-700 focus:border-gray-400 focus:bg-white shadow-sm",
};
</script>

<template>
  <div class="flex flex-col gap-1 w-full pb-6">
    <!-- Label slot -->
    <label
      v-if="$slots.label"
      class="text-gray-700 dark:text-gray-200 font-medium"
    >
      <slot name="label" />
    </label>

    <input
      :placeholder="placeholder"
      :value="modelValue"
      :type="type"
      :class="[
        'w-full rounded-lg px-4 py-2 outline-none transition-all duration-200 focus:ring-2',
        variantClasses[variant],
      ]"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
    >

    <p
      v-if="$slots.error"
      class="text-red-500 text-sm"
    >
      <slot name="error" />
    </p>
    <p
      v-else-if="errorText"
      class="text-red-500 text-sm"
    >
      {{ errorText }}
    </p>
  </div>
</template>
