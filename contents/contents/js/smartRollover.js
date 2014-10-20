function smartRollover() {
	if(document.getElementsByTagName) {
		
		var current = new RegExp(/^$/i);
		var url = location.pathname;
		
		if ( url.match(/^\/front\/contents\/$/) || url.match(/^\/front\/contents\/top/)) {
			current=/\/top/;
		}else if (url.match(/\/front\/contents\/aojiru/)) {
			current=/\/aojiru/;
		} else if (url.match(/\/front\/contents\/freeze-aojiru/)) {
			current=/\/freeze-aojiru/;
		} else if (url.match(/\/front\/contents\/hc/)) {
			current=/\/hc/;
		} else if (url.match(/\/front\/contents\/cora-rich/)) {
			current=/\/cora-rich/;
		} else if (url.match(/\/front\/contents\/cola-rich/)) {
			current=/\/cora-rich/;
		} else if (url.match(/\/front\/contents\/products/)) {
			current=/\/products/;
		} else if (url.match(/\/front\/contents\/faq/)) {
			current=/\/faq/;
		} else if ( url.match(/^\/$/) ){
			current=/\/top/;
		}

		var images = document.getElementsByTagName("img");

		for(var i=0; i < images.length; i++) {
			var anchor = images[i].parentNode; 
			if (anchor && images[i].getAttribute("src").match("gNavi") && anchor.getAttribute("href").match(current)) {
				images[i].setAttribute("src", images[i].getAttribute("src").replace("_off.", "_on."));
				continue;
			}
			if(images[i].getAttribute("src").match("_off."))
			{
				images[i].onmouseover = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
					this.setAttribute("src", this.getAttribute("src").replace("_ac.", "_on."));
				}
				images[i].onmousedown = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_ac."));
					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_ac."));
				}
				images[i].onmouseup = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_ac.", "_on."));
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_on."));
				}
				images[i].onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
					this.setAttribute("src", this.getAttribute("src").replace("_ac.", "_off."));
				}
			}
		}
	}
}

if(window.addEventListener) {
	window.addEventListener("load", smartRollover, false);
}
else if(window.attachEvent) {
	window.attachEvent("onload", smartRollover);
}