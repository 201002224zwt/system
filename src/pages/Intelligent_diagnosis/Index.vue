<template>
  <div id="index">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="index">
    <el-button @click="visible = true">Button</el-button>

    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
  </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '/src/components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: function() {

        return { visible: false }
      },
  methods:{
  }
}
</script>

<style>
#index {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
