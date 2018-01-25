import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Footer from '@/components/footer'
import Touzi from '@/components/touzi'
import Find from '@/components/find'
import User from '@/components/user'
import HomeContent from '@/components/homeContent'
import TouziContent from '@/components/touziContent'
import FindContent from '@/components/findContent'
import UserContent from '@/components/userContent'
import Pingtai from '@/components/pingtai'
import PingtaiHeader from '@/components/pingtaiHeader'
import Register from '@/components/register'
import Yaoqing from '@/components/yaoqing'
import YaoqingContent from '@/components/yaoqingContent'
import Store from '@/components/store'
import StoreContent from '@/components/storeContent'
import Anquan from '@/components/anquan'
import AnquanContent from '@/components/anquanContent'
import Toule from '@/components/toule'
import TouleContent from '@/components/touleContent'
import Jinghua from '@/components/jinghua'
import Zuixin from '@/components/zuixin'
import Huifu from '@/components/huifu'
Vue.use(Router)

export default new Router({
  routes: [
  {
  	path:'/',
  	redirect:'/home'
  },
   {
   	path:'/home',
   	name:'home',
   	components:{
   		header:Home,
   		content:HomeContent,
   		footer:Footer
   	}
   },
   {
   	path:'/pingtai',
   	name:'pingtai',
   	components:{
   		header:PingtaiHeader,
   		content:Pingtai
   	}
   },
   {
   	path:'/touzi',
   	name:'touzi',
   	components:{
   		header:Touzi,
   		content:TouziContent,
   		footer:Footer
   	}
   },
   {
   	path:'/find',
   	name:'find',
   	components:{
   		header:Find,
   		content:FindContent,
   		footer:Footer
   	}
   },
   {
   	path:'/user',
   	name:'user',
   	components:{
   		header:User,
   		content:UserContent,
   		footer:Footer
   	}
   },
   {
   	path:'/register',
   	name:'register',
   	components:{
   		content:Register
   	}
   },
   {
   	path:'/yaoqing',
   	name:'yaoqing',
   	components:{
   		header:Yaoqing,
   		content:YaoqingContent
   	}
   },
   {
   	path:'/store',
   	name:'store',
   	components:{
   		header:Store,
   		content:StoreContent
   	}
   },
   {
   	path:'/anquan',
   	name:'anquan',
   	components:{
   		header:Anquan,
   		content:AnquanContent
   	}
   },
   {
   	path:'/toule',
   	name:'toule',
   	components:{
   		header:Toule,
   		content:TouleContent
   	},
   	children:[
   	{
   		path:'/',
   		redirect:'/jinghua'
   	},
   		{
   			path:"/jinghua",
   			name:'jinghua',
   			component:Jinghua
   		},
   		{
   			path:"/zuixin",
   			name:'zuixin',
   			component:Zuixin
   		},
   		{
   			path:'/huifu',
   			name:'huifu',
   			component:Huifu
   		}
   	]
   }
  ]
})


