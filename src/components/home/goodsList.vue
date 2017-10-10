<style scoped>
    .category {
        position: fixed;
        left:25%;
    }
</style>
<template>
  <div>
      <div class="category">
        <Select v-model="defaultValue" style="width:200px">
            <Option v-for="item in category" :value="item.type" :key="item.type">{{ item.name }}</Option>
        </Select>
      </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                defaultValue: 'all',
                category: [{
                        type: 'all',
                        name: '全部产品',
                    },{
                        type: 'P8S', 
                        name: 'P8S 中控',
                    },{
                        type: 'P8C',
                        name: 'P8C 继电器从机',
                    },{
                        type: 'P4D',
                        name: 'P4D 4路调光从机0-220V',
                    },{
                        type: 'P8D',
                        name: 'P8D 8路调光0-10V',
                    },{
                        type: 'P2D',
                        name: 'P2D RGB调光',
                    },{
                        type: 'R86',
                        name: 'R86 传感器从机',
                    },{
                        type: 'R8CPRO',
                        name: 'R8CPRO 七合一传感器',
                    },{
                        type: 'K24',
                        name: '无线发射从机',
                    },
                ],
            }
        }
    }
</script>