<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: { type: String, default: "Enter text..." },
  errorText: { type: String, default: "" },
  type: { type: String, default: "text" },
  label: { type: String, default: "" },
  supportText: { type: String, default: "" },
  variant: {
    type: String,
    default: "primary", // primary | secondary | minimal
  },
});

defineEmits(["update:modelValue"]);

const showPassword = ref(false);

const inputType = computed(() => {
  if (props.type !== "password") return props.type;
  return showPassword.value ? "text" : "password";
});

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
  <div class="flex flex-col gap-1 w-full pb-6 relative">
    <!-- Label -->
    <label
      v-if="props.label || $slots.label"
      class="text-gray-700 dark:text-gray-200 font-medium"
    >
      <slot name="label">{{ props.label }}</slot>
    </label>

    <!-- Input wrapper -->
    <div class="relative">
      <input
        v-bind="$attrs"
        :placeholder="props.placeholder"
        :value="props.modelValue"
        :type="inputType"
        :class="[
          'w-full rounded-lg px-4 py-2 outline-none transition-all duration-200 focus:ring-2',
          variantClasses[props.variant],
        ]"
        @input="$emit('update:modelValue', $event.target.value)"
      >

      <!-- toggle password button -->
      <button
        v-if="props.type === 'password'"
        type="button"
        class="absolute right-3 top-6 -translate-y-1/2 text-gray-500"
        @click="showPassword = !showPassword"
      >
        <VueFeather :type="showPassword ? 'eye-off' : 'eye'" />
      </button>
    </div>

    <!-- error text -->
    <p
      v-if="$slots.error"
      class="text-red-500 text-sm absolute bottom-[0] left-[0]"
    >
      <slot name="error" />
    </p>
    <p
      v-else-if="props.errorText"
      class="text-red-500 text-sm absolute bottom-[0] left-[0]"
    >
      {{ props.errorText }}
    </p>

    <!-- Support text -->
    <p
      v-else-if="$slots.support"
      class="text-gray-500 text-sm"
    >
      <slot name="support" />
    </p>
    <p class="text-gray-500 text-sm">
      {{ props.supportText }}
    </p>
  </div>
</template>

