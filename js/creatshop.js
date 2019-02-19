$(function(){
	$.get("php/getGoodsList.php", function(data){
		// console.log("Data Loaded: " + data);
  		let htmlStr = "";
  		for(let i in data){
  			htmlStr+=`<div class="goodsList">
								<a href="shopdetails.html?goodsId=${data[i].goodsId}"><img src="${data[i].goodsImg}"/></a>
								<div class="words"><a href="shopdetails.html?goodsId=${data[i].goodsId}">${data[i].goodsName}</a></div>
								<span class="goodsName">￥${data[i].goodsPrice}</span>
						</div>`;
  		}
  		$("#boxlist").html(htmlStr);
	},"json");
});
   
