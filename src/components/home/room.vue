<style scoped>
  .main {
    position: absolute;
    text-algin: left;
  }

  .roomDetail {
    text-align: left;
  }

  .barrage {
    text-align: left;
    font-size: medium;
  }

  .userBarrage {
    color: #2b85e4;
  }
</style>
<template>
  <div class="main">
    <h3 class="roomDetail">
      当前弹幕房间：
      <span>{{roomId}}</span>
    </h3>
    <br/>
    <h3 class="roomDetail">
      弹幕审核模式：
      <i-switch v-model="ifConnect" size="large" @on-change="change">
        <span slot="open">在线</span>
        <span slot="close">离线</span>
      </i-switch>
    </h3>
    <br/>

    <ul v-if="ifConnect">
      <li v-for="(item, index) in toBeVerify" class="barrage">
        <span class="userBarrage">{{item.user_id + ' : '}}</span>
        {{item.message.msg}}
        <i-button :disabled="item.ifVerify" type="primary" shape="circle" size="small" @click="pass(item)">通过</i-button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
      data() {
          return {
              roomId: this.$route.query['roomId'],
              ifConnect: false,
              socket: {},
              toBeVerify: []
          }
      },
      created: function () {

      },
      methods: {
          change: function (status) {
            if (status) {
              let _this = this;
              this.socket = new WebSocket('wss://localhost:4000/barrageManage?roomId=' + this.$route.query['roomId']);
              this.socket.onopen = function () {
                _this.ifConnect = true;
              };
              this.socket.onclose = function (code) {
                _this.ifConnect = false;
              };
              this.socket.onmessage = function (server) {
                let serverData = JSON.parse(server['data']);
                if ('toBeVerify' === serverData['method']) {
                  serverData['data']['ifVerify'] = false;
                  _this.toBeVerify.push(serverData['data']);
                }
              }
            } else {
                this.socket.close();
            }
          },
          pass: function (item) {
              item['ifVerify'] = true;
              item['type'] = 'verified';
              this.socket.send(JSON.stringify(item));
          }
      },
  }
</script>
