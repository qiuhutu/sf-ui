<template>
  <div class="sf-title" :class="[`sf-title-${level}`]">
    <slot />
  </div>
</template>

<script>
export default {
  name: "sf-title",
  props: {
    level: [Number, String]
  }
};
</script>

<style lang="scss" scoped>
@mixin title-type($size, $weight) {
  font-size: $size;
  font-weight: $weight;
}
.sf-title {
  $class-prefix: sf-title-;
  &.sf-title-1 {
    @include title-type(4em, bold);
  }
  &.sf-title-2 {
    @include title-type(3em, bold);
  }
  &.sf-title-3 {
    @include title-type(2.5em, bold);
  }
  &.sf-title-4 {
    @include title-type(2.25em, bold);
  }
  &.sf-title-5 {
    @include title-type(2em, bold);
  }
  &.sf-title-6 {
    @include title-type(1.5em, bold);
  }
}
</style>