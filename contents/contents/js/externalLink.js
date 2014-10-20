//Open Window

function externalLinks() {
if (!document.getElementsByTagName) return;
var anchors = document.getElementsByTagName("a");
for (var i=0; i<anchors.length; i++) {
var anchor = anchors[i];
if (anchor.getAttribute("href") &&
anchor.getAttribute("rel") == "external")
anchor.target = "_blank";
}
}

//Open Window touroku

if (window.addEventListener) { //for W3C DOM
  window.addEventListener("load", externalLinks, false);
} else if (window.attachEvent) { //for IE
  window.attachEvent("onload", externalLinks);
} else  {
  window.onload = externalLinks;
}

