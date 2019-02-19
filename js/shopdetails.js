// $(function(){
//     //获取url中的参数
//     function getUrlParam(name) {
//         var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
//         var r = window.location.search.substr(1).match(reg); //匹配目标参数
//         if (r != null) return unescape(r[2]);
//         return null; //返回参数值
//     }
// var id=getUrlParam("goodsId");
// 	$.get("php/shopdetails.php",{ goodsId: id}, function(data){
// 		// console.log("Data Loaded: " + data);
//   	 		$(".h4").html(data.goodsName);
//             $(".h5").html(data.goodsDesc);
//             $(".jiaqian").html(data.goodsPrice);
//             $(".kg").html(data.beiyong1);
//             $(".kc").html(data.goodsCount);

// 	},"json");
// });
 var jq = $.noConflict();  
jq(function(){
    //获取url中的参数
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    }
   
	var id=getUrlParam("goodsId");
	jq.get("php/shopdetails.php",{ goodsId: id}, function(data){
		// console.log("Data Loaded: " + data);
  	 		jq(".h4").html(data.goodsName);
            jq(".h5").html(data.goodsDesc);
            jq(".jiaqian").html(data.goodsPrice);
            jq(".kg").html(data.beiyong1);
            jq(".kc").html(data.goodsCount);
            jq("#smallt1").children(0).attr("src",data.beiyong2);
            jq("#smallt2").children(0).attr("src",data.beiyong3);
            jq("#smallt3").children(0).attr("src",data.beiyong4);
            jq("#smallt4").children(0).attr("src",data.beiyong5);

	},"json");
});
   