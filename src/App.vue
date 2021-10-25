<template>
  <div>
    <h3>后台管理系统</h3>
    <router-link to="/login">
      <el-button type="primary">登录</el-button>
    </router-link>
    <router-link to="/main">
      <el-button type="danger">首页</el-button>
    </router-link>
    <router-view></router-view>

    <el-button type="primary" plain disabled>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
