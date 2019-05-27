document.write('<style type="text/css">');
var cname='perar';
var cookies = document.cookie;
var display='none';
var pos1 = cookies.indexOf(escape(cname) + '=');
if (pos1 != -1)
{
	pos1 = pos1 + (escape(cname) + '=').length;
	pos2 = cookies.indexOf(';', pos1);
	if (pos2 == -1)
		pos2 = cookies.length;
	display = cookies.substring(pos1, pos2);
}
document.write('#boss { display: '+display+"; }");
document.write('</style>');
$(document).ready(function() {
	$( "#rezervace" ).click(function() {
		if($("#boss").css("display") != 'none')
		{
			$("#boss").animate({height: '0'}, function() {$("#boss").hide();});
			document.cookie='perar='+escape('none');
		}
		else
		{
			$("#boss").animate({height: '65'});
			$("#boss").show();
			document.cookie='perar='+escape('block');
		}
	});
});
