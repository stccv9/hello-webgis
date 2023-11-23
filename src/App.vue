<template>
  <div id="app">
    <el-container class="app-out-pannel">
      <el-header class="sys-header">WebGIS一张图项目系统</el-header> 
      <el-container class="app-content-pannel">
        <el-aside class="sys-menu">
          <el-menu
          default-active = "1"
          class = "el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="true"
          background-color="#606266"
        >
            <el-menu-item index="1">
              <i class = "el-icon-monitor"></i>
              <span slot="title">地图大屏</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class = "el-icon-picture-outline"></i>
              <span slot="title">一张图</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class = "el-icon-map-location"></i>
              <span slot="title">三维展示</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class = "el-icon-setting"></i>
              <span slot="title">系统管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        
        <el-main class="sys-content">
          <router-view></router-view>
          <!-- <MapView /> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
//import MapView from './components/MapViwe.vue'

export default {
  name:'App',
  components:{
   // MapView,
  },
  methods:{
    handleOpen(key, keyPath){
      console.log(key, keyPath);
    },
    handleClose(key, keyPath){
      console.log(key, keyPath)
    }
  }
};
</script>

<style>
html,
body,
#app {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
}
.app-out-pannel,
.app-content-pannel {
  height: 100%;
}
.sys-header {
  background-color: #303133;
  line-height: 60px;
  height: 60px;
  color: #fff;
  font-size: 600;
}
.sys-menu {
  background-color: #606266;
  width: 60px !important;
  overflow: hidden;
}
.sys-content{
  padding: 5px;
}
</style>
