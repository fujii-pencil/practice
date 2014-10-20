
//クリックされた日付の値を保持する変数
var selectedYear = "00";
var selectedMonth = "00";
var selectedDay = "00";

//初期選択されていた日付の値を保持する変数
var list_year;
var list_month;
var list_day;

function fnc_returnDate(){
  this.returnDate = function(){
    var year = selectedYear;
    var month = (String(selectedMonth).length == 2) ? selectedMonth : "0" + selectedMonth;
    var day = (String(selectedDay).length == 2) ? selectedDay : "0" + selectedDay;
    selectedYear = selectedMonth = selectedDay = "00";
    return (year + "/" + month + "/" + day);
  }
}


//カレンダーから返された年月日をドロップダウンリストボックスに反映させるファンクション
function fnc_set(name,removeName){

  dateObje = new fnc_returnDate;
  rtnDate = dateObje.returnDate();
  if (rtnDate != "00/00/00") {
    var splitDate = rtnDate.split("/");
    document.getElementsByName(name + "_year")[0].value = splitDate[0];
    document.getElementsByName(name + "_month")[0].value = splitDate[1];
    document.getElementsByName(name + "_day")[0].value = splitDate[2];
    $('.' + removeName).remove();
  }

}

//項目クリア処理
function fnc_clear(name){
	document.getElementsByName(name + "_year")[0].value = "";
	document.getElementsByName(name + "_month")[0].value = "";
	document.getElementsByName(name + "_day")[0].value = "";
}

//対象オブジェクトの位置を移動させるファンクション
//function fnc_move(obj, x, y){
//  obj.style.left = x + "px";
//  obj.style.top = y + "px";
//}

function bgColorChange(obj, flag) {
	if(flag){
		obj.style.backgroundColor = "#CCCCFF";
	} else {
		obj.style.backgroundColor = "#FFFFFF";
	}
}

//QPACEC ADD STA
function fnc_setdayoftime(start_ymd){

  var timeval = document.getElementById("deliveryTimeCd").value;
  if (typeof document.getElementById("deliveryTimeCd" + timeval ).textContent != "undefined") {
    var timedata = document.getElementById("deliveryTimeCd" + timeval ).textContent;
  } else {
    var timedata = document.getElementById("deliveryTimeCd" + timeval ).innerText;
  }

  var start_year = start_ymd.substring(0,4);
  var start_month = start_ymd.substring(4,6);
  var start_day = start_ymd.substring(6,8);
  document.getElementById("dayoftime").innerHTML = start_year + "/" + start_month + "/" + start_day + "　　" + timedata;

}

function fnc_setdsp(name){

  var start_year = document.getElementsByName(name + "_year")[0].value;
  var start_month = document.getElementsByName(name + "_month")[0].value;
  var start_day = document.getElementsByName(name + "_day")[0].value;

  if( start_year == '' || start_month == '' || start_day == '' ){
    var sdate = document.getElementsByName("shortDeliveryDate")[0].value;
    fnc_setdayoftime( sdate );
  }else{
    fnc_setdayoftime( start_year + start_month + start_day);
  }

}

//QPACEC ADD END

//QPACEC ADD START IN 2010/08/13
// QPACEC UPD START IN 2014/02/26 消費税対応
// function fnc_dispCal_qpac(name, className, start_ymd,  length){
function fnc_dispCal_qpac(name, className, start_ymd, yusoCnt, length){
// QPACEC UPD END IN 2014/02/26 消費税対応

  //ドロップダウンリストボックスで選択されている年月日を取得
  var year = document.getElementsByName(name + "_year")[0].value;
  var month = document.getElementsByName(name + "_month")[0].value;
  var day = document.getElementsByName(name + "_day")[0].value;
  var start_year = start_ymd.substring(0,4);
  var start_month = start_ymd.substring(4,6);
  var start_day = start_ymd.substring(6,8);
  
  //セレクトボックスの値が"----"の時に現在時刻を設定
  var today = new Date();
  if (year == "----") {
    year = start_year;
  }
  if (month == "--") {
    month = start_month;
  }
  if (day == "--") {
    day = start_day;
  }
  
  //カレンダーの作成
  // QPACEC UPD START IN 2014/02/26 消費税対応
  // fnc_createCalendarQpac(name + '_calendar', className, year, month, day, start_year, start_month, start_day, length);
  fnc_createCalendarQpac(name + '_calendar', className, year, month, day, start_year, start_month, start_day, length, yusoCnt);
  // QPACEC UPD END IN 2014/02/26 消費税対応
  
  //カレンダーの表示位置を設定
  //DEL var calenderObj = document.getElementsByName(name + "_year")[0];
  //DEL var disp_x = YAHOO.util.Dom.getXY(calenderObj)[0];
  //DEL var disp_y = YAHOO.util.Dom.getXY(calenderObj)[1] + 20;
  
  //カレンダーの位置を移動
  //DEL fnc_move(document.getElementById(name + "_calendar"), disp_x, disp_y);
  
  //カレンダーを可視化
  //DEL $(name + "_calendar").show();
  
  //カレンダーをDrag and Drop可能に設定
  //DEL var dd1 = new YAHOO.util.DD(name + "_calendar", "myGroup");
}

