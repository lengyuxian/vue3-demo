<template>
    <div ref="homePage">
        <el-select id="selectDom" v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
</template>
<script>
export default {
    name:'',
    data(){
        return{
            options: [{
          value: '选项1',
          label: '黄金糕'
        },{
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        input: ''
        }
    },
    mounted() {
        this.$refs.homePage.addEventListener('change',(e)=>{
            console.log(111, e)
        },false)
        console.log( $('#selectDom'))
        document.getElementById('selectDom').addEventListener('change',(e)=>{
            console.log(222, e)
        },false)
    },
}
</script>
<style lang="scss">
    
</style>