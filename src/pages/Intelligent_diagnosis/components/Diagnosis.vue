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
            :rows="5"
            placeholder="请输入内容"
            v-model="symptom"
            maxlength="200"
            show-word-limit style="margin-top: 10px;margin-bottom: 10px"
        >
        </el-input>
        <el-button type="primary" round @click="startup">提交</el-button>
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
    <el-dialog
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose" :fullscreen="true">
      <div style="text-align: center;margin-bottom: 20px">
        <span style="color: black;
                    font-size: 30px;
                    font-weight: 800;
                    font-family: 华文仿宋;">
                    诊断结果
                </span>
      </div>
      <div style="text-align: center;margin-bottom:10px">
        <el-progress type="circle" :percentage="progress"></el-progress>
      </div>
      <el-card class="box-card" shadow="always">
        <div slot="header" class="clearfix">
          <span style="font-size: 20px">症状分析</span>
        </div>
        <el-collapse v-for="(re,key) in result" :key="key" >
          <el-collapse-item :title="re.illness"  >
            <div style="font-size: 16px">原因分析:{{ re.analysis }}</div>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <div style="margin-bottom: 20px"></div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-size: 20px">药物推荐</span>
        </div>
        <div v-for="(item,index) in proscription" :key="index" class="text item">
          {{ '药物'+(index+1)+"\t"+ item }}
        </div>
      </el-card>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>


</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Diagnosis",
  data() {
    return {
      value1: 0,
      symptom: "",
      result: [//分析出来的病及其对应的分析
        {illness: "风寒", analysis: "吹空调"},
        {illness: "发热", analysis: "阳了"},
        {illness: "风湿", analysis: "下雨天吹电风扇"}
      ],
      proscription:["六味地黄丸","人参","冬虫夏草","当归"],
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
      progress: 0,
      dialogVisible: false
    }
  },
  methods: {
    clear() {
      this.form.desc = ""
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(value => {
            done();
            console.log(value)
          })
          .catch(error => {
            console.log(error)
          });
    },
    startup() {
      this.dialogVisible = true
      setInterval(this.valChange, 1000);
    },
    valChange() {
      this.progress += 15;
      if (this.progress > 100)
        this.progress = 100;
      console.log("progress:" + this.progress)
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
.text {
    font-size: 16px;
  }

.item {
    margin-bottom: 18px;
  }

</style>
