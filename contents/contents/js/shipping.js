
function setDokonOn() {
  document.getElementById("dokonFlg").value = "1";
  document.getElementById("creditcard").disabled="true";
  document.getElementById("cashondelivery").disabled="true";
  document.getElementById("convenience").disabled="true";

  document.getElementById("cardUserName").disabled="true";
  document.getElementById("cardNo1").disabled="true";
  document.getElementById("cardNo2").disabled="true";
  document.getElementById("cardNo3").disabled="true";
  document.getElementById("cardNo4").disabled="true";
  document.getElementById("cardExpirationMonth").disabled="true";
  document.getElementById("cardExpirationYear").disabled="true";

  var size = document.getElementById("regularPaymentSize").value;

  if (size > 0) {
    document.getElementById("newcard").disabled="true";
    document.getElementById("creditcard_info_2").style.display = 'none';
  }

  for (var i = 0; i < size; i++) {
    var cnt = i;
    var id = "cardnum" + i;
    document.getElementById(id).disabled="true";
  }
  
  document.getElementById("normal-day-appoint-f-no").disabled = "true";
  document.getElementById("normal-day-appoint-f-yes").disabled = "true";
  document.getElementById("normalDeliveryTime").disabled = "true";
  
  //document.getElementById("delivery_info").style.display = 'none';
  //document.getElementById("creditcard_info_1").style.display = 'none';

  return;
}

function setDokonOff() {
  document.getElementById("dokonFlg").value = "0";
  document.getElementById("creditcard").disabled="";
  if (document.getElementById("daibiki").value != 1) {
    document.getElementById("cashondelivery").disabled="";
  }
  if (document.getElementById("convenienceFlg").value != 1) {
    document.getElementById("convenience").disabled="";
  }
  document.getElementById("cardUserName").disabled="";
  document.getElementById("cardNo1").disabled="";
  document.getElementById("cardNo2").disabled="";
  document.getElementById("cardNo3").disabled="";
  document.getElementById("cardNo4").disabled="";
  document.getElementById("cardExpirationMonth").disabled="";
  document.getElementById("cardExpirationYear").disabled="";

  var size = document.getElementById("regularPaymentSize").value;

  if (size > 0) {
    document.getElementById("newcard").disabled="";
  }
  for (var i = 0; i < size; i++) {
    var cnt = i;
    var id = "cardnum" + i;
    document.getElementById(id).disabled="";
  }
  if(document.getElementById("delivery_info")){
    document.getElementById("delivery_info").style.display = '';
  }
  return;
}

function checkEnquete(cnt){

  var checkedCnt = 0;
  for(var h = 1; h <= cnt; h++){

    var enq ="enquete"+h;
    var obj = eval('document.forms[0].'+enq);

    //蜈ｨ縺ｦ縺ｮ繝ｩ繧ｸ繧ｪ繝懊ち繝ｳ繧偵せ繧ｭ繝｣繝ｳ
    for(var i = 0; i < obj.length; i++){ 
      //蜈ｨ繝√ぉ繝・け
      if(obj[i].checked) {
        checkedCnt ++ ;
      }
    }

    if(cnt == checkedCnt){
      document.getElementById("confirmButton").style.display = 'block';
      document.getElementById("enqueteDiv").style.display = 'none';

      if(document.getElementById("cooltokutenOnDiv") != null){
        document.getElementById("cooltokutenOffDiv").style.display = 'none';
        document.getElementById("cooltokutenOnDiv").style.display = 'block';
      }
      if(document.getElementById("normaltokutenOnDiv") != null){

        document.getElementById("normaltokutenOffDiv").style.display = 'none';
        document.getElementById("normaltokutenOnDiv").style.display = 'block';
//        document.getElementById("normaltokutenMsg").style.display = 'block';
      }
      if(document.getElementById("teikitokutenOffDiv") != null){
        document.getElementById("teikitokutenOffDiv").style.display = 'none';
        document.getElementById("teikitokutenOnDiv").style.display = 'block';
//        document.getElementById("teikitokutenMsg").style.display = 'block';
      }
      if(document.getElementById("normaltokutenOnDiv") != null || 
    		  document.getElementById("teikitokutenOffDiv") != null){
          document.getElementById("tokutenMsg").style.display = 'block';
      }
    }
  }
}

