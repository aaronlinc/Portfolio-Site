
//main menu
$(document).ready(function() {
	
	$(".dropMenu").hide();

	//Show and hide drop down menu for Main Menu
	$("#mainMenu , .dropMenu").hover(function() {
		$(".dropMenu").stop().fadeToggle(400);
	});

});

//lightbox slide show
$(document).ready(function() {
	
	lightbox.option({
		'resizeDuration':100,
		'wrapAround': true,


	})

});

