/* 
 削除確認
 */
function confirmDelete(){
  if (window.confirm("削除しますか？")) {
    return true;
  } else {
    return false;
  }
}

/* 
 顧客退会
 */
function confirmWithdrawalRequest() {
  if(window.confirm("退会依頼後は、ログインを行うことができなくなります。\n退会を申し込みますか？")){
    return true;
  } else {
    return false;
  }
}

/* 
 注文キャンセル
 */
function confirmCancelOrder() {
  if(window.confirm("注文をキャンセルしてもよろしいですか？")){
    return true;
  } else {
    return false;
  }
}
function setOpenerToken(){
  token = document.getElementsByName("transactionToken").item(0).value;
  window.opener.document.forms[0].transactionToken.value = token;
}