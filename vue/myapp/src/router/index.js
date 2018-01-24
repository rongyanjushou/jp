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
   }
  ]
})


