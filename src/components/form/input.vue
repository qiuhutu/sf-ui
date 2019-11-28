<template>
  <div class="wrapper" :class="{error}">
    <input
      :value="value"
      type="text"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change',$event.target.value)"
      @focus="$emit('change',$event.target.value)"
      @input="$emit('change',$event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />
    <template v-if="error">
      <sf-icon name="error" class="icon-error"></sf-icon>
      <span class="errorMessage">{{error}}</span>
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
    }
  }
};
</script>

<style>
</style>