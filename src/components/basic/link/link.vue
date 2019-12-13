<template>
  <a
    class="sf-link"
    :class="[`sf-link-${type}`, {'sf-link-no-underline': !underline, 'sf-link-disabled': disabled}]"
    @click="handleClick"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: "sf-link",
  props: {
    type: {
      type: String,
      default: "default"
    },
    underline: {
      type: Boolean,
      default: true
    },
    href: String,
    disabled: Boolean
  },
  methods: {
    handleClick(event) {
      if (!this.disabled && !this.href) return this.$emit("click", event);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/color.scss";

@mixin crossEffect($hover-color, $active-color, $visited-color) {
  &:hover {
    color: $hover-color;
    cursor: pointer;
    text-decoration: underline;
  }
  &:active {
    color: $active-color;
    cursor: pointer;
    text-decoration: underline;
  }
  &:visited {
    cursor: pointer;
    color: $visited-color;
  }
  &.sf-link-disabled {
      color: $hover-color;
      &:hover, &:active, &:visited {
          text-decoration: none !important;
          color: $hover-color !important;
          cursor: not-allowed !important;
      }
  }
}

.sf-link {
  &.sf-link-default {
    color: $color-dark;
    text-decoration: none;
    @include crossEffect(#b0b0b0, $color-dark, darken($color-dark, 5%));
  }
  &.sf-link-primary {
    color: $color-primary;
    @include crossEffect(
      lighten($color-primary, 20%),
      $color-primary,
      darken($color-primary, 20%)
    );
  }
  &.sf-link-success {
    color: $color-green;
    @include crossEffect(
      lighten($color-green, 20%),
      $color-green,
      darken($color-green, 20%)
    );
  }
  &.sf-link-warning {
    color: $color-yellow;
    @include crossEffect(
      lighten($color-yellow, 20%),
      $color-yellow,
      darken($color-yellow, 20%)
    );
  }
  &.sf-link-error {
    color: $color-red;
    @include crossEffect(
      lighten($color-red, 20%),
      $color-red,
      darken($color-red, 20%)
    );
  }
  &.sf-link-no-underline {
    text-decoration: none !important;
  }
}
</style>