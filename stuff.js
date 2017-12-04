$('#app').click(

	function(){
		if($(this).css('opacity')==1){
		$('#content').slideUp('fast');
		document.getElementById("content").innerHTML="Unfortunately,the server does not support Django apps</br>"+
		"But what I did was make a simple sticky notes web application,with basic functionalities like adding a new note"+
		",deleting existing notes and updating notes.</br>"+
		"This was developed in python using django as a framework.And it was done just for fun</br></br>";	
		$('#content').slideDown('slow');
	}
	}
);
$('#mine').click(

	function(){
		if($(this).css('opacity')==1){	
		$('#content').slideUp('fast');
		document.getElementById("content").innerHTML="This is a simple minesweeper game I developed using Javascript and a teeny-tiny bit of jQuery</br>"+
		"<a target='_blank' href='Minesweeper/mines.htm'>Click here for the game</a></br>";+
		"Feel free to contact me if any discrepancy in the functioning of the game shows up</br>"
		$('#content').slideDown('slow');
	}
	}
);
$('#interest').click(

	function(){
		if($(this).css('opacity')==1){
		$('#content').slideUp('fast');
		document.getElementById("content").innerHTML="My premier interests are in:</br>"+
		"<ul>"+
		"<li>Logic</li>"+
		"<li>Algorithms(Analysis & development)</li>"+
		"<li>Graph Theory</li>"+
		"<li>Discrete Mathematics</li>"+
		"<li>Software Engineering</li>"+
		"<li>Web Development</li>"+
		"</ul>";	
		$('#content').slideDown('slow');
	}
	}
);