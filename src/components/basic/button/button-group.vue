<template>
  <div class="sf-button-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: "sf-button-group"
};
</script>

<style lang="scss" scoped>
.sf-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .sf-button {
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &:not(:first-child):not(:last-child) {
        border-radius: 0;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>