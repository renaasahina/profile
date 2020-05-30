
//最終更新日の表示

var modified = new Date(document.lastModified);
var year = modified.getFullYear();
var month= modified.getMonth() + 1;
var date = modified.getDate()

document.write("最終更新：" + year + "年" + month + "月" + date + "日");
