<template>
  <div class="wrap">
    <h1>{{message}}</h1>
    <router-link to="/home">首页</router-link>
      <router-link to="/login">登陆</router-link>
  </div>
</template>

<script>
export default {
  name:'index',
  data(){
    return {
      message:'a my vue template'
    }
  }
}
</script>

<style>

</style>