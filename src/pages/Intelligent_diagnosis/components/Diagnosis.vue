<template>
  <div class="q-pa-md row">
    <!--    基本信息模块-->
    <div style="width: 100% ">
      <div>
       <span style="color: black;
                    font-size: 30px;
                    font-weight: 800;
                    font-family: 华文仿宋">
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
        <el-form-item label="活动区域" size="small">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="家族病史" size="small" style="width: 50%;">
          <el-input type="textarea" v-model="form.desc" :autosize="{ minRows: 2, maxRows: 6}"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="clear">清空</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--    症状描述和图片上传模块-->
    <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
    <div style="width: 100% ">
      <div>
       <span style="color: black;
                    font-size: 30px;
                    font-weight: 800;
                    font-family: 华文仿宋">
                    基本信息
                </span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Diagnosis",
  data() {
    return {
      value1: 0,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    clear() {
      this.form.desc = ""
    }
  }
}
</script>
<style scoped>

</style>
