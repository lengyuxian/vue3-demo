<template>
  <div class="menu-container">
    <el-menu 
      ref="menuHead"
      :default-active="activeIndex" 
      class="el-menu-demo" 
      mode="horizontal"
      @change="handleSelect"
    >
      <template v-for="menu in menuList">
        <el-submenu 
          v-if="menu.children&&menu.children.length>0"
          :key="menu.id"
          :index="menu.path"
        >
          <template slot="title">
            <span>{{ menu.name }}</span>
          </template>
          <div
            v-for="(item,index) in menu.children"
            :key="index"
          >
            <el-menu-item
              :to="item.path"
              :index="item.path"
            >
              <router-link :to="item.path">
                {{ item.name }}
              </router-link>
            </el-menu-item>
          </div>
        </el-submenu>
        <el-menu-item
          v-else
          :key="menu.id"
          :index="menu.path"
        >
          <router-link :to="menu.path">
            {{ menu.name }}
          </router-link>
        </el-menu-item>
      </template>
      <el-menu-item index="4">
        <a
          href="https://element.eleme.cn/2.13/#/zh-CN/component/installation"
          target="_blank"
        >ele官网</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import bus from '@/utils/bus';
export default {
  name:'MenuPage',
  data(){
    return{
      menuList:[],
      activeIndex:this.$route.path
    }
  },
  watch:{
    '$route'(to,from){
      this.activeIndex=to.path
    }
  },
  created(){
    this.menuList=[
      {"name":"首页","path":"/home","id":"1"},
      {"name":"我的工作台","path":"/myWorkbench","id":"2",
        children:[
          {"name":"用户管理","path":"/user","id":"21"},
          {"name":"角色管理","path":"/role","id":"22"},
          {"name":"权限管理","path":"/auth","id":"23"}
        ]
      },
      {"name":"消息中心","path":"/notice","id":"3"},
      {"name":"图库","path":"/images","id":"4"}
    ]
  },
  mounted(){
    bus.$on('busTest',(val)=>{
      console.log('83---', val)
      if(val){
        this.handleSelect()
      }
    });
  },
  destroyed(){
    bus.$off('busTest')
  },
  methods:{
    handleSelect(key,keyPath){
      console.log('cliked:',key)
      this.activeIndex=key
    }
  }
}
</script>
<style lang="scss">
    .menu-container{
        width: 100%;
        .el-menu{
            background-color: rgba(0,0,0,.1);
        }
    }
</style>