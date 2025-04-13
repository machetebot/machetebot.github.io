var pl = parseInt($(".formctr").css('padding-left'));
var pr = parseInt($(".formctr").css('padding-right'));
function scrolltoform() {
	thisel = $('form').find('*').filter(":input[type='text']");
	thisoff = thisel.offset().top - 50;
	if($(window).scrollTop() > thisoff || $(window).scrollTop() + $(window).height() < thisoff + 150) $(window).scrollTop(thisoff);
	thisel.addClass('highlightnow');
}
function rsz(){
		if(llcv_i == "kohym"){
			// $('div').css('font-size', '55px');
			// $('article').css('font-size', 'inherit');
			// $('article p, article a').css('font-size', '55px');
  // $('div').each(function() {
    // var fontSize = $(this).css('font-size');
    // $(this).append(' (Font size: ' + fontSize + ')');
  // });
		}
		var w = $(".contentBackground").outerWidth();
		
		if($(window).width() <= w/1.5){
			$(".colCtn").width("100%");
			$(".colCtn3").width("100%");
			$(".colCtn4").width("100%");
			$(".colCtn6").width("100%");
			$(".colCtn").css("transform","scale(2)");
			$(".colCtn3").css("transform","scale(3)");
			$(".colCtn4").css("transform","scale(2.5)");
			$(".colCtn6").css("transform","scale(1.666666)");
			$(".colCtn").each(function() {
				$(this).css("min-height",0);
				$(this).css("min-height",parseInt($(this).outerHeight(),10) * 2);
			});
			$(".colCtn3").each(function() {
				$(this).css("min-height",0);
				$(this).css("min-height",parseInt($(this).outerHeight(),10) * 3);
			});
			$(".colCtn4").each(function() {
				$(this).css("min-height",0);
				$(this).css("min-height",parseInt($(this).outerHeight(),10) * 2.5);
			});
			$(".colCtn6").each(function() {
				$(this).css("min-height",0);
				$(this).css("min-height",parseInt($(this).outerHeight(),10) * 1.6666667);
			});
			// if(llver == 2){
				// whalf = w/2;
				// document.querySelectorAll('.colCtn .elemDrp, .colCtn3 .elemDrp, .colCtn4 .elemDrp, .colCtn6 .elemDrp').forEach(el => el.style.marginLeft = 'calc(50% - '+whalf+'px)');
			// }
		}else{
			$(".colCtn").width("50%").css("transform","scale(1)").css("min-height","auto");
			$(".colCtn3").width("33.333333%").css("transform","scale(1)").css("min-height","auto");
			$(".colCtn4").width("40%").css("transform","scale(1)").css("min-height","auto");
			$(".colCtn6").width("60%").css("transform","scale(1)").css("min-height","auto");
			//$(".colCtn").css("transform","scale(1)");
			//$(".colCtn").css("min-height","auto");
			// if(llver == 2){
				// whalf = w/4;
				// document.querySelectorAll('.colCtn .elemDrp').forEach(el => el.style.marginLeft = 'calc(50% - '+whalf+'px)');
				// whalf = w/6;
				// document.querySelectorAll('.colCtn3 .elemDrp').forEach(el => el.style.marginLeft = 'calc(50% - '+whalf+'px)');
				// whalf = w/5;
				// document.querySelectorAll('.colCtn4 .elemDrp').forEach(el => el.style.marginLeft = 'calc(50% - '+whalf+'px)');
				// whalf = w/10*3;
				// document.querySelectorAll('.colCtn6 .elemDrp').forEach(el => el.style.marginLeft = 'calc(50% - '+whalf+'px)');
			// }
		}
		
		thispl = pl;
		thispr = pr;
		if($(window).width() <= w/1.2){
			thispl = 0;
			thispr = 0;
			$(".formctr").css("padding-left", "0");
			$(".formctr").css("padding-right", "0");
		}
		var wp = w+thispl+thispr;

		var h = $(".contentBackground").outerHeight(true);
		var hn = h;		
		
		if($(window).width()* 0.95 < wp){
			wn = $(window).width() * 0.95;
			var r = wn/wp;		
			$(".contentBackground")[0].style.transform = "scale("+r+")";
			if ($(".ctnPp")[0]){
				hn = r * (h + 800) + 10;
				$("form")[0].style.height = hn + 'px';
			} else {
				hn = r * h + 100;
				$("form")[0].style.height = hn + 'px';
			}
			woffset = (($(window).width() - wn) / (2)) ;
			if(woffset < 0) woffset = 0;
			$(".contentBackground").css("margin-left", woffset);
			newleft = thispl * r;
			newright = thispr * r;
			$(".formctr").css("padding-left", newleft+"px");
			$(".formctr").css("padding-right", newright+"px");
		}else{
			$(".contentBackground")[0].style.transform = "scale(1)";
			$("form")[0].style.height = "auto";
			$(".contentBackground").css("margin-left", "auto");
		}
}
var ytcount=1;
var ytplayer = [];
function onYouTubeIframeAPIReady() {
	$('.elemCtn iframe[src*="youtube.com"]').each(function() {
	console.log("-----------------");
	console.log($(this).attr('src'));
		if($(this).attr('src').indexOf("enablejsapi=1") !== -1 && $(this).attr('src').indexOf("mute=1") !== -1 && $(this).attr('llclickoff') != 1){
			$(this).attr('id', 'yt'+ytcount);
			$( "<div class='yt-handle' data-ytcount='"+ytcount+"' onclick='ytplayer["+ytcount+"].unMute();$(this).hide();'><div>Click To On Sound <svg xmlns='http://www.w3.org/2000/svg' style='width: 18px; height: 22px; fill: rgb(255, 255, 255);' preserveAspectRatio='none' viewBox='0 0 750 750'><g transform='translate(0.000000,750.000000) scale(0.100000,-0.100000)' fill='#ffffff' stroke='none'><path d='M3852 6357 c-40 -12 -51 -22 -967 -816 l-750 -650 -781 -1 c-881 0 -849 3 -927 -73 -82 -80 -77 -12 -77 -1132 0 -1115 -4 -1051 75 -1130 77 -78 41 -75 910 -75 l772 0 844 -730 c464 -402 862 -739 885 -750 48 -24 148 -27 198 -6 46 19 104 72 129 120 l22 41 3 2495 c2 2747 7 2554 -59 2634 -61 73 -179 105 -277 73z'></path> <path d='M6071 6333 c-59 -21 -124 -87 -144 -148 -36 -104 -17 -168 87 -304 413 -540 658 -1157 731 -1838 21 -195 21 -550 0 -746 -72 -677 -321 -1302 -731 -1838 -41 -53 -81 -115 -89 -139 -68 -192 122 -383 314 -315 67 23 93 47 184 167 444 591 708 1235 809 1978 20 145 23 207 23 520 0 313 -3 375 -23 520 -101 743 -362 1381 -809 1977 -46 61 -96 121 -112 133 -70 49 -159 62 -240 33z'></path><path d='M5421 5683 c-89 -31 -161 -136 -161 -234 0 -58 22 -107 102 -225 321 -471 479 -984 479 -1554 0 -570 -159 -1088 -478 -1553 -41 -59 -81 -126 -89 -149 -67 -191 125 -381 317 -313 68 24 99 55 186 181 300 440 488 948 548 1484 20 176 20 524 0 700 -50 440 -183 857 -397 1240 -89 159 -223 355 -263 386 -69 52 -161 66 -244 37z'></path><path d='M4711 4973 c-97 -34 -169 -149 -159 -253 5 -51 13 -67 102 -225 286 -506 286 -1144 0 -1650 -31 -55 -66 -117 -77 -139 -47 -89 -27 -206 48 -281 97 -98 253 -98 349 -1 51 51 154 234 218 384 241 569 234 1201 -19 1767 -64 144 -156 301 -204 346 -66 64 -167 84 -258 52z'></path></g></svg></div></div>" ).insertBefore($(this));
			ytplayer[ytcount] = new YT.Player('yt'+ytcount);
			ytcount++;
		}
	});
}
$('.elemCtn iframe[src*="vimeo.com"]').each(function() {
	console.log("-----------------");
	console.log($(this).attr('src'));
	if($(this).attr('src').indexOf("muted=1") !== -1 && $(this).attr('llclickoff') != 1){
		$(this).attr('id', 'yt'+ytcount);
		$( "<div class='yt-handle' data-ytcount='"+ytcount+"' onclick='ytplayer["+ytcount+"].setMuted(0);$(this).hide();'><div>Click To On Sound <svg xmlns='http://www.w3.org/2000/svg' style='width: 18px; height: 22px; fill: rgb(255, 255, 255);' preserveAspectRatio='none' viewBox='0 0 750 750'><g transform='translate(0.000000,750.000000) scale(0.100000,-0.100000)' fill='#ffffff' stroke='none'><path d='M3852 6357 c-40 -12 -51 -22 -967 -816 l-750 -650 -781 -1 c-881 0 -849 3 -927 -73 -82 -80 -77 -12 -77 -1132 0 -1115 -4 -1051 75 -1130 77 -78 41 -75 910 -75 l772 0 844 -730 c464 -402 862 -739 885 -750 48 -24 148 -27 198 -6 46 19 104 72 129 120 l22 41 3 2495 c2 2747 7 2554 -59 2634 -61 73 -179 105 -277 73z'></path> <path d='M6071 6333 c-59 -21 -124 -87 -144 -148 -36 -104 -17 -168 87 -304 413 -540 658 -1157 731 -1838 21 -195 21 -550 0 -746 -72 -677 -321 -1302 -731 -1838 -41 -53 -81 -115 -89 -139 -68 -192 122 -383 314 -315 67 23 93 47 184 167 444 591 708 1235 809 1978 20 145 23 207 23 520 0 313 -3 375 -23 520 -101 743 -362 1381 -809 1977 -46 61 -96 121 -112 133 -70 49 -159 62 -240 33z'></path><path d='M5421 5683 c-89 -31 -161 -136 -161 -234 0 -58 22 -107 102 -225 321 -471 479 -984 479 -1554 0 -570 -159 -1088 -478 -1553 -41 -59 -81 -126 -89 -149 -67 -191 125 -381 317 -313 68 24 99 55 186 181 300 440 488 948 548 1484 20 176 20 524 0 700 -50 440 -183 857 -397 1240 -89 159 -223 355 -263 386 -69 52 -161 66 -244 37z'></path><path d='M4711 4973 c-97 -34 -169 -149 -159 -253 5 -51 13 -67 102 -225 286 -506 286 -1144 0 -1650 -31 -55 -66 -117 -77 -139 -47 -89 -27 -206 48 -281 97 -98 253 -98 349 -1 51 51 154 234 218 384 241 569 234 1201 -19 1767 -64 144 -156 301 -204 346 -66 64 -167 84 -258 52z'></path></g></svg></div></div>" ).insertBefore($(this));
		ytplayer[ytcount] = new Vimeo.Player('yt'+ytcount);
		ytcount++;
	}
});
$('.elemCtn video').each(function() {
	console.log("-----------------");
	console.log($(this).prop('muted'));
	if($(this).prop('muted') === true && $(this).attr('llclickoff') != 1){
		$(this).attr('id', 'yt'+ytcount);
		$( "<div class='yt-handle' data-ytcount='"+ytcount+"' onclick='ytplayer["+ytcount+"].muted = false;ytplayer["+ytcount+"].volume = 1;$(this).hide();'><div>Click To On Sound <svg xmlns='http://www.w3.org/2000/svg' style='width: 18px; height: 22px; fill: rgb(255, 255, 255);' preserveAspectRatio='none' viewBox='0 0 750 750'><g transform='translate(0.000000,750.000000) scale(0.100000,-0.100000)' fill='#ffffff' stroke='none'><path d='M3852 6357 c-40 -12 -51 -22 -967 -816 l-750 -650 -781 -1 c-881 0 -849 3 -927 -73 -82 -80 -77 -12 -77 -1132 0 -1115 -4 -1051 75 -1130 77 -78 41 -75 910 -75 l772 0 844 -730 c464 -402 862 -739 885 -750 48 -24 148 -27 198 -6 46 19 104 72 129 120 l22 41 3 2495 c2 2747 7 2554 -59 2634 -61 73 -179 105 -277 73z'></path> <path d='M6071 6333 c-59 -21 -124 -87 -144 -148 -36 -104 -17 -168 87 -304 413 -540 658 -1157 731 -1838 21 -195 21 -550 0 -746 -72 -677 -321 -1302 -731 -1838 -41 -53 -81 -115 -89 -139 -68 -192 122 -383 314 -315 67 23 93 47 184 167 444 591 708 1235 809 1978 20 145 23 207 23 520 0 313 -3 375 -23 520 -101 743 -362 1381 -809 1977 -46 61 -96 121 -112 133 -70 49 -159 62 -240 33z'></path><path d='M5421 5683 c-89 -31 -161 -136 -161 -234 0 -58 22 -107 102 -225 321 -471 479 -984 479 -1554 0 -570 -159 -1088 -478 -1553 -41 -59 -81 -126 -89 -149 -67 -191 125 -381 317 -313 68 24 99 55 186 181 300 440 488 948 548 1484 20 176 20 524 0 700 -50 440 -183 857 -397 1240 -89 159 -223 355 -263 386 -69 52 -161 66 -244 37z'></path><path d='M4711 4973 c-97 -34 -169 -149 -159 -253 5 -51 13 -67 102 -225 286 -506 286 -1144 0 -1650 -31 -55 -66 -117 -77 -139 -47 -89 -27 -206 48 -281 97 -98 253 -98 349 -1 51 51 154 234 218 384 241 569 234 1201 -19 1767 -64 144 -156 301 -204 346 -66 64 -167 84 -258 52z'></path></g></svg></div></div>" ).insertBefore($(this));
		ytplayer[ytcount] = $("#yt"+ytcount)[0];
		ytcount++;
	}
});
$(function() {
	setTimeout(function(){ 
		rsz();	
	}, 100);
	setTimeout(function(){ 
		$('body').animate({
			opacity: 1,
		}, 100);
	}, 500);
	setTimeout(function(){ 
		$('.ctnAd').css("opacity",1);
	}, 2000);
	$( window ).resize(function() {
		rsz();
	});
	$("body").on("mouseover touchstart", ".elemCtn[data-ll='fb']", function(){
			$(this).addClass("animate__cancel");
	});
	$("body").on("mouseover touchstart", ".elemCtn[data-ll='fi']", function(){
			$(this).addClass("animate__cancel");
	});
	$("body").on("mouseover touchstart", ".elemCtn[data-ll='c']", function(){
			$(this).addClass("animate__cancel");
	});
	$(".animate__infinite-2").each(function( index ) {
		var that = $(this);
		if (that.hasClass("animate__delay-1s")) sdelay = 1000;
		else if (that.hasClass("animate__delay-2s")) sdelay = 2000;
		else if (that.hasClass("animate__delay-3s")) sdelay = 3000;
		else if (that.hasClass("animate__delay-4s")) sdelay = 4000;
		else if (that.hasClass("animate__delay-5s")) sdelay = 5000;
		else sdelay = 10;
		that.css({"animation-name":"blank","animation-delay":"0s"});
		setTimeout(function() {	
			if(!that.hasClass("animate__animated")) return false;
			that.css({"animation-name":""});
			setInterval(function(){ 
				that.css({"animation-name":"blank","animation-delay":"0s"});
				setTimeout(function() {
						that.css({"animation-name":""});
				}, 10);
			}, 2000);
		}, sdelay);	
	});
	$(".animate__infinite-3").each(function( index ) {
		var that = $(this);
		if (that.hasClass("animate__delay-1s")) sdelay = 1000;
		else if (that.hasClass("animate__delay-2s")) sdelay = 2000;
		else if (that.hasClass("animate__delay-3s")) sdelay = 3000;
		else if (that.hasClass("animate__delay-4s")) sdelay = 4000;
		else if (that.hasClass("animate__delay-5s")) sdelay = 5000;
		else sdelay = 10;
		that.css({"animation-name":"blank","animation-delay":"0s"});
		setTimeout(function() {	
			if(!that.hasClass("animate__animated")) return false;
			that.css({"animation-name":""});
			setInterval(function(){ 
				that.css({"animation-name":"blank","animation-delay":"0s"});
				setTimeout(function() {
						that.css({"animation-name":""});
				}, 10);
			}, 3000);
		}, sdelay);	
	});
	$(".animate__infinite-4").each(function( index ) {
		var that = $(this);
		if (that.hasClass("animate__delay-1s")) sdelay = 1000;
		else if (that.hasClass("animate__delay-2s")) sdelay = 2000;
		else if (that.hasClass("animate__delay-3s")) sdelay = 3000;
		else if (that.hasClass("animate__delay-4s")) sdelay = 4000;
		else if (that.hasClass("animate__delay-5s")) sdelay = 5000;
		else sdelay = 10;
		that.css({"animation-name":"blank","animation-delay":"0s"});
		setTimeout(function() {	
			if(!that.hasClass("animate__animated")) return false;
			that.css({"animation-name":""});
			setInterval(function(){ 
				that.css({"animation-name":"blank","animation-delay":"0s"});
				setTimeout(function() {
						that.css({"animation-name":""});
				}, 10);
			}, 4000);
		}, sdelay);	
	});
	$(".animate__infinite-5").each(function( index ) {
		var that = $(this);
		if (that.hasClass("animate__delay-1s")) sdelay = 1000;
		else if (that.hasClass("animate__delay-2s")) sdelay = 2000;
		else if (that.hasClass("animate__delay-3s")) sdelay = 3000;
		else if (that.hasClass("animate__delay-4s")) sdelay = 4000;
		else if (that.hasClass("animate__delay-5s")) sdelay = 5000;
		else sdelay = 10;
		that.css({"animation-name":"blank","animation-delay":"0s"});
		setTimeout(function() {	
			if(!that.hasClass("animate__animated")) return false;
			that.css({"animation-name":""});
			setInterval(function(){ 
				that.css({"animation-name":"blank","animation-delay":"0s"});
				setTimeout(function() {
						that.css({"animation-name":""});
				}, 10);
			}, 5000);
		}, sdelay);	
	});
	$( "body" ).on( "click", ".highlightnow", function() {
		$(this).removeClass('highlightnow');
	});
});
