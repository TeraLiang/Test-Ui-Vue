<template>
  <div>
    <div class="tree__parent" v-for="(item,index) in data" :key="index">
      <div @click="handleClickNode(item)">
        {{item.name}}
      </div>
      <div class="tree__chiildren" v-if="item.child">
        <tera-tree
          :data="item.child"
          @onNodeClick="handleClickNode"
        ></tera-tree>
      </div>
    </div>
  </div>

 </template>

<script>
export default {
  name: 'TeraTree',
  props: {
    data: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    handleClickNode (data) {
      this.$emit('onNodeClick', data)
    }
  }
}
</script>

<style scoped>
  .tree__parent{
    cursor: pointer;
  }
  .tree__chiildren{
    margin-left: 20px;
  }
</style>
