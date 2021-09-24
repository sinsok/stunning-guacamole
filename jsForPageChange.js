var elm = document.getElementById('test_line');    

// パラメータの取得
var params = [];
var param = location.search.substring(1);
if(param !== '') {
    param = param.split('&');
}
for(var i = 0; i < param.length; i++) {
    params[i] = param[i].substring(param[i].indexOf('='));
}
 

// パラメータの使用
var target = 'url'
for(var i = 0; i < params.length; i++) {
    if(params[i][0] == target) {
        var elm = document.getElementById('test_line');    
        elm.textContent = params[i][1];
      
        var repUrl = params[i][1];
        repUrl = repUrl.replace("watch?v=", "embed/");
        repUrl = repUrl.replace("&feature=share", "");
        var iframeElm = document.getElementById('InjectionIframe');    
        iframeElm.src = repUrl;
    }
}
