<template>
  <div>
    <router-view></router-view>
<van-tabbar route>
  <van-tabbar-item icon="home-o" replace to="/">主页</van-tabbar-item>
  <van-tabbar-item icon="user-o" replace to="/me">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
