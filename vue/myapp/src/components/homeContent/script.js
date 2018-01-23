import axios from 'axios'

import { BASE_URL,BANNER_URL } from '@/common/base.js'


export default {
	data(){
		return{
			data:[],
			data1:[],
			data2:[]
		}
	},
	mounted(){
		var that = this;
		axios.get(BASE_URL)
			.then(function(data){
				var data = data.data[0];
				
				that.data=data;
				
			});
		axios.get(BASE_URL)	
			.then(function(data){
				var data1 = data.data[1];
				that.data1 = data1;
			});
		axios.get(BASE_URL)
		.then(function(data){
			var data2 = data.data[2];
			that.data2 = data2;
			console.log(data2)
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
