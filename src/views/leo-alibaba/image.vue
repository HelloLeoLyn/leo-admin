<template>
  <div>
    <el-form :model="json" ref="form" label-width="80px" :inline="false" size="normal">
      <el-form-item label="">
        <el-input v-model="json.name" placeholder="" size="normal" clearable @change=""></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="json.description" placeholder="" size="normal" clearable @change=""></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input :value="JSON.stringify(json)" placeholder="" size="normal" clearable @change=""></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleCreateAlibabaAlbum">立即创建</el-button>
      </el-form-item>
    </el-form>
    <el-form :model="image" ref="form" label-width="80px" :inline="false" size="normal">
      <el-form-item label="">
        <el-input v-model="image.albumID" placeholder="" size="normal" clearable @change=""></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="image.name" placeholder="" size="normal" clearable @change=""></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="image.description" placeholder="" size="normal" clearable @change=""></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-checkbox v-model="image.drawTxt" placeholder="" size="normal" clearable @change=""></el-checkbox>
      </el-form-item>
      <el-form-item label="">
        <div v-html="image.imageBytes"></div>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="image.webSite" placeholder="" size="normal" clearable @change=""></el-input>
      </el-form-item>
      <el-upload class="upload" ref="upload" action="string" :file-list="fileList" :auto-upload="false"
        :http-request="uploadFile" :on-change="handleChange" multiple="multiple">
        <el-button slot="trigger" size="small" type="primary" @click="delFile">选取文件</el-button>
      </el-upload>
      <el-button type="primary" @click="onsubmit">保存</el-button>
    </el-form>
  </div>
</template>
<script>
/**
 *
c
String
是
相册名称。最长30个中文字符
description
String
否
相册描述。最长2000个中文字符，国际站无需处理此字段
authority
Integer
是
相册访问权限。取值范围:0-不公开；1-公开；2-密码访问。只有开通旺铺的会员可以设置相册访问权限为“1-公开”和“2-密码访问”，未开通旺铺的会员相册访问权限限制为“0-不公开”，国际站无需处理此字段
password
String
否
相册访问密码。4-16位非中文字符。当authority为2-密码访问时必填，国际站无需处理此字段
webSite
String
是
站点信息，指定调用的API是属于国际站（alibaba）还是1688网站（1688）
 */
import axios from 'axios';
import { api_photo_alibaba_album_add } from '@/api/leo-photo'
export default {
  data() {
    return {
      json: {
        'id': 'com.alibaba.product:alibaba.photobank.album.add-1',
        name: '奔驰刹车片2023',
        description: '',
        authority: 1,
        webSite: '1688'
      },
      fileList: [],
      image: {
        'id': 'com.alibaba.product:alibaba.photobank.album.add-1',
        name: '',
        description: '',
        authority: 1,
        webSite: '1688',
        albumID: '335902400',
        drawTxt: false,
        imageBytes: null,
        file: null
      }
    }
  },
  methods: {
    // 点击上传文件触发的额外事件,清空fileList
    delFile() {
      this.fileList = [];
    },
    handleChange(file, fileList) {
      this.fileList = fileList;
      // console.log(this.fileList, "sb");
    },
    // 自定义上传文件
    uploadFile(file) {
      this.formData.append('file', file.file);
      // console.log(file.file, "sb2");
    },


    onsubmit() {
      // 保存按钮
      let formData = new FormData();
      formData.append('file', this.fileList[0].raw);// 拿到存在fileList的文件存放到formData中
      // 下面数据是我自己设置的数据,可自行添加数据到formData(使用键值对方式存储)
      formData.append('albumID', this.image.albumID);
      axios.post('http://localhost:8080/photo/alibaba/uploadOne', formData, {
        'Content-Type': 'multipart/form-data;charset=utf-8'
      })
        .then(res => {
          if (res.data === 'SUCCESS') {
            this.$notify({
              title: '成功',
              message: '提交成功',
              type: 'success',
              duration: 1000
            });
          }
        })
    }
    ,


    handleCreateAlibabaAlbum() {
      api_photo_alibaba_album_add(this.json).then(res => {
        this.$message.success(res.msg)
        console.log(res)
      })
    },

  },
}
</script>