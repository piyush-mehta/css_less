$(document).ready(function(){
    $("#p").click(function(){
		console.log("hiding");
        $("div.div3").hide();
		$("#username").text("Welcome " + $("input#fn")[0].value + " !!");
		$("div#msg").show();
    });
});

