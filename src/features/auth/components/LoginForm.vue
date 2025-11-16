<script setup>
import { ref, computed } from "vue";

import { VButton, VInput, VLoader } from "@/shared/ui";

const props = defineProps({
  emailErrorText: {
    type: String,
    default: "Invalid email format",
  },
  passwordErrorText: {
    type: String,
    default: "Password too short",
  },
  buttonText: {
    type: String,
    default: "Login",
  },
});

const email = ref("");
const password = ref("");
const loading = ref(false);

const emailTouched = ref(false);
const passwordTouched = ref(false);

const emailValid = computed(() => /\S+@\S+\.\S+/.test(email.value));
const passwordValid = computed(() => password.value.length >= 6);

const formValid = computed(() => emailValid.value && passwordValid.value);

const handleLogin = () => {
  if (!formValid.value) {
    emailTouched.value = true;
    passwordTouched.value = true;
    return;
  }

  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    alert(`Logged in as ${email.value}`);
  }, 2000);
};
</script>

<template>
  <form
    class="flex flex-col gap-4 w-full max-w-sm mx-auto"
    @submit.prevent="handleLogin"
  >
    <VInput
      v-model="email"
      label="Username2"
      variant="primary"
      placeholder="Enter your email"
      support-text="Email must contain at least @"
      @blur="emailTouched = true"
    >
      <template #support />
      <template #error>
        <span
          v-if="emailTouched && !emailValid"
          class="text-red-500"
        >
          {{ props.emailErrorText }}
        </span>
      </template>
    </VInput>

    <VInput
      v-model="password"
      variant="primary"
      label="Password2"
      placeholder="Enter your password"
      type="password"
      support-text="Password must contain at least 6 characters"
      @blur="passwordTouched = true"
    >
      <template #support />
      <template #error>
        <span
          v-if="passwordTouched && !passwordValid"
          class="text-red-500"
        >
          {{ props.passwordErrorText }}
        </span>
      </template>
    </VInput>

    <VButton
      variant="primary"
      :loading="loading"
      :disabled="!formValid || loading"
      icon="log-in"
      text="Login"
      type="submit"
    >
      <template #text>
        <span v-if="!loading">Login</span>
        <span v-else>Loading...</span>
      </template>

      <VLoader v-if="loading" />
    </VButton>
  </form>
</template>
