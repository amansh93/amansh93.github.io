var timer=null;
var timer2=null;
	$(function() {
		function moveout(){
				$('#sublist .circle').each(function(i){
				var $theCircle = $(this);
				if($theCircle.css('opacity')==1)
					$theCircle.stop()
				.animate({
					path : new $.path.arc({
						center	: [-50,210],
						radius	: 320,
						start	: 90,
						end     : 40,
						dir	: -1
					}),
					opacity: '0'
				},500);
				else
					$theCircle.stop()
					.animate({opacity: '0'},1500);
				});
		}

		function move($elem,speed,turns){
			var id = $elem.attr('id');
			var $circle = $('#circle_'+id);
			if($circle.css('opacity')==1)
				return;

			moveout();
			var end = 65 - 360 * (turns-1);
			$circle.stop()
			.animate({
				path : new $.path.arc({
					center	: [-50,210],
					radius	: 320,
					start	: 140,
					end		: 90,
					dir		: -1
				}),
				opacity: '1'
			},speed);
		}
		
		$('#menu > a > img').click(
			function(){
				var id=$(this).attr('id');
				var $this = $(this);						
				$("#left_sidebar").css('background-image',"url(images/v-"+id+".png)");
				move($this,500,1);

			}
		);

		$('#sublist .circle').mouseover(
			function(){
				clearTimeout(timer);
				timer=null;
		});
		$('#sublist .circle').mouseleave(
			function(){
				timer=setTimeout(moveout,5000);
		});
	});

