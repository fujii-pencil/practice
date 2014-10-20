var type;
var num;
var nosiSelFlag;
var maxWrapping = 30;
    
function jsInit() {
	_nosiSetting(true);
}

function jsNosiSelect(obj, num){
	var nosiType = obj.value;
	if(nosiType == 1){
		document.getElementById("nosiUpdt_" + num).disabled = true;
		document.getElementById("nosiDown_"+num).disabled = true;
	} else {
		document.getElementById("nosiUpdt_" + num).disabled = false;
		document.getElementById("nosiDown_"+num).disabled = false;
	}
}
    
function jsSubmit() {
	_nosiSetting(false);
}

function _nosiSetting(nosiSelFlag){
	for(num = 0;num <= maxWrapping; num++){
		var noWrapping = document.getElementById("no-wrapping"+num);
		var noNosi = document.getElementById("no-nosi"+num);
		if(noWrapping){
			if(noWrapping.checked){
				noNosi.value = 1;
				document.getElementById("nosiUpdt_" + num).value = '/0/0';
				document.getElementById("nosiDown_" + num).value = '';
				document.getElementById("nosiUp_" + num).value = '';
      			document.getElementById("nosi_" + num).value = 0;
      			document.getElementById("wrap_" + num).value = 0;
			}
		}
		
		if(noNosi){
			if(noNosi.checked){
				document.getElementById("nosiUpdt_" + num).value = '/0/0';
				document.getElementById("nosiDown_"+num).value = '';
				document.getElementById("nosiUp_" + num).value = '';
				document.getElementById("nosi_" + num).value = 0;
				if(noWrapping.checked == false){
					document.getElementById("wrap_" + num).value = 1;
				}
				if(nosiSelFlag){
					document.getElementById("nosiUpdt_" + num).disabled = true;
					document.getElementById("nosiDown_"+num).disabled = true;
				}
			}
		}
	}
}