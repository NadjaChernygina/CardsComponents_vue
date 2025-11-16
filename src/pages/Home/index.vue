<script setup>
import { ref } from "vue";

import { LoginForm } from "@/features/auth";
import { VInput, VButton, VLoader, VCard } from "@/shared/ui";

const primaryValue = ref("");
const secondaryValue = ref("");
const minimalValue = ref("");
</script>

<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center p-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
      <!-- First VCard with LoginForm-->
      <VCard>
        <template #header>
          <div class="flex justify-between w-full text-white">
            <!-- Logo -->
            <a
              href="#"
              class="text-xl font-bold"
            >
              LOGO
            </a>

            <!-- Links -->
            <div class="flex gap-4">
              <a
                href="#"
                class="hover:underline"
              >Login</a>
              <a
                href="#"
                class="hover:underline"
              >Signup</a>
            </div>
          </div>
        </template>
        <template #content>
          <LoginForm />
        </template>
        <template #footer>
          <!-- Logo -->
          <a
            href="#"
            class="text-xl font-bold"
          >
            LOGO-footer
          </a>
        </template>
      </VCard>

      <VCard
        :header-text="'My Header Text'"
      />

      <!-- Second VCard with Inputs-->
      <VCard
        :header-text="'VCard with input'"
        :footer-text="'Copyright first'"
      >
        <template #content>
          <VInput
            v-model="primaryValue"
            label="Username"
            variant="primary"
            placeholder="Primary input"
          />
          <VInput
            v-model="secondaryValue"
            variant="secondary"
            support-text="Password must contain at least 6 characters"
            placeholder="Dark mode input"
          />
          <VInput
            v-model="minimalValue"
            variant="minimal"
            placeholder="Minimal clean input"
          />
        </template>
      </VCard>

      <!-- Third VCard with button-->
      <VCard
        :header-text="'VCard with Button'"
        :footer-text="'Copyright Button'"
      >
        <template #content>
          <VButton
            type="submit"
            variant="secondary"
            text="Like"
            icon="heart"
          />
        </template>
      </VCard>

      <!-- Fourth VCard with Loader-->
      <VCard
        :header-text="'Card with Loader'"
        :footer-text="'Copyright Loader'"
      >
        <template #content>
          <div
            class="bg-black text-white max-w-[60px] min-h-[30px]
        p-2 rounded-[50%] flex items-center justify-center mx-[auto] my-[0]"
          >
            <VLoader />
          </div>
        </template>
      </VCard>
    </div>
  </div>
</template>
