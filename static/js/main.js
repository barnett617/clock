var targetTime;

$(document).ready(function(){
  init();
  bindBtnEvent();
});

function bindBtnEvent() {
  $('#customize-btn').click(function() {
    window.location.href = "customize.html";
  });
}

function init() {
  if (window.localStorage) {
    if (localStorage.getItem('targetTime')) {
      targetTime = localStorage.getItem('targetTime');
    }
    var userDate = location.search ? decodeURIComponent(location.search).split('?')[1].split('=')[1] : '';
    if (userDate.toString().length > 0) {
      targetTime = new Date(Number(userDate.toString()));
    }
  } 
  if (!targetTime) {
    targetTime = new Date(2018, 8, 13, 1);
  } 
  getNowTime(targetTime);
}

var timer = setInterval(function() {
  getNowTime();
}, 1000);

var willBeText = '距离苹果发布会还有：';
var passedText = '苹果发布会已结束：';

function getNowTime (target) {
  if (target) {
    targetTime = target;
  }
  var targetTimeValue = targetTime.valueOf();
  var nowTime = new Date();
  var nowTimeValue = nowTime.valueOf();
  var timeGap = targetTimeValue - nowTimeValue;
  if (timeGap < 0) {
    timeGap = -timeGap;
    $('#countdown-text').text(passedText);
  } else {
    $('#countdown-text').text(willBeText);
  }
  var restDay = timeGap / (24 * 60 * 60 * 1000);
  var restHour = (timeGap % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000);
  var restMinute = ((timeGap % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) / (60 * 1000);
  var restSecond = (((timeGap % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000;
  var restTime = formatFloatTime(restDay) +
  '天' + formatFloatTime(restHour) + 
  '时' + formatFloatTime(restMinute) + 
  '分' + formatFloatTime(restSecond) + '秒';
  var timeStr = formatDate(nowTime);
  var timeStr = '现在时间是： ' + timeStr;
  $("#resttime").text(restTime);
  // $("#countdown").text(timeStr);
}

function formatFloatTime (time) {
  return time.toString().split('.')[0];
}

/**
 * 格式化时间显示为 [yyyy年MM月dd日 hh:mm:ss]
 * @param {*} datetime 
 */
function formatDate (datetime, showWeek) {
  var nowYear = datetime.getFullYear();
  var nowMonth = datetime.getMonth() + 1;
  // 星期
  var nowDay = datetime.getDay();
  var nowDate = datetime.getDate();
  var nowHour = datetime.getHours();
  var nowMinute = datetime.getMinutes();
  var nowSecond = datetime.getSeconds();

  var weekMap = {
    0: '日',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
  };

  if (nowHour.toString().length == 1) {
    nowHour = '0' + nowHour;
  }
  if (nowMinute.toString().length == 1) {
    nowMinute = '0' + nowMinute;
  }
  if (nowSecond.toString().length == 1) {
    nowSecond = '0' + nowSecond;
  }
  var timeArray = [nowHour, nowMinute, nowSecond];
  var timeStr = timeArray.join(':');
  var datetimeStr = nowYear + '年' + nowMonth + '月' + nowDate + '日' + ' ' + timeStr;
  if (showWeek) {
    datetimeStr += ' ' + '星期' + weekMap[nowDay];
  }
  return datetimeStr
}
