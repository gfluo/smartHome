<style scoped>
    .full {
        text-align: left;
    }
    .versionList {
        position: relative;
        top: 10px;
    }
    .versionList div {
        position: relative;
        text-align: right;
    }
</style>
<template>
  <div class="full">
      <div>
        <Select v-model="defaultValue" style="width:200px">
            <Option v-for="item in productList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div class='versionList'>
          <div>
            <Button type='primary' icon="plus-round">新增</Button>
          </div>
          <Table stripe :columns="header" :data="rows"></Table>
      </div>
      <div style="background:#eee;position: relative;top: 10px">
        <Card :bordered="false">
          <p slot="title">固件ID: 0000001</p>
          <p><span>固件版本：</span>1.0</p>
          <p><span>固件大小：</span>3.0 Mb</p>
          <p><span>固件适配产品：</span>利思比 P8C中控</p>
          <p><span>固件上传时间：</span>2017-10-15</p>
          <p><span>是否测试通过：</span>是</p>
          <p><span>用户安装数：</span>2000</p>
          <p><span>固件类型：</span>????</p>
          <p><span>识别码：</span>????</p>
          <p><span>MD5校验码：</span>????</p>
        </Card>
      </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                defaultValue: 'P8C',
                productList: [{
                    value: 'P8C',
                    label: 'P8C中控',
                }],
                header: [{
                    title: '版本ID',
                    key: 'id',
                },{
                    title: '版本号',
                    key: 'value',
                }, {
                    title: '设备安装数量',
                    key: 'count',
                }, {
                    title: '占比',
                    key: 'offTotal',
                },{
            title: '管理',
            key: 'action',
            width: 180,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    icon: "edit",
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
                }, '修改'),
                h('Button', {
                  props: {
                    icon: "ios-trash",
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
                    id: '00000001',
                    value: '1.0',
                    count: '2000',
                    offTotal: '20%',
                }, {
                  id: '00000002',
                    value: '2.0',
                    count: '8000',
                    offTotal: '80%',
                }],
            }
        }
    }
</script>
