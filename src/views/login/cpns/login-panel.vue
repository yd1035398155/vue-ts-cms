<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <div>账号<input type="text" /></div>
        <div>密码<input type="text" /></div>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        手机登录页面
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return {
      data() {
        return {}
      },
      methods: {}
    }
  }
})
</script>
<style lang="less" scoped>
.login-panel {
  width: 320px;
}
.title {
  text-align: center;
}
</style>
