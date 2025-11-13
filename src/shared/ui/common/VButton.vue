<script setup>
import { ref, computed } from "vue";
import VueFeather from "vue-feather";

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-900",
  secondary: "bg-gray-600 text-white hover:bg-gray-900",
  success: "bg-green-600 text-white hover:bg-green-900",
  danger: "bg-red-600 text-white hover:bg-red-900",
};

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  text: {
    type: String,
    default: "BUTTON",
  },
  icon: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "button",
  },
});

const isLoading = ref(false);

const handleClick = () => {
  if (isLoading.value) return;
  isLoading.value = true;

  // просто симуляція якоїсь дії
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};
const buttonDisabled = computed(() => [
  props.loading ? "opacity-70 cursor-not-allowed" : "",
]);
</script>

<template>
  <button
    :type="props.type"
    :disabled="props.loading"
    :class="[
      // eslint-disable-next-line style/max-len
      'px-4 py-2 min-h-[48px] rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200',
      variants[props.variant],
      buttonDisabled
    ]"
    @click="handleClick"
  >
    <span
      v-if="props.icon && !isLoading"
      class="flex items-center"
    >
      <VueFeather
        :type="props.icon"
        size="20"
      />
    </span>

    <span
      v-if="isLoading"
      class="animate-spin flex items-center"
    >
      <VueFeather
        type="loader"
        size="20"
      />
    </span>

    <span>{{ props.text }}</span>
  </button>
</template>
