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
          },{
            title: '管理',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.routeToDetail(params.index);
                    }
                  }
                }, '详细'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '删除')
              ]);
            }
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
      },
      methods: {
          routeToDetail: function (params) {
            this.$router.push({path: '/home/goodsDetail', query: {id: this.rows[params].id}});
          }
      }
    }
</script>
