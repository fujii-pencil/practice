//現サイト美容液ファンデ（下記URL）のページのスクリプトを参考に改変。
//http://www.kyusai.co.jp/products/foundation.html
//
// 対象の select タグに id を指定して、関数呼び出し時のを指定してください。
// ページ内に複数 select タグがある場合はid名が重複しないようにしてください。
// 例）itemId1、itemId2、.......
//
// ◆使用例（色白肌用、selectタグのidが"itemId"の場合）
// 　今回のみ　　　　　：goCart("itemId");
// 　定期（毎月の場合）：goCart("itemId", 1);
// 　定期（隔月の場合）：goCart("itemId", 2);
// 対象のボタンのリンクに<a href="javascript:goCart("itemId");">〜〜</a>のように記載


function goCart(itemId, teikiFlag) {
	if( document.getElementById(itemId).value != 0 ) {
		var teikiParam = "";
		if (teikiFlag == 1 || teikiFlag == 2) {
			teikiParam = "&courseKbn="+teikiFlag;
		}
		location.href="/front/app/catalog/detail/addcart?commodityCode="+document.getElementById(itemId).value+teikiParam;
	} else {
		alert("色をお選びください");
	}
}

function goCart(itemId2, teikiFlag) {
	if( document.getElementById(itemId2).value != 0 ) {
		var teikiParam = "";
		if (teikiFlag == 1 || teikiFlag == 2) {
			teikiParam = "&courseKbn="+teikiFlag;
		}
		location.href="/front/app/catalog/detail/addcart?commodityCode="+document.getElementById(itemId2).value+teikiParam;
	} else {
		alert("色をお選びください");
	}
}