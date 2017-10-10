<style>
  .login {
    position: fixed;
    left: 65%;
    top: 47%;
    width: 300px;
    height: 250px;
    margin: -100px 0px 0px -150px;
    float: left;
  }

  .layout {
    margin:0 auto;
    overflow: hidden;
  }

  .slogan {
    width: 400px;
    height: 200px;
    position: fixed;
    left: 30%;
    top: 40%;
    float:left;
    margin: -100px 0px 0px -150px;
  }

  .helpButton {
    position: relative;
    float: left;
  }
</style>

<template>
  <div class="layout">
    <div class="slogan" style="padding: 20px">
      <Card :bordered="false">
        <p slot="title">欢迎访问利思比智能家居云平台</p>
        <p>团结一心，其利断金！团结一致，再创佳绩！</p>
        <p>忠诚合作、积极乐观、努力开拓、勇往直前。</p>
        <p>日事日毕，日清日高。</p>
        <p>每天进步一点点。</p>
        <p>每一份私下的努力都会得到成倍的回报。</p>
        <p>永不言退，我们事最好的团队</p>
      </Card>
   </div>
   <div class="login">
    <i-form ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="用户名" />
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="密码" />
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')" long>登录</Button>
        <p style="left: 60%" class="helpButton">忘记密码</p>
        <p style="left: 65%" class="helpButton">立即注册</p>
      </FormItem>
    </i-form>
   </div>
  </div>
</template>

<script>
  import IForm from "../../node_modules/iview/src/components/form/form";
  export default {
    components: {IForm},
    data() {
      return {
        formInline: {
          user: '',
          password: '',
        },
        ruleInline: {
          user: [
            {required: true, message: '请填写用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请填写密码', trigger: 'blur'},
            {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit: function (key) {
        this.$refs[key].validate(valid => {
          if (valid) {
            this.$http.post('/admin/login', {
                user: this.formInline.user,
                password: this.formInline.password,
            }).then(res => {
              if (1 === res['data']['code']){
                  this.$Message.success('登录成功');
                  this.$router.push({path: '/home'});
              } else
                this.$Message.error(res['data']['msg']);
            }).catch(err => {
              this.$Message.error(err);
            })
          }
          else
            this.$Message.error('无效输入!');
        })
      }
    }
  }
</script>

