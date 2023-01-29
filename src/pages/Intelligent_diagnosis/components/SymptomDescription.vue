<template>
<div style="width: 60%; margin: 0px auto">
      <el-card class="box-card" style="text-align: center">
        <div slot="header" class="clearfix">
  <span style="color: black;
                    font-size: 30px;
                    font-weight: 800;
                    font-family: 华文仿宋">
                    症状描述
                </span>
        </div>
        <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="symptom"
            maxlength="200"
            show-word-limit style="margin-top: 10px;margin-bottom: 10px"
        >
        </el-input>
        <el-button type="primary" round @click="startup">提交</el-button>
      </el-card>
<!--      <div style="justify-content: center;margin-top:10px">-->
<!--        <el-upload-->
<!--            class="upload-demo"-->
<!--            drag-->
<!--            action="https://jsonplaceholder.typicode.com/posts/"-->
<!--            multiple style="text-align: center">-->
<!--          <i class="el-icon-upload"></i>-->
<!--          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>-->
<!--          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
<!--        </el-upload>-->
<!--      </div>-->
    </div>
</template>

<script>
export default {
  name: "SymptomDescription",
  data(){
    return{
       symptom: "",
    }
  }
}
</script>

<style scoped>

</style>
