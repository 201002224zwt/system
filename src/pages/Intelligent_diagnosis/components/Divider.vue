<template>
  <div>
    <el-steps :active="stepvalue" simple >
      <el-step title="步骤 1" icon="el-icon-edit"></el-step>
      <el-step title="步骤 2" icon="el-icon-upload"></el-step>
      <el-step title="步骤 3" icon="el-icon-picture"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Divider",
  data() {
    return {
      stepvalue:0
    }
  },
  created(){
    this.$root.$on('stepvalue', value =>{
      if(value !== this.stepvalue+1)
        return;
      this.stepvalue = value;
    })
  },
}
</script>

<style scoped>

</style>
