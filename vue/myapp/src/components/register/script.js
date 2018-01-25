import { Field,Button } from 'mint-ui';
import Vue from 'vue';
import axios from 'axios'
import { BASE_URL,BASE_URLL,BASE_LOGIN } from '@/common/base.js'
Vue.component(Field.name, Field)
Vue.component(Button.name, Button);
export default {
	data(){
		return{
			phone:'',
			captcha:'',
			msg:'发送验证码'
		}
	},
	mounted(){
		
	},
	methods:{
		ret(){
			history.go(-1)
		},
		send(){
			var that =this;
			axios({
				url:BASE_LOGIN,
				method:'post',
				params:{phone:that.phone}
			}).then(function(data){
				console.log(data.data)
				console.log(data)
			})
		},
		register(){				
				var that=this;
				axios({
					url:BASE_LOGIN,
					method:'post',
					params:{phone:that.phone,captcha:that.captcha}
				}).then(function(data){
					console.log(data.data)
					var data = data.data
					if(data=='注册成功'){						
						alert('注册/登录成功')
						location.href = "/user"
					}
					
				})
			}
	},
	computed:{
		
	},
	components:{
		
	},
	watch:{
		
	}
}


