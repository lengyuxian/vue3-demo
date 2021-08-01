<template>
  <div ref="homePage">
    <el-select
      id="selectDom"
      v-model="value"
      placeholder="请选择"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-input
      v-model="input"
      placeholder="请输入内容"
    />
    <!-- flex-test -->
    <!-- <div class="part-box">
      <div class="part1" />
      <div class="part2" />
      <div class="part3" />
    </div>
    <div class="part-align">
      <div class="part1" />
      <div class="part2" />
      <div class="part3" />
    </div> -->
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
<style lang="scss" scoped>
    .part-box{
      height:300px;
      width: 10px;
      display:flex;
      flex-flow: column;
      div{
        width:4px;
      }
      .part1{
        height: 50px;
        background:#2783fc;
      }
      .part2{
        background:#9be218;
        flex: 1;
      }
      .part3{
        background:#e01ed7;
        flex: 1;
        height: 100px;
      }
    }
    .part-align{
      width: 100%;
      height: 300px;
      display: flex;
      flex-flow: wrap;
      .part1{
        background:#2783fc;
        width: 20px;
      }
      .part2{
        background:#9be218;
        flex: 1;
      }
      .part3{
        background:#e01ed7;
        width: 20px;
      }
    }
</style>