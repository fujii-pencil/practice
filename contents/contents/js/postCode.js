    var Digit = '0123456789'; 
   
  /**
   * 半角数字チェック
   * @param strData value値
   * @return 0:正常 / 1:異常(形式) 2:文字不一致
   */
  function checkPostNoPattern (PostNo){
    var chText = "";
    var strDigit = Digit;

    if (PostNo.length == 8) {
      for (i = 0; i < PostNo.length; i++){
        chText = PostNo.charAt(i);
        if(i==3){
          if (chText != "-"){
            return 1;
          }
        }else{
          if (strDigit.indexOf(chText) == -1){
            return 2;
          }
        }
      }
    } else if (PostNo.length == 7) {
      for (i = 0; i < PostNo.length; i++){
        chText = PostNo.charAt(i);
        if (strDigit.indexOf(chText) == -1){
          return 2;
        }
      }
    }

    return 0;
  }

    
  // 郵便番号チェック
  function checkPost(site) {
    var zipcd = trimmed(document.forms[0].postalCode.value);

    if (!(zipcd.length == 8 || zipcd.length == 7)) {
      alert("郵便番号をもう一度お確かめください。");
      document.forms[0].postalCode.focus();
      return ;
    }

    var ret = checkPostNoPattern(zipcd);
    if ( ret == 2) {
      alert("郵便番号は半角数字で入力してください。");
      document.forms[0].postalCode.focus();
      return ;
    }
    if ( ret == 1) {
      alert("郵便番号をもう一度お確かめください。");
      document.forms[0].postalCode.focus();
      return ;
    }
    var left = (window.screen.availWidth-420)/2;
    var top = (window.screen.availHeight-480)/2;

    if (zipcd.length == 7) {
      zipcd = zipcd.substring(0,3) + '-' + zipcd.substring(3,7);
    }
    var url = site + "/init?type=post&postno=" + zipcd;

    window.open(url, "_blank", "location=no,scrollbars=yes,status=no,width=420,height=480,top="+top+",left="+left+",resizable=no");
    return;
  }

  // 住所チック
  function chkAddress(site){
  
    var prefectureCode = trimmed(document.forms[0].prefectureCode.value);
    
    if (prefectureCode==null || prefectureCode=='') {
      alert("都道府県を選択してください。");
      document.forms[0].prefectureCode.focus();
	  return ;
    }
     
    var address2 = trimmed(document.forms[0].address2.value);
      
    if (address2==null || address2=='') {
      alert("市区町村を入力してください。");
      document.forms[0].address2.focus();
	  return ;
    }

    var url = site + "/init?type=address&address1=" + prefectureCode + "&address2=" + escape(address2);

    var left = (window.screen.availWidth-420)/2;
	var top = (window.screen.availHeight-480)/2;
    window.open(url, "_blank", "location=no,scrollbars=yes,status=no,width=420,height=480,top="+top+",left="+left+",resizable=no");
	return ;
  }
  
  //親画面の郵便番号と住所値を設置
  function selData(postNo, addr1Cd, addr2Nm, cityCode, addressKn, addr3Nm){
	  	    	  
    //郵便番号の値
    window.opener.document.forms[0].postalCode.value = postNo;
    //住所の値
    window.opener.document.forms[0].prefectureCode.value = addr1Cd;
    window.opener.document.forms[0].address2.value = addr2Nm;
    window.opener.document.forms[0].cityCode.value = cityCode;
    window.opener.document.forms[0].addressKn.value = addressKn;
    window.opener.document.forms[0].address3.value = addr3Nm;
        
    window.opener.document.forms[0].address2.focus();
	window.close();

  }
  
  //削除スペース
  function trimmed(value){
  
	value = value.replace("/^?+/", "");
	value = value.replace("/?+$/g", "");
	value = value.replace("/^\s+/", "");
	return  value.replace("/\s+$/g", "");
	
  }