function registbuttonDisp(cnt){

  if(cnt > 0){

    document.getElementById("confirmButton").style.display = 'none';

    if(document.getElementById("cooltokutenOnDiv") != null){
      document.getElementById("cooltokutenOnDiv").style.display = 'none';
      document.getElementById("cooltokutenOffDiv").style.display = 'block';
    }

    if(document.getElementById("normaltokutenOnDiv") != null){
      document.getElementById("normaltokutenOnDiv").style.display = 'none';
//      document.getElementById("normaltokutenMsg").style.display = 'none';
      document.getElementById("normaltokutenOffDiv").style.display = 'block';
    }

    if(document.getElementById("teikitokutenOnDiv") != null){
      document.getElementById("teikitokutenOnDiv").style.display = 'none';
//      document.getElementById("teikitokutenMsg").style.display = 'none';
      document.getElementById("teikitokutenOffDiv").style.display = 'block';
    }
    
    if(document.getElementById("normaltokutenOnDiv") != null || 
    		document.getElementById("teikitokutenOnDiv") != null){
        document.getElementById("tokutenMsg").style.display = 'none';
    }

  }else{
    document.getElementById("confirmButton").style.display = 'block';

    if(document.getElementById("cooltokutenOnDiv") != null){
      document.getElementById("cooltokutenOffDiv").style.display = 'none';
      document.getElementById("cooltokutenOnDiv").style.display = 'block';
    }
    if(document.getElementById("normaltokutenOffDiv") != null){
      document.getElementById("normaltokutenOffDiv").style.display = 'none';
      document.getElementById("normaltokutenOnDiv").style.display = 'block';
//      document.getElementById("normaltokutenMsg").style.display = 'none';
    }
    if(document.getElementById("teikitokutenOffDiv") != null){
      document.getElementById("teikitokutenOffDiv").style.display = 'none';
      document.getElementById("teikitokutenOnDiv").style.display = 'block';
//      document.getElementById("teikitokutenMsg").style.display = 'none';
    }
    if(document.getElementById("normaltokutenOffDiv") != null ||
    		document.getElementById("teikitokutenOffDiv") != null){
        document.getElementById("tokutenMsg").style.display = 'none';    	
    }

  }

}

/* 2012/04/12 DEL STA
function appointDayDisp(shortDelevery, deliveryFlg) {
  var obj = document.getElementsByName("regularDeliveryFlg");
  for (var i = 0; i < obj.length; i++) {
    if (obj[i].checked) {
      if (obj[i].value == "3") {
        getDayOfWeek(shortDelevery);
        document.getElementById("appointDayMessage").style.display = "block";
      } else {
        document.getElementById("appointDayMessage").style.display = "none";
      }
    }
  }
  regularDateDisp(deliveryFlg);
  setRegularInfo(deliveryFlg);
}
 * 2012/04/12 DEL END */

/* 2012/04/11 ADD STA FUNCTION */
function appointDayDispShip( shortDelevery ) {
  var obj = document.getElementsByName("regularDeliveryFlg");
  var deliveryFlg = "";

  for (var i = 0; i < obj.length; i++) {
    if (obj[i].checked) {
      deliveryFlg = obj[i].value;
      if (obj[i].value == "3") {
        getDayOfWeek(shortDelevery);
        document.getElementById("appointDayMessage").style.display = "block";
      } else {
        document.getElementById("appointDayMessage").style.display = "none";
      }
    }
  }
  regularDateDisp(deliveryFlg);
  setRegularInfo(deliveryFlg);
}

