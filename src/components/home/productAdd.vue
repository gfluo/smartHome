<style scoped>
  .add {
    width: 50%;
    position: relative;
    left: 20%;
  }
</style>
<template>
  <div class="add">
    <Form :model="formItem" :label-width="80">
      <FormItem label="产品名称">
        <Input v-model="formItem.name" placeholder="例如中控"></Input>
      </FormItem>
      <FormItem label="产品型号">
        <Input v-model="formItem.model" placeholder="例如P8C"></Input>
      </FormItem>
      <FormItem label="生产厂家">
        <Input v-model="formItem.factory" placeholder="例如利思比"></Input>
      </FormItem>
      <FormItem label="产品指令">
        <Input v-model="formItem.order" placeholder="例如XYZ"></Input>
      </FormItem>
      <FormItem label="产品ID范围">
        <Row>
          <i-col span="11">
            <Input type="number" v-model="formItem.beginNum" placeholder="起始序号"></Input>
          </i-col>
          <i-col span="2" style="text-align: center">-</i-col>
          <i-col span="11">
            <Input type="number" v-model="formItem.endNum" placeholder="截止序号"></Input>
          </i-col>
        </Row>
      </FormItem>
      <FormItem label="产品备注">
        <Input v-model="formItem.remarks" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
      </FormItem>
      <FormItem>
        <Button type="primary">提交</Button>
        <Button type="ghost" style="margin-left: 8px">取消</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formItem: {
          name: '',
          model: '',
          beginNum: '',
          endNum: '',
          factory: '',
          order: '',
          remarks: '',
        }
      }
    }
  }
</script>
