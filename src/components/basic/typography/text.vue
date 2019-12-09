<template>
  <span class="sf-text" v-if="mark">
    <mark>
      <slot />
    </mark>
  </span>
  <span class="sf-text" v-else-if="code">
    <code>
      <slot />
    </code>
  </span>
  <span class="sf-text" v-else-if="underline">
    <u>
      <slot />
    </u>
  </span>
  <span class="sf-text" v-else-if="this.delete">
    <del>
      <slot />
    </del>
  </span>
  <span class="sf-text" v-else-if="strong">
    <strong>
      <slot />
    </strong>
  </span>
  <span
    v-else
    class="sf-text"
    :class="[`sf-text-${type}`, {'sf-text-disabled': disabled}]"
  >
    <slot />
  </span>
</template>

<script>
export default {
  name: "sf-text",
  props: {
    type: {
      type: String,
      default: "default",
      validator(value) {
        return (
          ["default", "secondary", "success", "warning", "error"].indexOf(
            value
          ) > -1
        );
      }
    },
    disabled: Boolean,
    mark: Boolean,
    code: Boolean,
    underline: Boolean,
    delete: Boolean,
    strong: Boolean
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/color.scss";
.sf-text {
  &.sf-text-default {
    color: $color-dark;
  }
  &.sf-text-secondary {
    color: #8c8c8c;
  }
  &.sf-text-success {
    color: $color-green;
  }
  &.sf-text-warning {
    color: $color-yellow;
  }
  &.sf-text-error {
    color: $color-red;
  }
  &.sf-text-disabled {
    cursor: not-allowed;
    color: #cacaca;
  }
}
</style>