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

		formCol.css("overflow","hidden");
		formCol.height(0);

		var buttonShow = $('.labelsButton');


		buttonShow.click(function(){
			console.log('woo');

			if($(this).siblings(".formHider").hasClass("formOpen")){
				closeForm($(this).siblings(".formHider"));
			}else{
				openForm($(this).siblings(".formHider"));
			}
		});

		function openForm(arr){
			arr.addClass("formOpen");
			arr.animate({"height":"250px"});
		}

		function closeForm(arr){
			arr.removeClass("formOpen");
			arr.animate({"height":"0px"});
		}

	});
	
})(jQuery, this);
