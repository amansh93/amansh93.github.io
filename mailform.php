<?php

		$name = $_REQUEST['name'] ;
		$email = $_REQUEST['email'] ;
		$message = $_REQUEST['message'] ;
		$file='feedback.txt;
		$handle = fopen($file, 'a');
		fputs($handle, "\nFeedback from ".$name.+"\nEmail: ".$email."\nMessage".$message."\n");
		fclose($handle);

header( 'Location: http://home.iitk.ac.in/~amansh/index.html' ) ;
?>