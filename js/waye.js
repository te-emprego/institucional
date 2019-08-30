/*
  [JS Index]
  
  ---
  
  Template Name: Waye || Under Construction / Coming Soon Template
  Author:  ex-nihilo
  Version: 1.5
*/


/*
  1. preloader
  2. show elements
    2.1. show fadeIn
    2.2. show borders
    2.3. show hero
  3. the calls
    3.1. call home
    3.2. call page
  4. highlight navigation
  5. to top arrow animation
    5.1. to top arrow scroll to top
  6. facts counter
  7. skills bar
  8. forms
    8.1. newsletter form
	8.2. contact form
  9. countdown
    9.1. countdown timer
	9.2. countdown SETUP
  10. modals
    10.1. sign up modal
      10.1.1. sign up modal additional CLOSER
    10.2. contact modal
      10.2.1. contact modal additional CLOSER
  11. YouTube player
  12. slick slider
    12.1. slick fullscreen slideshow
  13. swiper slider
    13.1. swiper parallax slider
*/


$(function() {
    "use strict";
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. show elements
        // 2.1. show fadeIn
        setTimeout(function() {
            $(".fadeIn-element").delay(1200).css({
                display: "none"
            }).fadeIn(1200);
        }, 0);
        // 2.2. show borders
        setTimeout(function() {
            $(".border-left").removeClass("left-position");
        }, 800);
        setTimeout(function() {
            $(".border-right").removeClass("right-position");
        }, 800);
        setTimeout(function() {
            $(".border-top, .logo, #menu-mobile-btn, .menu").removeClass("top-position");
        }, 800);
        setTimeout(function() {
            $(".border-bottom, #wave, .social-icons-wrapper, .countdown, .social-icons-wrapper-mobile, .countdown-mobile, .border-bottom-waveless").removeClass("bottom-position");
        }, 800);
        // 2.3. show hero
        $(".hero-bg").addClass("hero-bg-show");
    });
	
    // 3. the calls
    // 3.1. call home
    $(".call-home").on("click", function() {
        $(".hero-bg").removeClass("hero-bg-show-secondary").addClass("hero-bg-show-primary");
        $(".logo").removeClass("logo-position-secondary").addClass("logo-position-primary");
        $("#menu-mobile-btn").removeClass("menu-mobile-btn-position-secondary").addClass("menu-mobile-btn-position-primary");
        $(".social-icons-wrapper").removeClass("social-icons-wrapper-position-secondary").addClass("social-icons-wrapper-position-primary");
        $(".countdown").removeClass("countdown-position-secondary").addClass("countdown-position-primary");
        $(".border-top").removeClass("top-position-primary");
        $(".border-bottom").removeClass("bottom-position-primary");
		$(".border-bottom-waveless").removeClass("bottom-position-primary");
        $(".border-left").removeClass("left-position-primary");
        $(".border-right").removeClass("right-position-primary");
        $("#wave").removeClass("wave-position-secondary").addClass("wave-position-primary");
		$(".menu").removeClass("menu-position-secondary").addClass("menu-position-primary");
    });
    // 3.2. call page
    $(".call-page").on("click", function() {
        $(".hero-bg").removeClass("hero-bg-show-primary").addClass("hero-bg-show-secondary");
        $(".logo").removeClass("logo-position-primary").addClass("logo-position-secondary");
        $("#menu-mobile-btn").removeClass("menu-mobile-btn-position-primary").addClass("menu-mobile-btn-position-secondary");
        $(".social-icons-wrapper").removeClass("social-icons-wrapper-position-primary").addClass("social-icons-wrapper-position-secondary");
        $(".countdown").removeClass("countdown-position-primary").addClass("countdown-position-secondary");
        $(".border-top").addClass("top-position-primary");
        $(".border-bottom").addClass("bottom-position-primary");
		$(".border-bottom-waveless").addClass("bottom-position-primary");
        $(".border-left").addClass("left-position-primary");
        $(".border-right").addClass("right-position-primary");
        $("#wave").removeClass("wave-position-primary").addClass("wave-position-secondary");
		$(".menu").removeClass("menu-position-primary").addClass("menu-position-secondary");
    });
	
    // 4. highlight navigation
    $("a.menu-state").on("click", function() {
        $("a.menu-state").removeClass("active");
        $(this).addClass("active");
    });
	
    $(window).on("scroll", function() {
        // 5. to top arrow animation
        if ($(this).scrollTop() > 100) {
            $(".to-top-arrow").addClass("show");
        } else {
            $(".to-top-arrow").removeClass("show");
        }
    });
    // 5.1. to top arrow scroll to top
    $(".scrollToTop, #menu-mobile-btn").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
	
    // 6. facts counter
    $(".facts-counter-number").appear(function() {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 1200,
            refreshInterval: 60
        });
    });
	
    // 7. skills bar
    $(".show-skillbar").appear(function() {
        $(".skillbar").skillBars({
            from: 0,
            speed: 4000,
            interval: 100,
            decimals: 0
        });
    });
	
    // 8. forms
    // 8.1. newsletter form
    $("form#subscribe").on("submit", function() {
        $("form#subscribe .subscribe-error").remove();
		$.post("subscribe.php");
        var s = !1;
        if ($(".subscribe-requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter your Email</span>'),
                    $(this).addClass("inputError"), s = !0;
                else if ($(this).hasClass("subscribe-email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter a valid Email</span>'),
                        $(this).addClass("inputError"), s = !0);
                }
            }), !s) {
            $("form#subscribe input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#subscribe").slideUp("fast", function() {
                    $(this).before('<div class="subscribe-success">Thank you for subscribing.</div>');
                });
            });
        }
        return !1;
    });
    // 8.2. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
    // 9. countdown
    $(document).on("ready", function() {
        // 9.1. countdown timer
        $(".countdown").countdown({
            until: new Date(Date.parse(setting.counter.lastDate)),
            layout: $(".countdown").html(),
            timezone: setting.counter.timeZone
        });
    });
    // 9.2. countdown SETUP
    var setting = {
        counter: {
            lastDate: '11/01/2019 12:00:00", // target date settings, 'MM/DD/YYYY HH:MM:SS'
            timeZone: null
        }
    };
	
    // 10. modals
    // 10.1. sign up modal
    $(".sign-up-modal-launcher, .sign-up-modal-closer").on("click", function() {
        if ($(".sign-up-modal").hasClass("open")) {
            $(".sign-up-modal").removeClass("open").addClass("close");
            $(".introduction").removeClass("introduction-off").addClass("introduction-on");
        } else {
            $(".sign-up-modal").removeClass("close").addClass("open");
            $(".introduction").removeClass("introduction-on").addClass("introduction-off");
            $("#menu-mobile").removeClass("activated");
            $("#menu-mobile-caller").removeClass("lines-close");
        }
    });
    // 10.1.1. sign up modal additional CLOSER
    $("#menu-mobile-btn, .menu-nav li a, .menu").on("click", function() {
        $(".sign-up-modal").removeClass("open").addClass("close");
        $(".introduction").removeClass("introduction-off").addClass("introduction-on");
    });
    // 10.2. contact modal
    $(".contact-modal-launcher, .contact-modal-closer").on("click", function() {
        if ($(".contact-modal").hasClass("open")) {
            $(".contact-modal").removeClass("open").addClass("close");
        } else {
            $(".contact-modal").removeClass("close").addClass("open");
            $("#menu-mobile").removeClass("activated");
            $("#menu-mobile-caller").removeClass("lines-close");
        }
    });
    // 10.2.1. contact modal additional CLOSER
    $("#menu-mobile-btn, .menu-nav li a, .menu").on("click", function() {
        $(".contact-modal").removeClass("open").addClass("close");
    });
	
	// 11. YouTube player
    $("#background-video").YTPlayer({
        videoId: "3zXrWmkVjTM", // DEMO URL is: https://www.youtube.com/watch?v=3zXrWmkVjTM
        mute: true,             // options: true, false
        pauseOnScroll: false,
        repeat: true,
        fitToBackground: true,
        playerVars: {
            modestbranding: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            wmode: "transparent",
            branding: 0,
            rel: 0,
            autohide: 0
        }
    });
	
	// 12. slick slider
	// 12.1. slick fullscreen slideshow
    $(".slick-fullscreen-slideshow").slick({
        arrows: true,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 1600,
        draggable: true,
        dots: true,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	
	// 13. swiper slider
    // 13.1. swiper parallax slider
    var swiper = new Swiper(".parallax .swiper-container", {
        autoplay: 4000,
        speed: 800,
        parallax: true,
        mousewheelControl: false,
        keyboardControl: false,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        paginationClickable: true
    });


});
