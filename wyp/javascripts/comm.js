var mongodb = require('mongodb').MongoClient ;
var db_str ='mongodb://localhost:27017/trj';
var http = require('http');


var fs=require('fs')
var obj={
	"one":function(res){
		mongodb.connect(db_str,(err,database)=>{
				database.collection("trj",(err,coll)=>{
						coll.find({}).toArray((err,data)=>{
							var arr = [];
							for(var i in data[0]){
								arr.push(data[0][i])
							}
							arr.splice(arr.length-1,1);
							res.write(JSON.stringify(arr));
							res.end();
							database.close();
						})
				})
		})
	},
	"two":function(res){
		mongodb.connect(db_str,(err,database)=>{
				database.collection("trj2",(err,coll)=>{
						coll.find({}).toArray((err,data)=>{
							var arr = [];
							for(var i in data[0]){
								arr.push(data[0][i])
							}
							arr.splice(arr.length-1,1);
							res.write(JSON.stringify(arr));
							res.end();
							database.close();
						})
				})
		})
	},
	"three":function(res){
		mongodb.connect(db_str,(err,database)=>{
				database.collection("trj3",(err,coll)=>{
						coll.find({}).toArray((err,data)=>{
							var arr = [];
							for(var i in data[0]){
								arr.push(data[0][i])
							}
							arr.splice(arr.length-1,1);
							res.write(JSON.stringify(arr));
							res.end();
							database.close();
						})
				})
		})
	}	
}
module.exports=obj;