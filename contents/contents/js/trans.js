new function(){
	function showSpTrans() {
		var agent = navigator.userAgent;
		if ( agent.search(/iPhone/) != -1 ||
		   ( agent.search(/Android/) != -1 && (agent.search(/Opera/) == -1) && (agent.search(/Firefox/) == -1) ) ) {
			document.getElementById('trans1').style.display = 'block';
			document.getElementById('trans2').style.display = 'block';
		} else {
			document.getElementById('trans1').style.display = 'none';
			document.getElementById('trans2').style.display = 'none';
		}
	}
	function addEvent(elm,listener,fn){
		try{
			elm.addEventListener(listener,fn,false);
		}catch(e){
			elm.attachEvent("on"+listener,fn);
		}
	}
	addEvent(window,"load",showSpTrans);
}
