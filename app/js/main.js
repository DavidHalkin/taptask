$(document).ready(function(){
	$('body .mob_menu ').append('<em class="menu_mob_shadow menu_mob_shadow_js"></em>');
    $(".mob_menu_btn_js").click(function(){
        $(".mob_menu_holder_js").toggleClass("active");
        $(".menu_mob_shadow_js").toggleClass("active");
        $("body").toggleClass("body_overflow");
    });
    $(".close_mob_menu_js").click(function(){
        $(".mob_menu_holder_js").toggleClass("active");
        $(".menu_mob_shadow_js").toggleClass("active");
        $("body").toggleClass("body_overflow");
    });
    $(".menu_mob_shadow_js").click(function(){
        $(".mob_menu_holder_js").toggleClass("active");
        $(".menu_mob_shadow_js").toggleClass("active");
        $("body").toggleClass("body_overflow");
    });
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})