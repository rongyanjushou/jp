<template>
  <div class="content">
  	<div id="banner"> 		
  			<mt-swipe :auto="4000">                                                                           
  				<mt-swipe-item><img :src="arr1[str].img1"/></mt-swipe-item> 
  				<mt-swipe-item><img :src="arr1[str].img2"/></mt-swipe-item>
				</mt-swipe>
  	</div>
  	<div class="biaoqian">
  		<p>{{arr1[str].name}}</p>
  		<p><span>所需积分：</span><span>{{arr1[str].suoxu}}</span><span>销量：{{arr1[str].xiaoliang}}</span></p>
  	</div>
  	<div class="jieshao">
  		<div class="shang"><p>商品介绍</p></div>
  		<div class="xia">
  			<p>{{arr1[str].detail}}</p>
  		</div>
  	</div>
  	
  	<div class="shuoming"><span>商城说明</span><span>∨</span></div>
  	<div class="shuoming"><span>碰碰运气</span><span>∨</span></div>
  	
  </div>
  
 
  
</template>
<script src="./script.js"></script>
<style  scoped lang="scss" src="./style.scss"></style>