$(".country-selector").click(function(){
	$(".country-selector-box").css("display","block");
});
$(".bottom_bj").click(function(){
	$(".country-selector-box").css("display","none");
});

function getCookie(key){
	var str = unescape(document.cookie);//username=jzm; userpass=1236667
	//1、分割成数组（; ）
	var  arr = str.split('; ');//['username=jzm','userpass=1236667']

	//2、从数组查找key=;
	for(var i in arr){
		if(arr[i].indexOf(key+'=')==0){
			return arr[i].split('=')[1];
		}
	}
	return;
}

let wel=getCookie("username");
// alert(wel);
if(wel!=null){
	$("#welcomBox").css("opacity","1");
	$("#con_name").html($wel);
}