<template>
  <div class="sf-header" :style="{height: `${height}px`}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sf-header",
  props: {
    height: {
      type: [Number, String],
      default: 60
    }
  }
};
</script>