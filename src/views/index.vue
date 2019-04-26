<template>
  <div>
    <tera-header class="header">Tera-UI</tera-header>
    <tera-tree :data="data" @onNodeClick="handleNodeClick"></tera-tree>
  </div>
</template>

<script>
import menu from '@/data/menu'
export default {
  name: '',
  data () {
    return {
      data: menu.docList
    }
  },
  methods: {
    handleNodeClick (e) {
      console.log(e.name)
    }
  }
}
</script>

<style lang="less" scoped>
  .header{
    border-bottom: 1px solid #f0f0f0;
  }
</style>
