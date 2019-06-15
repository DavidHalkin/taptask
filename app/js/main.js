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

     $(".switcher_drop_js").click(function(){
        $(this).toggleClass("active");
        $(this).parent().find(".sub_cat").slideToggle("fast");
    });

      $(".additional_terms_link__js").click(function(){
        $(this).toggleClass("active");
        $(this).parent().find("ul").slideToggle("fast");
        return false;
    });
      // toggle chat
      $(".chat_toogle_js").click(function(){
        $(this).toggleClass("active");
        $(".chat_main_holder").toggleClass("active");
    });
      // switch_panel_chat
       $(".switch_panel_chat_js").click(function(){
        $(".chat_main_holder").toggleClass("active");
    });


        $(".collapseble_bar_title_js").click(function(){
            $(this).parent().toggleClass("active");
            $(this).parent().find(".collapseble_bar_drop").slideToggle("fast");
            return false;
        });
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
// header
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 80) {
            $('.header').addClass('dark');
        }
        else {
            $('.header').removeClass('dark');
        }
    });
})
// select
$(function() {
  jcf.replaceAll();
});