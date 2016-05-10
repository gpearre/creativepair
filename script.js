function postContactFormSubmission (){
	if (document.location.hash === "#complete"){
		alert("Thank you.\n\nWe've gotten your request and you will hear from us shortly.");
	}
}

$(document).ready(function() {
	$('#h_menu li').mouseover(function() {
		$(this).css('background-color', '#f9e71f');
	});
	$('#h_menu li').mouseleave(function() {
		$(this).css('background-color', '#333333');
	});
});
