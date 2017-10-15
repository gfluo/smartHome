<style scoped>
    .searchInfo {
        position: relative;
        top: 2px;
        width: 280px;
    }
    .table {
        position: relative;
        top: 5px;
    }
    .full {
        text-align: left;
    }
    .add {
        position: relative;
        text-align: right;
    }
</style>
<template>
  <div class="full">
    <div class="searchInfo">
        <Input v-model="signleInfo" placeholder="请输入厂家信息" style="width: 200px"></Input>
        <Button icon="ios-search">搜索</Button>
    </div>
    <div class="table">
        <div class="add">
            <Button type='primary' icon="plus-round">新增</Button>
        </div>
        <Table stripe :columns="header" :data="rows"></Table>
    </div>
    <div style="background:#eee;">
        <Card :bordered="false">
            <p slot="title">利思比</p>
            <p><span>在线产品：</span>P8C中控</p>
            <p><span>产品入驻时间：</span>2017-10-14</p>
            <p><span>已经生产设备数量：</span>15000</p>
            <p><span>已经出售产品数量：</span>12000</p>
            <p><span>产品故障率：</span>0.01%</p>
            <p><span>售后好评率：</span>98%</p>
        </Card>
    </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                signleInfo: '',
                header: [{
                    title: '厂家名称',
                    key: 'name',
                },{
                    title: '所属地区',
                    key: 'area',
                },{
                    title: '详细地址',
                    key: 'address',
                }, {
                    title: '联系人',   
                    key: 'contact',
                }, {
                    title: '联系电话',
                    key: 'phoneNumber',
                }, {
                    title: '厂家入驻时间',
                    key: 'bindTime',
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
                rows: [
                    {
                        name: '利思比',
                        area: '江西南昌',
                        contact: '叶晶晶',
                        phoneNumber: '18188888888',
                        bindTime: new Date().toDateString(),
                    },
                    {
                        name: '重庆力帆',
                        area: '重庆重庆',
                        contact: 'luogf',
                        address: '渝北区花卉园',
                        phoneNumber: '18188888888',
                        bindTime: new Date().toDateString(),
                    }
                ]           
            }
        }
    }
</script>