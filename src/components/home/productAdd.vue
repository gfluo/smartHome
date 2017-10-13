<style scoped>
  .add {
    width: 50%;
    position: relative;
    left: 20%;
  }
  .productImg {

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
      <FormItem label="版本信息">
        <Row>
          <i-col span="11">
            <Input v-model="formItem.pcb" placeholder="PCB版本"></Input>
          </i-col>
          <i-col span="2" style="text-align: center">-</i-col>
          <i-col span="11">
            <Input v-model="formItem.frimware" placeholder="固件版本"></Input>
          </i-col>
        </Row>
      </FormItem>
      <FormItem label="产品图片">
        <div class="productImg">
          <img id='img' v-model="imgUrl" v-bind:src="imgUrl"/>
          <Upload :before-upload="handleUpload" action="/posts/">
            <Button type="ghost" icon="ios-cloud-upload-outline">选择产品图片</Button>
          </Upload>
          <div v-if="imgFile !== null">
            产品图片：{{ imgFile.name }}
            <Button type="text" @click="imgUpload" :loading="loadingStatus">
              {{ loadingStatus ? '上传中' : '点击上传' }}
            </Button>
          </div>
        </div>
      </FormItem>
      <FormItem label="产品ID范围">
        <Row>
          <i-col span="11">
            <Input v-model="formItem.beginNum" placeholder="起始序号"></Input>
          </i-col>
          <i-col span="2" style="text-align: center">-</i-col>
          <i-col span="11">
            <Input v-model="formItem.endNum" placeholder="截止序号"></Input>
          </i-col>
        </Row>
      </FormItem>
      <FormItem label="生产厂家">
        <Input v-model="formItem.factoryInfo.name" placeholder="例如利思比"></Input>
      </FormItem>
      <FormItem label="厂家信息">
        <Row>
          <i-col span="6">
            <Input v-model="formItem.factoryInfo.contact" placeholder="联系人"></Input>
          </i-col>
          <i-col span="2" style="text-align: center">-</i-col>
          <i-col span="6">
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
            <Input v-model="formItem.factoryInfo.area" placeholder="区"></Input>
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
        <Button type="primary" @click="submit">提交</Button>
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
          pcb: '',
          firmware: '',
          beginNum: '',
          endNum: '',
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
    mounted: function () {
      this.$nextTick(function () {
        document.getElementById('img').style['display'] = 'none';
      });
    },
    methods: {
      handleUpload: function (file) {
        let _this = this;
        this.imgFile = file;
        if (!file || !window.FileReader)
          this.$Message.error('该浏览器不支持图片预览');
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
          let productImg = document.getElementById('img');
          productImg.style['weight'] = '150px';
          productImg.style['height'] = '160px';
          productImg.style['display'] = '';
          _this.imgUrl = this.result;
        }
      },
      imgUpload: function () {
      },
      submit: function () {
        this.$http.post('/user/submit', this.formItem).then(res => {
          if (1 === res['data']['code']) {
            this.$Message.success('登录成功');
            this.$router.push({path: '/home'});
          } else
            this.$Message.error(res['data']['msg']);
        }).catch(err => {
          this.$Message.error(err);
        })
      }
    }
  }
</script>
