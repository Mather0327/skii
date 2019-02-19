$(function(){
	$.get("php/getShoppingCart.php",{vipName:$(".hi").html()},function(data){
		console.log("Data Loaded: " + data);
  		let htmlStr = "";
  		var zongprice=0;
  		var shuliang=0;
  		for(let i in data){
  			htmlStr+=`<tr class="goodsxpat">
  			<td><label><input class="fxk" type="checkbox"/><div class="show-box" /></label><img style="width:80px;height:80px" src="${data[i].goodsImg}"/></td>
								<td>${data[i].goodsName}</td>
								<td class="tabprice">${data[i].goodsPrice}￥</td>
								<td>
								<span class="add">+</span><span class="count">${data[i].goodsCount}</span><span class="jian">-</span>
								</td>
								<td class="allprice" style="width:80px">${data[i].goodsPrice*data[i].goodsCount}￥</td>
								<td>
								<button>移入收藏夹</button>
								<button>删除</button>
								</td>
						</tr>`;
						zongprice= zongprice+data[i].goodsPrice*data[i].goodsCount;
						shuliang=shuliang+parseInt(data[i].goodsCount);

  		}
  		$(".tab").append(htmlStr);
  		$(".heji").html(zongprice);
  		$(".shuliang").html(shuliang);
		var add = $(".add");
		var jian=$(".jian");

		// var price=parseInt($(add[i]).parent().prev().html());
		for(let i=0;i<add.length;i++){
			$(add[i]).click(function(){
				var price=parseInt($(add[i]).parent().prev().html());
				var ss = $(add[i]).next().html();
				ss++;
				$(add[i]).next().html(ss);
				var ee=$(add[i]).parent().next().html();
				// var aa = $(add[i]).next().html();
				var allcount=parseInt(ee)+price;
				$(add[i]).parent().next().html(allcount+"￥");
				$(".shuliang").html(++shuliang);
				let zj=parseInt($(".heji").html())
				$(".heji").html(zj+price);
			}); }

			for(let j=0;j<jian.length;j++){
			$(jian[j]).click(function(){
				 price=parseInt($(jian[j]).parent().prev().html());
				var cc = $(jian[j]).prev().html();
				if(cc<=1){
					return;
				}
				cc--;
				$(jian[j]).prev().html(cc);
				// var dd = $(jian[j]).prev().html();
				var bb = parseInt($(jian[j]).parent().next().html());
				allcount=bb-price;
				$(jian[j]).parent().next().html(allcount+"￥");
				$(".shuliang").html(--shuliang);
				let zj=parseInt($(".heji").html())
				$(".heji").html(zj-price);

			}); }
	},"json");
});
jQuery.fn.extend({
    //全选
    checkAll:function(isCheck){
        // this: this所在函数是对象的方法，this是就是jQuery对象
        this.each(function(){
            // this :循环过程中的每个DOM
            this.checked = isCheck;
        });
    },
    //反选：
    unCheck:function(){
        this.each(function(){
            this.checked = !this.checked;
        });
    }
});


//主函数
$(function(){
    $("#checkedAllId").click(function(){
         $("td :checkbox").checkAll(this.checked);//this是事件源
    });
    $(".dpinp").click(function(){
         $("td :checkbox").checkAll(this.checked);//this是事件源
    });
   $("#btnUnCheckId").click(function(){
        $("td :checkbox").unCheck();
   });
});
// jQuery.fn.extend({    
//     bindCheck:function($subCheckbox,$unCheckBtn){
//         let $fatherCheckBox = this;
//         //1、全选//this是bindCheck的所属对象
//         this.click(function(){
//             let isCheck = this.checked;//this事件源
//             $subCheckbox.each(function(){
//                 this.checked = isCheck;
//             });
//         });
//         //2、反选
//         if($unCheckBtn){
//             $unCheckBtn.click(function(){
//                 $subCheckbox.each(function(){
//                     this.checked = !this.checked;
//                 });
//                 changeFatherCheckbox();
//             });
//         }

//         //3、关联（子控制父）
//         $subCheckbox.click(function(){
//             changeFatherCheckbox();
//         });

//         //控制父复选框的状态
//         function changeFatherCheckbox(){
//             let isAllCheck = true;//假定全部子复选框是选中状态
            
//             $subCheckbox.each(function(){
//                 if(!this.checked){
//                     isAllCheck = false;
//                 }
//             });
//             $fatherCheckBox.attr("checked",isAllCheck);
//         }
//     }
// });

// //主函数
// $(function(){
//     //父复选框.bindCheck(所有的子复选框，反选按钮);
//    $("#checkedAllId").bindCheck($("td :checkbox"),$("#btnUnCheckId"));
//     // $(".dpinp").bindCheck($("td :checkbox"));
// });
