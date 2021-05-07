const RelyConfig = {
  test: {
    vodData: {},
    ossData: {
      region: "",
      accessKeyId: "",
      accessKeySecret: "",
      bucket: "",
    },
    agoraData: "",
  },
};

const handleRelyConfig = (env) => {
  let _env = env == 'idc' ? 'idc' : 'test';
  let isDo = window.navigator.language == "zh-CN" ? true : false;
  let data = Object.assign({}, RelyConfig[_env]);
  data.vodData.region = isDo ? data.vodData.doRegion : data.vodData.abRegion;
  delete data.vodData.doRegion;
  delete data.vodData.abRegion;
  return data;
}
export default handleRelyConfig(process.env.VUE_APP_API_ENV)