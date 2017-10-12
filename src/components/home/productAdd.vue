<style scoped>
  .formAdd {
    width: 500px;
    position: relative;
    left: 50px;
    height: 100%;
  }
</style>
<template>
  <Form ref="productInfo" :model="productInfo" inline>
    <FormItem prop="name">
      <Input type="text" v-model="productInfo.name" placeholder="产品名称"></Input>
    </FormItem>
    <FormItem prop="type">
      <Input type="text" v-model="productInfo.type" placeholder="产品型号"></Input>
    </FormItem>
    <FormItem prop="factory">
      <Input type="text" v-model="productInfo.factory" placeholder="生产厂家"></Input>
    </FormItem>
    <FormItem prop="order">
      <Input type="text" v-model="productInfo.order" placeholder="产品指令"></Input>
    </FormItem>
  </Form>
</template>

<script>
  export default {
    data () {
      return {
        productInfo: {
          name: '',
          type: '',
          order: '',
          factory: '',
        }
      }
    }
  }
</script>
