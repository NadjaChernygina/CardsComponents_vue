<script setup>
import { ref } from "vue";

import Card from "@/pages/Home/components/Card.vue";
import { VInput, VButton, VLoginform, VLoader } from "@/shared/ui/common";

const primaryValue = ref("");
const secondaryValue = ref("");
const minimalValue = ref("");
</script>

<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center p-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
      <!-- First Card with LoginForm-->
      <Card>
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
          <VLoginform />
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
      </Card>

      <Card
        :header-text="'My Header Text'"
      />

      <!-- Second Card with Inputs-->
      <Card
        :header-text="'Card with input'"
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
      </Card>

      <!-- Third Card with button-->
      <Card
        :header-text="'Card with Button'"
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
      </Card>

      <!-- Fourth Card with Loader-->
      <Card
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
      </Card>
    </div>
  </div>
</template>
