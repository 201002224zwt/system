<template>
  <div style="width: 45%; margin: 0px auto;">
    <el-card class="box-card" style="text-align: center">
      <div slot="header" class="clearfix" style="text-align: center">
    <span style="color: black;
                    font-size: 30px;
                    font-weight: 800;
                    font-family: 华文仿宋;">
                    图片上传
                </span>
      </div>
      <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple style="text-align: center" :on-success="handleSuccess">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <el-button type="success" round style="margin-top: 20px" :disabled="false" @click="submit">提交</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "UploadImage",
  data(){
    return {
    approval:true
    }
  },
  methods:{
    handleSuccess(){
      console.log("dasdasdasdasdasda")
      this.approval = false;
    },
    submit(){
      this.$root.$emit("stepvalue",3);//点击保存后，跳转到症状描述
      setTimeout(this.$root.$emit("result",true),2000);
    }
  }
}
</script>

<style scoped>

</style>
