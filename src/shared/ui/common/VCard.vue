<script setup>
const props = defineProps({
  headerText: { type: String, default: "" },
  footerText: { type: String, default: "" },
  textAlign: { type: String, default: "items-center justify-center" },
  maxWidth: { type: String, default: "max-w-md" },
  headerBg: { type: String, default: "bg-green-600" },
  footerBg: { type: String, default: "bg-pink-500" },
  padding: { type: String, default: "p-4" },
});
</script>

<template>
  <div
    :class="[
      // eslint-disable-next-line style/max-len
      'overflow-hidden rounded-lg shadow-xl mb-[30px] bg-white w-full mx-auto flex flex-col justify-between gap-4',
      props.maxWidth
    ]"
  >
    <!-- Header in Card-->
    <div
      v-if="$slots.header || props.headerText"
      :class="[props.headerBg, props.padding, props.textAlign,
               'text-center uppercase text-[white]']"
    >
      <slot name="header">
        <div
          v-if="props.headerText"
          class="text-lg font-semibold"
        >
          {{ props.headerText }}
        </div>
      </slot>
    </div>

    <!-- Content in Card-->
    <div
      v-if="$slots.content"
      :class="[
        'flex-1 flex items-center p-4 flex-col',
        props.textAlign
      ]"
    >
      <slot name="content">
        <p class="text-gray-500">
          Default card content
        </p>
      </slot>
    </div>

    <!-- Footer in Card-->
    <div
      v-if="$slots.footer || props.footerText"
      :class="[
        'text-center uppercase text-[white]',
        props.footerBg,
        props.padding
      ]"
      class=""
    >
      <slot name="footer">
        <div v-if="props.footerText">
          {{ props.footerText }}
        </div>
      </slot>
    </div>
  </div>
</template>
