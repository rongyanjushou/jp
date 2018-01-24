import axios from 'axios';
import { BASE_URL } from '@/common/base.js';
export default {
	data(){
		return{
			data5:[]
		}
	},
	mounted(){
		var that = this;
		axios.get(BASE_URL)
			.then(function(data){
				var data5 = data.data[5];
				that.data5 = data5;
			})
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
