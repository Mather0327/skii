	function dao(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}
	window.onload = function(){

	let e = new BigMirror({
		boxDom:dao("#big"),
		imgUrl:"img/biggw3.jpg",
		muliple:2	
	});	
	e.createUI();
	e.addEvent();



	dao("#smallt1").onmouseover=function(){
		dao("#bigBox").style.display="block";
		dao("#bigBo").style.display="none";
		dao("#big").style.display="none";
		dao("#bigB").style.display="none";

	}
	dao("#smallt2").onmouseover=function(){
		dao("#bigBo").style.display="block";
		dao("#bigBox").style.display="none";
		dao("#big").style.display="none";
		dao("#bigB").style.display="none";

	}

	dao("#smallt3").onmouseover=function(){
		dao("#bigB").style.display="block";
		dao("#bigBo").style.display="none";
		dao("#bigBox").style.display="none";
		dao("#big").style.display="none";
	}

	dao("#smallt4").onmouseover=function(){
		dao("#big").style.display="block";
		dao("#bigB").style.display="none";
		dao("#bigBox").style.display="none";
		dao("#bigBo").style.display="none";
	}
	let b = new BigMirror({
		boxDom:dao("#bigBox"),
		imgUrl:"img/biggw2.jpg",
		muliple:2	
	});	
	b.createUI();
	b.addEvent();

	let c = new BigMirror({
		boxDom:dao("#bigBo"),
		imgUrl:"img/biggw3.jpg",
		muliple:2	
	});	
	c.createUI();
	c.addEvent();


	let d = new BigMirror({
		boxDom:dao("#bigB"),
		imgUrl:"img/biggw2.jpg",
		muliple:2	
	});	
	d .createUI();
	d .addEvent();
}
