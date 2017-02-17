$(function(){
	$(".bjs .bjs_right li").mouseover(function(){
		$(this).addClass("one").siblings().removeClass("one");
	})
	var lis = $(".bjs .bjs_right li");
	var divs = $(".bjs .bjs_left .tup")
	for(var i=0;i<lis.length;i++){
		lis[i].onmouseover = function(e){
			var ev = window.event || e;
			var curObj = ev.srcElement || ev.target;
			for(var j = 0;j<lis.length;j++){
				if(curObj==lis[j]){
					index = j;
				}
			}
			for(var x=0;x<divs.length;x++){
				if(x==index){
					divs[x].style.display = 'block';
				}else{
					divs[x].style.display = 'none';
				}
			}

		}
	}






})