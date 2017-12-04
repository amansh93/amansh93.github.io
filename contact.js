$('#personal').click(
		function(){
		if($(this).css('opacity')==1){
			$('#content').slideUp('fast');
			document.getElementById("content").innerHTML="Here are my contact details.Feel free to contact me any time:</br>"+
			"</br>Address:</br>Room no 356,Hall-2</br>"+
			"        IIT Kanpur-208016</br></br>"+
			"Email:</br><ul>"+
			"<li><a href='mailto:amansh@iitk.ac.in'>amansh@iitk.ac.in</a></li></br>"+
			"<li><a href='mailto:amansh4u@gmail.com'>amansh4u@gmail.com</a></li></br>"+
			"<li><a href='mailto:integratedgenius@gmail.com'>integratedgenius@gmail.com</a></li></ul></br></br>"+
			"Phone:(+91)7607456200</br></br>"
			$('#content').slideDown('slow');
		}
	}
);
$('#social').click(

		function(){		
	if($(this).css('opacity')==1){
			$('#content').slideUp('fast');
			document.getElementById("content").innerHTML="You can find me on any of the following social networks:</br>"+
			"<ul style='list-style:none'></br></br>"+
			"<li><a target='_blank' href='https://www.facebook.com/amansh93'><img src='fb.png' /></a></li>"+
			"<li><a target='_blank' href='https://www.github.com/aman-sharma'><img src='github.png'></a></li></ul>";	
			$('#content').slideDown('slow');
		}
	}
);
$('#feedback').click(
	
		function(){
		if($(this).css('opacity')==1){
			$('#content').slideUp('fast');
			document.getElementById("content").innerHTML="Any feedback on me or any of my work would be priceless.Please go ahead</br></br>"+
			"<a><img id='feedback_trigger' style='position:absolute;left:40px;' src='feedback.png'></a>"+
			"<div class='overlay_fb' id='overlay_feedback'>"+
			"<a class='close'></a>"+
			"<form method='post' action='mailform.php'>"+
			"Name:<input type='text' style='position:absolute;left:80px;' name='name' value=''/></br>"+
			"Email:<input type='text' style='position:absolute;left:80px;' name='email' value=''/></br>"+
			"Message:<input type='text' style='position:absolute;left:80px;height:200px;width:300px;' name='message' value='' /></br>"+
			"<button style='position:absolute;left:80px;bottom:10px;height:30px;width:60px;' type='submit' >Submit</button>"+
			"</form>"+
			"</div>";
			$('#content').slideDown('slow');
			$('#feedback_trigger').click(function(){
				$('.overlay_fb').fadeIn('slow');
			});
			$('.overlay_fb .close').click(function(){
				$('.overlay_fb').fadeOut('slow');
			});
		}
	}
);