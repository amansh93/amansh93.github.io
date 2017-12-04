var id=2;
var i=0;
var timer3=null;
function change_background(){
$('#right_sidebar').css('background-image','url(images/bg'+id+'.jpg)');
id++;
if(id==6)
	id=1;
}
$(function(){
timer3=setInterval(change_background,5000);
});