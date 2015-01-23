$(document).ready(function(){

	//var hc = new HomeController();
	//var av = new AccountValidator();

	$.ajax({
		url: "/github",
		type: "POST",
	}).done(function(){
		//console.log('Successful clone');
	})
	.fail(function(){
		//console.log('error');
	})
	.always(function(){
		//console.log('complete');
	});
});