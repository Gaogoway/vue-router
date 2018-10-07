
<template>
    <i-form  class="card-box">
    <Form-item class="formLogin-title">
        <h3>系统登录</h3>
    </Form-item>
     
        <Form-item prop="username">
            <i-input size="large" type="text"  placeholder="用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </i-input>
        </Form-item>
        <Form-item prop="password">
            <i-input size="large"  type="password"  placeholder="密码">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </i-input>
        </Form-item>
          <Form-item class="login-no-bottom">
            <Checkbox-group >
                <Checkbox label="记住密码" name="remember"></Checkbox>
            </Checkbox-group>
        </Form-item>
        <Form-item class="login-no-bottom">
            <Row >
                <i-col :xs="{ span: 4, offset: 6 }" >
                    <i-button type="primary" >登录</i-button>
                </i-col>
                <i-col :xs="{ span: 4, offset: 6 }">
                    <i-button  type="primary">重置</i-button>
                </i-col>
            </Row>
        </Form-item>
    </i-form>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style spoced lang="scss">
.card-box {
    padding: 20px;
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin-bottom: 20px;
    background-color: #F9FAFC;
    margin: 180px auto;
    width: 400px;
   /* border: 2px solid #8492A6;*/
  }
  
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .formLogin-title {
      text-align: center;
      font-seze: 28px;
  }
  .formLogin-title h3{
      font-size: 18px;
  }
  .login-no-bottom {
      	margin-bottom: 10px;
  }
</style>

