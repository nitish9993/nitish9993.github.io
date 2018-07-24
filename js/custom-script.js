$(window).load(function() {
    $(".site-loder").delay(2000).fadeOut('slow', function() {
        $('header .header-after').addClass('animated fadeInRight');
        $('header h1').addClass('bounceInLeft');
        $('header .banar a').addClass('bounceInRight');

        /*==================== typed ====================*/
        $(".element").typed({
            strings: ["Blockchain <i> Developer</i>", "And <i> ML Enthusiast</i>"],
            stringsElement: null,
            typeSpeed: 100,
            startDelay: 1000,
            backSpeed: 10,
            backDelay: 500,
            loop: true,
            loopCount: false,
            showCursor: false
        });
    });
});


$(function() {
    $('header .header-after, header h1, header .banar a').css({
        'opacity': '0'
    });

    /*==================== nice scroll ====================*/
     $("html").niceScroll({
        cursorcolor:"#3786ef",
        cursorwidth: "10px",
        cursorborder: 0,
        mousescrollstep: 25,
        cursorborderradius: 6,
        autohidemode: true,
        background: "rgba(0,0,0,0.3)",
        horizrailenabled: false,
        overflowx: false
    });


    /*==================== back to top ====================*/
    $('body').prepend('<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>');

    var amountScrolled = 300;

    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    });
    $('a.back-to-top').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });


    /*==================== Scroll ====================*/
    $("#nav ul li a[href^='#']").on('click', function(e) {

       e.preventDefault();
       var hash = this.hash;

       $('html, body').animate({
           scrollTop: $(hash).offset().top
         }, 500, function(){
           window.location.hash = hash;
         });
    });


    /*==================== Tabbing ====================*/
    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });



    /*==================== about-me ====================*/
    $('#about-me .section-header').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#about-me .section-header h2').addClass('animated fadeInLeft');
            $('#about-me .section-header p').addClass('section-header-subtitle');
        });
    });

    $('#about-me #about-me-left').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#about-me #about-me-left').addClass('animated fadeInLeft');
            $('#about-me #about-me-middle').addClass('animated zoomIn');
            $('#about-me #about-me-right').addClass('animated fadeInRight');
        });
    });

    $('#about-me .row:last').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#about-me .row:last p').addClass('myfadeInUp');
        });
    });

    $('#about-me .row:last a').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#about-me .row:last a:first').addClass('animated bounceInLeft');
            $('#about-me .row:last a:last').addClass('animated bounceInRight');
        });
    });



    /*==================== work-experience ====================*/
    $('#experience .section-header').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#experience .section-header h2').addClass('animated fadeInLeft');
            $('#experience .section-header p').addClass('section-header-subtitle');
        });
    });

    $('#experience ul li:first').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#experience ul li:first').addClass('experienceFadeInLeft');
        });
    });

    $('#experience ul li:eq(1)').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#experience ul li:eq(1)').addClass('experienceFadeInRight');
        });
    });

    $('#experience ul li:eq(2)').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#experience ul li:eq(2)').addClass('experienceFadeInLeft');
        });
    });

    $('#experience ul li:eq(3)').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#experience ul li:eq(3)').addClass('experienceFadeInRight');
        });
    });

    $('#experience ul li:eq(4)').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#experience ul li:eq(4)').addClass('experienceFadeInLeft');
        });
    });

    $('#experience ul li:eq(5)').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#experience ul li:eq(5)').addClass('experienceFadeInRight');
        });
    });



    /*==================== previous-projects ====================*/
    $('#previous-projects').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#previous-projects #client').animateNumber({ number: 10 }, 1000);
            $('#previous-projects #project').animateNumber({ number: 5 }, 1000);
            $('#previous-projects #exp').animateNumber({ number: 5 }, 1000);
            $('#previous-projects #code').animateNumber({ number: 1 }, 1000);

        });
    });



    /*==================== education ====================*/
    $('#education-diploma .section-header').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#education-diploma .section-header h2').addClass('animated fadeInLeft');
            $('#education-diploma .section-header p').addClass('section-header-subtitle');
        });
    });

    $('#education-diploma ul li:first').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#education-diploma ul li:first').addClass('experienceFadeInLeft');
        });
    });

    $('#education-diploma ul li:eq(1)').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#education-diploma ul li:eq(1)').addClass('experienceFadeInRight');
        });
    });

    $('#education-diploma ul li:eq(2)').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#education-diploma ul li:eq(2)').addClass('experienceFadeInLeft');
        });
    });

    $('#education-diploma ul li:eq(3)').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#education-diploma ul li:eq(3)').addClass('experienceFadeInRight');
        });
    });

    $('#education-diploma ul li:eq(4)').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#education-diploma ul li:eq(4)').addClass('experienceFadeInLeft');
        });
    });

    $('#education-diploma ul li:eq(5)').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#education-diploma ul li:eq(5)').addClass('experienceFadeInRight');
        });
    });



    /*==================== technical-skill ====================*/
    $('#technical-skill .section-header').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#technical-skill .section-header h2').addClass('animated fadeInLeft');
            $('#technical-skill .section-header p').addClass('section-header-subtitle');
        });
    });

    $('#technical-skill').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#technical-skill #kata-1').addClass('kata-1');
            $('#technical-skill #kata-2').addClass('kata-2');
            $('#technical-skill #kata-3').addClass('kata-3');
            $('#technical-skill #kata-4').addClass('kata-4');
            $('#technical-skill #kata-5').addClass('kata-5');
            $('#technical-skill #kata-6').addClass('kata-6');
            $('#technical-skill #kata-7').addClass('kata-7');
            $('#technical-skill #kata-8').addClass('kata-8');
            $('#technical-skill #kata-9').addClass('kata-9');
            $('#technical-skill #kata-10').addClass('kata-10');
            $('#technical-skill #kata-11').addClass('kata-11');
            $('#technical-skill #kata-12').addClass('kata-12');

            $('#technical-skill #ml').animateNumber({ number: 70 }, 2000);
            $('#technical-skill #python').animateNumber({ number: 90 }, 2000);
            $('#technical-skill #blockchain').animateNumber({ number: 80 }, 2000);
            $('#technical-skill #django').animateNumber({ number: 90 }, 2000);
            $('#technical-skill #ccc').animateNumber({ number: 95 }, 2000);
            $('#technical-skill #cpp').animateNumber({ number: 90 }, 2000);
            $('#technical-skill #java').animateNumber({ number: 70 }, 2000);
            $('#technical-skill #html').animateNumber({ number: 95 }, 2000);
            $('#technical-skill #csss').animateNumber({ number: 85 }, 2000);
            $('#technical-skill #jasc').animateNumber({ number: 75 }, 2000);
            $('#technical-skill #boots').animateNumber({ number: 95 }, 2000);
            $('#technical-skill #dbs').animateNumber({ number: 90 }, 2000);
        });
    });

    $('#technical-skill').each(function () {
        var $this = $(this);

        $this.appear(function() {

            $('#circle1').circleProgress({
                value: 0.70,
                size: 170,
                thickness: "10",
                fill: {
                    color: "#3786ef"
                },
                emptyFill: "rgba(69,69,70, .5)",
                animation: {
                    duration: 4000
                }
            });

            $('#circle2').circleProgress({
                value: 0.90,
                size: 170,
                thickness: "10",
                fill: {
                    color: "#3786ef"
                },
                emptyFill: "rgba(69,69,70, .5)",
                animation: {
                    duration: 4000
                }
            });

            $('#circle3').circleProgress({
                value: 0.80,
                size: 170,
                thickness: "10",
                fill: {
                    color: "#3786ef"
                },
                emptyFill: "rgba(69,69,70, .5)",
                animation: {
                    duration: 4000
                }
            });

            $('#circle4').circleProgress({
                value: 0.90,
                size: 170,
                thickness: "10",
                fill: {
                    color: "#3786ef"
                },
                emptyFill: "rgba(69,69,70, .5)",
                animation: {
                    duration: 4000
                }
            });

            $('#circle5').circleProgress({
                value: 0.95,
                size: 170,
                thickness: "10",
                fill: {
                    color: "#3786ef"
                },
                emptyFill: "rgba(69,69,70, .5)",
                animation: {
                    duration: 4000
                }
            });

            $('#circle6').circleProgress({
                value: 0.90,
                size: 170,
                thickness: "10",
                fill: {
                    color: "#3786ef"
                },
                emptyFill: "rgba(69,69,70, .5)",
                animation: {
                    duration: 4000
                }
            });

            $('#circle7').circleProgress({
                value: 0.70,
                size: 170,
                thickness: "10",
                fill: {
                    color: "#3786ef"
                },
                emptyFill: "rgba(69,69,70, .5)",
                animation: {
                    duration: 4000
                }
            });

            $('#circle8').circleProgress({
                value: 0.95,
                size: 170,
                thickness: "10",
                fill: {
                    color: "#3786ef"
                },
                emptyFill: "rgba(69,69,70, .5)",
                animation: {
                    duration: 4000
                }
            });
            $('#circle9').circleProgress({
                value: 0.85,
                size: 170,
                thickness: "10",
                fill: {
                    color: "#3786ef"
                },
                emptyFill: "rgba(69,69,70, .5)",
                animation: {
                    duration: 4000
                }
            });
            $('#circle10').circleProgress({
                value: 0.75,
                size: 170,
                thickness: "10",
                fill: {
                    color: "#3786ef"
                },
                emptyFill: "rgba(69,69,70, .5)",
                animation: {
                    duration: 4000
                }
            });
            $('#circle11').circleProgress({
                value: 0.95,
                size: 170,
                thickness: "10",
                fill: {
                    color: "#3786ef"
                },
                emptyFill: "rgba(69,69,70, .5)",
                animation: {
                    duration: 4000
                }
            });
            $('#circle12').circleProgress({
                value: 0.90,
                size: 170,
                thickness: "10",
                fill: {
                    color: "#3786ef"
                },
                emptyFill: "rgba(69,69,70, .5)",
                animation: {
                    duration: 4000
                }
            });

        });
    });



    /*==================== portfolio ====================*/
    $('#portfolio .section-header').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#portfolio .section-header h2').addClass('animated fadeInLeft');
            $('#portfolio .section-header p').addClass('section-header-subtitle');
        });
    });

    $('#portfolio .tab-content .tab-pane').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#portfolio .tab-content .tab-pane .col:nth-child(2n+1)').addClass('galleryanimationleft');
            $('#portfolio .tab-content .tab-pane .col:nth-child(2n+2)').addClass('galleryanimationtop');
            $('#portfolio .tab-content .tab-pane .col:nth-child(3)').addClass('galleryanimationright');
        });
    });

    $('#portfolio .last-row .col').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#portfolio .last-row .col').addClass('animated fadeInUp');
        });
    });



    /*==================== pricing ====================*/
    $('#pricing .section-header').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#pricing .section-header h2').addClass('animated fadeInLeft');
            $('#pricing .section-header p').addClass('section-header-subtitle');
        });
    });

    $('#pricing .col').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#pricing .col').addClass('animated fadeInUp');
        });
    });



    /*==================== testimonial ====================*/
    $('#testimonial .section-header').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#testimonial .section-header h2').addClass('animated fadeInLeft');
            $('#testimonial .section-header p').addClass('section-header-subtitle');
        });
    });

    $('#testimonial .col').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#testimonial .col').addClass('animated fadeInUp');
        });
    });



    /*==================== contact ====================*/
    $('#contact .section-header').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#contact .section-header h2').addClass('animated fadeInLeft');
            $('#contact .section-header p').addClass('section-header-subtitle');
        });
    });

    $('#contact form li').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#contact form li').addClass('animated fadeInUp');
        });
    });



    /*==================== footer ====================*/
    $('footer .col:first').css({
        'opacity': '0'
    });

    $('footer .col:first').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('footer .col:first').addClass('animated fadeInLeft');
        });
    });

/*=============nav bar active=========== */
var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');

      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');

  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);

  return false;
});



    /*==================== parallax ====================*/
    $('.jarallax').jarallax({
            speed: 0.5,
            imgWidth: 1366,
            imgHeight: 900
        });

})
