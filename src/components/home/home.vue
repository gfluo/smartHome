<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 510px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-menu-left{
    background: #464c5b;
  }
  .layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
    color: white;
    line-height: 30px;
    text-align: center;
    vertical-align: middle;
  }
</style>
<template>
  <div class="layout">
    <Row type="flex">
      <i-col span="5" class="layout-menu-left">
      <Menu active-name="1-2" theme="dark" width="auto" @on-select="routeTo">
        <div class="layout-logo-left">
          <h3>导航中心</h3>
        </div>
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            房间列表
          </template>
          <MenuItem v-for="(item, index) in roomList" :name="'room' + item" :key="index">{{item}}</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>
            模式设置
          </template>
          <MenuItem name="config">设置中心</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            平台管理
          </template>
          <MenuItem name="manage">人员管理</MenuItem>
        </Submenu>

      </Menu>
      </i-col>
      <i-col span="19">
      <div class="layout-header"></div>
      <div class="layout-breadcrumb">
        <Breadcrumb>
          <BreadcrumbItem>{{this.$route.path.replace('/', '')}}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="layout-content">
        <div class="layout-content-main">
          <transition mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
      </i-col>
    </Row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        roomList: [],
        mainPage: {
          levelOne: '',
          levelTwo: '',
        }
      }
    },
    created: function () {
      this.$http.post('/admin/getRoomList', {}).then(res => {
        if (1 === res['data']['code']) {
          this.roomList = res['data']['roomList'];
        }
      }).catch(err => {
        this.$Message.error(err);
      });
    },
    methods: {
      routeTo(path) {
        if (-1 < path.indexOf('room') && 'room' !== path){
          this.$router.push({path: '/home/room', query: {roomId: path.replace('room/', '')}});
        }
      }
    }
  }
</script>

