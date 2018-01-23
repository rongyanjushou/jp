<template>
  <div class="content">
  	<div id="banner"> 		
  			<mt-swipe :auto="4000">
  				<mt-swipe-item v-for="(item1,index1) in data1" :key="index1" ><img :src="item1.img"/></mt-swipe-item> 				
				</mt-swipe>
  	</div>
  	<div class="toutiao">
  		<em></em>
  		<router-link to="/pingtai" tag="p">关于投融家会员中心临时维护...</router-link>
  	</div>
  	<div class="main">
  		<ul>
  			<router-link to="" tag="li" v-for="(item,index) in data" :key="index"><img :src="item.img" alt="" /><p>{{item.name}}</p></router-link>
  		</ul>
  	</div>
  	<div class="qianbao">
  		<img src="https://www.tourongjia.com/public/images/mobile/investm/regbanner.png" alt="" />
  	</div>
  	
  	<div class="shuju1">
  		<div class="shuju1-top">
  			<em></em>
  			<p>赢系4号-Y180122032</p>
  		</div>
  		<div class="shuju1-bottom">
  		<p class="price">10.00+</p><span v-for="(item2,index2) in data2">{{item2.title}}</span> 	
  		<i>预期收益率(年化)</i>
  		<p class="time" v-for="(item2,index2) in data2">{{item2.time}}个月</p>
  		<b>本月等额本息</b>
  		<strong v-for="(item2,index2) in data2">{{item2.shou}}</strong>
  		</div>
  	</div>
  	
  	
  </div>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>