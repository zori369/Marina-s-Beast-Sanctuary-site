$(document).ready(function(){
	$('.menu__item>img').on('click', function(e){
		console.log('hi');
		$(this).next().toggleClass('flag');
		$(this).parent().toggleClass('flag');
	});	
});
