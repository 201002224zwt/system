import Vue from 'vue'
//对应你要跳转的组件
import HelloWorld from "../components/HelloWorld"
import Router from 'vue-router'
import Diagnosis from "@/pages/Intelligent_diagnosis/Diagnosis"
import DiagnosticResult from "@/pages/Intelligent_diagnosis/components/Result"
import Test from "@/pages/Intelligent_diagnosis/components/Test"
import MainPage from "@/pages/Intelligent_diagnosis/MainPage";
Vue.use(Router);
export default new Router({
    routes: [
        {path:'/',name:'hello',component:HelloWorld},
        {path:'/diagnosis',name:'diagnosis',component:Diagnosis},
        {path:'/result',name:'result',component:DiagnosticResult},
        {path:'/test',name:'test',component:Test},
        {path:'/mainpage',name:'mainpage',component:MainPage},
    ]
})
