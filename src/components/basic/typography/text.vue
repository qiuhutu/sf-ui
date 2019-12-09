<template>
  <span><slot></slot></span>
</template>

<script>
export default {
    name: "sf-text",
    props: {
        type: {
            type: String,
            default: "default",
            validator(value) {
                return ["default", "secondary", "success", "warning", "error"].indexOf(value) > -1;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>