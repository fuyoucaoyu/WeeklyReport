/**
 * @file
 */

export let getCookie = function (name) {
    let arr;
    let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}

export let setCookie = function (name, value) {
    let days = 30;
    let exp = new Date();
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie += name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}