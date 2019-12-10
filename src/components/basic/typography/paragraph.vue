<template>
  <div
    class="sf-paragraph"
    :class="[`sf-paragraph-${type}`,{'sf-paragraph-disabled':disabled, 'sf-paragraph-ellipsis': ellipsis===true}]"
  >
    <span :style="styleList">
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
    <a class="sf-paragraph-expand" v-if="expandable">+More</a>
  </div>
</template>

<script>
export default {
  name: "sf-paragraph",
  data() {
    return {
      styleList: {},
      expandable: false
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
      let { ellipsis } = this;
      let styleList = {};
      console.log(ellipsis);
      if (typeof ellipsis !== "object") return;
      styleList["-webkit-box-orient"] = "vertical";
      styleList["overflow"] = "hidden";
      styleList["display"] = "-webkit-box";
      if (ellipsis.rows !== null && ellipsis.rows >= 0) {
        styleList["-webkit-line-clamp"] = ellipsis.rows.toString();
      }
      if (ellipsis.expandable !== null && ellipsis.expandable) {
        this.expandable = true;
      }

      this.styleList = styleList;
    }
  },
  mounted() {
    this.handleEllipsisObject();
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/color.scss";

.sf-paragraph {
  margin-bottom: 1em;
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
  .sf-paragraph-expand {
    color: $color-dark;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: #b0b0b0;
    }
    &:active {
      color: $color-dark;
    }
  }
}
</style>