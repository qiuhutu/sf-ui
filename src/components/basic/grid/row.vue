<template>
  <div class="sf-row" :style="rowStyle()" :class="rowClass()">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sf-row",
  data() {
    return {};
  },
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    justify: {
      type: String,
      default: "top",
      validator(value) {
        return (
          ["top", "medium", "bottom", "baseline", "stretch"].indexOf(value) >= 0
        );
      }
    },
    align: {
      type: String,
      default: "start",
      validator(value) {
        return (
          ["start", "end", "center", "space-around", "space-between"].indexOf(
            value
          ) >= 0
        );
      }
    }
  },
  methods: {
    rowClass() {
      let { justify, align } = this,
        classList = [];
      classList.push(`sf-row-justify-${justify}`);
      classList.push(`sf-row-align-${align}`);
      return classList;
    },
    rowStyle() {
      let { gutter } = this;
      if (gutter) {
        return {
          marginLeft: `-${gutter / 2}px`,
          marginRight: `-${gutter / 2}px`
        };
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.sf-row {
  display: flex;
  flex-wrap: wrap;
  &.sf-row-align-left {
    justify-content: flex-start;
  }
  &.sf-row-align-right {
    justify-content: flex-end;
  }
  &.sf-row-align-center {
    justify-content: center;
  }
  &.sf-row-align-space-around {
    justify-content: space-around;
  }
  &.sf-row-align-space-between {
    justify-content: space-between;
  }
  &.sf-row-justify-top {
    align-items: flex-start;
  }
  &.sf-row-justify-medium {
    align-items: center;
  }
  &.sf-row-justify-bottom {
    align-items: flex-end;
  }
  &.sf-row-justify-baseline {
    align-items: baseline;
  }
  &.sf-row-justify-stretch {
    align-items: stretch;
  }
}
</style>