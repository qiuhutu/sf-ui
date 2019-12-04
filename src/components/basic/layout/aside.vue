<template>
  <div class="sf-aside" :style="{width: `${width}px`}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sf-aside",
  props: {
    width: {
      type: [String, Number],
      default: 300
    }
  }
};
</script>

<style lang="scss" scoped>
.sf-aside {
    flex-grow: 0;
}
</style>