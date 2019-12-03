<template>
  <div class="sf-col" :class="[...colClass(), ...sizeClass()]" :style="colStyle()">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sf-col",
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  methods: {
    colStyle() {
      let { gutter } = this;
      if (gutter) {
        return {
          paddingLeft: `${gutter / 2}px`,
          paddingRight: `${gutter / 2}px`
        };
      }
    },
    sizeClass() {
      let classList = [];
      ["xs", "sm", "md", "lg", "xl"].forEach(size => {
        if (typeof this[size] === "number") {
          classList.push(`sf-col-${size}-${this[size]}`);
        } else if (typeof this[size] === "object") {
          let props = this[size];
          Object.keys(props).forEach(prop => {
            classList.push(
              prop !== "span"
                ? `sf-col-${size}-${prop}-${props[prop]}`
                : `sf-col-${size}-${props[prop]}`
            );
          });
        }
      });
      return classList;
    },
    colClass() {
      let classList = [];
      ["offset", "span"].forEach(prop => {
        if (this[prop] || this[prop] === 0) {
          classList.push(
            prop !== "span"
              ? `sf-col-${prop}-${this[prop]}`
              : `sf-col-${this[prop]}`
          );
        }
      });
      return classList;
    }
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== "sf-row") {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.sf-col {
  $class-prefix: sf-col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: sf-col-offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
  @media (min-width: 768px) {
    $sf-col-prefix: sf-col-sm-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: sf-col-offset-sm-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 992px) {
    // 770
    $class-prefix: sf-col-md-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: sf-col-offset-md-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 1200px) {
    $class-prefix: sf-col-lg-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: sf-col-offset-lg-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 1920px) {
    $class-prefix: sf-col-xl-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: sf-col-offset-xl-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>