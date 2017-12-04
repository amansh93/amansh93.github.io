<html>
<title>Aman Sharma's Homepage</title>
<link rel="shortcut icon" href="images/icon.gif">
<?php
include ("counter.php");
?>
<style>
	body{
	background-color:maroon;
	<!--background:maroon url(images/img.png) no-repeat top right;-->
	}
	#title{
	}
	hr{
	align:center;
	width:60%;
	}
	#menu{
	position:absolute;
	top:30%;
	left:10%;
	}
	#left_sidebar{
		background-color:orange;
		background-image:url(images/v-about.png);
		position:fixed;
		top:2%;
		left:0%;
		height:320px;
		width:0px;
		border-top-right-radius:320px;
		-moz-border-top-right-radius:320px;
		-webkit-border-top-right-radius:320px;
		border-bottom-right-radius:320px;
		-moz-border-bottom-right-radius:320px;
		-webkit-border-bottom-right-radius:320px;
		padding:160px;
		text-align:center;
		color:white;
		border-style:solid;
		border-width:6px;
		border-color:black;
	}
	#right_sidebar{
		background-image:url(images/bg1.jpg);
		position:fixed;
		top:2%;
		right:0%;
		height:320px;
		width:0px;
		border-top-left-radius:320px;
		-moz-border-top-left-radius:320px;
		-webkit-border-top-left-radius:320px;
		border-bottom-left-radius:320px;
		-moz-border-bottom-left-radius:320px;
		-webkit-border-bottom-left-radius:320px;
		padding:160px;
		text-align:center;
		color:white;
		border-style:solid;
		border-width:6px;
		border-color:black;
	}
	a{
	color:blue;
	cursor:pointer;
	}
	a>img{
		opacity:1;
	}

	a>img:hover{
		opacity:0.6;
		cursor:pointer;
	}
	.circle{
		margin-top:100px;
		margin-left:100px;
		width:176px;
		height:176px;
		position:fixed;
		left:0px;
		top:0px;
		background:transparent url(images/circle2.png) no-repeat top left;
		z-index:10;
		opacity:0;
		filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);
		text-align:left;
		padding:0px;
	}
	#sublist .circle{
		width:180px;
		margin:40px auto;
		text-align:left;
	}
	#sublist .circle > ul{
		position:absolute;
		top:20px;
		left:20px;
		text-align:left;
	}
	#sublist .circle > ul a{
		color:white;
		font-family:"Myriad Pro",Arial,Helvetica;	
	}
	#sublist .circle > ul a:hover{
		color:black;
		cursor:pointer;
	}
	#content{
		border-style:solid;
		border-width:6px;
		border-color:black;
		background-color:yellow;
		position:absolute;
		top:140px;
		left:33%;
		max-width:40%;
		min-width:30%;
		font-family:"Segoe WP", Segoe UI, tahoma, sans-serif;
	}
	.thumbs{
		float:left;
		margin:50px;
	}
	.overlay_fb{
		display:none;
		z-index:1000;
		color:white;
		background-color:black;
		min-width:500px;
		position:absolute;
		top:0px;
		left:0px;
		min-height:300px;
		border:1px solid #666;
		-moz-box-shadow:0 0 10px 25px #ffffff;
		-webkit-box-shadow:0 0 10px 25px #ffffff;
	}
	.overlay_fb .close {
		background-image:url(close.png);
		position:absolute;
		right:-15px;
		top:-15px;
		cursor:pointer;
		height:20px;
		width:20px;
	}
	.overlay_img{
		display:none;
		z-index:1000;
		color:white;
		background-color:black;
		min-width:360px;
		position:fixed;
		top:30px;
		margin:0px auto;
		min-height:300px;
		max-height:95%;
		border:1px solid #666;
		-moz-box-shadow:0 0 100px 100px #000;
		-webkit-box-shadow:0 0 100px 100px #000;
	}
	.overlay_img .close {
		background-image:url(close.png);
		position:absolute;
		right:-15px;
		top:-15px;
		cursor:pointer;
		height:20px;
		width:20px;
	}
	.img_description{
		display:none;
	}
	#leftarrow{
		position:absolute;
		bottom:0px;
		left:-10px;
		cursor:pointer;
	}
	#rightarrow{
		position:absolute;
		bottom:0px;
		right:-10px;
		cursor:pointer;
	}
	embed,iframe{
		display:none;
	}
</style>
<body>
<div id="title" align="center">
	<img src="images/title.png" /></br>
	<hr />
</div>

<div id="left_sidebar">
	<div id="menu">
		<a id="about"><img id="about" src="images/about.png"/></a>
		<a id="stuff"><img id="stuff" src="images/stuff.png"/></a>
		<a id="academic"><img id="academic" src="images/academic.png"/></a>
		<a id="gallery"><img id="gallery" src="images/gallery.png"/></a>
		<a id="contact"><img id="contact" src="images/contact.png"/></a>
	</div>
</div>
<div id="right_sidebar">

</div>
<div id="sublist">
	<div class="circle" id="circle_about">
		<ul>
			</br><li><a id="me">Who I am</a></li></br>
			<li><a id="role">Role models</a></li></br>
		</ul>
	</div>
	<div class="circle" id="circle_stuff">
		<ul>
			<li><a id="mine">Minesweeper</a></li></br>
			<li><a id="app">Post_it_notes</br>web app</a></li></br>
			<li><a id="interest">Interests</a></li></br>
		</ul>
	</div>
	<div class="circle" id="circle_academic">
		<ul>
			</br><li><a id="courses">Courses</a></li></br>
			<li><a id="achievments">Achievments</a></li></br>
		</ul>
	</div>
	<div class="circle" id="circle_gallery">
		<ul>
			<li><a id="image">Images</a></li></br>
			<li><a id="video">Videos</a></li></br>
			<li><a id="music">Music</a></li></br>
		</ul>
	</div>
	<div class="circle" id="circle_contact">
		<ul>
			<li><a id="personal">Personal</a></li></br>
			<li><a id="social">Social Networks</a></li></br>
			<li><a id="feedback">Feedback</a></li>
		</ul>
	</div>
</div>
<div id="content">

</div>

<script type="text/javascript" src="jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="jquery.path.js"></script>
<script type="text/javascript" src="left_sidebar.js"></script>
<script type="text/javascript" src="right_sidebar.js"></script>
<script type="text/javascript" src="about.js"></script>
<script type="text/javascript" src="stuff.js"></script>
<script type="text/javascript" src="achievments.js"></script>
<script type="text/javascript" src="gallery.js"></script>
<script type="text/javascript" src="contact.js"></script>
<script>
$('document').ready(function(){$('#me').click();});
</script>
</body>
</html>