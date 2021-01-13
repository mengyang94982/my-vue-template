<template>
  <div class="login">
    <h1>
      {{ msg }}Page
    </h1>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  mixins: [],
  props: {
    msg: {
      type: String,
      default: "Login"
    }
  },
  data(){
    return {

    }
  },
  computed:{

  },
  watch:{

  },
  created(){

  },
  mounted(){

  },
  methods:{

  }
};
</script>

<style scoped lang="less">
.login{}
</style>
