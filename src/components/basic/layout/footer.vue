<template>
  <div class="sf-footer" :style="{height: `${height}px`}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sf-footer",
  props: {
    height: {
      type: [Number, String],
      default: 60
    }
  }
};
</script>