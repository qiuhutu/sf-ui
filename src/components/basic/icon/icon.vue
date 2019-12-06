<template>
  <svg class="sf-icon" @click="$emit('click', $event)">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>

<script>
export default {
  name: "sf-icon",
  props: ["name"],
};
</script>

<style lang="scss" scoped>
.sf-icon {
  width: 1em;
  height: 1em;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@mixin spin {
  animation: spin 1.8s infinite linear;
}
.loading {
  @include spin;
}
</style>