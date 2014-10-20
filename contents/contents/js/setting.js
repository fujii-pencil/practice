/* ------------------------------
 common
------------------------------ */
// load files
var LDJSF;
if (navigator.userAgent.indexOf("MSIE")!= -1 && navigator.appVersion.indexOf("6.0")!= -1) {//for old ie
	LDJSF = [
		{'src': 'flash.js', 'charset': 'shift_jis', 'defer':''},
		{'src': 'smartRollover.js', 'charset': 'shift_jis', 'defer':''},
		{'src': 'externalLink.js', 'charset': 'UTF-8', 'defer':''},
		{'src': 'heightLine.js', 'charset': 'UTF-8', 'defer':''},
		{'src': 'alphafilter.js', 'charset': 'shift_jis', 'defer':'defer'},
		{'src': 'styleswitcher.js', 'charset': 'UTF-8', 'defer':''}
//QPACEC 2014/5/21 ADD STA サイトリニューアル対応
		,{'src': 'popup.js', 'charset': 'shift_jis', 'defer':''},
		{'src': 'biyoueki-fande.js', 'charset': 'UTF-8', 'defer':''}
//QPACEC 2014/5/21 ADD END サイトリニューアル対応
	];
}
else
{
	LDJSF = [
		{'src': 'flash.js', 'charset': 'shift_jis', 'defer':''},
		{'src': 'smartRollover.js', 'charset': 'shift_jis', 'defer':''},
		{'src': 'externalLink.js', 'charset': 'UTF-8', 'defer':''},
		{'src': 'heightLine.js', 'charset': 'UTF-8', 'defer':''},
		{'src': 'styleswitcher.js', 'charset': 'UTF-8', 'defer':''}
//QPACEC 2014/5/21 ADD STA サイトリニューアル対応
		,{'src': 'popup.js', 'charset': 'shift_jis', 'defer':''},
		{'src': 'biyoueki-fande.js', 'charset': 'UTF-8', 'defer':''}
//QPACEC 2014/5/21 ADD END サイトリニューアル対応
	];
}

/* ------------------------------
 not modify here.
------------------------------ */
var scTag = document.getElementsByTagName('script');
var jsDir = '';
var len = scTag.length;
for(var i = 0; i < len; i++){
	var s = scTag[i];
	if(s.src && s.src.indexOf('setting.js') != -1){
		jsDir = s.src.substring(0,s.src.indexOf('setting.js'));
	}
}

len = LDJSF.length;
for(var i = 0; i < len; i++){
	var defer = '';
	if ( LDJSF[i].defer != '' ){
		defer = 'defer="' + LDJSF[i].defer + '"';
	}
	document.write('<script type="text/javascript" src="' + jsDir + LDJSF[i].src + '" charset="' + LDJSF[i].charset + '" ' + defer + '></script>');
}



