function regularDateDisp(deliveryFlg) {

  if (deliveryFlg != '') {
    if ( deliveryFlg == '2' ) {
      document.getElementById("regularDeliveryWeek").disabled="true";
      document.getElementById("regularDeliveryDay").disabled="true";
      document.getElementById("regularDeliveryDate").disabled="true";
    } else if ( deliveryFlg == '3' ) {
      document.getElementById("regularDeliveryWeek").disabled="";
      document.getElementById("regularDeliveryDay").disabled="";
      document.getElementById("regularDeliveryDate").disabled="true";
    } else {
      document.getElementById("regularDeliveryWeek").disabled="true";
      document.getElementById("regularDeliveryDay").disabled="true";
      document.getElementById("regularDeliveryDate").disabled="";
    }
  }
}
/* 2012/04/12 ADD END FUNCTION */

function setRegularInfo(deliveryFlg) {
  if (deliveryFlg != '') {
    document.getElementById("regularWeek").value = document.getElementById("regularDeliveryWeek").value;
    document.getElementById("regularDay").value = document.getElementById("regularDeliveryDay").value;
    document.getElementById("regularDate").value = document.getElementById("regularDeliveryDate").value
  }
}

function appointDayLoadDisp() {
  var obj = document.getElementsByName("regularDeliveryFlg");
  for (var i = 0; i < obj.length; i++) {
    if (obj[i].checked) {
      if (obj[i].value == "3") {
        document.getElementById("appointDayMessage").style.display = "block";
      } else {
        document.getElementById("appointDayMessage").style.display = "none";
      }
    }
  }
}

function initDokonDisp(dokonFlg) {
  if (dokonFlg == "1") {
    setDokonOn();
  } else {
    setDokonOff();
  }
}

/* 螳壽悄譖懈律謖・ｮ� */
function getDayOfWeek(shortDelivery) {
  var str = new String(shortDelivery);
  var baseYear = str.substring(0, 4);
  var baseMonth = str.substring(4, 6);
  var baseDay = str.substring(6, 8);
  var sysDate = new Date(baseYear, (baseMonth - 1), baseDay);
  var week = document.getElementById("regularDeliveryWeek").value;
  var dayOfWeek = document.getElementById("regularDeliveryDay").value;

  var targetDate = getWhatDayOfWeek(sysDate.getFullYear(), (sysDate.getMonth() + 1), week, dayOfWeek);
  if (sysDate > targetDate) {
   targetDate = getWhatDayOfWeek(sysDate.getFullYear(), (sysDate.getMonth() + 2), week, dayOfWeek);
  }

  var dayOfWeekList = new Array("譌･", "譛�", "轣ｫ", "豌ｴ", "譛ｨ", "驥�", "蝨�");
  document.getElementById("deliveryDayOfWeek").innerHTML = "荳願ｨ倩ｨｭ螳壹・蝣ｴ蜷医∝・蝗槭♀螻翫￠譌･縺ｯ <strong>[" +
   (targetDate.getMonth() + 1) + "譛�" + targetDate.getDate() + "譌･" + "(" + dayOfWeekList[targetDate.getDay()] + ")" + "]<\/strong> 縺ｨ縺ｪ繧翫∪縺吶�";

  var month = (targetDate.getMonth() + 1);
  var date = targetDate.getDate();
  if ((targetDate.getMonth() + 1).toString().length == 1) {
    month = "0" + (targetDate.getMonth() + 1);
  }
  if (targetDate.getDate().toString().length == 1) {
   date = "0" + targetDate.getDate();
  }

  var deliveryDate = targetDate.getFullYear().toString() + month.toString() + date.toString();
  document.getElementById("regularDeliveryDayOfWeek").value = deliveryDate;
}

