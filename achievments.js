$('#courses').click(	

	function(){
	if($(this).css('opacity')==1){
		$('#content').slideUp('fast');
		document.getElementById("content").innerHTML=""+
		"<ul>"+
		"<li>ESC101:Introduction to Programming</li></br>"+
		"<li>MTH101:Mathematics-I</li></br>"+
		"<li>MTH102:Mathematics-II</li></br>"+
		"<li>ESO211:Data Structures & Algorithms</li></br>"+
		"<li>CS220:Introduction To Computer Architecture</li></br>"+
		"<li>MTH203:Mathematics-III</li></br>"+
		"<li>*CS201:Discrete Mahematics</li></br>"+
		"<li>*CS355:Programming Tools & Techniques</li></br>"+
		"<li>*ESO209:Probability & Statistics</li></br>"+
		"<li>*TA201:Manufacturing Processes</li></br>"+
		"<li>PHI142:Introduction to Logic</li></br>"+
		"</ul>"+
		"*-Course in the current semester";	
		$('#content').slideDown('slow');
	}
}
);

$('#achievments').click(

	function(){
		if($(this).css('opacity')==1){
		$('#content').slideUp('fast');
		document.getElementById("content").innerHTML="Here is the list of some of my academic achievments</br>"+
		"<ul>"+
		"<li>Secured a rank of 126 out of approximately 4 lakh candidates (99.97 percentile) in the Joint entrance examination(JEE) 2010</li></br>"+
		"<li>Secured a rank of 223 out of approximately 11 lakh candidates(99.98 percentile) in All India Engineering Entrance Examination(AIEEE)2010</li></br>"+
		"<li>Received KVPY Fellowship by Department of Science and Technology,Government of India in the year 2008</li></br>"+
		"<li>Received NTSE scholarship by NCERT in the year 2008.</li></br>"+
		"<li>Cleared Regional Mathematics Olympiad in 2009 with a rank of 33</li></br>"+
		"<li>Cleared Regional Mathematics Olympiad in 2010 with a rank of 5</li></br>"+
		"<li>Selected in the national top 1% in the National Standard Examination in Physics conducted by IAPT in the year 2009</li></br>"+
		"<li>Selected in the national top 1% in the National Standard Examination in Chemistry conducted by IACT in the year 2009</li></br>"+
		"<li>Selected in the national top 1% in the National Standard Examination in Astronomy conducted by IAPT in the year 2009</li></br>"+
		"<li>Receiving CBSE Merit Scholarship for AIEEE since 2010</li></br>"+
		"<li>Received JSTSE fellowship by Directorate of Education,Delhi in the year 2007</li></br>"+
		"<li>Secured an All India Rank of 36 in the National Science Olympiad conducted by the Science Olympiad Foundation in the year 2010</li></br>"+
		"<li>Secured an All India rank of 55 in the National Cyber Olympiad conducted by the Science Olympiad Foundation in the year 2010</li></br>"+
		"<li>Secured an All India rank of 14 in the FIITJEE Talent Search Exam in the year 2008</li></br>"+
		"</ul>";	
		$('#content').slideDown('slow');
	}
	}
);