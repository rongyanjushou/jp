import axios from 'axios'

import { BASE_URL } from '@/common/base.js'


export default {
	data(){
		return{
			data:[],
			data1:[],
			data2:[],
			data3:[],
			data4:[]
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
		});
		axios.get(BASE_URL)	
			.then(function(data){
				var data3 = data.data[3];				
				that.data3 = data3;				
			});
		axios.get(BASE_URL)
			.then(function(data){
				var data4 = data.data[4];
				console.log(data4)
				that.data4 = data4;
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
