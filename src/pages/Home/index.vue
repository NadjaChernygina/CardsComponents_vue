<script setup>
import Card from "@/pages/Home/components/Card.vue";
import { VInput, VButton, VLoginform, VLoader } from "@/shared/ui/common";
</script>

<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center p-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
      <!-- First Card with LoginForm-->
      <Card>
        <template #header>
          <h3>Card with Login</h3>
        </template>
        <template #content>
          <VLoginform />
        </template>
      </Card>

      <!-- Second Card with Inputs-->
      <Card>
        <template #header>
          <h3>Card with Input</h3>
        </template>
        <template #content>
          <VInput
            variant="primary"
            placeholder="Primary input"
          />
          <VInput
            variant="secondary"
            placeholder="Dark mode input"
          />
          <VInput
            variant="minimal"
            placeholder="Minimal clean input"
          />
        </template>
        <template #footer>
          <p>Copyright</p>
        </template>
      </Card>

      <!-- Third Card with button-->
      <Card>
        <template #header>
          <h3>Card with Button</h3>
        </template>
        <template #content>
          <VButton
            variant="secondary"
          />
        </template>
        <template #footer>
          <p>Copyright</p>
        </template>
      </Card>

      <!-- Fourth Card with Loader-->
      <Card>
        <template #header>
          <h3>Card with Loader</h3>
        </template>
        <template #content>
          <div
            class="bg-black text-white max-w-[60px] min-h-[30px]
        p-2 rounded-[50%] flex items-center justify-center mx-[auto] my-[0]"
          >
            <VLoader />
          </div>
        </template>
        <template #footer>
          <p>Copyright</p>
        </template>
      </Card>
    </div>
  </div>
</template>
