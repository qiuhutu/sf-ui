<template>
  <div class="wrapper" :class="{error}">
    <input
      :class="{[`input-type-radius-${round}`]:true}"
      :value="value"
      type="text"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      @change="$emit('change',$event.target.value)"
      @focus="$emit('change',$event.target.value)"
      @input="$emit('change',$event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />
    <template v-if="error">
      <sf-icon name="error" class="icon-error"></sf-icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>

<script>
import SfIcon from "@/components/basic/icon/icon";

export default {
  name: "SfInput",
  components: {
    "sf-icon": SfIcon
  },
  props: {
    value: {
      type: String
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    },
    placeholder: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > .input-type-radius-true {
    border-radius: 25px;
  }
  > input {
    padding: 0 8px;
    height: 48px;
    font-size: inherit;
    border: 1px solid #d0d0d0;
    &:focus {
      outline: none;
      border-color: #141414;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: #cd393b;
    }
  }
  .icon-error {
    fill: #cd393b;
  }
  .error-message {
    color: #cd393b;
  }
}
</style>