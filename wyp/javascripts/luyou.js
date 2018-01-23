const http=require('http')
const url=require('url')
const obj=require('./comm')

http.createServer((req,res)=>{
	res.writeHead(200,{'content-type':'text/html;charset=utf-8','Access-Control-Allow-Origin':'*'})
	
	if(req.url!='/favicon.ico'){
		var path=url.parse(req.url).pathname.replace(/\//,'')
		try{
			obj[path](res)
		}catch(e){
			obj["one"](res)
		}
	}
}).listen(3000)
