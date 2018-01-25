<template>
  <div class="content">
  	<i class="iconfont icon-fanhui" @click="ret()"></i>
  	<img src="https://m.tourongjia.com/images/login-logo.png" alt="" />
  	<p>使用手机号登录/注册</p>
  	<mt-field id="iphone" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
  	<mt-field label="验证码" v-model="captcha" id="captcha">
  	<mt-button type="default" id="default">{{msg}}</mt-button>
		</mt-field>
  	<mt-button size="large" id="large">登录/注册</mt-button>
  </div>
</template>
<script src="./script.js"></script>

<style scoped="" scoped lang="scss" src="./style.scss"></style>