/**
 * 莉ｻ諢上・蟷ｴ譛医・隨ｬn譖懈律縺ｮ譌･莉倥ｒ豎ゅａ繧矩未謨ｰ
 * year 蟷ｴ
 * month 譛�
 * number 菴慕分逶ｮ縺ｮ譖懈律縺九∫ｬｬ1譖懈律縺ｪ繧�1縲らｬｬ3譖懈律縺ｪ繧�3
 * dayOfWeek 豎ゅａ縺溘＞譖懈律縲�0-6縺ｾ縺ｧ縺ｮ謨ｰ蟄励〒譖懈律縺ｮ譌･?蝨溘ｒ謖・ｮ壹☆繧�
 */
function getWhatDayOfWeek(year, month, number, dayOfWeek) {
    var firstDt = new Date(year, month - 1, 1);
    var firstDayOfWeek = firstDt.getDay();//謖・ｮ壹＠縺溷ｹｴ譛医・1譌･縺ｮ譖懈律繧貞叙蠕�
    var day = dayOfWeek - firstDayOfWeek;
    if(day <= 0) day += 7;//1騾ｱ髢薙ｒ雜ｳ縺�
    var dt = new Date(year, month - 1, day);
    var msTime = dt.getTime();
    msTime += (86400000 * 7 * (number - 1));//n譖懈律縺ｾ縺ｧ1騾ｱ髢薙ｒ雜ｳ縺苓ｾｼ縺ｿ
    dt.setTime(msTime);
    return dt;
}

//2谺｡霑ｽ蜉
function appointDayLoadDispMulti(count) {
	for(var index = 0; index < count; index++){
		  var obj = document.getElementsByName("regularDeliveryFlg" + index);
		  for (var i = 0; i < obj.length; i++) {
		    if (obj[i].checked) {
		      if (obj[i].value == "3") {
		        document.getElementById("appointDayMessage" + index).style.display = "block";
		      } else {
		        document.getElementById("appointDayMessage" + index).style.display = "none";
		      }
		    }
		  }	
	}
}

function appointDayDispMulti(shortDelevery, deliveryFlg, index) {
	  var obj = document.getElementsByName("regularDeliveryFlg" + index);
	  for (var i = 0; i < obj.length; i++) {
	    if (obj[i].checked) {
	      if (obj[i].value == "3") {
	    	  getDayOfWeekMulti(shortDelevery, index);
	        document.getElementById("appointDayMessage" + index).style.display = "block";
	      } else {
	        document.getElementById("appointDayMessage" + index).style.display = "none";
	      }
	    }
	  }
	  regularDateDispMulti(deliveryFlg, index);
	  setRegularInfoMulti(deliveryFlg, index);
}

/* 螳壽悄譖懈律謖・ｮ� */
function getDayOfWeekMulti(shortDelivery, index) {
  var str = new String(shortDelivery);
  var baseYear = str.substring(0, 4);
  var baseMonth = str.substring(4, 6);
  var baseDay = str.substring(6, 8);
  var sysDate = new Date(baseYear, (baseMonth - 1), baseDay);
  var week = document.getElementById("regularDeliveryWeek" + index).value;
  var dayOfWeek = document.getElementById("regularDeliveryDay" + index).value;

  var targetDate = getWhatDayOfWeek(sysDate.getFullYear(), (sysDate.getMonth() + 1), week, dayOfWeek);
  if (sysDate > targetDate) {
   targetDate = getWhatDayOfWeek(sysDate.getFullYear(), (sysDate.getMonth() + 2), week, dayOfWeek);
  }

  var dayOfWeekList = new Array("譌･", "譛�", "轣ｫ", "豌ｴ", "譛ｨ", "驥�", "蝨�");
  document.getElementById("deliveryDayOfWeek" + index).innerHTML = "荳願ｨ倩ｨｭ螳壹・蝣ｴ蜷医∝・蝗槭♀螻翫￠譌･縺ｯ <strong>[" +
   (targetDate.getMonth() + 1) + "譛�" + targetDate.getDate() + "譌･" + "(" + dayOfWeekList[targetDate.getDay()] + ")" + "]<\/strong> 縺ｨ縺ｪ繧翫∪縺吶�";

  var month = (targetDate.getMonth() + 1);
  var date = targetDate.getDate();
  if ((targetDate.getMonth() + 1).toString().length == 1) {
    month = "0" + (targetDate.getMonth() + 1);
  }
  if (targetDate.getDate().toString().length == 1) {
   date = "0" + targetDate.getDate();
  }

  var deliveryDate = targetDate.getFullYear().toString() + month.toString() + date.toString();
  document.getElementById("regularDeliveryDayOfWeek" + index).value = deliveryDate;
}

