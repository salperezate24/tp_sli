<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
})
</script>

<template>
  <div class="slidev-layout two-columns relative grid h-full w-full grid-cols-2 pb-10" :class="props.layoutClass">
    <div class="col-left" :class="props.class">
      <slot />
      <slot name="left" />
    </div>
    <div class="col-right" :class="props.class">
      <slot name="right" />
    </div>
    <ThesisFooter />
  </div>
</template>

