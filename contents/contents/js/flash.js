// putFlash
var plugin, pluginVer = 0;
var pluginspages = new Array();
pluginspages[0] = "http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"; // English
pluginspages[1] = "http://www.macromedia.com/jp/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"; // Japanese

// check for Flash Player plug-in
// (Equiv: NN3/NN4/Moz/MacIE5+)
plugin = pfFlashPlayerObject();
if (plugin) pluginVer = parseInt(plugin.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split("."));

function pfAltAction(Obj) {
 if (Obj.nonflashSW == 0) {
  pfAltContent(Obj.nonFlashSRC);
 } else if (Obj.nonflashSW == 1) {
  pfRedirection(Obj.nonFlashSRC);
 }
}
function pfRedirection(_url) {
 location.href = _url;
}
function pfAltContent(_content) {
 document.write(_content);
}
function pfFlashPlayerObject() {
 var results = ((navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ?
  navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0);
 return results;
}

function putflash(Obj) {
 if (!Obj.dir) Obj.dir = '';
 if (!Obj.id) Obj.id = 'putflash';
 if (!Obj.requiredVer) Obj.requiredVer = 4;
 if (!Obj.bgcolor) Obj.bgcolor = "#ffffff";
 if (!Obj.quality) Obj.quality = "high";
 if (!Obj.language) Obj.language = 0;
 if (!Obj.macie4exec && Obj.macie4exec != "0") Obj.macie4exec = 0;
 if (!Obj.moz_exec && Obj.moz_exec != "0") Obj.moz_exec = 1;
 if (!Obj.opera_exec && Obj.opera_exec != "0") Obj.opera_exec = 0;
 if (!Obj.nonflashSW && Obj.nonflashSW != "0") Obj.nonflashSW = 0;
 if (!Obj.nonFlashSRC) Obj.nonFlashSRC = "";
 if (!Obj.swLiveConnect) Obj.swLiveConnect = "false";
 if (!Obj.menu) Obj.menu = "false";



 document.open();
 if (Obj.hedSRC) document.write(Obj.hedSRC);
 if (window.opera && Obj.opera_exec == 1 || !window.opera) {
  if (Obj.file && Obj.width && Obj.height && Obj.id) {
   document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + Obj.id + '" width="' + Obj.width + '" height="' + Obj.height + '" name="' + Obj.id + '">');
   document.write('<param name="movie" value="' + Obj.dir + Obj.file + '">');
   document.write('<param name="wmode" value="transparent">');
   document.write('<param name="quality" value="' + Obj.quality + '">');
   document.write('<param name="bgcolor" value="' + Obj.bgcolor + '">');
   document.write('<param name="menu" value="' + Obj.menu + '"' + '>');
   
   if (Obj.salign) document.write('<param name="salign" value="' + Obj.salign + '"' + '>');
   if (Obj.scale) document.write('<param name="scale" value="' + Obj.scale + '"' + '>');
   if ((navigator.appVersion.indexOf('Win',0) != -1 && navigator.appName.indexOf("Microsoft Internet Explorer",0) != -1) && !window.opera && Obj.nonflashSW == 0)
    pfAltContent(Obj.nonFlashSRC);
   if (plugin && pluginVer >= Obj.requiredVer && !((navigator.userAgent.indexOf("Gecko") != -1) && Obj.moz_exec != 1) || (navigator.appVersion.indexOf('Mac',0) != -1 && navigator.appVersion.indexOf('MSIE 4.',0) != -1 && Obj.macie4exec == 1) || (navigator.appVersion.indexOf('Mac',0) != -1 && navigator.appVersion.indexOf('MSIE 3.',0) != -1 && Obj.macie4exec == 1)) {
   document.write('<embed src="' + Obj.dir + Obj.file + '" menu="' + Obj.menu + '" quality="' + Obj.quality + '" swLiveConnect="' + Obj.swLiveConnect + '" bgcolor="' + Obj.bgcolor + '" width="' + Obj.width + '" height="' + Obj.height + '"');
   if (Obj.salign) document.write(' salign="' + Obj.salign + '"');
   if (Obj.scale) document.write(' scale="' + Obj.scale + '"');
   document.write(' type="application/x-shockwave-flash" pluginspage="' + pluginspages[Obj.language] + '" name="' + Obj.id + '"><\/embed><br />');
   } else {
    if (!(navigator.appVersion.indexOf('Win',0) != -1 && navigator.appName.indexOf("Microsoft Internet Explorer",0) != -1 && !window.opera)) {
     pfAltAction(Obj);
    }
   }
   document.write('<\/object>');
  }
 } else {
  pfAltAction(Obj);
 }
 if (Obj.fotSRC) document.write(Obj.fotSRC);
 document.close();
}


