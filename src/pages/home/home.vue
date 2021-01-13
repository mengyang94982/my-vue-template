<template>
  <div class="home">
    <h1>
      {{ msg }}Page
    </h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  mixins: [],
  props: {
    msg: {
      type: String,
      default: "Home"
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
.home{
  h1{
    font-size: 30px;
  }
}
</style>
