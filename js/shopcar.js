// let jq = $.noConflict();
jq(function(){ 
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    } 
    //获取url中的参数
        var id=getUrlParam("goodsId");
        var name=jq(".hi").html();
        var count=parseInt(jq(".count > input").val());
   jq(".abcd").click(function(){
        jq.get("php/addShoppingCart.php",{vipName:name,goodsId: id,goodsCount:count}, function(data){
            console.log(data);
          if(data==1){
                alert("添加成功");
            }else{
                alert("添加失败");
            }

        },"json");
});


   });
