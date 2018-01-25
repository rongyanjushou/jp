<template>
  <div class="content">
  	<div id="banner"> 		
  			<mt-swipe :auto="4000">
  				<mt-swipe-item v-for="(item,index) in arr" :key="index" ><img :src="item.img"/></mt-swipe-item> 
				</mt-swipe>
  	</div>
  	<div class="header">
  		<div class="left"><img src="../../assets/xiaotubiao.png"/></div>
  		<div class="right"><span class="fuli">投融福利</span><span>-积分兑换</span><router-link to="/home" class="gengduo" tag="span">更多>></router-link></div>
  	</div>
  	<div class="middle">
  		<div>
  			<div class="shang">
  				<p>￥<span>50</span>红包</p>
  				<p>投>90天的项目</p>
  			</div>
  			<div class="xia"><p><span>积分:</span><span>5000</span></p></div>
  		</div>
  		<div>
  			<div class="shang">
  				<p>￥<span>100</span>红包</p>
  				<p>投>90天的项目</p>
  			</div>
  			<div class="xia"><p><span>积分:</span><span>10000</span></p></div>
  		</div>
  		<div>
  			<div class="shang">
  				<p>￥<span>100</span>红包</p>
  				<p>投>90天的项目</p>
  			</div>
  			<div class="xia"><p><span>积分:</span><span>10000</span></p></div>
  		</div>
  	</div>
  	
  	<div class="header">
  		<div class="left"><img src="../../assets/xiaotubiao.png"/></div>
  		<div class="right"><span class="fuli">投融福利</span><span>-积分兑换</span><router-link to="/home" class="gengduo" tag="span">更多>></router-link></div>
  	</div>
  	
  	<div class="shangpin">
  		<div class="sp" v-for="(item1,index) in arr1" :key="index">
  			<router-link :to="'/detail/'+item1.id" tag="img" :src="item1.img" ></router-link>
  			<p class="first">{{item1.name}}</p>
  			<div class="gang">
  				<div class="ligang"></div>
  			</div>
  			<p>所需积分:<span>{{item1.suoxu}}</span></p>
  			<p>剩余积分:<span>{{item1.shengyu}}</span></p>
  			<p>销量：{{item1.xiaoliang}}</p>
  		</div>
  	</div>
  </div>
  
 
  
</template>
<script src="./script.js"></script>
<style  scoped lang="scss" src="./style.scss"></style>
