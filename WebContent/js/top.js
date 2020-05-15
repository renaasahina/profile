$(function(){
	//リンク付き画像に適応させる
	$("a img").hover(function(){
		//マウスオーバーで透明度を60%にする
		$(this).fadeTo("normal",0.6);
	},function(){
		//マウスアウトで透明度を100%に戻す
		$(this).fadeTo("normal",1.0);
	});
});