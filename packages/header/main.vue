<template>
  <header :style="{height,'line-height':height}" class="tera__header">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'TeraHeader',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>

<style lang="less" scoped>
  .tera__header{
    font-size: 16px;
    padding-left: 30px;
    box-shadow:0 2px 8px #f0f1f2;
  }
</style>
