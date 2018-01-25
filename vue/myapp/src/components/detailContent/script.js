import axios from 'axios'
import { BASE_URL,BASE_URLL } from '@/common/base.js'
export default {
	data(){
		return{
			arr1:[],
			str:this.$route.params.id
		}
	},
	mounted(){
		var _this = this;
		axios({
			url:BASE_URLL
		}).then(function(data){
			_this.arr1=data.data[2]
			console.log(_this.arr1);
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
