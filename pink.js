function pink_startup() {
	timer = 0;
	counter = 0;
	activityValue = 250;
	setInterval(event_loop, 200);
	console.log('Started');
}

function event_loop(){
	 stmt_topLeft = document.getElementById("stmtCont_topLeft");
	 stmt_topCenter = document.getElementById("stmtCont_topCenter");
	 stmt_topRight = document.getElementById("stmtCont_topRight");
	 
	 stmt_botLeft = document.getElementById("stmtCont_bottLeft");
	 stmt_botCenter = document.getElementById("stmtCont_bottCenter");
	 stmt_botRight = document.getElementById("stmtCont_bottRight");
	 
	 objA = document.getElementById("obj_a");
	objB = document.getElementById("obj_b");

	objC = document.getElementById("obj_c");
	objD = document.getElementById("obj_d");

	objE = document.getElementById("obj_e");
	objF = document.getElementById("obj_f");

	
	timer += 1;
	if(activityValue == 500)
	{
		//final west state	
		changeBackground_west();
		//var stmt_topCenter = document.getElementById("stmtCont_topCenter");
		stmt_topCenter.innerHTML = "Get some more pink...</br> and give it a rest!</br> :)";		
		
		stmt_topLeft.style.visibility = 'hidden';
		stmt_topCenter.style.visibility = 'visible';
		stmt_topRight.style.visibility = 'hidden';
		stmt_botLeft.style.visibility = 'hidden';
		stmt_botCenter.style.visibility = 'hidden';
		stmt_botRight.style.visibility = 'hidden';
		
		return;
	}
	else if(activityValue - 1 >= 0)
		activityValue -= 1;
	else
		activityValue = 0;
		//update marker position:
		markerX = 500-activityValue;
		var marker = document.getElementById('marker');
		marker.setAttribute("x1", markerX);
		marker.setAttribute("x2", markerX);
		console.log(activityValue);
	
	
	if(activityValue > 425){
		$(document).ready(function()
		{
			if(objC.getAttribute('src') == "anim/placeholder.png"){
					objC.setAttribute('src', "anim/objC_color_normal.gif");
			}
			stmt_topLeft.innerHTML = "For us</br>problems are solved through technology.</br>-Thomas Raab";	
			
			stmt_topLeft.style.visibility = 'visible';
			stmt_topCenter.style.visibility = 'hidden';
			stmt_topRight.style.visibility = 'hidden';
			stmt_botLeft.style.visibility = 'hidden';
			stmt_botCenter.style.visibility = 'hidden';
			stmt_botRight.style.visibility = 'hidden';
			
			var snd = new Audio("blop.mp3"); // buffers automatically when created
			snd.play();
		});
	}
	else if(activityValue > 375){
		$(document).ready(function()
		{	
			if(objE.getAttribute('src') == "anim/placeholder.png"){
				objE.setAttribute('src', "anim/objE_rotation_normal.gif");
			}
				
			stmt_botRight.innerHTML = "I would like to “remove”</br>the person who says something to me.</br>-Thomas Raab";	
				
			stmt_topLeft.style.visibility = 'hidden';
			stmt_topCenter.style.visibility = 'hidden';
			stmt_topRight.style.visibility = 'hidden';
			stmt_botLeft.style.visibility = 'hidden';
			stmt_botCenter.style.visibility = 'hidden';
			stmt_botRight.style.visibility = 'visible';
			
			var snd = new Audio("applause.mp3"); // buffers automatically when created
			snd.play();
		});
	}
	else if(activityValue > 325){
		$(document).ready(function()
		{	
			if(objD.getAttribute('src') == "anim/placeholder.png"){
				objD.setAttribute('src', "anim/objD_zentrifugal_normal.gif");
			}
			
			stmt_topRight.innerHTML = "Humanity is acquiring all the right technology</br>for all the wrong reasons.<br>-R. Buckminster Fuller</br>";	
			
			
			stmt_topLeft.style.visibility = 'hidden';
			stmt_topCenter.style.visibility = 'hidden';
			stmt_topRight.style.visibility = 'visible';
			stmt_botLeft.style.visibility = 'hidden';
			stmt_botCenter.style.visibility = 'hidden';
			stmt_botRight.style.visibility = 'hidden';
			
			//stmt_topRight.style.visibility = 'hidden';
			//stmt_topRight.style.color= 'Blue';
			var snd = new Audio("blop.mp3"); // buffers automatically when created
			snd.play();
		});
	}
	else if(activityValue > 250){
		$(document).ready(function()
		{
			//show stmt East01:
			//var stmt_topCenter = document.getElementById("stmtCont_topCenter");
			
			stmt_botCenter.innerHTML = "It has become appallingly obvious</br>that our technology has exceeded our humanity.<br>-Albert Einstein</br>";
			
			stmt_topLeft.style.visibility = 'hidden';
			stmt_topCenter.style.visibility = 'hidden';
			stmt_topRight.style.visibility = 'hidden';
			stmt_botLeft.style.visibility = 'hidden';
			stmt_botCenter.style.visibility = 'visible';
			stmt_botRight.style.visibility = 'hidden';
			
			
			//stmt_topCenter.style.color= 'Red';
			
			if(objB.getAttribute('src') == "anim/placeholder.png"){
				objB.setAttribute('src', "anim/objB_spiral_normal.gif");
			}
		});
	}
	else if(activityValue > 225){
		stmt_topLeft.style.visibility = 'hidden';
			stmt_topCenter.style.visibility = 'hidden';
			stmt_topRight.style.visibility = 'hidden';
			stmt_botLeft.style.visibility = 'hidden';
			stmt_botCenter.style.visibility = 'hidden';
			stmt_botRight.style.visibility = 'hidden';
	}
	else if(activityValue > 175){
		$(document).ready(function()
		{
			stmt_topRight.innerHTML = "The point will come</br>at which there are no more technological fixes.</br>-Thomas Raab";
			
			stmt_topLeft.style.visibility = 'hidden';
			stmt_topCenter.style.visibility = 'hidden';
			stmt_topRight.style.visibility = 'visible';
			stmt_botLeft.style.visibility = 'hidden';
			stmt_botCenter.style.visibility = 'hidden';
			stmt_botRight.style.visibility = 'hidden';
			 
		});
	}	
	else if(activityValue > 125){
		$(document).ready(function()
		{
			
			if(objF.getAttribute('src') == "anim/placeholder.png"){
				objF.setAttribute('src', "anim/objF_pulse_normal.gif");
			}
				
			stmt_botLeft.innerHTML = "Everything has beauty,</br>but not everyone sees it.<br>-Confucius</br>";
			
			//hide stmt East01:
			//var stmt_topCenter = document.getElementById("stmtCont_topCenter");
			//stmt_topCenter.style.visibility = 'hidden';
			//show stmt East03:
			//var stmt_bottCenter = document.getElementById("stmtCont_bottCenter");
			//stmt_botCenter.innerHTML = "statement East03 line 1</br>statement East03 line 2</br>statement East03 line 3";
			
			stmt_topLeft.style.visibility = 'hidden';
			stmt_topCenter.style.visibility = 'hidden';
			stmt_topRight.style.visibility = 'hidden';
			stmt_botLeft.style.visibility = 'visible';
			stmt_botCenter.style.visibility = 'hidden';
			stmt_botRight.style.visibility = 'hidden';

		});
	}	
	else if(activityValue > 75){
		$(document).ready(function()
		{	
		
			stmt_topLeft.innerHTML = "Those who are free of resentful thoughts</br>surely find peace.<br>-Buddha</br>";
			//hide stmt East03:
			//var stmt_bottCenter = document.getElementById("stmtCont_bottCenter");		
			
			stmt_topLeft.style.visibility = 'visible';
			stmt_topCenter.style.visibility = 'hidden';
			stmt_topRight.style.visibility = 'hidden';
			stmt_botLeft.style.visibility = 'hidden';
			stmt_botCenter.style.visibility = 'hidden';
			stmt_botRight.style.visibility = 'hidden';

		});
	}	
	else if(activityValue > 0){
		$(document).ready(function()
		{	
		
			stmt_topRight.innerHTML = "Technological progress has merely provided us</br>with more efficient means for going backwards.</br>-Aldous Huxley, Ends and Means";
			//hide stmt East03:
			//var stmt_bottCenter = document.getElementById("stmtCont_bottCenter");		
			
			stmt_topLeft.style.visibility = 'hidden';
			stmt_topCenter.style.visibility = 'hidden';
			stmt_topRight.style.visibility = 'visible';
			stmt_botLeft.style.visibility = 'hidden';
			stmt_botCenter.style.visibility = 'hidden';
			stmt_botRight.style.visibility = 'hidden';

		});
	}
	else {
		$(document).ready(function()
		{
			
			stmt_botCenter.innerHTML = "Congratulations<br>Today, you found peace and patience</br>to let things go and the world grow.</br>";
			//final east state	
			//change bg
			//changeBackground_east();
			stmt_topLeft.style.visibility = 'hidden';
			stmt_topCenter.style.visibility = 'hidden';
			stmt_topRight.style.visibility = 'hidden';
			stmt_botLeft.style.visibility = 'hidden';
			stmt_botCenter.style.visibility = 'visible';
			stmt_botRight.style.visibility = 'hidden';
			
			changeBackground_east()
		});
	}
}

