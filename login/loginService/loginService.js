//判断确定按钮置灰的标志
var flag = new Array(0,0);
//显示时钟功能 start
var t = null;
t = setTimeout(time, 1000);//开始执行
function time() {
    clearTimeout(t);//清除定时器
    dt = new Date();
    var y = dt.getYear() + 1900;
    var mm = dt.getMonth() + 1;
    var d = dt.getDate();
    var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var day = dt.getDay();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    document.getElementById("timeShow").innerHTML = y + " 年 " + mm + " 月 " + d + " 日 " + weekday[day] + ' ' + h + ":" + m + ":" + s;
    t = setTimeout(time, 1000); //设定定时器，循环执行
}
//显示时钟功能 end
/**
 * 登录按钮
 */
function login() {
    //中文处理
    dealChineseEncode('input');
    //封装Json数据并加密
    var jsonFm = dealJson($('#fm'), 'loginMethod');
    alert(jsonFm);
    var doSomthing = function () {
        //页面跳转
        alert("dddddddddddd");
    }
    //提交数据
    sendDataOfAjax(jsonFm, "/xplatform", doSomthing);
    //sendDataOfAjax(jsonFm, "http://127.0.0.1:8762/messageBoard/login", doSomthing);

}

/**
 * 检验用户名
 */
function checkUsername() {
    if($('#username')== undefined || $('#username').val()=='') {
        $('#usernameErrorHint').html('* 用户名不能为空！');
    }else if($('#username').val().length < 6 ){
        $('#usernameErrorHint').html('* 用户名长度必须大于6位！');
    }else{
        $('#usernameErrorHint').text('');
        flag[0] = 1;
    }
}
/**
 * 检验密码
 */
function checkPassword() {
    if($('#pwd')== undefined || $('#pwd').val()==''){
        $('#pwdErrorHint').html('* 密码不能为空！');
    }else{
        $('#pwdErrorHint').text('');
        flag[1] = 1;
    }
}

/**
 * 控制登录按钮是否置灰
 */
function isDisabled() {
    if(flag[0]==1 && flag[1]==1){
        $('#button').attr('disabled',false);
    }else{
        $('#button').attr('disabled',true);
    }
}