$('#image').click(

	function(){
		if($(this).css('opacity')==1){
		$('#content').slideUp('fast');
		document.getElementById("content").innerHTML=""+
		"<a class='thumbs' id='1'><img src='images/x1.jpg' /></a>"+
		"<a class='thumbs' id='2'><img src='images/x2.jpg' /></a>"+
		"<a class='thumbs' id='3'><img src='images/x3.jpg' /></a>"+
		"<a class='thumbs' id='4'><img src='images/x4.jpg' /></a>"+
		"<a class='thumbs' id='5'><img src='images/x5.jpg' /></a>"+
		"<a class='thumbs' id='6'><img src='images/x6.jpg' /></a>"+
		"<a class='thumbs' id='7'><img src='images/x7.jpg' /></a>"+
		"<a class='thumbs' id='8'><img src='images/x8.jpg' /></a>"+
		"<a class='thumbs' id='9'><img src='images/x9.jpg' /></a>"+
		"<a class='thumbs' id='10'><img src='images/x10.jpg' /></a>"+
		"<a class='thumbs' id='11'><img src='images/x11.jpg' /></a>"+
		"<a class='thumbs' id='12'><img src='images/x12.jpg' /></a>"+
		"<a class='thumbs' id='13'><img src='images/x13.jpg' /></a>"+
		"<a class='thumbs' id='14'><img src='images/x14.jpg' /></a>"+
		"<div class='overlay_img' align='center'>"+
		"<a class='close'></a>"+
		"<img id='leftarrow' src='images/leftarrow.png'/>"+
		"<img id='rightarrow' src='images/rightarrow.png'/>"+
		"<img style='float:left' id='overlay' src='images/big1.jpg' />"+
		"<div class='img_description' id='d1'>"+
		"A family photo @ Universal Studios,Singapore"+
		"</div>"+
		"<div class='img_description' id='d2'>"+
		"Diwali @ Home"+
		"</div>"+
		"<div class='img_description' id='d3'>"+
		"Me looking @ the Eiffel Tower"+
		"</div>"+
		"<div class='img_description' id='d4'>"+
		"Me & brother"+
		"</div>"+
		"<div class='img_description' id='d5'>"+
		"Me & bro again"+
		"</div>"+
		"<div class='img_description' id='d6'>"+
		"With the Penguins Of Madagascar"+
		"</div>"+
		"<div class='img_description' id='d7'>"+
		"Yet Again"+
		"</div>"+
		"<div class='img_description' id='d8'>"+
		"Ferrari F430"+
		"</div>"+
		"<div class='img_description' id='d9'>"+
		"St.Peter's Church,Vatican city"+
		"</div>"+
		"<div class='img_description' id='d10'>"+
		"Quite unreal,huh"+
		"</div>"+
		"<div class='img_description' id='d11'>"+
		"Me in the clown hat"+
		"</div>"+
		"<div class='img_description' id='d12'>"+
		"Bowling(the shot i'm about to take was a strike....my only strike:D:D)"+
		"</div>"+
		"<div class='img_description' id='d13'>"+
		"@Monte Carlo,Monaco"+
		"</div>"+
		"<div class='img_description' id='d14'>"+
		"In front of the Merlion@Singapore"+
		"</div>"+
		"</div>";		
		$('#content').slideDown('slow');
		var id;
		$('.thumbs').click(function(){
			id=$(this).attr('id');
			$('.img_description').css('display','none');
			$('#overlay').attr('src','images/xbig'+id+'.jpg');
			$('#d'+id).show('fast');
			$('.overlay_img').fadeIn('slow');
		});
		$('.overlay_img .close').click(function(){
			$('.overlay_img').fadeOut('slow');
			$('.img_description').css('display','none');
		});
		$('#leftarrow').click(function(){
			id--;
			$('.img_description').css('display','none');
			if(id!=0){
				$('#overlay').attr('src','images/xbig'+id+'.jpg');
				$('#d'+id).show('fast');
				$('.overlay_img').fadeIn('slow');
			}
			else{
				id=14;
				$('#overlay').attr('src','images/xbig14.jpg');
				$('#d10').show('fast');
				$('.overlay_img').fadeIn('slow');
			}
		});
		$('#rightarrow').click(function(){
			id++;
			$('.img_description').css('display','none');
			if(id!=15){
				$('#overlay').attr('src','images/xbig'+id+'.jpg');
				$('#d'+id).show('fast');
				$('.overlay_img').fadeIn('slow');
			}
			else{
				id=1;
				$('#overlay').attr('src','images/xbig1.jpg');
				$('#d1').show('fast');
				$('.overlay_img').fadeIn('slow');
			}
		});
		$('img#overlay').click(function(){
			$('#rightarrow').click();
		});
		$('.overlay_img').blur(function(){
			$('.overlay_img .close').click();
		});
		document.onkeydown = function(event){
			event.preventDefault();
		  var keyCode;



		  if(event == null){
			  keyCode = window.event.keyCode;
		  }
		  else{
			keyCode = event.keyCode;
		  }

		  switch(keyCode){

		  case 37:
			$('#leftarrow').click();
			break; 

		  case 38:
		  $('#rightarrow').click();
			break;



		  case 39:
		  $('#rightarrow').click();
			break; 


		  case 40:
			$('#leftarrow').click();
			break; 
			
		case 27:
			$('.overlay_img .close').click();
			break; 

		  default: 
			break; 
			
		  }
		}
	}
	}
);




