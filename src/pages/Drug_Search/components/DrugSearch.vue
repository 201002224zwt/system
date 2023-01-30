<template>
    <div class="box1" >
        <div style="width: 100% ;height: 1500px;">
            <el-card class="box-card">
                <div slot="header" class="clearfix" style="text-align: center">
                    <span style="color: black;
                                font-size: 30px;
                                font-weight: 800;
                                font-family: 华文仿宋;">
                                药材详细信息检索
                    </span>
                </div>

                <div style="margin: auto;width:60%">
                    <el-input
                    rounded
                    outlined
                    clearable
                    v-model="search"
                    :placeholder="placeholderText"
                    bg-color="black"
                    @keyup.enter.native="handleEnterKeyFilter"
                    id= "input">
                    <template slot="append">
                     
                        <el-button type="primary" icon="el-icon-search"  plain @click="Search"></el-button>
                      
                    </template>
                    </el-input>
                </div>

                <div>
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-card class="grid-content bg-purple" style="absolute; margin-top:10px;height:600px;overflow: hidden">
                               <div style="height:30px;margin:15px 0px 0px 10px;width:50%;color: black;
                                    font-size: 20px;
                                    font-weight: 400;
                                    font-family: 华文仿宋;">药材
                                </div>   
                                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                style="width: 100%;display: block;">
                                <div style="margin-left: 0px;margin-top: 10px;">
                                  <div style="margin-bottom:10px">
                                     <span style="height:30px;margin:10px 0px 0px 0px;width:60%;color: black;
                                    font-size: 20px;
                                    font-weight: 400;
                                    font-family: 华文行楷;">汉堡包</span>
                                  </div>
                                  <div class="bottom clearfix">
                                    <span style="height:30px;margin:20px 10px 0px 0px;width:60%;color: black;
                                    font-size: 15px;
                                    font-weight: 400;
                                    font-family: 华文仿宋;">质干标她工</span>
                                    </div>
                                    <div style="float: right">
                                      <el-button type="text" class="button" @click="details">详情</el-button>
                                    </div>
                                </div>

                            </el-card>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content bg-purple" style="absolute;margin-top:10px;height:600px;overflow: hidden">
                                <div style="height:30px;margin:15px 0px 0px 10px;width:50%;color: black;
                                    font-size: 20px;
                                    font-weight: 400;
                                    font-family: 华文仿宋;">药材
                                </div>    
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content bg-purple" style="absolute;margin-top:10px;height:600px;overflow: hidden">
                                <div style="height:30px;margin:15px 0px 0px 10px;width:50%;color: black;
                                    font-size: 20px;
                                    font-weight: 400;
                                    font-family: 华文仿宋;">药材
                                </div>    
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content bg-purple" style="absolute;margin-top:10px;height:600px;overflow: hidden">
                                <div style="height:30px;margin:20px 0px 0px 10px;width:50%;color: black;
                                    font-size: 20px;
                                    font-weight: 400;
                                    font-family: 华文仿宋;">药材
                                </div>    
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div id="loader_wrapper" class="row justify-center" style="height: 600px position: absolute;">
                    <div id="loader" style="margin:auto">
                    </div>
                    <div class="load_title">正在搜索中，请稍等......</div>
                </div>
            </el-card>
        </div>
    </div>



</template>

