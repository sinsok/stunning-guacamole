var elm = document.getElementById('test_line');    

// パラメータの取得
var param = location.search.substring(1);
param = param.substring(param.indexOf('='));
// パラメータの使用
var elm = document.getElementById('test_line');    
elm.textContent = param;

var repUrl = param;
repUrl = repUrl.replace("watch?v=", "embed/");
repUrl = repUrl.replace("&feature=share", "");
var iframeElm = document.getElementById('InjectionIframe');    
iframeElm.src = repUrl;
