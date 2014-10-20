var joint_url = 'http://m.kyusai.co.jp/front/app/catalog/detail/addcart?';

function load(){

	var get = getRequest();

	if ( !get || !get['wflag'] || get['wflag'] == "" ) {
		return;
	}

	var a_href;
	var oElements = document.getElementsByTagName("a");

	for (var i=0; i<oElements.length; i++){

		a_href = oElements[i].href;

		if ( a_href.indexOf( joint_url ) > -1 ) {
			oElements[i].href = a_href + '&wflag=' + get['wflag'];
		}

	}

}

function getRequest(){
	if(location.search.length > 1) {
		var get = new Object();
		var ret = location.search.substr(1).split("&");
		for(var i = 0; i < ret.length; i++) {
			var r = ret[i].split("=");
			get[r[0]] = r[1];
		}
		return get;
	} else {
		return false;
	}
}
