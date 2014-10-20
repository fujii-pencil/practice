//リストの全選択/全解除用function
//
//@param obj チェックボックスのオブジェクト
//
function checkAll(obj){
  var n = '';
  if (document.getElementById) {
    var type = document.getElementById("checkType").value;
    if (type == "" || type == "allCheck") {
      n = 1;
      document.getElementById("checkType").value = "unCheck";
    } else {
      n = 0;
      document.getElementById("checkType").value = "allCheck";
    }
  }
  if (obj == null) {
    //through
  } else if (obj.type == "checkbox") {
    obj.checked = (n == 1);
  } else {
    for (var i = 0; i < obj.length; i++) {
      obj[i].checked = (n == 1);
    }
  }
}

function chagePage(mode, curr_page, next_page){
  if (mode == 'ranking') {
    $(curr_page).style.display = 'none';
    $(next_page).style.display = 'block';
  } else if (mode == 'recommendA') {
    $(curr_page).style.display = 'none';
    $(next_page).style.display = 'block';
  } else if (mode == 'recommendB') {
    $(curr_page).style.display = 'none';
    $(next_page).style.display = 'block';
  }
}

/*
 （表示切替）
 */
function showhide(id){
  if (document.getElementById) {
    if (document.getElementById(id).style.display == "block") {
      document.getElementById(id).style.display = "none";
    } else {
      document.getElementById(id).style.display = "block";
    }
  }
}

/* 
 SSL保護ページへのURLを動的に生成する
 */
function sendSSLAction(action){
  var skuCode = document.forms['cart'].selectSkuCode.value;
  var shopCode = document.forms['cart'].shopCode.value;
  var commodityCode = document.forms['cart'].commodityCode.value;
  var contextPath = document.forms['cart'].contextPath.value;
  var path = contextPath + '/app/catalog/detail/' + action + "/" + shopCode + "/" + commodityCode + "/" + skuCode;
  document.forms["cart"].action = path;
  document.forms["cart"].submit();
}

//何も処理を行わないダミー関数
function dummy(){

}

// 初期表示時に、最初の入力項目(パスワード、テキスト、テキストエリアのみ)にフォーカスを当てる
function onFocus(){
  //form要素タイプ
  var types1 = ["text", "textarea", "password", "checkbox", "radio", "select-one"];
  //form要素のうち、フォーカスするもの
  var types2 = ["text", "textarea", "password"];
  try {
    for (var f = 0; f < document.forms.length; f++) {
      var fm = document.forms[f];
      for (var i = 0; i < fm.elements.length; i++) {
        var item = fm.elements[i];
        if (types1.indexOf(item.type) >= 0) {
          if (types2.indexOf(item.type) >= 0 && item.value == "") {
            fm.elements[i].focus();
          }
          return;
        }
      }
    }
  } catch (e) {
    // フォーカスを当てる要素がない場合、何もしない。
  }
}


// ページロード時にonFocusイベントを追加
function addEvent(){
  // Firefox用の処理
  if (window.addEventListener) {
    window.addEventListener("load", onFocus, false);
    // IE用の処理
  } else if (window.attachEvent) {
    window.attachEvent("onload", onFocus);
  }
}

//addEvent();

/* 
 ボタン二度押し制御
 */
function blockDoubleSubmit(formName){
  with (formName) {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
      links[i].removeAttribute('href');
    }
    submit();
  }
}

/* 
 JavaScript テキストエリアの入力文字数を制限する
 ※文字数をカットしたことをアノテーションで知らせるために、
   10001文字までを許可する(Lengthチェックの最大が10000文字)
 */
function checkLength(id){
//10.1.1 10008 修正 ここから
//　nMaxLength = 10001; //表示する最大文字数
//　strTemp = $(id).value;
//　nLength = strTemp.length;
//　if (nLength > nMaxLength){
//　　$(id).value = strTemp.substring(0, nMaxLength);
//　}
  nMaxLength = 10001; //表示する最大文字数
  strTemp = $(id).value;
  nLength = strTemp.length;
  if (nLength > nMaxLength){
    $(id).value = strTemp.substring(0, nMaxLength);
  }
//10.1.1 10008 修正 ここまで
}

//QPACEC ADD START IN 2010/07/21
/* 
JavaScript テキストエリアの入力文字数を制限する
*/
function checkLengthAdd(id ,nMaxLength){
 strTemp = $(id).value;
 nLength = strTemp.length;
 if (nLength > nMaxLength){
   $(id).value = strTemp.substring(0, nMaxLength);
 }
}
function gotoUpdateQuantity(shopcode,commodity,value){
  //location.href = "javascript:with(document.forms['main']){method='post';action='"+act+"/"+shopcode+"/"+commodity+"/"+value+"';"+xscript+"}";	
  var path = '/front/app/cart/cart/update_quantity/' + "/" + shopcode + "/" + commodity + "/" + value;
  location.href = "javascript:with(document.forms[0]){method='post';action='" + path + "';javascript:void(0);submit()}";
}
function gotoUpadateCourse(shopcode,commodity,sendcourse){
  //location.href = "javascript:with(document.forms[0]){method='post';action='/front/app/cart/cart/update_course/"+shopcode+"/"+commodity+"/"+sendcourse+"';javascript:void(0);submit()}";
  var path = '/front/app/cart/cart/update_course/' + shopcode + "/" + commodity + "/" + sendcourse;
  //document.forms["main"].action = path;
  //document.forms["main"].submit();
  location.href = "javascript:with(document.forms[0]){method='post';action='" + path + "';javascript:void(0);submit()}";
}
function gotoUpdateRegQuantity(commodity,value){
	  //location.href = "javascript:with(document.forms['main']){method='post';action='"+act+"/"+shopcode+"/"+commodity+"/"+value+"';"+xscript+"}";	
	  var path = '/front/app/mypage/regularly_detail/change/' + commodity + "/" + value;
	  location.href = "javascript:with(document.forms[0]){method='post';action='" + path + "';javascript:void(0);submit()}";
}
//QPACEC ADD END IN 2010/07/21
//QPACEC 2014/02/12 ADD STA 消費税対応
function gotoUpdateRegHassoYmd(commodity){
	  var path = '/front/app/mypage/regularly_detail/change/' + commodity;
	  location.href = "javascript:with(document.forms[0]){method='post';action='" + path + "';javascript:void(0);submit()}";
}
//QPACEC 2014/02/12 ADD END 消費税対応


//QPACEC ADD START IN 2010/10/26
function gotoUpadateCourseAdd(shopcode,commodity,sendcourse,sofuno){
	  var path = '/front/app/order/shipping_mult/change_course/' + shopcode + "/" + commodity + "/" + sendcourse + "/" + sofuno;
	  location.href = "javascript:with(document.forms[0]){method='post';action='" + path + "';javascript:void(0);submit()}";
}
function gotoUpdateQuantityAdd(shopcode,commodity,value,sofuno){
	  var path = '/front/app/order/shipping_mult/change_quantity/' + "/" + shopcode + "/" + commodity + "/" + value + "/" + sofuno;
	  location.href = "javascript:with(document.forms[0]){method='post';action='" + path + "';javascript:void(0);submit()}";
}
//QPACEC ADD END IN 2010/10/26
function dspcommodityList(){ 
  var qu=document.getElementById( "quantity").value;
  document.getElementById("quantity0").value = qu;
  changequantity('0');
  location.href = "#customer";
} 
