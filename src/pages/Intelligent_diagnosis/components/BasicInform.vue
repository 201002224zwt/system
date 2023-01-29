<template>
  <div style="width: 45%; margin: 0px auto">
    <el-card class="box-card">
      <div slot="header" class="clearfix" style="text-align: center">
    <span style="color: black;
                    font-size: 30px;
                    font-weight: 800;
                    font-family: 华文仿宋;">
                    基本信息
                </span>
      </div>
      <el-form ref="form" :model="form" label-width="80px" style="margin-left: 60px;height: 50px" label-position="left">
        <el-row>
          <el-col :span="12">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="form.name" style="width: 70%" size="small"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="性别" prop="sex">
              <el-switch v-model="form.sex" active-text="男" inactive-text="女"
                         active-value="male"
                         inactive-value="female"></el-switch>

            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="出生日期" prop="birthdate">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.birthdate"
                              style="width: 70%;" size="small"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="性格特征" size="small" prop="personality">
              <el-select v-model="form.personality" style="width: 50%;">
                <el-option label="外向型" value="外向型"></el-option>
                <el-option label="内向型" value="内向型"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="近期饮食" size="small" style="width: 80%;" prop="food">
          <el-input type="textarea" v-model="form.food" :autosize="{ minRows: 2, maxRows: 6}"></el-input>
        </el-form-item>
        <el-form-item label="家族病史" size="small" style="width: 80%;" prop="medicalfam">
          <el-input type="textarea" v-model="form.medicalfam" :autosize="{ minRows: 2, maxRows: 6}"></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item style="margin-left: 35px">
              <el-button type="info" round @click="clear">清空</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item>
              <el-button type="primary" round @click="save">保存</el-button>
            </el-form-item>
          </el-col>
        </el-row>
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
        birthdate: '',
        sex: "female",
        type: [],
        resource: '',
        medicalfam: '',
        food: ""
      },

    }
  },
  methods: {
    clear() {
      this.$refs['form'].resetFields()
    },
    save(){
      this.$root.$emit("stepvalue",1);//点击保存后，跳转到症状描述
    }
  }
}
</script>

<style scoped>

</style>
