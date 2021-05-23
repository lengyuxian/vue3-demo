<template>
<div id="app">
    <Menu></Menu>
    <router-view></router-view>
    <div class="driver-step"><button @click="guide">指引</button></div>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import test1 from './views/test1'
import test from './views/test'
import Menu from '@/components/Menu'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import steps from '@/views/driver/index'
export default {
    name: 'app',
    components: {
        HelloWorld,
        test,
        test1,
        Menu
    },
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
          driver:null
      }
  },
  mounted(){
      this.stepFunc()
    },
    methods: {
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
    },
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
<style lang="scss">
    .driver-step{
        position: fixed;
        top: 100px;
        left: 0;
    }
</style>
