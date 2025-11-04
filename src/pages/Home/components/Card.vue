<script setup>
</script>

<template>
  <div
    class="overflow-hidden rounded-lg shadow-xl mb-[30px] bg-white
  w-full max-w-md mx-auto flex flex-col gap-4"
  >
    <!-- Header in Card-->
    <div
      v-if="$slots.header"
      class="bg-green-600 p-4 text-center uppercase text-[white]"
    >
      <slot name="header">
        <h1>Header Card</h1>
      </slot>
    </div>

    <!-- Content in Card-->
    <div
      v-if="$slots.content"
      class="flex-1 flex items-center justify-center p-4 flex-col"
    >
      <slot name="content">
        <p class="text-gray-500">
          Default card content
        </p>
      </slot>
    </div>

    <!-- Footer in Card-->
    <div
      v-if="$slots.footer"
      class="bg-pink-500 p-4 text-center uppercase text-[white]"
    >
      <slot name="footer">
        <p>Footer default text</p>
      </slot>
    </div>
  </div>
</template>
