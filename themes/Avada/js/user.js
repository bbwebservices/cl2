(function ($, root, undefined) {
	// console.log('working')
	$(function () {		
	'use strict';

		var formCol = $('.formHider2');

		formCol.css("overflow","hidden");
		formCol.height(0);

		var buttonShow = $('.labelsButton');


		function fHeight(){
			var formHeight = $('.form-label-page_wrapper').height() + 50;
			return formHeight;
		}

		$(window).resize(function(){
		    fHeight();
		});		


		$(document).ready(function(){
			$('.tp-leftarrow').click(function(e){
				e.preventDefault();
				console.log(window.location.pathname)
				if (window.location.pathname == '/labels/'){
					window.location.href = '/design/'				
				}
				else if (window.location.pathname == '/design/'){
					window.location.href = '/printers/'
				}
				else if (window.location.pathname == '/printers/'){
					window.location.href = '/labels/'
				}
			});

				
			$('.tp-rightarrow').click(function(e){
				e.preventDefault();
				if (window.location.pathname == '/labels/'){
					window.location.href = '/printers/'			
				}
				else if (window.location.pathname == '/design/'){
					window.location.href = '/labels/'
				}
				else if (window.location.pathname == '/printers/'){
					window.location.href = '/design/'	
				}	
			});	
			

			// $('.headerIcon img').each(function(e){
			// 	var imgSrc = $(this).attr("src");
			// 	var title = $(this).parent().parent().find("h2.designTitle")[0].innerHTML;
			// 		console.log(imgSrc)
			// 		console.log(title)

			// 	$('.formImg:eq(' + e + ')').css({"background-image": "url("+imgSrc+") no-repeat center","background": "url("+imgSrc+") no-repeat center", "background-size":"60%"}).prepend("<h3 style='text-align:center;'>"+title+"</h3>");
			// })

			$('.labelsButton').click(function(e){
				$('.headerIcon img').each(function(e){
					var imgSrc = $(this).attr("src");
					var title = $(this).parent().parent().find("h2.designTitle")[0].innerHTML;
					$('.formImg:eq(' + e + ')').css({"background-image": "url("+imgSrc+") no-repeat center","background": "url("+imgSrc+") no-repeat center", "background-size":"60%"}).prepend("<h3 style='text-align:center;'>"+title+"</h3>");
				})
			})

			$('.formImg').click(function(){

				if($(this).hasClass('formBgSelect')){
					$(this).removeClass('formBgSelect');
				} else {
					$(this).addClass('formBgSelect');
				}
			})

		});
			

		buttonShow.click(function(){
			$(this).animate({"opacity": "0"}, 500,"swing", function(){
				$(this).remove();
			})
			if($(this).parents().find(".formHider2").hasClass("formOpen")){
				closeForm($(this).parents().find(".formHider2"));
			}else{
				openForm($(this).parents().find(".formHider2"));

			}
		});

		function openForm(arr){
			arr.addClass("formOpen");
			arr.animate({"height":fHeight()}, 1000);
		}

		function closeForm(arr){
			arr.removeClass("formOpen");
			arr.animate({"height":"0px"}, 1000);
		}

	});
	
})(jQuery, this);
