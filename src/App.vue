<template>
  <div id="app">
    <sf-button size="medium" type="light" icon="error">PLAY NOW</sf-button>
  </div>
</template>

<script>
import "./styles/app.scss";
import SfButton from './components/basic/button/button';

export default {
  name: 'app',
  components: {
    'sf-button': SfButton
  }
}
</script>

<style lang="scss">
</style>
