<template>
  <div id="app">
    <sf-button size="medium" type="light" round>PLAY NOW</sf-button>
    <sf-input placeholder="Your name"></sf-input>
    <sf-container style="color: white; margin-bottom:50px;">
      <sf-header style="height: 50px; background:lightskyblue;">header</sf-header>
      <sf-container>
        <sf-sider style="height: 100px; background:#ddd; width:150px; color: black;">sider</sf-sider>
        <sf-content style="height: 100px; background:deepskyblue;">content</sf-content>
      </sf-container>
      <sf-footer style="height: 50px; background:lightskyblue;">footer</sf-footer>
    </sf-container>
    <sf-row>
      <sf-col :span="4" :offset="4">Col1</sf-col>
      <sf-col :span="4" :offset="4">Col1</sf-col>
    </sf-row>
  </div>
</template>

<script>
import "./styles/app.scss";
import SfButton from "./components/basic/button/button";
import SfInput from "@/components/form/input/input";
import SfContent from "@/components/basic/layout/content";
import SfHeader from "@/components/basic/layout/header";
import SfContainer from "@/components/basic/layout/container";
import SfFooter from "@/components/basic/layout/footer";
import SfSider from "@/components/basic/layout/sider";
import SfRow from "@/components/basic/grid/row";
import SfCol from "@/components/basic/grid/col";

export default {
  name: "app",
  components: {
    "sf-button": SfButton,
    "sf-input": SfInput,
    "sf-content": SfContent,
    "sf-header": SfHeader,
    "sf-container": SfContainer,
    "sf-footer": SfFooter,
    "sf-sider": SfSider,
    "sf-row": SfRow,
    "sf-col": SfCol
  }
};
</script>

<style lang="scss">
</style>
