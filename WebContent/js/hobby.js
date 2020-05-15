//travelスライドショー設定
function travelslideSwitch() {
	var $active = $("#slider01 img.active");

	if ($active.length == 0)
		$active = $("#slider01 img:last");

	var $next = $active.next().length ? $active.next()
			: $("#slider01 img:first");
	$active.addClass("last-active");
	$next.css({
		opacity : 0.0
	}).addClass("active").animate({
		opacity : 1.0
	}, 1000, function() {
		$active.removeClass("active last-active");
	});
}

//何秒後に写真を変更するかを指定
$(function() {
	setInterval("travelslideSwitch()", 2000);
});


//aquariumスライドショー設定
function aquariumslideSwitch() {
	var $active = $("#slider02 img.active");

	if ($active.length == 0)
		$active = $("#slider02 img:last");

	var $next = $active.next().length ? $active.next()
			: $("#slider02 img:first");
	$active.addClass("last-active");
	$next.css({
		opacity : 0.0
	}).addClass("active").animate({
		opacity : 1.0
	}, 1000, function() {
		$active.removeClass("active last-active");
	});
}

//何秒後に写真を変更するかを指定
$(function() {
	setInterval("aquariumslideSwitch()", 3000);
});



//breadスライドショー設定
function breadslideSwitch() {
	var $active = $("#slider03 img.active");

	if ($active.length == 0)
		$active = $("#slider03 img:last");

	var $next = $active.next().length ? $active.next()
			: $("#slider03 img:first");
	$active.addClass("last-active");
	$next.css({
		opacity : 0.0
	}).addClass("active").animate({
		opacity : 1.0
	}, 1000, function() {
		$active.removeClass("active last-active");
	});
}

//何秒後に写真を変更するかを指定
$(function() {
	setInterval("breadslideSwitch()", 2000);
});


//何秒後に写真を変更するかを指定
$(function() {
	setInterval("breadslideSwitch()", 4000);
});


//cafeスライドショー設定
function cafeslideSwitch() {
	var $active = $("#slider04 img.active");

	if ($active.length == 0)
		$active = $("#slider04 img:last");

	var $next = $active.next().length ? $active.next()
			: $("#slider04 img:first");
	$active.addClass("last-active");
	$next.css({
		opacity : 0.0
	}).addClass("active").animate({
		opacity : 1.0
	}, 1000, function() {
		$active.removeClass("active last-active");
	});
}

//何秒後に写真を変更するかを指定
$(function() {
	setInterval("cafeslideSwitch()", 3000);
});




//cameraスライドショー設定
function cameraslideSwitch() {
	var $active = $("#slider05 img.active");

	if ($active.length == 0)
		$active = $("#slider05 img:last");

	var $next = $active.next().length ? $active.next()
			: $("#slider05 img:first");
	$active.addClass("last-active");
	$next.css({
		opacity : 0.0
	}).addClass("active").animate({
		opacity : 1.0
	}, 1000, function() {
		$active.removeClass("active last-active");
	});
}

//何秒後に写真を変更するかを指定
$(function() {
	setInterval("cameraslideSwitch()", 2000);
});

