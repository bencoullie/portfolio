$(function() {
		var headerheight = $(window).height()*60/100;
		console.log("The header height is: " + headerheight);

		var scrollfromtop = $(document).scroll(function() {
    		console.log($(document).scrollTop());
		});
		console.log("The scroll from top is: " + scrollfromtop);


});



// $(function() {
// 	var win         = $(window),
// 	fixed_element   = $('nav'),
// 	element_offset  = fixed_element.offset().top;

// 	win.scroll(function() {
// 	    if (element_offset < win.scrollTop()) {
// 	        fixed_element.addClass("fixed");
// 	    } else {
// 	        fixed_element.removeClass("fixed");
// 	    }
// 	});
// });