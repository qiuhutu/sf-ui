<template>
  <p
    class="sf-paragraph"
    :class="[`sf-paragraph-${type}`,{'sf-paragraph-disabled':disabled, 'sf-paragraph-ellipsis': ellipsis===true}]"
  >
    <span :style="styleList" ref="para">
      <mark v-if="mark">
        <slot />
      </mark>
      <code v-else-if="code">
        <slot />
      </code>
      <u v-else-if="underline">
        <slot />
      </u>
      <del v-else-if="this.delete">
        <slot />
      </del>
      <strong v-else-if="strong">
        <slot />
      </strong>
      <slot v-else></slot>
    </span>
  </p>
</template>

<script>
export default {
  name: "sf-paragraph",
  data() {
    return {
      expandable: false,
      styleList: {}
    };
  },
  props: {
    mark: Boolean,
    underline: Boolean,
    delete: Boolean,
    strong: Boolean,
    code: Boolean,
    disabled: Boolean,
    expanded: {
      type: Boolean,
      default: false
    },
    ellipsis: [Boolean, Object],
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
    }
  },
  methods: {
    handleEllipsisObject() {
      let { ellipsis} = this;
      if (
        typeof ellipsis !== "object" ||
        typeof ellipsis.rows === "undefined" ||
        ellipsis.rows === null ||
        ellipsis.rows <= 0
      )
        return;

      let styleList = {
        "-webkit-box-orient": "vertical",
        overflow: "hidden",
        display: "-webkit-box"
      };
      styleList["-webkit-line-clamp"] = ellipsis.rows.toString();
      return styleList;
    },
    initStyleList() {
      let styleList = {};
      Object.assign(styleList, this.handleEllipsisObject());
      this.styleList = styleList;
    }
  },
  mounted() {
    this.initStyleList();
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/color.scss";

.sf-paragraph {
  margin-bottom: 1em;
  line-height: 1.6;
  &.sf-paragraph-default {
    color: $color-typography;
  }
  &.sf-paragraph-secondary {
    color: #8c8c8c;
  }
  &.sf-paragraph-success {
    color: $color-green;
  }
  &.sf-paragraph-warning {
    color: $color-yellow;
  }
  &.sf-paragraph-error {
    color: $color-red;
  }
  &.sf-paragraph-disabled {
    cursor: not-allowed;
    color: #cacaca;
  }
  &.sf-paragraph-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>