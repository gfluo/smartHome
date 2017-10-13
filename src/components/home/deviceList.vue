<style scoped>
  .remind {
    text-align: left;
  }
  .deviceStatus {
    position: relative;
    left: 20%;
    text-align: left;
  }
</style>
<template>
  <div>
    <div style="background:#eee;"  class="remind">
        <Card :bordered="false">
            <p slot="title">设备中心</p>
            <p>通过本页可以查询到已经出厂的设备信息和未出场设备信息
              <ul>
                <li>1.设备列表,可查看设备详细信息</li>
                <li>2.设备当前的控制指令，固件版本信息</li>
                <li>3.设备在用户的使用情况</li>
              </ul>
            </p>
        </Card>
    </div>
    <div>
      <Table stripe :columns="header" :data="rows"></Table>
    </div>
    <div>
       <Row>
        <i-col span="11">
            <Card>
                <p slot="title">
                  <Icon type="settings"></Icon>
                  接口状态
                  <span>P8C中控(00001)</span>
                </p>
                <div class="deviceStatus">
                  <p>接口1：书桌台灯</p>
                  <p>接口2：空调</p>
                  <p>接口3：室内加湿器</p>
                  <p>接口3：智能插线板</p>
                </div>
            </Card>
        </i-col>
        <i-col span="11" offset="2">
            <Card>
                <p slot="title">
                  <Icon type="gear-b"></Icon>
                  软件信息
                  <span>P8C中控(00001)</span>
                </p>
               <div class="deviceStatus">
                  <p>PCB版本：1.12</p>
                  <p>当前固件版本：2.00</p>
                  <p>可升级固件版本：2.21</p>
                  <p>当前指令系统：1.00</p>
                </div>
            </Card>
        </i-col>
    </Row>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        header: [{
          title: '设备名称',
          key: 'name',
        }, {
          title: '设备唯一码',
          key: 'onlyId',
        }, {
          title: '当前状态',
          key: 'status',
        }, {
          title: '设备开启次数',
          key: 'onTimes',
        }, {
          title: '设备地理位置',
          key: 'address',
        },{
          title: '设备绑定时间',
          key: 'bindTime',
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
                      this.goDetail(params.index);
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
          name: 'P8C中控',
          onlyId: '00001',
          status: '正常/离线',
          onTimes: '500',
          address: '江西南昌',
          bindTime: new Date().toDateString(),
        },{
          name: 'P8C中控',
          onlyId: '09000',
          status: '正常/在线',
          onTimes: '5000',
          address: '重庆重庆',
          bindTime: new Date().toDateString(),
        }]
      }
    },
    methods: {
      goDetail: function() {

      },
      remove: function() {

      }
    }
  }
</script>


