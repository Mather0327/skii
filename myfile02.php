<?php
header("Content-type:text/html;charset=utf-8");
//一、接收数据
$username = $_GET['username'];


//二、处理（把数据保存到数据库里）
//1、创建连接（搭桥）
$conn = mysql_connect('localhost','root','root');

if(!$conn){
    // die("没有连成功");
    //三、响应
    echo "服务器端出错：数据库没有连接上";
}else{
    //2、选择数据库（目的地）
    mysql_select_db("skll",$conn);

    //3、传输数据（运送）
    //3.1)、定义一个字符串，写上SQL语句
    $sqlstr="select * from skii where username='$username'";
    //3.2)、执行SQL语句
    $result = mysql_query($sqlstr,$conn);

    //4、关闭数据库（过河拆桥）
    mysql_close($conn);
    if(mysql_num_rows($result)==1){
        echo "该用户名已被使用，要换名哦~！";
    }else{
        echo "恭喜您，该用户名可以使用！";
    }  
}
?>