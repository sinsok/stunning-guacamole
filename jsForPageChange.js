var elm = document.getElementById('test_line');    

// パラメータの取得
var param = location.search.substring(1);
param = param.substring(param.indexOf('=') + 1);

if(param.length > 0 )
{
	// パラメータの使用
	var elm = document.getElementById('test_line');    
	var repUrl = param;

	//プレイリストのキーワード「list=」で区切る
	var splitAarray = param.split('list=');

	//キーワードが一つでも含まれている場合
	if(splitAarray.length > 0)
	{
		//プレイリストの処理
		repUrl = 'https://www.youtube.com/embed/videoseries?list=' + splitAarray[1];
		elm.textContent = param + '(プレイリスト)';
	}
	else
	{
		//動画の処理
		repUrl = repUrl.replace("watch?v=", "embed/");
		repUrl = repUrl.replace("&feature=share", "");
		elm.textContent = param + '(動画)';
	}

	var iframeElm = document.getElementById('InjectionIframe');    
	iframeElm.src = repUrl;
}
