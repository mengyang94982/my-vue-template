<template>
  <div>
    <FileUpload @uploadCompleteOSS="uploadCompleteOSS">
        <el-button type="primary">上传图片</el-button>
    </FileUpload>
    <el-image
      style="width: 100px; height: 100px"
      :src="url"
      fit="cover"></el-image>
  </div>
</template>

<script>
import FileUpload from "../../components/FileUpload"
export default {
  components:{
    FileUpload
  },
  data(){
    return {
      url:null,
    }
  },
  methods:{
    uploadCompleteOSS(result){
      console.log(result)
      this.url=result.url
    }
  }
}
</script>

<style>

</style>