function setRegularInfoMulti(deliveryFlg, index) {
	  if (deliveryFlg != '') {
	    document.getElementById("regularWeek" + index).value = document.getElementById("regularDeliveryWeek" + index).value;
	    document.getElementById("regularDay" + index).value = document.getElementById("regularDeliveryDay" + index).value;
	    document.getElementById("regularDate" + index).value = document.getElementById("regularDeliveryDate" + index).value
	  }
}

function appointDayDispMultiAll(count) {

	for(var index = 0; index < count; index++){

		  var shortDelevery = document.getElementById("hregularShortDelivery" + index).value;
		  var deliveryFlg = document.getElementById("hregularDeliveryFlg" + index).value;
		  var obj = document.getElementsByName("regularDeliveryFlg" + index);
		  for (var i = 0; i < obj.length; i++) {
		    if (obj[i].checked) {
		      if (obj[i].value == "3") {
		    	  getDayOfWeekMulti(shortDelevery, index);
		        document.getElementById("appointDayMessage" + index).style.display = "block";
		      } else {
		        document.getElementById("appointDayMessage" + index).style.display = "none";
		      }
		    }
		  }
		  regularDateDispMulti(deliveryFlg, index);
		  setRegularInfoMulti(deliveryFlg, index);
	}
}

function checkEnqueteMulti(cnt, count){

	  var checkedCnt = 0;
	  for(var h = 1; h <= cnt; h++){

	    var enq ="enquete"+h;
	    var obj = eval('document.forms[0].'+enq);

	    //蜈ｨ縺ｦ縺ｮ繝ｩ繧ｸ繧ｪ繝懊ち繝ｳ繧偵せ繧ｭ繝｣繝ｳ
	    for(var i = 0; i < obj.length; i++){ 
	      //蜈ｨ繝√ぉ繝・け
	      if(obj[i].checked) {
	        checkedCnt ++ ;
	      }
	    }

	    if(cnt == checkedCnt){
	      document.getElementById("confirmButton").style.display = 'block';
	      document.getElementById("enqueteDiv").style.display = 'none';

	      var tokutenMsgFlg = false;
	      for(var index = 0; index < count; index++){
		      if(document.getElementById("cooltokutenOnDiv" + index) != null){
			        document.getElementById("cooltokutenOffDiv" + index).style.display = 'none';
			        document.getElementById("cooltokutenOnDiv" + index).style.display = 'block';
			      }
			      if(document.getElementById("normaltokutenOnDiv" + index) != null){

			        document.getElementById("normaltokutenOffDiv" + index).style.display = 'none';
			        document.getElementById("normaltokutenOnDiv" + index).style.display = 'block';
//			        document.getElementById("normaltokutenMsg" + index).style.display = 'block';
			      }
			      if(document.getElementById("teikitokutenOffDiv" + index) != null){
			        document.getElementById("teikitokutenOffDiv" + index).style.display = 'none';
			        document.getElementById("teikitokutenOnDiv" + index).style.display = 'block';
//			        document.getElementById("teikitokutenMsg" + index).style.display = 'block';
			      } 
			      if(document.getElementById("normaltokutenOnDiv" + index) != null ||
			    		  document.getElementById("teikitokutenOffDiv" + index) != null){
			          tokutenMsgFlg = true; 	
			      }
	      }
	      if(tokutenMsgFlg) {
	    	  document.getElementById("tokutenMsg").style.display = 'block';
	      }

	    }
	  }
	}

	function registbuttonDispMulti(cnt, count){

	  if(cnt > 0){

	    document.getElementById("confirmButton").style.display = 'none';

	    var tokutenMsgFlg = false;
	    for(var index = 0; index < count; index++){
		    if(document.getElementById("cooltokutenOnDiv" + index) != null){
			      document.getElementById("cooltokutenOnDiv" + index).style.display = 'none';
			      document.getElementById("cooltokutenOffDiv" + index).style.display = 'block';
			    }

			    if(document.getElementById("normaltokutenOnDiv" + index) != null){
			      document.getElementById("normaltokutenOnDiv" + index).style.display = 'none';
//			      document.getElementById("normaltokutenMsg" + index).style.display = 'none';
			      document.getElementById("normaltokutenOffDiv" + index).style.display = 'block';
			    }

			    if(document.getElementById("teikitokutenOnDiv" + index) != null){
			      document.getElementById("teikitokutenOnDiv" + index).style.display = 'none';
//			      document.getElementById("teikitokutenMsg" + index).style.display = 'none';
			      document.getElementById("teikitokutenOffDiv" + index).style.display = 'block';
			    }
			    if(document.getElementById("normaltokutenOnDiv" + index) != null ||
			    		document.getElementById("teikitokutenOnDiv" + index) != null){
			      tokutenMsgFlg = true; 	
			    }
			    
	    }
	    if(tokutenMsgFlg) {
	    	document.getElementById("tokutenMsg").style.display = 'none';
	    }

	  }else{
		  
	    document.getElementById("confirmButton").style.display = 'block';
	    
	    for(var index = 0; index < count; index++){
		    if(document.getElementById("cooltokutenOnDiv" + index) != null){
			      document.getElementById("cooltokutenOffDiv" + index).style.display = 'none';
			      document.getElementById("cooltokutenOnDiv" + index).style.display = 'block';
			}
			if(document.getElementById("normaltokutenOffDiv" + index) != null){
			      document.getElementById("normaltokutenOffDiv" + index).style.display = 'none';
			      document.getElementById("normaltokutenOnDiv" + index).style.display = 'block';
//			      document.getElementById("normaltokutenMsg" + index).style.display = 'none';
			}
			if(document.getElementById("teikitokutenOffDiv" + index) != null){
			      document.getElementById("teikitokutenOffDiv" + index).style.display = 'none';
			      document.getElementById("teikitokutenOnDiv" + index).style.display = 'block';
//			      document.getElementById("teikitokutenMsg" + index).style.display = 'none';
			}
		    if(document.getElementById("normaltokutenOffDiv" + index) != null ||
		    		document.getElementById("teikitokutenOffDiv" + index) != null){
		      tokutenMsgFlg = true; 	
		    }
	    }
	    if(tokutenMsgFlg) {
	    	document.getElementById("tokutenMsg").style.display = 'none';
	    }
	  }
	}
	

	function setCoolCalendar(start_ymd, value, index) {

		var vName = index + "coolDeliveryAppointedDate";
		var className = index + "cool_calendar";
		var calName = index + "coolDeliveryAppointedDate";
		// QPACEC ADD START IN 2014/02/26 豸郁ｲｻ遞主ｯｾ蠢�
		// 霈ｸ騾∵律謨ｰ
		var yusoCnt  = $('#coolYusoCount').attr('value');
		if (yusoCnt == null || yusoCnt =="") {
			yusoCnt = "0";
		}
		// QPACEC ADD END IN 2014/02/26 豸郁ｲｻ遞主ｯｾ蠢�
		
		$('.' + className).remove();
		
		if (value== '1') {
			// QPACEC UPD START IN 2014/02/26 豸郁ｲｻ遞主ｯｾ蠢�
			// fnc_dispCal_qpac(vName,className,start_ymd,14);
			fnc_dispCal_qpac(vName,className,start_ymd, yusoCnt, 14);
			// QPACEC UPD END IN 2014/02/26 豸郁ｲｻ遞主ｯｾ蠢�
		} else if (value== '0'){
			$('.' + className).remove();
			fnc_clear(calName);
		}
}
	
	function setNormalCalendar(start_ymd, value, index) {

		var vName = index + "normalDeliveryAppointedDate";
		var className = index + "normal_calendar";
		var calName = index + "normalDeliveryAppointedDate";
		// QPACEC ADD START IN 2014/02/26 豸郁ｲｻ遞主ｯｾ蠢�
		// 霈ｸ騾∵律謨ｰ
		var yusoCnt  = $('#normalYusoCount').attr('value');
		if (yusoCnt == null || yusoCnt =="") {
			yusoCnt = "0";
		}
		// QPACEC ADD END IN 2014/02/26 豸郁ｲｻ遞主ｯｾ蠢�
		
		$('.' + className).remove();
		if (value== '1') {
			// QPACEC UPD START IN 2014/02/26 豸郁ｲｻ遞主ｯｾ蠢�
			// fnc_dispCal_qpac(vName,className,start_ymd,14);
			fnc_dispCal_qpac(vName,className,start_ymd, yusoCnt, 14);
			// QPACEC UPD END IN 2014/02/26 豸郁ｲｻ遞主ｯｾ蠢�
		} else if (value== '0'){
			$('.' + className).remove();
			fnc_clear(calName);
		}
}
	
	function setCoolCalendarText(start_ymd, index) {

		if(document.getElementById(index + "cool-day-appoint-f-yes").checked){

			var vName = index + "coolDeliveryAppointedDate";
			var className = index + "cool_calendar";
			var calName = index + "coolDeliveryAppointedDate";
			// QPACEC ADD START IN 2014/02/28 豸郁ｲｻ遞主ｯｾ蠢�
			// 霈ｸ騾∵律謨ｰ
			var yusoCnt  = $('#coolYusoCount').attr('value');
			if (yusoCnt == null || yusoCnt =="") {
				yusoCnt = "0";
			}
			// QPACEC ADD END IN 2014/02/28 豸郁ｲｻ遞主ｯｾ蠢�
			
			$('.' + className).remove();
			// QPACEC UPD START IN 2014/02/26 豸郁ｲｻ遞主ｯｾ蠢�
			// fnc_dispCal_qpac(vName,className,start_ymd,14);
			fnc_dispCal_qpac(vName,className,start_ymd,yusoCnt,14);
			// QPACEC UPD END IN 2014/02/26 豸郁ｲｻ遞主ｯｾ蠢�

		}
}
	
	function setNormalCalendarText(start_ymd, index) {

		if(document.getElementById(index + "normal-day-appoint-f-yes").checked){

			var vName = index + "normalDeliveryAppointedDate";
			var className = index + "normal_calendar";
			var calName = index + "normalDeliveryAppointedDate";
			// QPACEC ADD START IN 2014/02/28 豸郁ｲｻ遞主ｯｾ蠢�
			// 霈ｸ騾∵律謨ｰ
			var yusoCnt  = $('#normalYusoCount').attr('value');
			if (yusoCnt == null || yusoCnt =="") {
				yusoCnt = "0";
			}
			// QPACEC ADD END IN 2014/02/28 豸郁ｲｻ遞主ｯｾ蠢�
			
			$('.' + className).remove();
			// fnc_dispCal_qpac(vName,className,start_ymd,14);
			fnc_dispCal_qpac(vName,className,start_ymd,yusoCnt,14);
			// QPACEC UPD END IN 2014/02/26 豸郁ｲｻ遞主ｯｾ蠢�

		}
}
