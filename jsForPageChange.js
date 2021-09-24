var elm = document.getElementById('test_line');    

// パラメータの取得
var param = location.search.substring(1);
if(location.search.substring(1).indexOf('url=') > 0)
{
      param = param.substring(param.indexOf('='));
      // パラメータの使用
      var elm = document.getElementById('test_line');    
      elm.textContent = param;

      var repUrl = param;
      repUrl = repUrl.replace("watch?v=", "embed/");
      repUrl = repUrl.replace("&feature=share", "");
      var iframeElm = document.getElementById('InjectionIframe');    
      iframeElm.src = repUrl;
}
