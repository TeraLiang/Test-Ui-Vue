<template>
  <div>
    <input
      type="text"
      class="amountBox"
      placeholder="请输入金额"
      :value="value"
      @input="valueChange"
      @blur="valueBlur">
  </div>
</template>

<script>
export default {
  name: '',
  props: ['value'],
  methods: {
    valueChange (val) {
      let data = val.target.value.replace(/((?![0-9\.]).)/g, '')
      if (data > 999999.99) {
        this.$emit('change', 999999.99)
      } else {
        this.$emit('change', data)
      }
      this.$forceUpdate()
    },
    valueBlur (val) {
      let data = val.target.value
      data = parseFloat(data).toFixed(2)
      if (data === 'NaN') {
        data = ''
      }
      this.$emit('change', data)
      this.$forceUpdate()
    }
  }
}
</script>

<style lang="less" scoped>
  .amountBox{
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding: 0 15px;
    border-radius:4px;
    border: 1px solid #dcdfe6;
  }
</style>
