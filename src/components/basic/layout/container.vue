<template>
  <div class="sf-container" :class="{'is-vertical': isVertical()}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sf-container",
  data() {
    return {
    };
  },

  props: {
    direction: {
      type: String,
      validator(value) {
        return value === "horizontal" || value === "vertical";
      }
    }
  },
  methods: {
    isVertical() {
      if (this.direction === "vertical") {
        return true;
      } else if (this.direction === "horizontal") {
        return false;
      }
      if (this.$slots && this.$slots.default) {
        return this.$slots.default.some(vnode => {
          let tag = vnode.componentOptions && vnode.componentOptions.tag;
          return tag === "sf-header" || tag === "sf-footer";
        });
      } else {
        return false;
      }
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.sf-container {
  flex-grow: 1;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  &.is-vertical {
    flex-direction: column;
  }
}
</style>