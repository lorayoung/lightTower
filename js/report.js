$(document).ready(function() {

// var i = $(".hole-details-tabhead>li").index();
// if(this).hasClass("tab-hover"){
 
//  $(this).parent().next().children().eq(i).slideDown().siblings().slideUp();
// }
// else
// {

// }




// tab切换2
function tt(i){
$(".hole-title").addClass('tab-hover')
$(".hole-details-tabhead>li").click(function() {
	var i = $(this).index();
	$(this).parent().next().children().eq(i).slideDown().siblings().slideUp();
	$(this).addClass('tab-hover').siblings().removeClass('tab-hover');
});

}
tt()

// tab 切换
function bb(n){
	$(".hole-tabhead-one").addClass('tab-hover')
    $(".hole-tabhead>li").click(function() {
	var n = $(this).index();
	$(this).parent().next().children().eq(n).slideDown().siblings().slideUp();
	$(this).addClass('tab-hover').siblings().removeClass('tab-hover');
});

}
bb()



// 第一层级加号

// if($(".hole-details").css('display')=='none'){
// 	$(this).parent().removeClass("bg-color");
// 	$(this).prev().removeClass("add-coin")
// }else{
// 	$(".hole-details").parent().addClass("bg-color")
// 	$(this).prev().addClass("add-coin")
// }





$(".target-list-content>i").click(function(){	
	if($(this).next(".hole-details").css('display')=='none'){
		$(this).addClass("add-coin");
		$(this).parent().addClass("bg-color");
    	$(this).next(".hole-details").slideDown();
    	$(this).parent().siblings(".target-list-content").children(".hole-details").slideUp();
    	$(this).parent().siblings(".target-list-content").removeClass("bg-color");
    	$(this).parent().siblings(".target-list-content").children("i").removeClass("add-coin");

	}
	else
	{
		$(this).removeClass("add-coin");
		$(this).parent().removeClass("bg-color");
		$(this).next(".hole-details").slideUp();
		$(this).next().children().find(".hole-content").prev().removeClass("add-coin")
		$(this).next().children().find(".hole-content").slideUp();
		$(this).next().children().find(".assets-information-content>i").removeClass("add-coin")
		$(this).next().children().find(".assets-information-content>div").slideUp();
		bb(1)

		// $(this).next().children().find(".hole-information").css('display','block');
		// $(this).next().children().find(".assets-information").css('display','none');
		// $(this).next().children().find(".assets-information")

	}
	
})
// 第二层级加号

$(".hole-details-tabbody-content>i").click(function(){
	$(this).toggleClass("add-coin");
	$(this).next(".hole-content").slideToggle();	
})
// 第三层级加号
$(".assets-information-content>i").click(function(){
	$(this).toggleClass("add-coin");
	$(this).next().slideToggle();	
})


});
// 目录展开 缩起
$(".quick-click-left").click(function() {
$(".target-list-content>i").addClass("add-coin");
$(".hole-details-tabbody-content>i").addClass("add-coin");
$(".assets-information-content>i").addClass("add-coin");

$('.hole-details').slideDown();
$('.hole-content').slideDown();
$('.pang-content').slideDown();

});

$(".quick-click-right").click(function() {
$(".target-list-content>i").removeClass("add-coin");
$(".hole-details-tabbody-content>i").removeClass("add-coin");
$(".assets-information-content>i").removeClass("add-coin");
$('.hole-details').slideUp();
$('.hole-content').slideUp();
$('.pang-content').slideUp();
});

