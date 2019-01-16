/**
 * 遍历表单每个元素并做中文处理
 * @param name指的是  还有[name]属性
 * 如 name ='name' ，name='id' ...
 */
function dealChineseEncode(name) {
    var elems = document.getElementsByTagName("*");
    for (var i = 0; i < elems.length; i++) {
        if (elems[i].hasAttribute(name)) {
            //alert(elems[i].value);
            elems[i] = encodeURI(encodeURI(elems[i]));
        }
    }
}

/**
 * 将表单数据准成Json格式并使用base64加密
 * @param fm
 * @returns {Uint8Array}
 */
function dealJson(fm, method) {
    var formObject = {};
    var formArray = fm.serializeArray();
    $.each(formArray, function (i, item) {
        formObject[item.name] = item.value;
    });
    formObject['method'] = method;
    return Base64.encode(JSON.stringify(formObject));
}

function sendDataOfAjax(jsonStr, path, doWork) {
    $.ajax({
        //几个参数需要注意一下
        type: "POST",//方法类型
        dataType: "text",//预期服务器返回的数据类型
        url: path,//url
        data: jsonStr,
        contentType: "application/json",
        success: function (result) {
			//打印服务端返回的数据(调试用)
            console.log(result);
            doWork();
        },
        error: function () {
            alert("发送数据到"+path+"异常！");
        }
    });
}