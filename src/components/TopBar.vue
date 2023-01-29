<template>
  <div id="building" style="text-align: center;margin:auto">
    <span style="color: #000000;
                font-size: 55px;
                font-weight: 800;
                font-family: 华光行草_CNKI;">
                中 医 辅 助 诊 疗 系 统
            </span>
        <el-carousel :interval="4000" type="card" height="200px" style="width: 60%;margin:auto">
          <el-carousel-item v-for="(item, index) in images" :key="index">
            <el-image :src="item" class="image"></el-image>
          </el-carousel-item>
        </el-carousel>

  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      imgSrc: require("../assets/shi.jpg"),
      images: [
        "https://img0.baidu.com/it/u=1398370628,1799540562&fm=253&fmt=auto&app=138&f=JPEG?w=758&h=420",
        "https://img0.baidu.com/it/u=2135997566,530767068&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=387",
        "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00781-3864.jpg",
        "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00383-1766.jpg",
        "https://img2.baidu.com/it/u=2067591148,425183701&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
      ]
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

#building {
  background: url("../assets/shi.jpg");
  width: 80%;
  height: 30%;
  background-size: 100% 100%;
  opacity: 80%;
}

.image {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 81.7%;
}
</style>
