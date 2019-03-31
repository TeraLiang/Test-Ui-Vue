<template>
  <div>
    <AmountBox :value="money" @change="moneyChange"></AmountBox>
  </div>
</template>

<script>
import AmountBox from '@/components/AmountBox'
import { constants } from 'fs';
export default {
  name: '',
  components:{
    AmountBox
  },
  data(){
    return{
      money: null
    }
  },
  methods:{
    moneyChange(e){
      console.log(e)
      this.money = e
    }
  }
}
</script>

<style lang="less" scoped>

</style>