<script >
// import { rename } from "fs";
import {getData} from "../../../api/index/function";

  export default {
    name: 'DrugSearch',
    data () {
      return {
        content: [
          {
            tag: '文章',
            title: '质干标她工，认千铁认完联装',
            briefContent: '也取标要根委有众线传安，总众状划话已反社布次，此需村放照点收霸总。 已群除于清一看放五米复般，再北观际隶合重报都。 率何便口强连规毛，起按还束走更。 毛许改在布人织方照，好容都一次现度北处，量屈僚材海壳豆...',
            img: 'https://cdn.quasar.dev/img/parallax2.jpg'
          },
          {
            tag: '为你推荐',
            title: '过军些很三据置料机低，方想样一如',
            briefContent: '越文质拉起教克酸，再候6奇列。 导定包人切三府把，向维设看其器拉，直2公蹦义报。 程关道人眼越口按或色山问七，体队适通感使4决奇重需。 亲并农体立马复响区，查素确知极吨材...',
            img: 'https://cdn.quasar.dev/img/parallax2.jpg'
          },
          {
            tag: '文章',
            title: '质干标她工，认千铁认完联装',
            briefContent: '也取标要根委有众线传安，总众状划话已反社布次，此需村放照点收霸总。 已群除于清一看放五米复般，再北观际隶合重报都。 率何便口强连规毛，起按还束走更。 毛许改在布人织方照，好容都一次现度北处，量屈僚材海壳豆...',
            img: 'https://cdn.quasar.dev/img/parallax2.jpg'
          },

          {
            tag: '文章',
            title: '质干标她工，认千铁认完联装',
            briefContent: '也取标要根委有众线传安，总众状划话已反社布次，此需村放照点收霸总。 已群除于清一看放五米复般，再北观际隶合重报都。 率何便口强连规毛，起按还束走更。 毛许改在布人织方照，好容都一次现度北处，量屈僚材海壳豆...',
            img: 'https://cdn.quasar.dev/img/parallax2.jpg'
          },
        ],
        skeleton: [
          {
            tag: '  ',
            title: '  ',
            briefContent: ' ',
            img: '  '
          },
          {
            tag: '  ',
            title: '  ',
            briefContent: ' ',
            img: '  '
          },
          {
            tag: '  ',
            title: '  ',
            briefContent: ' ',
            img: '  '
          },
        ],
        pagination: {
            page: 1,
            rowsPerPage: 3,
            rowsNumber: 17,
            total: 7,
        },
        sort: '药材',
        search: '',
        flag:'请输入药材名称，例如：山药、陈皮、薄荷等......',
        Visible: false
      }
    },
    computed: {

  placeholderText() {
      return this.flag
      }
    },

    watch: {
      'pagination.page': function () {
        this.content = this.skeleton
        this.$root.$emit('searchStatus')
        getData(this.sort, this.pagination.page, this.pagination.rowsPerPage, this.search).then(res=>{
          this.pagination.rowsNumber = res.data.count
          this.pagination.total = Math.ceil(this.pagination.rowsNumber / this.pagination.rowsPerPage)
          let temp = []
          for (let i in res.data.results){
              let t = {
                id: res.data.results[i].id,
                tag: res.data.results[i].key_words,
                title: res.data.results[i].title,
                briefContent: res.data.results[i].summary,
                img: res.data.results[i].cover
              }
              temp.push(t)
          }
          this.content = temp
          setTimeout(()=>{
            this.$root.$emit('contentStatus')
          }, 100)
        })
      }
    },
    mounted() {
      this.content = this.skeleton
      this.$root.$emit('searchStatus')
      getData(this.sort, this.pagination.page, this.pagination.rowsPerPage, this.search).then(res=>{
          this.pagination.rowsNumber = res.data.count
          this.pagination.total = Math.ceil(this.pagination.rowsNumber / this.pagination.rowsPerPage)
          let temp = []
          for (let i in res.data.results){
              let t = {
                id: res.data.results[i].id,
                tag: res.data.results[i].key_words,
                title: res.data.results[i].title,
                briefContent: res.data.results[i].summary,
                img: res.data.results[i].cover
              }
              temp.push(t)
          }
          this.content = temp
          setTimeout(()=>{
            this.$root.$emit('contentStatus')
          }, 100)
       })

    },
    created(){
      this.$root.$on('switch', this.switchCallback)
      this.$root.$on('content', this.contentCallback)
    },

    methods: {
      getPagination () {
        getData(this.sort, this.pagination.page, this.pagination.rowsPerPage, this.search).then(res=>{
          this.pagination.rowsNumber = res.data.count
          this.pagination.total = Math.ceil(this.pagination.rowsNumber / this.pagination.rowsPerPage)
        })
      },

      Search(){
          this.search=''
      },

      details(){
         this.$router.push({path:'/drugResult'})
         

      },
      
      switchCallback(tag_id){
        this.content = this.skeleton
        this.$root.$emit('searchStatus')
        if (tag_id === 0){
          this.sort = '药材'
          this.flag='请输入药材名称，例如：山药、陈皮、薄荷等......'
        }
        // else if (tag_id === 1){
        //   this.sort = '药品'
        //   this.flag='请输入药品'
        // }else if (tag_id === 2){
        //   this.sort = '药材'
        // }else if (tag_id === 3){
        //   this.sort = '药膳'
        // }else if (tag_id === 4){
        //   this.sort = '药品'
        // }
        this.pagination.page = 1
        this.search = ''
        getData(this.sort, this.pagination.page, this.pagination.rowsPerPage, this.search).then(res=>{
          this.pagination.rowsNumber = res.data.count
          this.pagination.total = Math.ceil(this.pagination.rowsNumber / this.pagination.rowsPerPage)
          let temp = []
          for (let i in res.data.results){
              let t = {
                id: res.data.results[i].id,
                tag: res.data.results[i].key_words,
                title: res.data.results[i].title,
                briefContent: res.data.results[i].summary,
                img: res.data.results[i].cover
              }
              temp.push(t)
          }
          this.content = temp
          setTimeout(()=>{
            this.$root.$emit('contentStatus')
          }, 100)
        })
      },
      contentCallback(search, content, page){
        this.content = this.skeleton
        this.search = search
        this.pagination.page = page
        this.getPagination()
        let temp = []
        for (let i in content){
            let t = {
              id: content[i].id,
              tag: content[i].tag,
              title: content[i].title,
              briefContent: content[i].briefContent,
              img: content[i].img
            }
            temp.push(t)
        }
        this.content = temp
      }
    }
  }
</script>

<style scoped>

#loader{
  display: block;
  position: relative;
  top: 20%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #000;
  -webkit-animation: spin 5s linear infinite;
  -ms-animation: spin 5s linear infinite;
  -moz-animation: spin 5s linear infinite;
  -o-animation : spin 5s linear infinite;
  animation:spin 5s linear infinite;
  z-index: 1001;
}
#loader:before{
  content:"";
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #000;
  -webkit-animation: spin 8s linear infinite;
  -ms-animation: spin 8s linear infinite;
  -moz-animation: spin 8s linear infinite;
  -o-animation : spin 8s linear infinite;
  animation:spin 8s linear infinite;
}
#loader:after{
  content:"";
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #000;
  -webkit-animation: spin 8s linear 1s infinite;
  -ms-animation: spin 8s linear 1s infinite;
  -moz-animation: spin 8s linear 1s infinite;
  -o-animation : spin 8s linear 1s infinite;
  animation:spin 8s linear 1s infinite;
}
@-webkit-keyframes spin {
  0%{
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform:rotate(0deg);
  }
  100%{
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spin{
  0%{
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform:rotate(0deg);
  }
  100%{
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
#loader_wrapper .load_title{
    margin-top:10px;
    font-family: "Open Sans";
    font-size: 20px;
    width: 100%;
    text-align: center;
    z-index: 9999;
    /* position: absolute; */
    top: 80%;
    opacity: 1;
    line-height: .3rem;
}

.el-row {
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    /* background:#f9fafc; */
    
  }
  .bg-purple {
    /* background: #d3dce6; */
    border:1px solid #000 ;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .bg-purple-light {
    /* background: black; */
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>