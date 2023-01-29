<template>
  <div style="width: 45%; margin: 0px auto">
    <el-card class="box-card" style="text-align: center">
      <div slot="header" class="clearfix" style="text-align: center">
  <span style="color: black;
                    font-size: 30px;
                    font-weight: 800;
                    font-family: 华文仿宋;">
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
      <el-button type="primary" round @click="startup">保存</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "SymptomDescription",
  data() {
    return {
      symptom: "",
    }
  },
  methods:{
    startup(){
      console.log("已触发")
      // this.$root.$emit("result",true)
    this.$root.$emit("stepvalue",2);//点击保存后，跳转到症状描述
    },
  }
}
</script>

<style scoped>


.box-card /deep/ .el-card__header {
  height: 76px;
}

</style>
