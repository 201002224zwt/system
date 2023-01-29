<template>
  <div class="q-pa-md row">
    <el-container>

      <el-aside width="200px">
        <divider/>
      </el-aside>

      <el-container >
        <el-divider><i class="el-icon-s-custom"></i></el-divider>
        <!--    基本信息模块-->
          <basicInform></basicInform>
        <!--    症状描述和图片上传模块-->
        <el-divider><i class="el-icon-s-order"></i></el-divider>

          <symptomDescription></symptomDescription>

        <el-divider><i class="el-icon-camera-solid"></i></el-divider>
        <el-footer>
          <uploadImage></uploadImage>
        </el-footer>
      </el-container>
    </el-container>
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
        <el-collapse v-for="(re,key) in result" :key="key">
          <el-collapse-item :title="re.illness">
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
          {{ '药物' + (index + 1) + "\t" + item }}
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
import basicInform from "@/pages/Intelligent_diagnosis/components/BasicInform";
import symptomDescription from "@/pages/Intelligent_diagnosis/components/SymptomDescription";
import divider from "@/pages/Intelligent_diagnosis/components/Divider";
import uploadImage from "@/pages/Intelligent_diagnosis/components/UploadImage";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Diagnosis",
  components: {
    basicInform,
    symptomDescription,
    divider,
    uploadImage
  },
  data() {
    return {
      symptom: "",
      result: [//分析出来的病及其对应的分析
        {illness: "风寒", analysis: "吹空调"},
        {illness: "发热", analysis: "阳了"},
        {illness: "风湿", analysis: "下雨天吹电风扇"}
      ],
      proscription: ["六味地黄丸", "人参", "冬虫夏草", "当归"],
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
  created() {
    this.$root.$on('result', this.startup)
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
.text {
  font-size: 16px;
}

.item {
  margin-bottom: 18px;
}

.el-header, .el-footer {
  color: #333;
  line-height: 60px;
}

.el-aside {
  line-height: 400px;
}

.el-main {
  text-align: center;
  line-height: 100px;
  margin-bottom: 100px;
}

body > .el-container {
  margin-bottom: 40px;
}


.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>
