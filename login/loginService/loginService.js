var flag = new Array(0,0);
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

function checkPassword() {
    if($('#pwd')== undefined || $('#pwd').val()==''){
        $('#pwdErrorHint').html('* 密码不能为空！');
    }else{
        $('#pwdErrorHint').text('');
        flag[1] = 1;
    }
}

function isDisabled() {
    if(flag[0]==1 && flag[1]==1){
        $('#button').attr('disabled',false);
    }else{
        $('#button').attr('disabled',true);
    }
}