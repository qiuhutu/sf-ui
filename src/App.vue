<template>
  <div id="app">
    <sf-container style="color: white; margin-bottom:50px;">
      <sf-header style="background:lightskyblue;">header</sf-header>
      <sf-container>
        <sf-aside style="height: 100px; background:#ddd; color: black;" width="100">aside</sf-aside>
        <sf-content>
          <sf-row align="space-between" >
            <sf-col :span="3">
              <sf-button size="medium" type="default">Default</sf-button>
            </sf-col>
            <sf-col :span="3">
              <sf-button size="medium" type="primary">Primary</sf-button>
            </sf-col>
            <sf-col :span="3">
              <sf-button size="medium" type="secondary">Secondary</sf-button>
            </sf-col>
            <sf-col :span="3">
              <sf-button size="medium" type="success">Success</sf-button>
            </sf-col>
            <sf-col :span="3">
              <sf-button size="medium" type="warning">Warning</sf-button>
            </sf-col>
            <sf-col :span="3">
              <sf-button size="medium" type="error">Error</sf-button>
            </sf-col>
          </sf-row>
          <sf-row align="start" style="margin-top: 20px;">
            <sf-col :span="5">
              <sf-button size="large" type="primary">Large</sf-button>
            </sf-col>
            <sf-col :span="4">
              <sf-button size="medium" type="primary">Medium</sf-button>
            </sf-col>
            <sf-col :span="3">
              <sf-button size="small" type="primary">Small</sf-button>
            </sf-col>
          </sf-row>
          <sf-row align="start" style="margin-top: 20px;">
            <sf-col :span="3"><sf-button type="primary" round>Round</sf-button></sf-col>
            <sf-col :span="2"><sf-button type="primary" circle ><sf-icon name="plus"></sf-icon></sf-button></sf-col>
            <sf-col :span="3"><sf-button type="primary" loading>Round</sf-button></sf-col>
            <sf-col :span="3"><sf-button type="primary" loading iconPosition="right">Round</sf-button></sf-col>
          </sf-row>
        </sf-content>
      </sf-container>
      <sf-footer style="background:lightskyblue;">footer</sf-footer>
    </sf-container>
    <sf-icon name="close"></sf-icon>
    <sf-title isUpperCase level="1">Heading Level1</sf-title>
    <sf-title isUpperCase level="2">Heading Level2</sf-title>
    <sf-title isUpperCase level="3">Heading Level3</sf-title>
    <sf-title isUpperCase level="4">Heading Level4</sf-title>
    <sf-title isUpperCase level="5">Heading Level5</sf-title>
    <sf-title isUpperCase level="6">Heading Level6</sf-title>
  </div>
</template>

<script>
import "./styles/app.scss";
import SfButton from "./components/basic/button/button";
import SfContent from "@/components/basic/layout/content";
import SfHeader from "@/components/basic/layout/header";
import SfContainer from "@/components/basic/layout/container";
import SfFooter from "@/components/basic/layout/footer";
import SfAside from "@/components/basic/layout/aside";
import SfRow from "@/components/basic/grid/row";
import SfCol from "@/components/basic/grid/col";
import SfIcon from "@/components/basic/icon/icon";
import SfTitle from "@/components/basic/typography/title";

export default {
  name: "app",
  components: {
    "sf-button": SfButton,
    "sf-content": SfContent,
    "sf-header": SfHeader,
    "sf-container": SfContainer,
    "sf-footer": SfFooter,
    "sf-aside": SfAside,
    "sf-row": SfRow,
    "sf-col": SfCol,
    "sf-icon": SfIcon,
    "sf-title": SfTitle
  }
};
</script>

<style lang="scss">
</style>
