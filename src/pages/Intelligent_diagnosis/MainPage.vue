<template>
 <div>
<!--     <search-bar></search-bar>-->
    <TopBar></TopBar>
    <div style="margin-bottom: 20px"></div>
    <div class="flex justify-center">
      <div class="col-8 justify-center">
        <Diagnosis ></Diagnosis>
        <Test></Test>
      </div>
    </div>
    <Footer style="margin-top: 20px;"></Footer>
 </div>
</template>

<script>
import Diagnosis from "@/pages/Intelligent_diagnosis/Diagnosis";
import Footer from "@/components/Footer";
import Test from "@/pages/Intelligent_diagnosis/components/Test";
import TopBar from "@/components/TopBar";
export default {
  name: "MainPage",
  components: {
    Test,
    Diagnosis,
    Footer,
    TopBar,
  },
}
</script>

<style scoped>

</style>
