<style scoped>
  .add {
    width: 50%;
    position: relative;
    left: 20%;
  }
</style>
<template>
  <div class="add">
    <Form :model="formItem" :label-width="80">
      <FormItem label="产品新增">
        <Row>
          <i-col span="11">
            <Input v-model="formItem.name" placeholder="产品名称"></Input>
          </i-col>
          <i-col span="2" style="text-align: center">-</i-col>
          <i-col span="11">
            <Input v-model="formItem.model" placeholder="产品型号"></Input>
          </i-col>
        </Row>
      </FormItem>
      <FormItem label="产品图片">
        <img v-bind:src="imgUrl" />
        <div>
          <Upload
            :before-upload="handleUpload"
            action="/posts/">
            <Button type="ghost" icon="ios-cloud-upload-outline">选择要上传文件的文件</Button>
          </Upload>
          <div v-if="imgFile !== null">待上传文件：{{ imgFile.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? '上传中' : '点击上传' }}</Button></div>
        </div>
      </FormItem>
      <FormItem label="产品ID范围">
        <Row>
          <i-col span="11">
            <Input type="number" v-model="formItem.beginNum" placeholder="起始序号"></Input>
          </i-col>
          <i-col span="2" style="text-align: center">-</i-col>
          <i-col span="11">
            <Input type="number" v-model="formItem.endNum" placeholder="截止序号"></Input>
          </i-col>
        </Row>
      </FormItem>
      <FormItem label="生产厂家">
        <Input v-model="formItem.factoryInfo.name" placeholder="例如利思比"></Input>
      </FormItem>
      <FormItem label="厂家信息">
        <Row>
          <i-col span="11">
            <Input v-model="formItem.factoryInfo.contact" placeholder="联系人"></Input>
          </i-col>
          <i-col span="2" style="text-align: center">-</i-col>
          <i-col span="11">
            <Input v-model="formItem.factoryInfo.phoneNumber" placeholder="联系方式"></Input>
          </i-col>
        </Row>
        <Row>
          <i-col span="6">
            <Input v-model="formItem.factoryInfo.province" placeholder="省"></Input>
          </i-col>
          <i-col span="2" style="text-align: center">-</i-col>
          <i-col span="6">
            <Input v-model="formItem.factoryInfo.city" placeholder="市"></Input>
          </i-col>
          <i-col span="2" style="text-align: center">-</i-col>
          <i-col span="6">
            <Input v-model="formItem.factoryInfo.city" placeholder="区"></Input>
          </i-col>
        </Row>
        <Row>
          <i-col span="20">
            <Input v-model="formItem.factoryInfo.address" placeholder="详细地址"></Input>
          </i-col>
        </Row>
      </FormItem>
      <FormItem label="产品备注">
        <Input v-model="formItem.remarks" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
      </FormItem>
      <FormItem>
        <Button type="primary">提交</Button>
        <Button type="ghost" style="margin-left: 8px">取消</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formItem: {
          name: '',
          model: '',
          beginNum: '',
          endNum: '',
          order: '',
          remarks: '',
          factoryInfo: {
            name: '',
            province: '',
            city: '',
            area: '',
            address: '',
            contact: '',
            phoneNumber: '',
          }
        },
        imgFile: null,
        loadingStatus: false,
        imgUrl: '',
      }
    },
    methods: {
      handleUpload: function (file) {
        this.imgFile = file;
      }
    }
  }
</script>
