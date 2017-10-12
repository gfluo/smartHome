<style scoped>
  .detail {
  }
  .picture {
    height: 320px;
    weight: 300px;
    float: left;
  }
  .attributes {
    height: 320px;
    float: left;
    position: relative;
    left: 100px;
    text-align: left;
  }
  .private {
    clear: both;
    position: relative;
    top: 50px;
  }
  .userInfo {
    text-align: left;
  }
</style>
<template>
  <div class="detail">
    <div>
      <h2>基本信息</h2>
      <img src="../../assets/specs_blue.jpg" class="picture"/>
      <div class="attributes">
        <h3><span>设备ID:</span> {{id}}</h3>
        <h3><span>生成厂家:</span> 利思比</h3>
        <h3><span>所属地:</span> 江西南昌</h3>
        <h3><span>生产日期:</span> 2017/10/11</h3>
        <h3><span>设备名称:</span> 中控</h3>
        <h3><span>设备型号:</span> P8C</h3>
        <h3><span>控制指令:</span> XYZ</h3>
        <h3><span>产品功能:</span> 中控电源</h3>
        <h3><span>软件出厂版本:</span> 1.0</h3>
        <h3><span>软件云版本:</span> 2.0</h3>
        <h3><span>产品批次:</span> 1-1000</h3>
      </div>
    </div>
    <div class="private">
      <h2>用户信息</h2>
      <div class="userInfo">
        <h3><span>设备状态:</span>
          <i-switch v-model="status" size="large">
            <span slot="open">在线</span>
            <span slot="close">离线</span>
          </i-switch>
        </h3>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
        return {
            id: this.$route.query['id'],
            status: true,
        }
    }
  }
</script>
