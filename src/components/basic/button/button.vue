<template>
  <button
    class="sf-button"
    :class="{[`icon-${iconPosition} btn-size-${size} btn-type-${type}`]:true}"
    @click="$emit('click')"
  >
    <sf-icon class="icon" v-if="icon && !loading" :name="icon"></sf-icon>
    <sf-icon class="icon loading" v-if="loading" name="loading"></sf-icon>
    <div class="sf-button-content">
      <slot />
    </div>
  </button>
</template>

<script>
import SfIcon from "../icon/icon";

export default {
  name: "SfButton",
  components: {
    "sf-icon": SfIcon
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "light",
      validator(value) {
        return value === "light" || value === "dark";
      }
    },
    size: {
      type: String,
      default: "medium",
      validator(value) {
        return value === "medium" || value === "large" || value === "small";
      }
    },
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      }
    }
  }
};
</script>

<style lang="scss">
$btn-height-small: 40px;
$btn-height-medium: 50px;
$btn-height-large: 60px;
$btn-width-small: 100px;
$btn-width-medium: 150px;
$btn-width-large: 220px;
$color-w: #fff;
$color-b: #000;

@mixin type-button($bg-color, $font-color) {
  color: $font-color;
  background-color: $bg-color;
  fill: $font-color;
}
@mixin size-button($btn-height, $btn-width) {
  width: $btn-height;
  height: $btn-width;
}
.sf-button {
  border: 1px solid #141414;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:focus {
    outline: none;
  }
  > .sf-button-content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 1em;
  }
  &.btn-type-light {
    @include type-button($color-b, $color-w);
  }
  &.btn-type-dark {
    @include type-button($color-w, $color-b);
  }
  &.btn-size-large {
    @include size-button($btn-width-large, $btn-height-large);
  }
  &.btn-size-medium {
    @include size-button($btn-width-medium, $btn-height-medium);
  }
  &.btn-size-small {
    @include size-button($btn-width-small, $btn-height-small);
  }
  &.icon-right {
    > .sf-button-content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: 1em;
      margin-right: 0;
    }
  }
}
</style>