// QPACEC UPD START IN 2014/02/26 消費税対応
// function fnc_createCalendarQpac(param_obj, className, param_year, param_month, param_day, param_start_year, param_start_month, param_start_day, param_length){
function fnc_createCalendarQpac(param_obj, className, param_year, param_month, param_day, param_start_year, param_start_month, param_start_day, param_length, yusoCnt){
// QPACEC UPD END IN 2014/02/26 消費税対応

  list_year = param_year;
  list_month = param_month;
  list_day = param_day;
  
  // カレンダーの文字色
  cal_tx = "black";
   
  //選択不可日の文字色
  un_tx = "#999999";
  // 選択不可日の背景色
  un_col = "#C0C0C0";

  // 本日の文字色
  tdy_tx = "black";
  
  // 本日の背景色
  tdy_col = "#95CF0E";

  // 開始日の文字色
  fdy_tx = "#FFFFFF";
  
  // 開始日の背景色
  fdy_col = "#CC0000";

  // 選択可能日の背景色
  ody_col = "#FFFFFF";

  
  // 月（'１月','２月','３月'...等でも可）
  mnname = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
  
  // 曜日（'日','月','火'...等でも可）
  wdname = new Array('日', '月', '火', '水', '木', '金', '土');
  
  //有効日数
  sl_day_count = 0;


 //第一月設定
  var query = new Array();
  query['year'] = param_start_year;
  query['mon'] = param_start_month;
  y = eval(query['year']);
  m = eval(query['mon']) - 1;
  target = new Date(y, m);

  year = target.getYear();
  mon = target.getMonth();

  if (year < 1900) {
    year += 1900;
  }
  // QPACEC ADD START IN 2014/02/17 消費税対応
  // 最短届け日より受付日を算出
  var receptionDate = new Date(param_start_year, param_start_month-1, param_start_day);
  receptionDate.setDate(receptionDate.getDate() - parseInt(yusoCnt)); 

  if (receptionDate.getFullYear() == "2014" && (receptionDate.getMonth() + 1) == "03") {
    if (receptionDate.getDate() >= 24 && receptionDate.getDate() <= 31) {
      if (param_start_month == "04") {
        param_length = param_length - (7 + parseInt(param_start_day)) + parseInt(yusoCnt);
      } else {
        param_length = param_length - (parseInt(param_start_day) - 24) + parseInt(yusoCnt);
      }
    }
  }
  // QPACEC ADD END IN 2014/02/17 消費税対応

  //月末日算出
  for (i = 28; i <= 31; i++) {
    ldate = new Date(year, mon, i);
    if (ldate.getMonth() == mon) {
      ld = i;
    }
  }

  fd = new Date(year, mon, 1);
  fwday = fd.getDay();
  day = 1 - fwday;

  ed = new Date(year, mon, ld);
  ewday = ed.getDay();

  //第二月設定
  if(mon == 11){
   year2 = year + 1;
   mon2 = 0;
  }else{
   year2 = year;
   mon2 = mon + 1;
  }

  for (i = 28; i <= 31; i++) {
    ldate2 = new Date(year2, mon2, i);
    if (ldate2.getMonth() == mon2) {
      ld2 = i;
    }
  }
  
  fd2 = new Date(year2, mon2, 1);
  fwday2 = fd2.getDay();
  day2 = 1 - fwday2;

  ed2 = new Date(year2, mon2, ld2);
  ewday2 = ed2.getDay();

  //LOOPカウント
  st1 = fwday;
  ed1 = 6 - ewday;
  lc1  = ld + st1 + ed1;

  st2 = fwday2;
  ed2 = 6 - ewday2;
  lc2  = ld2 + st2 + ed2;

  CAL = "<div class='" + className + "' id='" + className + "' >";
  //CAL = "";
  CAL += "<div style='position:relative; display:block;'>";
  CAL += "<div style='position:absolute; top:0; left:165px;width:360px;'>";
  CAL += "<div style='background-color:#008837; padding:4px 2px 4px 4px; font-size:10px; text-align:center; float:left;'>";
  CAL += "<p style='font-size:12px; color:#FFFFFF; padding:0 0 3px 0; text-align:center;'>" + year + "/" + (parseInt(mon) + 1) +"</p>";
  CAL += "<table cellpadding='4' cellspacing='2' bgcolor='#FFFFFF'>";
  CAL += "<tr class='haed'><th colspan=7 style='text-align:center;'>"; 
  CAL += "</th></tr>";
  
  CAL += "<tr class='week'>";
  for (i in wdname) {
    if (i >= 0 && i <= 6) {
      wdname[i] = wdname[i].fontcolor(cal_tx);
    } else {
      continue;
    }
    CAL += "<td align=center class=wday><tt>" + wdname[i] + "</tt></td>";
  }
  CAL += "</tr>";

  while (day <= ld) {
    CAL += "<tr class='day'>";

    for (i = 0; i < 7; i++) {
      if (day < 1 || day > ld) {
        CAL += "<td><br></td>";
      } else {
        //選択不可（前分）
        if(day < param_start_day || sl_day_count>=param_length){
          CAL += "<td align=right class=date bgcolor=" + un_col + " >";
          CAL += String(day).fontcolor(un_tx);
        }else{
          if (year == list_year && parseInt(mon)+ 1 == list_month && day == list_day) {
            CAL += "<td style=\"cursor: pointer;\" bgcolor=" + tdy_col + " align=right class=date onclick = \"selectedYear=" + year + ";selectedMonth=" + (parseInt(mon) + 1) + ";selectedDay=" + day + ";\">";
            CAL += "<strong>";
            CAL += String(day).fontcolor(tdy_tx);
            CAL += "</strong>";
          } else {
          if(sl_day_count == 0){
              CAL += "<td style=\"cursor: pointer;\" bgcolor=" + fdy_col + " align=right class=date onclick = \"selectedYear=" + year + ";selectedMonth=" + (parseInt(mon) + 1) + ";selectedDay=" + day + ";\">";
              CAL += "<strong>";
              CAL += String(day).fontcolor(fdy_tx);
              CAL += "</strong>";
            }else{
              CAL += "<td style=\"cursor: pointer;\" bgcolor=" + ody_col + " onmouseover=\"bgColorChange(this, true);\" onmouseout=\"bgColorChange(this, false);\" align=right class=date onclick = \"selectedYear=" + year + ";selectedMonth=" + (parseInt(mon) + 1) + ";selectedDay=" + day + ";\">";
              CAL += "<strong>";
              CAL += String(day).fontcolor(cal_tx);
              CAL += "</strong>";
            }
          }
          sl_day_count++;
        }

        CAL += "</td>";
      }
      day++;
    }
    CAL += "</tr>";
  }
  if( lc1 < lc2 ){
    CAL += "<tr class='day'><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td></tr>";
  }
  CAL += "</table></div>";

  CAL += "<div style='background-color:#008837; padding:4px 4px 4px 2px; font-size:10px; text-align:center; float:left;'>";
  CAL += "<p style='font-size:12px; color:#FFFFFF; padding:0 0 3px 0; text-align:center;'>" + year2 + "/" + (parseInt(mon2) + 1) +"</p>";
  CAL += "<table cellpadding='4' cellspacing='2' bgcolor='#FFFFFF'>";
  CAL += "<tr class='haed'><th colspan=7 style='text-align:center;'>"; 
  CAL += "</th></tr>";
  
  CAL += "<tr class='week'>";
  for (i in wdname) {
    if (i >= 0 && i <= 6) {
      wdname[i] = wdname[i].fontcolor(cal_tx);
    } else {
      continue;
    }
    CAL += "<td align=center class=wday><tt>" + wdname[i] + "</tt></td>";
  }
  CAL += "</tr>";
  
  while (day2 <= ld2) {
    CAL += "<tr class='day'>";
    for (i = 0; i < 7; i++) {
      if (day2 < 1 || day2 > ld2) {
        CAL += "<td><br></td>";
      } else {
        if(sl_day_count < param_length){
          if (year2 == list_year && parseInt(mon2) + 1 == list_month && day2 == list_day) {
            CAL += "<td style=\"cursor: pointer;\" bgcolor=" + tdy_col + " align=right class=date onclick = \"selectedYear=" + year2 + ";selectedMonth=" + (parseInt(mon2) + 1) + ";selectedDay=" + day2 + ";\">";
            CAL += "<strong>";
            CAL += String(day2).fontcolor(tdy_tx);
            CAL += "</strong>";
          } else {
            CAL += "<td style=\"cursor: pointer;\" bgcolor=" + ody_col + " onmouseover=\"bgColorChange(this, true);\" onmouseout=\"bgColorChange(this, false);\" align=right class=date onclick = \"selectedYear=" + year2 + ";selectedMonth=" + (parseInt(mon2) + 1) + ";selectedDay=" + day2 + ";\">";
            CAL += "<strong>";
            CAL += String(day2).fontcolor(cal_tx);
            CAL += "</strong>";
          }
          sl_day_count++;
        }else{
          CAL += "<td align=right class=date bgcolor=" + un_col + " >";
          CAL += String(day2).fontcolor(un_tx);
        }

        CAL += "</td>";
      }
      day2++;
    }
    CAL += "</tr>";
  }
  if( lc1 > lc2 ){
    CAL += "<tr class='day'><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td></tr>";
  }
  CAL += "</table></div>";

  CAL += "</div></div></div>";
  $('#'+param_obj).append(CAL)
  
}
//QPACEC ADD END IN 2010/08/13
