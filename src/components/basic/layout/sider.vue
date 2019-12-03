<template>
  <div class="sider">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sf-sider",
};
</script>

<style lang="scss" scoped>
.side {
    flex-grow: 0;
}
</style>