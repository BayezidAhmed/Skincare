// side-cart 

var mbcart = document.querySelector('.mb-cart');
var sideShow = document.querySelector('.cart');
var sideMenu = document.querySelector('#side-cart');
var cartArea = document.querySelector('.cart-area');
var body = document.querySelector('body');
var clear = document.querySelector('.cart-close');

mbcart.addEventListener("click", function () {
  sideMenu.classList.add("side-menu-active");
  cartArea.style.marginLeft = "auto";
  cartArea.style.width = "50%";
  body.style.overflow = "hidden";
  clear.style.display = "block"
});

sideShow.addEventListener("click", function () {
  sideMenu.classList.add("side-menu-active");
  cartArea.style.marginLeft = "auto";
  cartArea.style.width = "35%";
  body.style.overflow = "hidden";
  clear.style.display = "block"
});


clear.addEventListener('click', function () {
  sideMenu.classList.remove("side-menu-active");
  cartArea.style.marginLeft = "100%";
  cartArea.style.width = "0";
  body.style.overflowY = "scroll";
  this.style.display = "none"
});



// fixed nav
$(window).scroll(function () {
  var navScroll = $(window).scrollTop();

  if (navScroll >= 150) {
    $("#header").addClass("nav-fixed");
  } else {
    $("#header").removeClass("nav-fixed");
  }

});
(function ($) {

  // preloader start

  setTimeout(function () {
    $('.loader-bg').fadeToggle();
  }, 1500);
  // preloader end

  // Banner Slider 
  function mainSlider() {
    var bannerSlider = $('.slider-active')
    bannerSlider.on('init', function (e, slick) {
      var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
    });
    bannerSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
    });
    bannerSlider.slick({
      autoplay: true,
      autoplaySpeed: 7000,
      dots: true,
      arrows: false,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });

    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $($this).data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    };

  }
  mainSlider();


  // best sell slider
  $(document).ready(function () {
    $('.best-sell-slide').slick({
      prevArrow: '<div class="prevarrow"><i class="fa fa-chevron-left"></i></div>',
      nextArrow: '<div class="nextarrow"><i class="fa fa-chevron-right"></i></div>',
      autoplay: true,
      slidesToShow: 4,
      autoplaySpeed: 3000,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false
          }
        },
      ]
    });
  });


  // top viewed slide
  $(document).ready(function () {
    $('.top-viewed-slide').slick({
      prevArrow: '<div class="prevarrow"><i class="fa fa-chevron-left"></i></div>',
      nextArrow: '<div class="nextarrow"><i class="fa fa-chevron-right"></i></div>',
      autoplay: true,
      autoplaySpeed: 3000
    });
  });

  // gallery slide
  $(document).ready(function () {
    $('.gall-slide').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 4,
      arrows: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }, ]
    });
  });

  // category slide
  $(document).ready(function () {
    $('.cat-slide').slick({
      slidesToShow: 3,
      prevArrow: '<div class="prevarrow"><i class="fa fa-chevron-left"></i></div>',
      nextArrow: '<div class="nextarrow"><i class="fa fa-chevron-right"></i></div>',
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }]
    });
  });



  function screenClass() {
    if ($(window).innerWidth() > 767) {
      $('#remove-cart').addClass('cart');
    } else {
      $('#remove-cart').removeClass('cart');
    }
  }

  // Fire.
  screenClass();

  // And recheck when window gets resized.
  $(window).bind('resize', function () {
    screenClass();
  });


}(jQuery));

// countdown

var countdate = new Date('Jan 31, 2022 00:00:00').getTime();

function newYear() {
  var now = new Date().getTime();
  var gap = countdate - now;

  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  var d = Math.floor(gap / (day));
  var h = Math.floor((gap % (day)) / (hour));
  var m = Math.floor((gap % (hour)) / (minute));
  var s = Math.floor((gap % (minute)) / (second));

  document.getElementById("day").innerText = d;
  document.getElementById("hour").innerText = h;
  document.getElementById("minute").innerText = m;
  document.getElementById("second").innerText = s;
}
setInterval(function () {
  newYear();
}, 1000);


// back to top btn script start
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  var topBtn = document.getElementById("b-to-t");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.right = "50px";
    topBtn.style.opacity = "1";
  } else {
    topBtn.style.opacity = "0";
    topBtn.style.right = "-100px";
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// back to top script end