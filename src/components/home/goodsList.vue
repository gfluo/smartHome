<style scoped>
    .category {
        float: left;
    }
    .searchId {
        position: relative;
        left: 200px;
        float: left;
    }
    .table {
      clear: both;
      position: relative;
      top: 50px;
    }
</style>
<template>
  <div>
      <div>
        <Select class="category" v-model="defaultValue" style="width:200px">
            <Option v-for="item in category" :value="item.type" :key="item.type">{{ item.name }}</Option>
        </Select>
      </div>
      <div class="searchId">
        <Input v-model="value" placeholder="请输入ID..." style="width: 200px"></Input>
        <Button @click="handleSubmit('formInline')" icon="ios-search">搜索</Button>
      </div>
      <div class="table">
        <Table stripe :columns="header" :data="rows"></Table>
      </div>
  </div>
</template>
<script>
    export default {
      data() {
        return {
          header: [{
            title: '设备编号',
            key: 'id',
          }, {
            title: '当前状态',
            key: 'status',
          }, {
            title: '设备名称',
            key: 'name',
          }, {
            title: '绑定日期',
            key: 'bindDate',
          }, {
            title: '厂家',
            key: 'factory',
          }, {
            title: '设备型号',
            key: 'model',
          }, {
            title: '生产日期',
            key: 'createDate',
          }, {
            title: '所属地',
            key: 'belongPlace',
          }],
          rows: [{
            name: '中控',
            status: '正常',
            id: '00001',
            bindDate: new Date().toLocaleDateString(),
            factory: '利思比',
            model: 'P8S',
            createDate: new Date().toLocaleDateString(),
            belongPlace: '江西南昌',
          }, {
            name: '中控',
            status: '正常',
            id: '00002',
            bindDate: new Date().toLocaleDateString(),
            factory: '利思比',
            model: 'P8C',
            createDate: new Date().toLocaleDateString(),
            belongPlace: '重庆重庆',
          }],
          value: '',
          defaultValue: 'all',
          category: [
            {
              type: 'all',
              name: '全部产品',
            }, {
              type: 'P8S',
              name: 'P8S 中控',
            }, {
              type: 'P8C',
              name: 'P8C 继电器从机',
            }, {
              type: 'P4D',
              name: 'P4D 4路调光从机0-220V',
            }, {
              type: 'P8D',
              name: 'P8D 8路调光0-10V',
            }, {
              type: 'P2D',
              name: 'P2D RGB调光',
            }, {
              type: 'R86',
              name: 'R86 传感器从机',
            }, {
              type: 'R8CPRO',
              name: 'R8CPRO 七合一传感器',
            }, {
              type: 'K24',
              name: '无线发射从机',
            },
          ],
        }
      }
    }
</script>
