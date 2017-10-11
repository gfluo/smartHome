<style scoped>
  .picture {
    height: 320px;
    weight: 300px;
    float: left;
  }
  .attributes {
    height: 320px;
    float: left;
    position: relative;
    left: 50px;
  }
</style>
<template>
  <div>
    <div>
      <img src="http://localhost:8888/static/img/specs_blue.642a2ef.jpg" class="picture"/>
      <h3 class="attributes"><span>设备ID: </span> {{id}} </h3>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
        return {
            id: this.$route.query['id'],
        }
    }
  }
</script>
