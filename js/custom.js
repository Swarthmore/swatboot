(function ($) {
	$(document).ready(function(){
		$("ul.nav li.dropdown").hover(function(){
			if ($("span.collapsed-caret:hidden", this).length){
				$('.dropdown-menu', this).fadeIn();
			} else {
				$('.dropdown-menu', this).css("display", ""); //remove inline css so click event will work when collapsed
			}
		}, function(){
			if ($("span.collapsed-caret:hidden", this).length){
				$('.dropdown-menu', this).fadeOut('fast');
			}
		});
	});
})(jQuery);