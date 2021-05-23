<template>
    <div id="step1">
    <el-select v-model="value" v-el-select-loadmore="loadmore" placeholder="请选择">
        <el-option
        v-for="(item,index) in options"
        :key="item.value+index"
        :label="item.label"
        :value="item.value">
        </el-option>
    </el-select>
    <div id="step2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem exercitationem aperiam dicta quas quasi. Dolores nostrum laboriosam aperiam vel inventore quas, incidunt aspernatur reiciendis praesentium eligendi debitis ad rem itaque.
    </div>
    <div id="step3">
      <input type="text">
    </div>
    <div>
      <button @click="guide">打开指引</button>
    </div>
    </div>
</template>
<script>
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import steps from '@/views/driver/index'
export default {
    name:'',
    directives: {
    'el-select-loadmore': {
      bind(el, binding) {
          console.log('19----', el)
        const SELECTWRAP_DOM = el.querySelector(
          '.el-select-dropdown .el-select-dropdown__wrap'
        );
         console.log('23----', SELECTWRAP_DOM)
        SELECTWRAP_DOM.addEventListener('scroll', function() {
          console.log('25----', this.scrollHeight,this.scrollTop,this.clientHeight)
          const condition =
            this.scrollHeight - this.scrollTop <= this.clientHeight+1;
          if (condition) {
              console.log('29---', binding)
            binding.value();
          }
        });
      }
    }
  },
    data(){
        return {
            options:[
                {value: '选项1',label: '黄金糕1'}, 
                {value: '选项2',label: '黄金糕2'}, 
                {value: '选项3',label: '黄金糕3'}, 
                {value: '选项4',label: '黄金糕4'}
            ],
            value:'',
            pageIndex:1,
            driver:null
        }
    },
    mounted(){
      this.stepFunc()
    },
    methods:{
        loadmore() {
            this.pageIndex++;
            this.getOptions(this.pageIndex);
        },
        getOptions(pageIndex){
            console.log('47----', pageIndex)
            let data=[
                {value: '选项1',label: '黄金糕1'}, 
                {value: '选项2',label: '黄金糕2'}, 
                {value: '选项3',label: '黄金糕3'}, 
                {value: '选项4',label: '黄金糕4'}, 
                {value: '选项5',label: '黄金糕5'}, 
                {value: '选项6',label: '黄金糕6'}, 
                {value: '选项7',label: '黄金糕7'}, 
                {value: '选项8',label: '黄金糕8'}, 
                {value: '选项9',label: '黄金糕9'}, 
                {value: '选项0',label: '黄金糕0'}
            ]
            let test=[]
            for(let i=0;i<10;i++){
                let obj={}
                obj.value='选项'+pageIndex+i
                obj.label='黄金糕'+pageIndex+i
                test.push(obj)
            }
            this.options=this.options.concat(test)
            console.log('61----', this.options.length)
        },
        guide () {
          this.driver.defineSteps(steps)
          this.driver.start()
          this.driver.steps.forEach(el => el.node.style.pointerEvents = 'none')
        },
        stepFunc(){
            this.driver = new Driver({
            className: "scoped-class", // className to wrap driver.js popover
            animate: true, // Animate while changing highlighted element
            opacity: 0.75, // Background opacity (0 means only popovers and without overlay)
            padding: 10, // Distance of element from around the edges
            allowClose: false, // Whether clicking on overlay should close or not
            overlayClickNext: false, // Should it move to next step on overlay click
            doneBtnText: "完成", // Text on the final button
            closeBtnText: "关闭", // Text on the close button for this step
            nextBtnText: "下一步", // Next button text for this step
            prevBtnText: "上一步" // Previous button text for this step
            // Called when moving to next step on any step
          })
        }
    }
}
</script>
<style>
    .el-select-dropdown{
        
    }
    .el-select-dropdown .el-scrollbar .el-select-dropdown__wrap{
        max-height: 100px;
    }
    .el-select-dropdown__list .el-select-dropdown__item{
        height:32px;
        line-height: 32px;
    }
</style>