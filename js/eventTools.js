
//绑定事件的函数封装
//参数:
	//dom元素
	//事件类型名(不包含on)
	//事件处理函数
	//是否冒泡
//返回值：无
function addEvent(domObj,eventType,func,isBubble){
	if(domObj.addEventListener){//支持DOM2级
		domObj.addEventListener(eventType,func,isBubble);
	}else if(domObj.attachEvent){//是IE
		domObj.attachEvent("on"+eventType,func);
	}else{//DOM0级
		domObj["on"+eventType] = func;
	}
}

//阻止浏览器的默认行为
//参数：事件对象
//返回值：无

function preventDefaut1808(evt){
	if(evt.preventDefault) {  
		evt.preventDefault();  
	} else {  
		evt.returnValue = false;  
	}
	
}

