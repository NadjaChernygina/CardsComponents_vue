<script setup>
import { ref, computed } from "vue";

import { VButton, VInput, VLoader } from "@/shared/ui/common";

const email = ref("");
const password = ref("");
const loading = ref(false);

const emailTouched = ref(false);
const passwordTouched = ref(false);

const emailValid = computed(() => /\S+@\S+\.\S+/.test(email.value));
const passwordValid = computed(() => password.value.length >= 6);

const handleLogin = () => {
  if (!emailValid.value || !passwordValid.value) return;

  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    alert(`Logged in as ${email.value}`);
  }, 2000);
};
</script>

<template>
  <form class="flex flex-col gap-4 w-full max-w-sm mx-auto">
    <VInput
      v-model="email"
      variant="primary"
      placeholder="Enter your email"
      @blur="emailTouched = true"
    >
      <template #label>
        Email
      </template>
      <template #error>
        <span
          v-if="emailTouched && !emailValid"
          class="text-red-500"
        >
          Invalid email format
        </span>
      </template>
    </VInput>

    <VInput
      v-model="password"
      variant="primary"
      placeholder="Enter your password"
      type="password"
      @blur="passwordTouched = true"
    >
      <template #label>
        Password
      </template>

      <template #error>
        <span
          v-if="passwordTouched && !passwordValid"
          class="text-red-500"
        >Password too short</span>
      </template>
    </VInput>

    <VButton
      variant="primary"
      :disabled="loading"
      @click.prevent="handleLogin"
    >
      <template #icon>
        <span class="text-lg">🔑</span>
      </template>

      <template #text>
        <span v-if="!loading">Login</span>
        <span v-else>Loading...</span>
      </template>

      <template #loader>
        <VLoader v-if="loading" />
      </template>
    </VButton>
  </form>
</template>
