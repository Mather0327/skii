
// function $(str){//#box .cls  p
// 	if(str.charAt(0)=="#"){
// 		return document.getElementById(str.substring(1));
// 	}else if(str.charAt(0)=="."){
// 		return document.getElementsByClassName(str.substring(1));
// 	}else{
// 		return document.getElementsByTagName(str);
// 	}
// }

let myTimer;//定义定时器
let index = 0;//记录当前图片的序号，从0开始
	
//1、自动变换图片，同时变豆豆
function autoPlay() {
	myTimer = setInterval(function(){
		//1、改变数据
		let outIndex = index;//出的图片序号
		index=index+1;
		//2、判断边界
		if(index>2){
			index=0;
		}
		//3、改变外观
		showImg(index,outIndex);
	},3000);
}

function stopPlay() {
	clearInterval(myTimer);
}

function goImg(transIndex) {
	//1、改变数据（改变当前图片的序号）
	let outIndex = index;
	index = transIndex;

	//3、改变外观
	showImg(index,outIndex);
}

function showImg(inIndex,outIndex) {
	if(inIndex==outIndex){
		return;
	}
	//3.1 改变图片的z-index
	let imgs = $(".imgone");
	for(let i=0;i<imgs.length;i++){
		$(imgs[i]).css("z-index","0");
	}
	$(imgs[inIndex]).css("z-index","1");
	//淡入淡出（需要知道入的序号，出的序号）
	
	fadeInOut(imgs[inIndex],imgs[outIndex],2000);

	//3.2 改变豆豆的颜色
	let lis = $("#uls").children();
	for(let i=0;i<lis.length;i++){
		lis[i].style.backgroundColor = "white";
	}
	lis[inIndex].style.backgroundColor = "transparent";

}
window.onload=function(){
  	//1、自动变换图片，同时变豆豆
	autoPlay();
	//2、鼠标放上停止自动变换
	$("#con").mouseover(function () {
		stopPlay();
	});
	//3、鼠标离开，继续自动变换
	$("#con").mouseout(function () {
		autoPlay();
	});

	//4、点击豆豆跳到指定的图片
	let lis = $("#uls").children();
	for(let i=0;i<lis.length;i++){
		// lis[i].setAttribute("index",i);
		$(lis[i]).click(function(){
			//跳到指定序号的图片
			goImg(parseInt(i));
		});
	}


  }
	
	