$('#me').click(

	function(){
	if($(this).css('opacity')==1){
		$('#content').slideUp('fast');
		document.getElementById("content").innerHTML="Hello Everyone</br>"+
		"My name is <a>Aman Sharma</a>.I am currently an undergraduate at <a>IIT Kanpur</a> in the <a>Computer Science & Engineering Department</a>.</br></br>"+
		"I originally am from New Delhi.I completed my schooling from Delhi Public School,R.K.Puram. "+
		"While growing up,I developed a deep inclination towards technology and an abnormal crush on computer games. "+
		"I am an ardent PS3 fan, which is something I mostly do while at home. "+
		"I am quite indoorsy but I do play Lawn Tennis & Cricket occasionally. </br></br>"+
		"<a id='dad'><u>My dad</u></a> is a petroleum engineer and he works off the coast of Saudi Arabia & "+
		"<a id='mom'><u>my mom</u></a> is a housewife who once used to be a teacher. "+
		"I also have an <a id='bro'><u>elder brother</u></a>.He is a software engineer and he lives in Singapore.</br></br>"+
		"My interests lie embedded deep in the field of logic,computers and mathematics . "+
		"I love listening to music.If you ever catch me alone,there is a 50% chance,I'll be listening to music(mainly heavy metal) . "+
		"Other than that,I love solving puzzles & breaking codes(this accounts for the other 50%) . "+
		"Besides all these,I love travelling places . "+
		"I am quite optimist and God-fearing as well .</br></br>"+
		"All in all,I am a jovial,fun-loving person with the slightest hint of shyness."	
		;	
		$('#content').slideDown('slow');
		$('#dad').click(function(){
			$('#right_sidebar').css('background-image','url(images/dad.jpg)');
			clearTimeout(timer3);
			timer3=null;
			timer3=setInterval(change_background,5000);
		});
		$('#mom').click(function(){
			$('#right_sidebar').css('background-image','url(images/mom.jpg)');
			clearTimeout(timer3);
			timer3=null;
			timer3=setInterval(change_background,5000);
		});
		$('#bro').click(function(){
			$('#right_sidebar').css('background-image','url(images/bro.jpg)');			
			clearTimeout(timer3);
			timer3=null;
			timer3=setInterval(change_background,5000);
		});
	}
	}
);


$('#role').click(

	function(){
		if($(this).css('opacity')==1){
		$('#content').slideUp('fast');
		document.getElementById("content").innerHTML="<i>Do we not all agree to call rapid thought and noble impulse by the name of inspiration?</i></br></br>"+
		"<p><a target='_blank' href='http://en.wikipedia.org/wiki/Carl_Friedrich_Gauss'><h2><u>Carl Friedrich Gauss</u></h2></a></br>"+
		"<img src='images/gauss.png' style='float:left;'/>"+
		"Gauss was one of the most important and prolific mathematicians of all times.He contributed significantly to many fields, including number theory, statistics, analysis, differential geometry, geodesy, geophysics, electrostatics, astronomy and optics. "+
		"He was a child prodigy and it his immense genius that inspires me</p>"+
		"</br><p><a target='_blank' href='http://en.wikipedia.org/wiki/Alan_Turing'><h2><u>Alan Turing</u></h2></a></br>"+
		"<img src='images/turing.jpg' style='float:left;'/>"+
		"Alan Turing can be considered as the founder of the field of Computer Science. He was one of the most forward and practical thinkers of all times. "+
		"His invention of the Turing Machine paved the way for development of modern computer.</p>"+
		"</br></br></br><p><a target='_blank' href='http://en.wikipedia.org/wiki/Srinivasa_Ramanujan'><h2><u>Srinivas Ramanujan</u></h2></a></br>"+
		"<img src='images/ramanujan.jpg' style='float:left;'/>"+
		"Ramanujan was an Indian mathematician and genius who, with almost no formal training in pure mathematics, made extraordinary contributions to many areas of number theory. "+
		"Ramanujan was said by the English mathematician G.H. Hardy to be in the same league as mathematicians like Euler and Gauss in terms of natural genius</p>"+
		"</br><p><a target='_blank' href='http://en.wikipedia.org/wiki/Steve_Jobs'><h2><u>Steve Jobs</u></h2></a></br>"+
		"<img src='images/jobs.jpg' style='float:left;'/>"+
		"Jobs was one of the co-founders of Apple.Inc and through Apple, he was widely recognized as a charismatic pioneer of the personal computer revolution. "+
		"His leadership qualities serve as inspiration for all those who wish to follow in his footsteps.</p>";
		$('#content').slideDown('slow');
	}
	}
);

