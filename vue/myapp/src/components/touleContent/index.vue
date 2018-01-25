<template>
  <div class="content">
  	<div class="banner">
  		<mt-swipe :auto="4000">
  			<mt-swipe-item><img src="http://bbs.tourongjia.com/data/attachment/portal/201801/24/161024jqkqcomfibolmuon.png"/></mt-swipe-item>
  			<mt-swipe-item><img src="http://bbs.tourongjia.com/data/attachment/portal/201711/09/100108z5gjs6ab225ggak4.jpg"/></mt-swipe-item>
  			<mt-swipe-item><img src="http://bbs.tourongjia.com/data/attachment/portal/201801/10/102307xzp03wx04zbzs4t5.jpg"/></mt-swipe-item>
		</mt-swipe>
  	</div>
  	<div class="fu">
  		<ul>
  			<router-link to="/jinghua" tag="li">精华</router-link>
  			<router-link to="/zuixin" tag="li">最新</router-link>
  			<router-link to="/huifu" tag="li">回复</router-link>
  		</ul> 		
  	</div>
  	
  		<router-view></router-view>
  	
  	
  </div>

</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>