//Backgroundchanges:
function changeBackground_west() {
	
	$('#backgroundWrapper').css('background', '#FF91AF');	
}

function changeBackground_east() {
	$('#backgroundWrapper').css('background', '#ffffff');	
}


function increase_activity(){
	//counter += 1;
	if(activityValue + 25 < 500)
		activityValue += 25;
	else
		activityValue = 500;
}

function dummy_teardown() {
	console.log('Nothing to do here, move along');
}

//ClickFunctions:

$(document).ready(function()
{
	/*
	$('#obj_a').click(function() {
	//$( this ).css( "background", "yellow" );
	console.log('isssss');
	increase_activity();
	});
	*/
});
$(document).ready(function()
{
	$('#obj_a').click(function(e) {
		//e.preventDefault();
		var objA = document.getElementById("obj_a");
		var objA_src = objA.getAttribute('src');
		if(objA_src == "anim/placeholder.png"){
		}
		else if(objA_src == "anim/objA_ slide_normal.gif"){	
			increase_activity();
			objA.setAttribute('src', "anim/objA_ slide_tapped.gif");
		}
		else {
			increase_activity();
		}
	});
});

$(document).ready(function()
{	//Testbutton for Statement Change:
	$('#StmtChangeTest').click(function() {
	var stmt_topLeft = document.getElementById("stmtCont_topLeft");
	stmt_topLeft.innerHTML = "statement line 1 changed!</br>statement line 2 changed!</br>statement line 3 changed!";
	});
});
$(document).ready(function()
{
	$('#obj_b').click(function() {
		var objB = document.getElementById("obj_b");
		var objB_src = objB.getAttribute('src');
		if(objB_src == "anim/placeholder.png"){
		}
		else if(objB_src == "anim/objB_spiral_normal.gif"){	
			increase_activity();
			objB.setAttribute('src', "anim/objB_spiral_tapped.gif");
		}
		else {
			increase_activity();
		}
	});

});
$(document).ready(function()
{
	$('#obj_c').click(function() {
		var objC = document.getElementById("obj_c");
		var objC_src = objC.getAttribute('src');
		if(objC_src == "anim/placeholder.png"){
		}
		else if(objC_src == "anim/objC_spiral_normal.gif"){	
			increase_activity();
			objC.setAttribute('src', "anim/objC_spiral_tapped.gif");
		}
		else {
			increase_activity();
		}
	});

});
$(document).ready(function()
{	
	$('#obj_d').click(function() {
		var objD = document.getElementById("obj_d");
		var objD_src = objD.getAttribute('src');
		if(objD_src == "anim/placeholder.png"){
		}
		else if(objD_src == "anim/objD_zentrifugal_normal.gif"){	
			increase_activity();
			objD.setAttribute('src', "anim/objD_zentrifugal_tapped.gif");
		}
		else {
			increase_activity();
		}
	});
		
});
$(document).ready(function()
{
	$('#obj_e').click(function() {
		var objE = document.getElementById("obj_e");
		var objE_src = objE.getAttribute('src');
		if(objE_src == "anim/placeholder.png"){
		}
		else if(objE_src == "anim/objE_rotation_normal.gif"){	
			increase_activity();
			objE.setAttribute('src', "anim/objE_rotation_tapped.gif");
		}
		else {
			increase_activity();
		}
	});

});
$(document).ready(function()
{
	$('#obj_f').click(function() {
		var objF = document.getElementById("obj_f");
		var objF_src = objF.getAttribute('src');
		if(objF_src == "anim/placeholder.png"){
		}
		else if(objF_src == "anim/objF_pulse_normal.gif"){	
			increase_activity();
			objF.setAttribute('src', "anim/objF_pulse_tapped.gif");
		}
		else {
			increase_activity();
		}
	});

});

$(document).ready(function()
{
	
	$('#wrapper').click(function(e) {
		//alert(e.pageX + ' , ' + e.pageY);
		/* var newImg = document.createElement("img");
		newImg.width = '35';
		newImg.height = '35';
		newImg.setAttribute('id', "newImg");
		newImg.setAttribute('src', "anim/objE_rotation_tapped.gif"); */
		var snd = new Audio("blop.mp3"); // buffers automatically when created
			snd.play();
		
		$('#wrapper').append($('<img>', {			
		src : "anim/objE_rotation_tapped.gif",
		id : "newImg",
		width : 35, 
		height : 35, 
		alt : "Test Image", 
		title : "Test Image"
		}).css({
        position: "absolute",
        top: (e.pageY -17)  + "px",
        left:  (e.pageX -17) + "px"
    }));
		
		

	});

});

