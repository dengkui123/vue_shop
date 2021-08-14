<template>
  <div>
    <button @click="Logout">退出</button>
  </div>

</template>

<script>
export default {
  name: 'Home',
  data() {
    return {

    }
  },
  methods: {
    Logout() {
      window.sessionStorage.clear('TOKEN');
      this.$success('成功退出');
      this.$router.push('/login');
    }
  }
}
</script>

<style lang="less" scoped>
</style>
