import axios from 'axios'
import { BASE_URL,BASE_URLL } from '@/common/base.js'
export default {
	data(){
		return{
			arr1:[]
		}
	},
	mounted(){
		var _this = this;
		axios({
			url:BASE_URLL
		}).then(function(data){
			_this.arr1=data.data[2]
			console.log(_this.arr1);
			console.log("1");
		});
	},
	methods:{
		
	},
	computed:{
		
	},
	components:{
		
	},
	watch:{
		
	}
}
