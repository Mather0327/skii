//功能：ajax封装
//参数：
//  请求方式
//  请求地址
//  请求参数（前端发给后端的）
//  是否异步 
//  返回数据？？？（后端传给前端的）

//返回值：

function ajax1809(method,url,param,isAsync,func) {
	//1、创建对象
	let xhr = new XMLHttpRequest();

	//2、设置请求参数
	/*
	if(method.toLowerCase()=="get"){
		xhr.open(method,url+"?"+param,isAsync);
	}else{
		xhr.open(method,url,isAsync);
	}
	*/
	let urlAndParam = url;
	if(method.toLowerCase()=="get"){//判断传输方式
		urlAndParam+="?"+param;
	}
	//设置请求参数
	xhr.open(method,urlAndParam,isAsync);

	//3、设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){//4 完成 200就绪
			func(xhr.responseText);
			// return xhr.responseText; 这样写不行因为要返回这个整个函数的值而不是回调函数的值
		}
	}

	//4、发送请求
	if(method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(param);
	}else{
		xhr.send();	
	}		
	//return xhr.responseText;//这样也不行因为存在异步在返回他是程序还没运行完，没值可返回
}