$('#video').click(

	function(){
		if($(this).css('opacity')==1){
		$('#content').slideUp('fast');
		document.getElementById("content").innerHTML="Well here is a collection of a few of my favourite videos</br>"+
		"What better to start with than the legend</br>"+
		"<ol>"+
		"<li><a id='pf-an' class='video2'>Pink Floyd:Another Brick in the wall</a></br><iframe id='if_pf-an' width='480' height='360' src='http://www.youtube.com/embed/qs35t2xFqdU' frameborder='0' allowfullscreen></iframe></li></br>"+
		"<li><a id='me-fw' class='video2'>Metallica:For whom the bell tolls(Live @ Woodstock,99)</a></br><iframe id='if_me-fw' width='480' height='360' src='http://www.youtube.com/embed/ILtDU48jkwE' frameborder='0' allowfullscreen></iframe></li></br>"+
		"<li><a id='sc-ry' class='video2'>Scorpions:Rock You like a Hurricane</a></br><iframe id='if_sc-ry' width='480' height='360' src='http://www.youtube.com/embed/jJVJ140CdHQ' frameborder='0' allowfullscreen></iframe></li></br>"+
		"<li><a id='ni-sm' class='video2'>Nirvana:Smells Like Teen Spirit</a></br><iframe id='if_ni-sm' width='480' height='360' src='http://www.dailymotion.com/embed/video/x1wcq4' frameborder='0' allowfullscreen></iframe></li></br>"+
		"<li><a id='ni-if' class='video2'>Nickelback:If everyone Cared</a></br><iframe id='if_ni-if' width='480' height='360' src='http://www.youtube.com/embed/TfmD_YpyeSs' frameborder='0' allowfullscreen></iframe></li></br>"+
		"<li><a id='fe-ro' class='video2'>Fear of the Dark:Rock in Rio</a></br><iframe id='if_fe-ro' width='480' height='360' src='http://www.youtube.com/embed/szt60RlgcL4' frameborder='0' allowfullscreen></iframe></iframe></li></br>"+
		"<li><a id='br-di' class='video2'>Breaking Benjamin:Diary of Jane</a></br><iframe id='if_br-di' width='480' height='360' src='http://www.youtube.com/embed/Qqmk9uwlO_I' frameborder='0' allowfullscreen></iframe></li></br>"+
		"<li><a id='rh-cp' class='video2'>Red Hot Chilli Peppers:Californication</a></br><iframe id='if_rh-cp' width='480' height='360' src='http://www.youtube.com/embed/mn67vSHIdOs' frameborder='0' allowfullscreen></iframe>"+
		"</ol>";
		$('#content').slideDown('slow');
		$('.video2').click(function(){
			$('iframe').css('display','none');
			var id=$(this).attr('id');
			$('#if_'+id).css('display','inline');
		});
		}
	}
);

