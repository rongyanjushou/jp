<template>
  <div class="content">
        <div class="banner">
        	<mt-swipe :auto="2000">
  				<mt-swipe-item ><img src="https://img.tourongjia.com/data/uploads/img/2018/01/09/5a5490854206c.jpg"/></mt-swipe-item> 				
				</mt-swipe>
        </div>
        <div class="main">
        	<div class="shuju" v-for="(item5,index5) in data5">
			  		<div class="shuju-top">
				  			<em></em>
				  			<p>赢系3号-Y182322032</p>
				  		</div>
				  		<div class="shuju-bottom">
				  		<p class="price">40.00+</p><span >{{item5.title}}</span> 	
				  		<i>预期收益率(年化)</i>
				  		<p class="time" >{{item5.time}}个月</p>
				  		<b>本月等额本息</b>
				  		<strong >{{item5.shengyu}}</strong>
				  		<p class="tu"><em></em></p>
  					</div>  		
  				</div>        	    	
        </div>
        <div class="cheng"></div>
  </div>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>