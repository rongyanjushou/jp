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
  			<router-link :to="item.path" tag="li" v-for="(item,index) in data" :key="index"><img :src="item.img" alt="" /><p>{{item.name}}</p></router-link>
  		</ul>
  	</div>
  	<div class="qianbao">
  		<img src="https://www.tourongjia.com/public/images/mobile/investm/regbanner.png" alt="" />
  	</div>
  	
  	<div class="shuju1" v-for="(item2,index2) in data2">
  		<div class="shuju1-top">
  			<em></em>
  			<p>赢系4号-Y180122032</p>
  		</div>
  		<div class="shuju1-bottom">
  		<p class="price">10.00+</p><span >{{item2.title}}</span> 	
  		<i>预期收益率(年化)</i>
  		<p class="time" >{{item2.time}}个月</p>
  		<b>本月等额本息</b>
  		<strong >{{item2.shou}}</strong>
  		<p class="tu"><em></em></p>
  		</div>  		
  	</div>
 	
  	<h3>热门项目 </h3>
  	
  	<div class="shuju2" v-for="(item3,index3) in data3">
  		<div class="shuju2-top">
  			<em></em>
  			<p>赢系3号-Y180332203</p>
  		</div>
  		
  		<div class="shuju2-bottom"  >
  		<p class="price">11.00+</p><span >{{item3.title}}</span> 	
  		<i>预期收益率(年化)</i>
  		<p class="time">{{item3.time}}个月</p>
  		<b>本月等额本息</b>
  		<strong >{{item3.shengyu}}</strong>
  		<p class="tu"><em></em></p>
  		</div>
  		
  	</div>
  	<h3>投资数据统计</h3>
  	
  	<div class="shuju3" > 		
  		<div  class="one">  			
  			<p v-for="item4 in data4">{{item4.number1}}</p>
  			<span>累计交易总额(亿)</span>
  			<img src="https://www.tourongjia.com/public/images/mobile/investm/investm01.png"/>
  		</div> 	
  		<div  class="two">
  			<p v-for="item4 in data4">{{item4.number2}}</p>
  			<span>为用户赚取(亿)</span>
  			<img src="https://www.tourongjia.com/public/images/mobile/investm/investm02.png"/>
  		</div>
  		<div  class="three">
  			<p v-for="item4 in data4">{{item4.number3}}</p>
  			<span>代还余额(亿)</span>
  			<img src="https://www.tourongjia.com/public/images/mobile/investm/investm03.png"/>
  		</div>
	  <div  class="four">
	  	<p v-for="item4 in data4">{{item4.number4}}</p>
	  	<span>安全运行时间(天)</span>
  			<img src="https://www.tourongjia.com/public/images/mobile/investm/investm04.png"/>
	  </div>
  	</div>
  	
  	<div class="cheng"></div>
  </div>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>