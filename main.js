$(document).ready(function(){
  getNowTime();
});

var timer = setInterval(function() {
  getNowTime();
}, 1000)

function getNowTime () {
  var nowTime = new Date();
  var nowYear = nowTime.getFullYear();
  var nowMonth = nowTime.getMonth() + 1;
  var nowDay = nowTime.getDay();
  var nowHour = nowTime.getHours();
  var nowMinute = nowTime.getMinutes();
  var nowSecond = nowTime.getSeconds();
  if (nowHour.toString().length == 1) {
    nowHour = '0' + nowHour;
  }
  if (nowMinute.toString().length == 1) {
    nowMinute = '0' + nowMinute;
  }
  if (nowSecond.toString().length == 1) {
    nowSecond = '0' + nowSecond;
  }
  var timeStr = '现在时间是： ' + nowYear + '年' + nowMonth + '月' + nowDay + '日' + nowHour + ':' + nowMinute + ':' + nowSecond;
  $("#countdown").text(timeStr);
}
