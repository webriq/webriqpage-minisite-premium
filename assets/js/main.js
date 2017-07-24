$(document).ready(function() {
		  $('[data-sidenav]').sidenav();

		  $(".closebtn").click(function() {
				$("nav").removeClass("show");
		  });

		  var scrolled = $(this).scrollTop();
		  $(".section").filter(function() {
				return scrolled >= $(this).offset().top - 240
		  }).addClass("in-view").trigger("classChange")

		  $('a[href^="#"]').on('click', function(event) {
				var target = $(this.getAttribute('href'));
				if (target.length) {
					 event.preventDefault();
					 $('html, body').stop().animate({
						  scrollTop: target.offset().top
					 }, 800);
				}
		  });

		  $(".buttontween").on("click", function() {
				$(".sidenav-menu").removeClass('show-down');
		  })
		  $("#sidenav-toggle").on('click', function() {
				$('.sidenav-menu').each(function() {
					 var list = $(this).find('li');
					 TweenMax.staggerFromTo(list, 1, {
						  y: "-=50",
						  opacity: "0"
					 }, {
						  y: "0",
						  opacity: "1"
					 }, 0.2);
				})
		  })


		  var toggles = document.querySelectorAll(".c-hamburger");
		  for (var i = toggles.length - 1; i >= 0; i--) {
				var toggle = toggles[i];
				toggleHandler(toggle);
		  };

		  var shrinkHeader = 2;
		  $(window).scroll(function() {
				var scroll = getCurrentScroll();
				if (scroll >= shrinkHeader) {
					 $('.containerheader').addClass('shrink');
				} else {
					 $('.containerheader').removeClass('shrink');
				}
		  });

		  $("#sidenav-toggle").on('click', function() {
				TweenMax.staggerFromTo('.social-sidebar-topright li a', 2, {
					 x: "-=100",
					 opacity: "0"
				}, {
					 x: "0",
					 opacity: "1"
				}, 0.4);
				TweenMax.staggerFromTo('.credentials_nav p', 2, {
					 x: "-=80",
					 opacity: "0"
				}, {
					 x: "0",
					 opacity: "1"
				}, 0.4);
		  })
		  TweenMax.staggerFromTo('#sliderhead .text-det h2', 2, {
				y: "-=50",
				opacity: "0"
		  }, {
				y: "0",
				opacity: "1"
		  }, 0.9);
		  TweenMax.staggerFromTo('#sliderhead .text-det h4', 3, {
				y: "-=50",
				opacity: "0"
		  }, {
				y: "0",
				opacity: "1"
		  }, 0.9);
		  TweenMax.staggerFromTo('#sliderhead .booknw2', 3, {
				y: "+=50",
				opacity: "0"
		  }, {
				y: "0",
				opacity: "1"
		  }, 0.9);


		  $(".section").on("classChange", function(e) {
				TweenMax.staggerFromTo('#aboutdailmore.section h4', 2, {
					 y: "-=50",
					 opacity: "0"
				}, {
					 y: "0",
					 opacity: "1"
				}, 0.4);
				TweenMax.staggerFromTo('#aboutdailmore.section h5', 2, {
					 y: "-=100",
					 opacity: "0"
				}, {
					 y: "0",
					 opacity: "1"
				}, 0.4);
				TweenMax.staggerFromTo('#aboutdailmore.section .dets', 2, {
					 y: "-=40",
					 opacity: "0"
				}, {
					 y: "0",
					 opacity: "1"
				}, 0.4);
				TweenMax.staggerFromTo('#aboutdailmore.section .btnenqr a', 2, {
					 x: "-=50",
					 opacity: "0"
				}, {
					 x: "0",
					 opacity: "1"
				}, 0.4);
				TweenMax.staggerFromTo('#services2.section h3', 2, {
					 y: "-=50",
					 opacity: "0"
				}, {
					 y: "0",
					 opacity: "1"
				}, 0.4);
				TweenMax.staggerFromTo('#services2.section .subttleserv', 2, {
					 y: "-=100",
					 opacity: "0"
				}, {
					 y: "0",
					 opacity: "1"
				}, 0.4);
				TweenMax.staggerFromTo('#services2.section .col-md-3', 2, {
					 y: "-=40",
					 opacity: "0"
				}, {
					 y: "0",
					 opacity: "1"
				}, 0.4);
				TweenMax.staggerFromTo('#coursesoffer.section .detcours2 h4', 2, {
					 y: "-=50",
					 opacity: "0"
				}, {
					 y: "0",
					 opacity: "1"
				}, 0.4);
				TweenMax.staggerFromTo('#coursesoffer.section .detcours2 .det', 2, {
					 y: "-=50",
					 opacity: "0"
				}, {
					 y: "0",
					 opacity: "1"
				}, 0.4);
				TweenMax.staggerFromTo('#blogsec.section .col-md-4 ', 2, {
					 y: "-=50",
					 opacity: "0"
				}, {
					 y: "0",
					 opacity: "1"
				}, 0.4);
				$(this).off(e);
		});


	}) // End of document


function getCurrentScroll() {
	 return window.pageYOffset || document.documentElement.scrollTop;
}

function toggleHandler(toggle) {
	 toggle.addEventListener("click", function(e) {
		  e.preventDefault();
		  (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
	 });
}