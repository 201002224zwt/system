import Vue from 'vue'
//对应你要跳转的组件
import HelloWorld from "../components/HelloWorld"
import Router from 'vue-router'
import Diagnosis from "@/pages/Intelligent_diagnosis/Diagnosis"
import DiagnosticResult from "@/pages/Intelligent_diagnosis/components/Result"

Vue.use(Router);
export default new Router({
    routes: [
        {path:'/',name:'hello',component:HelloWorld},
        {path:'/diagnosis',name:'diagnosis',component:Diagnosis},
        {path:'/result',name:'result',component:DiagnosticResult},
    ]
})
