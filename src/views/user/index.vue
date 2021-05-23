<template>
  <div>
  <button @click="click">click</button>
    {{user}}
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  name:'userPage',
  data(){
    return {
      data:[]
    }
  },
  computed:{
    ...mapState({
      'user':state=>state.user.userNo
    })
  },
  
  methods:{
    ...mapActions([
      'queryLogin'
    ]),
    click(){
      let aa=this.$store.state.user
      console.log(aa.userNo,this.user)
    }
  },
  created(){
    // 两种方法均可调用
    // this.$store.dispatch('queryLogin')
    this.queryLogin()
  },
  mounted(){
    
  }
}
</script>
<style style="scss">
  
</style>