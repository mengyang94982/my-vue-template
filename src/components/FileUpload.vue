<template>
  <div class="file_upLoad_Components">
    <el-upload
      class="file_upLoad"
      action="http://oss.aliyuncs.com"
      :show-file-list="false"
      list-type="picture"
      :on-exceed="handleExceed"
      :file-list="fileList"
      :on-change="fileChange"
      :auto-upload="false"
      :multiple="multiple"
      :accept="accept"
      :limit="limit"
      :disabled="isDisabled"
      ref="baseUpload"
    >
      <div>
        <slot></slot>
      </div>
    </el-upload>
  </div>
</template>

<script>
import handleRelyConfig from "../config/rely";
import { randomString, getFileType, getFileName } from "../utils/index";
import { MD5 } from "../utils/MD5";
export default {
  props: {
    multiple: {
      //多选
      type: Boolean,
      default: false,
    },
    accept: {
      //文件类型(小写格式 如：.jpg,.jpeg,.bmp,.png)
      type: String,
      default: "*",
    },
    limit: {
      //限制选择文件个数
      type: Number,
      default: null,
    },
    isDisabled: {
      //是否禁用
      type: Boolean,
      default: false,
    },
    ossPath: {
      //文件路径
      type: String,
      default: "",
    },
  },
  data() {
    return {
      fileList: [],
      ossData: handleRelyConfig.ossData,
      aladyNum: 0,
    };
  },
  mounted() {
    console.log(handleRelyConfig);
  },
  methods: {
    //文件超出个数限制时的钩子
    handleExceed(files, fileList) {
      console.log("文件超出个数限制时的钩子");
    },
    //文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
    async fileChange(file, fileList) {
      console.log(file);
      console.log(fileList);
      this.fileList = fileList;
      this.uploadFileToOss();
    },
    async uploadFileToOss() {
      this.fileList.forEach((item) => {
        this.handleUploadOss(
          item.raw,
          (result) => {
            this.aladyNum++;
            if (this.aladyNum == this.fileList.length) {
              this.clearFileList();
            }
            this.$emit("uploadCompleteOSS", result);
          },
          {
            fileName: MD5(`${this.company_id}+${getFileName(item.name)}`),
            fileType: getFileType(item.name),
          }
        );
      });
    },
    handleUploadOss(data, nv, options = {}) {
      let ossData = this.ossData;
      let ossPath = this.confirmOssPath(data);
      const reader = new FileReader();
      reader.readAsArrayBuffer(data);
      reader.onload = (event) => {
        const client = new OSS.Wrapper(ossData);
        console.log(client)
        const objectKey = `${ossPath}${
          options.fileName
        }.${options.fileType.toLowerCase()}`;
        const buffer = new OSS.Buffer(event.target.result);
        client
          .put(objectKey, buffer)
          .then((result) => {
            console.log(result)
            nv && nv(result);
          })
          .catch((err) => {});
      };

    },
    clearFileList() {
      this.fileList = [];
      this.aladyNum = 0;
      this.$refs.baseUpload.clearFiles();
    },
    confirmOssPath(data) {
      console.log(data)
      if (this.ossPath) {
        return this.ossPath;
      }
      let type = "";
      if (data.name) {
        type = getFileType(data.name).toLowerCase();
      } else {
        type = data.type.indexOf("image") != -1 ? "png" : "other";
      }
      let imageType = ["jpg", "jpeg", "bmp", "png"];
      let ossPath =
        imageType.indexOf(type) != -1 ? "ams/" : "ams/";
      return ossPath;
    },
  },
};
</script>

<style lang="less" scoped></style>
