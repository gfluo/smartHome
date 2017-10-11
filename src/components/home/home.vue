<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 763px;
    margin: 15px;
    overflow: auto;
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
            产品管理
          </template>
          <MenuItem v-for="(item, index) in goodsManage" :name="item" :key="index">{{item}}</MenuItem>
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
      <div id='header' class="layout-header"></div>
      <div id='minHeader' class="layout-breadcrumb">
        <Breadcrumb>
          <BreadcrumbItem>{{this.$route.path.replace('/', '')}}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div id='content' class="layout-content">
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
        goodsManage: ['产品列表', '产品增加', '产品ID分配', '配置中心'],
        roomList: [],
        mainPage: {
          levelOne: '',
          levelTwo: '',
        }
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        let content = document.getElementById('content');
        let headerHeight = document.getElementById('header').offsetHeight;
        let minHeader = document.getElementById('minHeader').offsetHeight;
        content.style['min-height'] = (window.innerHeight - headerHeight - minHeader - 32) + 'px';
      })
    },
    methods: {
      routeTo(path) {
        if (-1 < path.indexOf('room') && 'room' !== path){
          this.$router.push({path: '/home/room', query: {roomId: path.replace('room/', '')}});
        } else {
          this.$router.push({path: '/home/goodsList', query: {type: path}});
        }
      }
    }
  }
</script>

