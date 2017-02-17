// JavaScript Document
$(function(){
	//菜单
	$(".menu ul li").hover(function(){
		$(this).addClass("cur").siblings("li").removeClass("cur")
		$(this).find("ul").slideDown("slow")
	},function(){
		$(this).find("ul").slideUp("fast")
	})




})