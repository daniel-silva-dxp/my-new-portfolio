$(window).scroll(function () {
  /* ===============================  fade slideshow  =============================== */

  var scrolled = $(this).scrollTop();
  $(".fixed-slider .caption , .fixed-slider .capt .parlx").css({
    transform: "translate3d(0, " + -(scrolled * 0.2) + "px, 0)",
    opacity: 1 - scrolled / 600,
  });
});

$(function () {
  var wind = $("window");

  wind.scroll(function () {
    var scrollTop = $("html, body").scrollTop();
    console.log(scrollTop, $("#about").offset().top);
    animate(scrollTop);
    if (scrollTop >= 718) {
      $(".about .display h1").addClass("showIn");
      $(".about .display .wrap-title > div").addClass("fadeIn");
      $(".about .display .wrap-title p").addClass("fadeIn");
      $(".about-me").addClass("fadeIn");
      $(".about .container .title").addClass("delayFadeIn");
    } else {
      console.log("Bottom");
    }
  });

  function fullscreen() {
    $(".open-menu").removeAttr("disabled");

    $("div.ds-nav--content").on("click", ".open-menu", function () {
      $(this)
        .addClass("close-menu")
        .removeClass("open-menu")
        .attr("disabled", "disabled");
      $(".container").addClass("blur");
      setTimeout(function () {
        $(".close-menu").removeAttr("disabled");
      }, 1100);
      $(".float-nav").show();
      setTimeout(function () {
        $(".float-nav").addClass("active");
      }, 100);
    });
    function fechaMenu() {
      $(".close-menu")
        .removeClass("close-menu")
        .addClass("open-menu")
        .attr("disabled", "disabled");
      $(".float-nav").removeClass("active");
      setTimeout(function () {
        $(".float-nav").hide();
        $(".open-menu").removeAttr("disabled");
      }, 1100);
    }
    $("div.ds-nav--content").on("click", ".close-menu", function () {
      fechaMenu();
    });
    $(".float-nav ul li").on("click", "a", function () {
      fechaMenu();
    });
  }

  /* ===============================  Mouse effect  =============================== */
  function mousecursor() {
    if ($("body")) {
      const e = document.querySelector(".cursor-inner"),
        t = document.querySelector(".cursor-outer");
      let n,
        i = 0,
        o = !1;
      (window.onmousemove = function (s) {
        o ||
          (t.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (e.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (n = s.clientY),
          (i = s.clientX);
      }),
        $("body").on("mouseenter", "a, .cursor-pointer", function () {
          e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
        }),
        $("body").on("mouseleave", "a, .cursor-pointer", function () {
          ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
            (e.classList.remove("cursor-hover"),
            t.classList.remove("cursor-hover"));
        }),
        (e.style.visibility = "visible"),
        (t.style.visibility = "visible");
    }
  }

  $(function () {
    fullscreen();
    mousecursor();
  });

  /* ===============================  Swiper slider  =============================== */

  var parallaxSlider;
  var parallaxSliderOptions = {
    speed: 1000,
    autoplay: true,
    parallax: true,
    loop: true,

    on: {
      init: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          $(swiper.slides[i])
            .find(".bg-img")
            .attr({
              "data-swiper-parallax": 0.75 * swiper.width,
            });
        }
      },
      resize: function () {
        this.update();
      },
    },

    pagination: {
      el: ".slider-prlx .parallax-slider .swiper-pagination",
      type: "fraction",
      clickable: true,
    },

    navigation: {
      nextEl: ".slider-prlx .parallax-slider .next-ctrl",
      prevEl: ".slider-prlx .parallax-slider .prev-ctrl",
    },
  };
  parallaxSlider = new Swiper(
    ".slider-prlx .parallax-slider",
    parallaxSliderOptions
  );

  var parallaxShowCase;
  var parallaxShowCaseOptions = {
    speed: 1000,
    autoplay: true,
    parallax: true,
    mousewheel: true,
    loop: true,

    on: {
      init: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          $(swiper.slides[i])
            .find(".bg-img")
            .attr({
              "data-swiper-parallax": 0.75 * swiper.width,
            });
        }
      },
      resize: function () {
        this.update();
      },
    },

    pagination: {
      el: ".showcase-full .parallax-slider .swiper-pagination",
      type: "fraction",
      clickable: true,
    },

    navigation: {
      nextEl: ".showcase-full .parallax-slider .next-ctrl",
      prevEl: ".showcase-full .parallax-slider .prev-ctrl",
    },
  };
  parallaxShowCase = new Swiper(
    ".showcase-full .parallax-slider",
    parallaxShowCaseOptions
  );

  var swiperWorkMetro = new Swiper(".metro .swiper-container", {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 1000,
    loop: true,
    centeredSlides: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
    },

    pagination: {
      el: ".metro .swiper-pagination",
      type: "progressbar",
    },

    navigation: {
      nextEl: ".metro .swiper-button-next",
      prevEl: ".metro .swiper-button-prev",
    },
  });

  var swiperWorkCaroul = new Swiper(".caroul .swiper-container", {
    spaceBetween: 0,
    speed: 1000,
    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },

    pagination: {
      el: ".caroul .swiper-pagination",
      type: "progressbar",
    },

    navigation: {
      nextEl: ".caroul .swiper-button-next",
      prevEl: ".caroul .swiper-button-prev",
    },
  });

  var swiperBusImg = new Swiper(".slider-bus .swiper-img", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".slider-bus .next-ctrl",
      prevEl: ".slider-bus .prev-ctrl",
    },
  });

  var swiperBusContent = new Swiper(".slider-bus .swiper-content", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".slider-bus .swiper-pagination",
      type: "fraction",
    },

    navigation: {
      nextEl: ".slider-bus .next-ctrl",
      prevEl: ".slider-bus .prev-ctrl",
    },
  });

  /* ===============================  Var Background image  =============================== */

  var pageSection = $(".bg-img, section");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css(
        "background-image",
        "url(" + $(this).data("background") + ")"
      );
    }
  });

  /* ===============================  skills-circle  =============================== */

  var c4 = $(".skills-circle .skill");
  var myVal = $(this).attr("data-value");

  $(".skills-circle .skill").each(function () {
    c4.circleProgress({
      startAngle: (-Math.PI / 2) * 1,
      value: myVal,
      thickness: 2,
      size: 110,
      fill: { color: "#75dab4" },
    });
  });

  wind.on("scroll", function () {
    $(".skill-progress .progres").each(function () {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      var myVal = $(this).attr("data-value");
      if (bottom_of_window > bottom_of_object) {
        $(this).css({
          width: myVal,
        });
      }
    });
  });
});
