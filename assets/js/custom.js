(function($) {
  "use strict";
  var WEA = {};
  var plugin_track = 'assets/vendor/';
  $.fn.exists = function() {
      return this.length > 0;
  };

  /* ---------------------------------------------- /*
   * Pre load �������أ�http://www.bootstrapmb.com
  /* ---------------------------------------------- */
  WEA.PreLoad = function() {
      document.getElementById("loading").style.display = "none";
  }

  /*--------------------
    * Menu
  ----------------------*/
  WEA.MenuTogglerClose = function() {
    $(".mobile_toggle").on('click', function(){
        $(this).toggleClass('open');
        $('.main-header').stop().toggleClass('menu-open menu-open-desk');
    });
    $('.main-header a, .hl_menu_close').on('click', function() {
        var toggle = $('.mobile_toggle').is(':visible');
        if (toggle) {
            $('.main-header').removeClass('menu-open');
            $('.mobile_toggle').removeClass('open');
        }
    });
    }

  /* ---------------------------------------------- /*
   * Header Fixed
  /* ---------------------------------------------- */
  WEA.HeaderFixd = function() {
      var HscrollTop = $(window).scrollTop();
      if (HscrollTop >= 100) {
          $('body').addClass('fixed-header');
      } else {
          $('body').removeClass('fixed-header');
      }
  }


  /*--------------------
  * OwlSlider
  ----------------------*/
  WEA.Owl = function() {
      var owlslider = $("div.owl-carousel");
      if (owlslider.length > 0) {
          loadScript(plugin_track + 'owl-carousel/js/owl.carousel.min.js', function() {
              owlslider.each(function() {
                  var $this = $(this),
                      $items = ($this.data('items')) ? $this.data('items') : 1,
                      $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
                      $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
                      $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
                      $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
                      $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
                      $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
                      $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
                      $CenterSlider = ($this.data('center')) ? $this.data('center') : false,
                      $space = ($this.attr('data-space')) ? $this.data('space') : 30;

                  $(this).owlCarousel({
                      loop: $loop,
                      items: $items,
                      responsive: {
                          0: { items: $this.data('xs-items') ? $this.data('xs-items') : 1 },
                          480: { items: $this.data('sm-items') ? $this.data('sm-items') : 1 },
                          768: { items: $this.data('md-items') ? $this.data('md-items') : 1 },
                          980: { items: $this.data('lg-items') ? $this.data('lg-items') : 1 },
                          1200: { items: $items }
                      },
                      dots: $navdots,
                      autoplayTimeout: $autospeed,
                      smartSpeed: $smartspeed,
                      autoHeight: $autohgt,
                      center: $CenterSlider,
                      margin: $space,
                      nav: $navarrow,
                      navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
                      autoplay: $autoplay,
                      autoplayHoverPause: true
                  });
              });
          });
      }
  }

  /* ---------------------------------------------- /*
     * lightbox gallery
    /* ---------------------------------------------- */
  WEA.Gallery = function() {
      if ($(".lightbox-gallery").exists() || $(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
          loadScript(plugin_track + 'magnific/jquery.magnific-popup.min.js', function() {
              if ($(".lightbox-gallery").exists()) {
                  $('.lightbox-gallery').magnificPopup({
                      delegate: '.gallery-link',
                      type: 'image',
                      tLoading: 'Loading image #%curr%...',
                      mainClass: 'mfp-fade',
                      fixedContentPos: true,
                      closeBtnInside: false,
                      gallery: {
                          enabled: true,
                          navigateByImgClick: true,
                          preload: [0, 1] // Will preload 0 - before current, and 1 after WEA current image
                      }
                  });
              }
              if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
                  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                      disableOn: 700,
                      type: 'iframe',
                      mainClass: 'mfp-fade',
                      removalDelay: 160,
                      preloader: false,
                      fixedContentPos: false
                  });
              }
              if ($(".px_modal").exists()) {
                  $('.px_modal').magnificPopup({
                      type: 'inline',
                      midClick: true,
                      mainClass: 'mfp-fade'
                  });
              }
          });
      }
  }

  /*--------------------
  * Masonry
  ----------------------*/
  WEA.masonry = function() {
      var portfolioWork = $('.portfolio-content');
      if ($(".portfolio-content").exists()) {
          loadScript(plugin_track + 'isotope/isotope.pkgd.min.js', function() {
              if ($(".portfolio-content").exists()) {
                  $(portfolioWork).isotope({
                      resizable: false,
                      itemSelector: '.grid-item',
                      layoutMode: 'masonry',
                      filter: '*'
                  });
                  //Filtering items on portfolio.html
                  var portfolioFilter = $('.filter li');
                  // filter items on button click
                  $(portfolioFilter).on('click', function() {
                      var filterValue = $(this).attr('data-filter');
                      portfolioWork.isotope({ filter: filterValue });
                  });
                  //Add/remove class on filter list
                  $(portfolioFilter).on('click', function() {
                      $(this).addClass('active').siblings().removeClass('active');
                  });
              }
          });
      }
  }


  /*--------------------
      * Type It
  ----------------------*/
  WEA.mTypeIt = function() {
      if ($("#type-it").exists()) {
          loadScript(plugin_track + 'typeit-master/typeit.js', function() {
              new TypeIt('#type-it', {
                  speed: 200,
                  loop: true,
                  strings: [
                      'Full-stack Developer',
                      'UX/UI Designer',
                      'Freelancer'
                  ],
                  breakLines: false
              });
          });
      }
  }
  WEA.one_page = function() {
      //var HHeight = $('.navbar').outerHeight();
      var $one_page_nav = $('.one-page-nav');
      if ($one_page_nav.length > 0) {
          $one_page_nav.each(function() {
              $.scrollIt({
                  upKey: 38, // key code to navigate to the next section
                  downKey: 40, // key code to navigate to the previous section
                  easing: 'linear', // the easing function for animation
                  scrollTime: 600, // how long (in ms) the animation takes
                  activeClass: 'active', // class given to the active nav element
                  onPageChange: null, // function(pageIndex) that is called when page is changed
                  topOffset: -40 // offste (in px) for fixed top navigation
              });
          });
      }
  }

    //Progress Bar
    WEA.ProgressBar = function(){
        $(".skill-bar .skill-bar-in").each(function () {
        var bottom_object = $(this).offset().top + $(this).outerHeight();
        var bottom_window = $(window).scrollTop() + $(window).height();
        var progressWidth = $(this).attr('aria-valuenow') + '%';
        if(bottom_window > bottom_object) {
            $(this).css({
            width : progressWidth
            });
        }
        });
    }



  /* ---------------------------------------------- /*
   * All Functions
  /* ---------------------------------------------- */
  // loadScript
  var _arr = {};

  function loadScript(scriptName, callback) {
      if (!_arr[scriptName]) {
          _arr[scriptName] = true;
          var body = document.getElementsByTagName('body')[0];
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = scriptName;
          // WEAn bind WEA event to WEA callback function
          // WEAre are several events for cross browser compatibility
          // script.onreadystatechange = callback;
          script.onload = callback;
          // fire WEA loading
          body.appendChild(script);
      } else if (callback) {
          callback();
      }
  };

  // Window on Load
  $(window).on("load", function() {
      WEA.masonry(),
          WEA.PreLoad();
  });
  // Document on Ready
  $(document).ready(function() {
      WEA.HeaderFixd(),
          WEA.MenuTogglerClose(),
          WEA.Gallery(),
          WEA.mTypeIt(),
          WEA.one_page(),
          WEA.ProgressBar(),
          WEA.Owl();
  });

  // Document on Scrool
  $(window).on("scroll", function() {
    WEA.ProgressBar(),
      WEA.HeaderFixd();
  });

  // Window on Resize
  $(window).on("resize", function() {});


})(jQuery);