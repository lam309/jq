if(window.jQuery == undefined){
	var jq = document.createElement('script');
	jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
	document.getElementsByTagName('head')[0].appendChild(jq);
}
setTimeout(function(){
	var myWidth = $(window).width();
	var myHeight = $(window).height()-100;
	var html = "<div id='myFloater' style='width:200px;height:50px;background-color:grey;position:fixed;'></div>"
    $("body").append(html);
	$('#myFloater').css('top', $(window).height()-50);
	$('#myFloater').css('left', $(window).width()-200);
	$('#myFloater').css('opacity', '.75');
	$('#myFloater').css('padding', '10px 10px 10px 10px');
	$('#myFloater').css('z-index', '99 !important');
	
	
	var r = $('<input id="leftButton" type="button" value="left button"/>');
    $("#myFloater").append(r);
	
	$("#leftButton").click(function(){
		alert("left button clicked");
		linkedin();
	});
	
	var r = $('<input id="rightButton" type="button" value="right button"/>');
    $("#myFloater").append(r);
	
	$("#rightButton").click(function(){
		var p = prompt("Please enter input","")
		alert("right button clicked\n you entered:"+p);
	});
	
	$(window).resize(function() {
		$('#myFloater').css('top', $(window).height()-50);
		$('#myFloater').css('left', $(window).width()-200);
	})
	

},1000);

function what(){
	prompt("Plese input info","hfjkdhajkfdhj");
};

function linkedin(){
	$("#advocate-modal").remove();
	$("body").css('overflow','visible');
}