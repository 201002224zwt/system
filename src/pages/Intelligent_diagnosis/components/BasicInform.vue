<template>
<div style="width: 60%; margin: 0px auto">
      <el-card class="box-card">
        <div slot="header" class="clearfix" style="text-align: center">
    <span style="color: black;
                    font-size: 30px;
                    font-weight: 800;
                    font-family: 华文仿宋;">
                    基本信息
                </span>
        </div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="姓名">
            <el-input v-model="form.name" style="width: 20%" size="small"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-switch v-model="form.delivery" active-text="男" inactive-text="女"
                       active-value="male"
                       inactive-value="female"></el-switch>
          </el-form-item>
          <el-form-item label="出生日期">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                              style="width: 100%;" size="small"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="性格特征" size="small">
            <el-select v-model="form.personality">
              <el-option label="外向型" value="外向型"></el-option>
              <el-option label="内向型" value="内向型"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="家族病史" size="small" style="width: 50%;">
            <el-input type="textarea" v-model="form.desc" :autosize="{ minRows: 2, maxRows: 6}"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="clear">清空</el-button>
          </el-form-item>
        </el-form>

      </el-card>
    </div>
</template>

<script>
export default {
  name: "BasicInform",
  data() {
    return {
      form: {
        name: '',
        personality: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },

    }
  },
  methods: {
    clear() {
      this.form.desc = ""
    },}
}
</script>

<style scoped>

</style>
