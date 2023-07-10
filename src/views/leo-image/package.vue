<template>
  <div>
    <div>
      <el-row type="flex" class="row-bg" justify="center" :gutter="10">
        <el-col :span="18">
          <div class="leo-image-package" id='superMap'>
            <img src="http://localhost:8080/img/package/remark.jpg" />
            <div class="leo-image-package-content">
              <el-row>{{title}}</el-row>
              <el-row>{{content}}</el-row>
              <el-row> <span>{{barcode}}</span></el-row>
              <vue-barcode :value="barcode" class="leo-barcode" :displayValue='false' :height='30'
                background="#9f9794" :margin="0">条形码显示失败时的内容</vue-barcode>
            </div>
          </div>
        </el-col>
        <el-col :span="6">

          <div class="leo-image-package-remark">
            <!-- <img src="http://localhost:8080/img/package/remark.jpg" alt=""
              style="width:300px;height:150px;margin: 75px 0;"> -->
            <el-row>{{title}}</el-row>
            <el-row>{{content}}</el-row>
            <el-row> <span>{{barcode}}</span></el-row>
            <vue-barcode :value="barcode" class="leo-barcode" :displayValue='false' :height='30'
              background="#9f9794" :margin="0">条形码显示失败时的内容</vue-barcode>
          </div>

          <el-input v-model="title"></el-input>
          <el-input v-model="content"></el-input>
          <el-input v-model="barcode"></el-input>
          <el-button>生成包装图片</el-button>
        </el-col>

      </el-row>

    </div>

  </div>
</template>
<script>
import VueBarcode from 'vue-barcode'
export default {
  components: { VueBarcode },
  methods: {},
  data() {
    return {
      barcode: '123456789',
      title: 'title',
      content: 'content'
    }
  }
}
</script>
<style>
#div1 {
  position: relative;
  height: 150px;
  width: 150px;
  margin: 50px;
  padding: 10px;
  border: 1px solid black;
  perspective: 150;
  -webkit-perspective: 150; /* Safari and Chrome */
}

#div2 {
  /* padding: 50px; */
  /* width: 100%; */
  /* height: 200px; */
  position: absolute;
  /* border: 1px solid black; */
  /* background-color: yellow; */
  transform: rotateX(89deg);
  -webkit-transform: rotateX(0deg) rotateY(-45deg) rotateZ(0deg); /* Safari and Chrome */
}
</style>
<style lang="scss" scoped>
.leo-image-package {
  position: relative;
  margin: 50px;
  padding: 10px;
  border: 1px solid black;
  perspective: 150;
  -webkit-perspective: 150; /* Safari and Chrome */
  width: 1000px;
  height: 1000px;
  background-image: url('http://localhost:8080/img/package/index.jpg');
  ‘ &-remark {
    padding-left: 15px;
    padding-top: 50px;
    background-position: center;
    background-repeat: no-repeat;
    margin: 52px 30px;
    background-size: 100%;
    height: 200px;
    width: 300px;
    background-image: url('http://localhost:8080/img/package/remark.jpg');
  }
  img {
    position: absolute;
    transform: rotateX(89deg);
    -webkit-transform: rotateX(-5deg) rotateY(-13deg) rotateZ(17deg);
    height: 257px;
    width: 310px;
    top: 465px;
    left: 4px;
  }
  &-content {
    position: absolute;
    transform: rotateX(89deg);
    -webkit-transform: rotateX(-4deg) rotateY(-12deg) rotateZ(17deg);
    height: 267px;
    width: 309px;
    top: 551px;
    left: 22px;
  }
}
</style>