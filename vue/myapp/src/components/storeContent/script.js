
import axios from 'axios'
import { BASE_URL,BASE_URLL } from '@/common/base.js'


export default {
	data(){
		return{
			arr:[],
			arr1:[]
		}
	},
	mounted(){
		var _this = this;
		axios({
			url:BASE_URLL
		}).then(function(data){
			_this.arr=data.data[0]
		});
		axios({
			url:BASE_URLL
		}).then(function(data){
			_this.arr1=data.data[1]
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