$('#music').click(

	function(){
		if($(this).css('opacity')==1){
		$('#content').slideUp('fast');
		document.getElementById("content").innerHTML=""+
		"<ol>"+
		"<li>Metallica</li>"+
		"<ul>"+
		"<li><a class='music2' id='es'>Enter Sandman</a></br><embed id='em_es' align='center' type='application/x-shockwave-flash' flashvars='audioUrl=http://yankeeroundtable.com/wp-content/uploads/2008/11/01-enter-sandman.mp3' src='http://www.google.com/reader/ui/3523697345-audio-player.swf' width='400' height='27' quality='best'></embed></li>"+
		"<li><a class='music2' id='fa'>Fade To Black</a></br><embed id='em_fa' align='center' type='application/x-shockwave-flash' flashvars='audioUrl=http://pds3.egloos.com/pds/200611/24/05/04 - fade to black.mp3' src='http://www.google.com/reader/ui/3523697345-audio-player.swf' width='400' height='27' quality='best'></embed></li>"+
		"</ul>"+
		"<li>Iron Maiden</li>"+
		"<ul>"+
		"<li><a class='music2' id='ha'>Hallowed Be thy Name</a></br><embed id='em_ha' align='center' type='application/x-shockwave-flash' flashvars='audioUrl=http://vlsf.musik.free.fr/IRON MAIDEN/1982 - The Number Of The Beast/08-Iron Maiden-Hallowed Be Thy Name.mp3' src='http://www.google.com/reader/ui/3523697345-audio-player.swf' width='400' height='27' quality='best'></embed></li>"+
		"<li><a class='music2' id='fe'>Fear of the Dark</a></br><embed id='em_fe' align='center' type='application/x-shockwave-flash' flashvars='audioUrl=http://pds2.egloos.com/pds/1/200607/09/05/059 Iron Maiden - Fear of The Dark.mp3' src='http://www.google.com/reader/ui/3523697345-audio-player.swf' width='400' height='27' quality='best'></embed></li>"+
		"</ul>"+
		"<li>Poets of the Fall</li>"+
		"<ul>"+
		"<li><a class='music2' id='da'>Dawn</a></br><embed id='em_da' align='center' type='application/x-shockwave-flash' flashvars='audioUrl=http://home.iitk.ac.in/~amansh/music/Dawn.mp3' src='http://www.google.com/reader/ui/3523697345-audio-player.swf' width='400' height='27' quality='best'></embed></li>"+
		"<li><a class='music2' id='ca'>Carnival Of Rust</a></br><embed id='em_ca' align='center' type='application/x-shockwave-flash' flashvars='audioUrl=http://m0.li.ru/b/7/mp3/7/25035/2503557_poets_of_the_fall__carnival_of_rust.mp3' src='http://www.google.com/reader/ui/3523697345-audio-player.swf' width='400' height='27' quality='best'></embed></li>"+
		"</ul>"+
		"<li>Nickelback</li>"+
		"<ul>"+
		"<li><a class='music2' id='ho'>How you remind me</a></br><embed id='em_ho' align='center' type='application/x-shockwave-flash' flashvars='audioUrl=http://plg208.free.fr/sauvegardes PC portable mes doc/MUSIQUE/How You Remind Me.mp3' src='http://www.google.com/reader/ui/3523697345-audio-player.swf' width='400' height='27' quality='best'></embed></li>"+
		"<li><a class='music2' id='ro'>Rockstar</a></br><embed id='em_ro' align='center' type='application/x-shockwave-flash' flashvars='audioUrl=http://www.kicknspin.com/images/Nickelback_-_Rockstar.mp3' src='http://www.google.com/reader/ui/3523697345-audio-player.swf' width='400' height='27' quality='best'></embed></li>"+		
		"</ul>"+
		"<li>Linkin Park</li>"+
		"<ul>"+
		"<li><a class='music2' id='wh'>What I've Done</a></br><embed id='em_wh' align='center' type='application/x-shockwave-flash' flashvars='audioUrl=http://files.myopera.com/jistingzz/forget/Linkin_Park-What_I_ve_Done-CDS.mp3' src='http://www.google.com/reader/ui/3523697345-audio-player.swf' width='400' height='27' quality='best'></embed></li>"+
		"<li><a class='music2' id='nu'>Numb</a></br><embed id='em_nu' align='center' type='application/x-shockwave-flash' flashvars='audioUrl=http://www.lp-zone.narod.ru/music/Meteora/Linkin_Park_-_Numb_lp-zone.narod.ru.mp3' src='http://www.google.com/reader/ui/3523697345-audio-player.swf' width='400' height='27' quality='best'></embed></li>"+
		"</ul>"+
		"<li>Bullet For my valentine</li>"+
		"<ul>"+
		"<li><a class='music2' id='te'>Tears don't fall</a></br><embed id='em_te' align='center' type='application/x-shockwave-flash' flashvars='audioUrl=http://www.tekyo.com/medias/04-bullet_for_my_valentine-tears_dont_fall-fnt.mp3' src='http://www.google.com/reader/ui/3523697345-audio-player.swf' width='400' height='27' quality='best'></embed></li>"+
		"</ul>"+
		"<li>Classics</li>"+
		"<ul>"+
		"<li><a class='music2' id='st'>Stairway to heaven</a></br><embed id='em_st' align='center' type='application/x-shockwave-flash' flashvars='audioUrl=http://greglepatryn.free.fr/stairway.mp3' src='http://www.google.com/reader/ui/3523697345-audio-player.swf' width='400' height='27' quality='best'></embed></li>"+
		"<li><a class='music2' id='ry'>Rock You like a Hurricane</a></br><embed id='em_ry' align='center' type='application/x-shockwave-flash' flashvars='audioUrl=http://da3rx.com/music/mp3/40 Greatest Metal Songs (VH1)/31 - Scorpions - Rock You Like a Hurricane.mp3' src='http://www.google.com/reader/ui/3523697345-audio-player.swf' width='400' height='27' quality='best'></embed></li>"+
		"</ul>"+
		"<li>Hindi</li>"+
		"<ul>"+
		"<li><a class='music2' id='ja'>Jashn-e-bahaara</a></br><embed id='em_ja' align='center' type='application/x-shockwave-flash' flashvars='audioUrl=http://down.yybyy.com/vipuser/fzzw/worldshiting/02-Jashn-E-Bahaara-Javed-Ali.mp3' src='http://www.google.com/reader/ui/3523697345-audio-player.swf' width='400' height='27' quality='best'></embed></li>"+
		"</ul>"+
		"</ol>";	
		$('#content').slideDown('slow');
		$('.music2').click(function(){
			$('embed').css('display','none');
			var id=$(this).attr('id');
			$('#em_'+id).css('display','inline');
		});
	}
	}
);

