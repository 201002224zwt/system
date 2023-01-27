<template>
  <div class="q-pa-md row">
    <!--    基本信息模块-->
    <div style="width: 100% ">
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
    <!--    症状描述和图片上传模块-->
    <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
    <div style="width: 100% ">

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
            :rows="6"
            placeholder="请输入内容"
            v-model="symptom"
            maxlength="200"
            show-word-limit style="margin-top: 10px;margin-bottom: 10px"
        >
        </el-input>
        <el-button type="primary" round>提交</el-button>
      </el-card>
      <div style="justify-content: center;margin-top:10px">
        <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple style="text-align: center">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
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
        personality: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      symptom: ""
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
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
