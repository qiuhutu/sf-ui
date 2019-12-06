<template>
  <button
    class="sf-button"
    @click="$emit('click')"
    :class="[...buttonClass(), {'sf-button-blocked': blocked, 'sf-button-round': round, 'sf-button-circle': circle, 'sf-button-disabled': disabled}]"
    :disabled="disabled"
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
  data() {
    return {};
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "default",
      validator(value) {
        return (
          ["default", "primary", "error", "success", "warning"].indexOf(value) >
          -1
        );
      }
    },
    blocked: Boolean,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean,
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
  },
  methods: {
    buttonClass() {
      let classList = [];
      ["type", "size"].forEach(prop => {
        if (this[prop] || this[prop] === 0) {
          classList.push(`sf-button-${prop}-${this[prop]}`);
        }
      });
      return classList;
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
$height-small: 40px;
$height-medium: 50px;
$height-large: 60px;
$width-small: 100px;
$width-medium: 150px;
$width-large: 220px;
$color-light: #f8f4f4;
$color-primary: #358ed7;
$color-dark: #34495e;
$color-red: #f54b5e;
$color-green: #48d2a0;
$color-yellow: #f8c51c;

@mixin color-button($bg-color, $font-color) {
  color: $font-color;
  background-color: $bg-color;
  fill: $font-color;
  &.sf-button-disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }
}
@mixin size-button($btn-height, $btn-width) {
  height: $btn-height;
  width: $btn-width;
  &.sf-button-round {
    border-radius: $btn-height/2;
  }
  &.sf-button-circle {
    border-radius: 50%;
    width: $btn-height;
  }
}
@mixin active-color-button($bg-color) {
  &:hover {
    background-color: lighten($bg-color, 8%);
  }
  &:active {
    background-color: darken($bg-color, 5%);
  }
}

.sf-button {
  display: inline-flex;
  border-radius: 1px;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  border: none;
  font-size: 1em;
  &.sf-button-type-default {
    @include color-button(#ffffff, $color-dark);
    border: 1px solid #dddddd;
    &:hover {
      background-color: lighten($color-primary, 45%);
      fill: $color-primary;
      color: $color-primary;
      border-color: $color-primary;
    }
    &:active {
      color: darken($color-primary, 15%);
      fill: darken($color-primary, 15%);
      border-color: darken($color-primary, 15%);
    }
  }
  &.sf-button-type-primary {
    @include color-button($color-primary, $color-light);
    @include active-color-button($color-primary);
  }
  &.sf-button-type-success {
    @include color-button($color-green, $color-light);
    @include active-color-button($color-green);
  }
  &.sf-button-type-warning {
    @include color-button($color-yellow, $color-light);
    @include active-color-button($color-yellow);
  }
  &.sf-button-type-error {
    @include color-button($color-red, $color-light);
    @include active-color-button($color-red);
  }
  &:focus {
    outline: none;
  }
  &.sf-button-size-medium {
    @include size-button($height-medium, $width-medium);
  }
  &.sf-button-size-large {
    @include size-button($height-large, $width-large);
  }
  &.sf-button-size-small {
    @include size-button($height-small, $width-small);
    font-size: small;
  }
  &.sf-button-blocked {
    width: 100%;
  }
  > .sf-button-content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.5em;
  }
  &.icon-right {
    > .sf-button-content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: 0.5em;
      margin-right: 0;
    }
  }
}
</style>