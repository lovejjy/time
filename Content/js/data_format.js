function data() {
    var t = new Date();
    var year = t.getFullYear();
    var month = t.getMonth() + 1;
    var day = t.getDay();
    var str = year + "年" + month + "月" + day + "日";
    return str;
}