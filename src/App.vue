<template>
  <div id="app">
    <router-view></router-view>
    <div class="beian"><a href="https://beian.miit.gov.cn">湘ICP备2021017188号</a></div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
<style lang="less">
.beian {
  font-size: 12px;
  
  left: 0;
  right: 0;
  position: fixed;
  text-align: center;
  bottom:0;
  height: 16px;
  z-index:9999;
  background-color: #333744;
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: skyblue;
    }
  }
}
</style>
