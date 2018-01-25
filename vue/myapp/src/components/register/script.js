import { Field,Button } from 'mint-ui';
import Vue from 'vue';

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
		}
	},
	computed:{
		
	},
	components:{
		
	},
	watch:{
		
	}
}


