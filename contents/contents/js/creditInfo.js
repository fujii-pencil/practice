function setRegCreditInfo(index,flag) {
  var cardNo = "";
  //var newCardNo = document.forms[0].cardNo1.value + document.forms[0].cardNo2.value + document.forms[0].cardNo3.value + document.forms[0].cardNo4.value;

  if (index == 'newcard') {

    document.getElementById("cardNo1").disabled="";
    document.getElementById("cardNo2").disabled="";
    document.getElementById("cardNo3").disabled="";
    document.getElementById("cardNo4").disabled="";
    document.getElementById("cardUserName").disabled="";
    document.getElementById("cardCheckNoArea").style.display="block";	//QPACEC 2013/05/15 ADD STA クレジットカードセキュリティCD対応
    document.getElementById("cardCheckNoArea").style.display="";		//QPACEC 2013/05/15 ADD STA クレジットカードセキュリティCD対応

    if(flag != 2){
        document.forms[0].cardNo1.value = "";
        document.forms[0].cardNo2.value = "";
        document.forms[0].cardNo3.value = "";
        document.forms[0].cardNo4.value = "";
        document.forms[0].cardUserName.value = "";
        document.forms[0].cardCheckNo.value = "";     					//QPACEC 2013/05/15 ADD クレジットカードセキュリティCD対応
        setExpirationMonth("");
        setExpirationYear("");
    }


  } else if (index == '') {
    document.getElementById("cardCheckNoArea").style.display="none";	//QPACEC 2013/05/15 ADD STA クレジットカードセキュリティCD対応

  } else {

    var card4 = document.getElementById("carddata"+index).value;
    var carduser = document.getElementById("carduser"+index).value;
    var cardyy = document.getElementById("cardyy"+index).value;
    var cardmm = document.getElementById("cardmm"+index).value;

    document.getElementById("cardNo1").disabled="true";
    document.getElementById("cardNo2").disabled="true";
    document.getElementById("cardNo3").disabled="true";
    document.getElementById("cardNo4").disabled="true";
    document.getElementById("cardUserName").disabled="true";
    document.getElementById("cardCheckNoArea").style.display="none";	//QPACEC 2013/05/15 ADD STA クレジットカードセキュリティCD対応

    document.forms[0].cardNo1.value = 'XXXX';
    document.forms[0].cardNo2.value = 'XXXX';
    document.forms[0].cardNo3.value = 'XXXX';
    document.forms[0].cardNo4.value = card4;
    document.forms[0].cardUserName.value = carduser;
    //QPACEC 2013/05/15 ADD STA クレジットカードセキュリティCD対応
    if(flag != 2){
        document.forms[0].cardCheckNo.value = "";
    }
    //QPACEC 2013/05/15 ADD END クレジットカードセキュリティCD対応

    if( flag == 1 ){
      setExpirationMonth(cardmm);
      setExpirationYear(cardyy);
    }

  }

}

function setExpirationMonth(data) {

  var obj = document.forms[0].cardExpirationMonth;
  for (var i = 0; i < obj.length; i++) {
    if (obj.options[i].value == data) {
      obj.options[i].selected = true;
      return;
    }
  }
}

function setExpirationYear(data) {

  var obj = document.forms[0].cardExpirationYear;
  for (var i = 0; i < obj.length; i++) {
    if (obj.options[i].value == data) {
      obj.options[i].selected = true;
      return;
    }
  }
}
