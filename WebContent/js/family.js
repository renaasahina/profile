
//タブ作成
$(function(){
	$("#tabs").tabs();
});





//スライドショー設定
function slideSwitch() {
   var $active = $("#slider00 img.active");

   if ( $active.length == 0 ) $active = $("#slider00 img:last");

   var $next =  $active.next().length ? $active.next():$("#slider00 img:first");
   $active.addClass("last-active");
   $next.css({opacity: 0.0})
      .addClass("active")
      .animate({opacity: 1.0}, 1000, function() {
           $active.removeClass("active last-active");
      });
}

//何秒後に写真を変更するかを指定
$(function() {
   setInterval( "slideSwitch()", 2000 );
});


