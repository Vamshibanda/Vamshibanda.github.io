$(window).scroll(function() {
    if ($(window).scrollTop() >= 300) {
        $('header').addClass('fixed-header');
    } else {
        $('header').removeClass('fixed-header');
    }
});

$(".see-more a").click(function() {
    $(".more_live_projects").show();
    $(".see-more").hide();
});

$(".close_call_btn_caller").click(function() {
    $(".modal_caller").removeClass('active');
});
$(".btn_caller").click(function() {
    $(".modal_caller").addClass('active');
});



///  DROPDOWN MENU   ////
$(".nav li").hover(function() {
    var isHovered = $(this).is(":hover");
    if (isHovered) {
        $(this).children(".submenu").stop().slideDown(300);
    } else {
        $(this).children(".submenu").stop().slideUp(300);
    }
});

///  DROPDOWN MENU   ////

// Show the first tab by default
$('.tabs-stage div').hide();
$('.tabs-stage div div').show();
$('.tabs-stage div:first').show();
$('.tabs-nav li:first').addClass('tab-active');

// Change tab class and display content
$('.tabs-nav a').on('click', function(event) {
    event.preventDefault();
    $('.tabs-nav li').removeClass('tab-active');
    $(this).parent().addClass('tab-active');
    $('.tabs-stage div').hide();
    $('.tabs-stage div div').show();
    $($(this).attr('href')).show();
});
$('.loadbtn').on('click', function() {
    $('.morecards').addClass('active');
    $('.loadmore').addClass('active');
    $(this).removeClass('active');
});

$('.loadbtn1').on('click', function() {
    $('.morecards1').addClass('active');
    $('.loadmore1').addClass('active');
    $(this).removeClass('active');
});