(function ($, root, undefined) {
	console.log('working')
	$(function () {		
	'use strict';

		
	// .hover(function(e){e.preventDefault();console.log('workingg')})

		$('#rev_slider_14_1_wrapper > div.tp-rightarrow.tparrows.default.round').on('click', function (e) {
		    e.preventDefault();
		    alert("hello");
		});

		var formCol = $('.formHider');

		formCol.height(0);

		var buttonShow = $('.labelsButton');

		buttonShow.click(openForm(formCol));

		function openForm(arr){
			arr.animate({"height":"200px"});
		}

	});
	
})(jQuery, this);
