<template>
  <div class="sf-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sf-content"
};
</script>

<style lang="scss" scoped>
.sf-content {
  flex-grow: 1;
}
</style>