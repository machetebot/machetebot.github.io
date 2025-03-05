/*
 * Version: 1.0.0
 * Author: Vidvan
 * Date: 2020-03-30
 * 
 * */
(function($) {
	$.fn.autoscroll = function(options) {
		var settings = $.extend({}, $.fn.autoscroll.defaults, options);
		return this.each(function() {
			var $this = $(this);
			if ($this.length > 0 &&
				$this[0].scrollHeight > $this[0].clientHeight) {
				var scrollTimer,
					scrollTop = 0;

				function scrollList() {
					var itemHeight = $this.children().eq(1).outerHeight(true); // 取第二个高度防止第一个没有上间距
					scrollTop++;
					if (scrollTop >= itemHeight) {
						$this.scrollTop(0).children().eq(0).appendTo($this);
						scrollTop = 0;
					} else {
						$this.scrollTop(scrollTop);
					}
				}
				// 鼠标悬停时停止播放
				$this.hover(function() {
					clearInterval(scrollTimer);
					$this.css("overflow-y", "auto");
					if (settings.hideScrollbar) {
						$this.addClass("hide-scrollbar");
					}
					if($.type(settings.handlerIn) === "function") {
						settings.handlerIn();
					}
				}, function() {
					$this.css("overflow-y", "hidden");
					scrollTimer = setInterval(function() {
						scrollList();
					}, settings.interval);
					if($.type(settings.handlerOut) === "function") {
						settings.handlerOut();
					}
				}).trigger("mouseleave");
			}
		});
	}
	$.fn.autoscroll.defaults = {
		interval: 50, // 控制速度
		hideScrollbar: true, // 隐藏滚动条但可以滚动
		handlerIn: null, // 鼠标悬停
		handlerOut: null // 鼠标离开

	};
	$(function() {
		// 需在目标元素上添加data-autoscroll
		$("[data-autoscroll]").autoscroll();
	});
})(jQuery);
