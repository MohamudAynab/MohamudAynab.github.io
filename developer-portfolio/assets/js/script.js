// @ts-nocheck

$(document).ready(function () {
	$(window).scroll(function () {
		// sticky navbar on scroll script
		if (this.scrollY > 20) {
			$('.navbar').addClass('sticky');
		} else {
			$('.navbar').removeClass('sticky');
		}

		// scroll-up button show/hide script
		if (this.scrollY > 500) {
			$('.scroll-up-btn').addClass('show');
		} else {
			$('.scroll-up-btn').removeClass('show');
		}
	});

	// slide-up script
	$('.scroll-up-btn').click(function () {
		$('html').animate({ scrollTop: 0 });
		// removing smooth scroll on slide-up button click
		$('html').css('scrollBehavior', 'auto');
	});

	$('.navbar .menu li a').click(function () {
		// applying again smooth scroll on menu items click
		$('html').css('scrollBehavior', 'smooth');
	});

	// toggle menu/navbar script
	$('.menu-btn').click(function () {
		$('.navbar .menu').toggleClass('active');
		$('.menu-btn i').toggleClass('active');
	});

	// typing text animation script
	var typed = new Typed('.typing', {
		strings: ['Front-End Developer', 'Blogger', 'Designer', 'Freelancer'],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true,
	});

	var typed = new Typed('.typing-2', {
		strings: [
			'Tech Enthusiast',
			'Cyber Explorer',
			'Constant Learner',
			'Content Contributor',
		],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true,
	});

	// owl carousel script
	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplay: true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			600: {
				items: 2,
				nav: false,
			},
			1000: {
				items: 3,
				nav: false,
			},
		},
	});
	initializeParticles();
});

function initializeParticles() {
	particlesJS('particles-bg', {
		particles: {
			number: { value: 80, density: { enable: true, value_area: 800 } },
			color: { value: '#ffffff' },
			shape: {
				type: 'circle',
				stroke: {
					width: 0,
					color: '#000000}',
					polygon: { nb_sides: 5 },
					image: { src: 'img/github.svg', width: 100, height: 100 },
				},
				opacity: {
					value: 0.5,
					random: false,
					anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
				},
				size: {
					value: 3,
					random: true,
					anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
				},
				line_linked: {
					enable: true,
					distance: 150,
					color: '#ee6907',
					opacity: 0.4,
					width: 1,
				},
				move: {
					enable: true,
					speed: 6,
					direction: 'none',
					random: false,
					straight: false,
					out_mode: 'out',
					bounce: false,
					attract: { enable: false, rotateX: 600, rotateY: 1200 },
				},
			},
			interactivity: {
				detect_on: 'canvas',
				events: {
					onhover: { enable: true, mode: 'repulse' },
					onclick: { enable: true, mode: 'push' },
					resize: true,
				},
				modes: {
					grab: { distance: 400, line_linked: { opacity: 1 } },
					bubble: {
						distance: 400,
						size: 40,
						duration: 2,
						opacity: 8,
						speed: 3,
					},
					repulse: { distance: 200, duration: 0.4 },
					push: { particles_nb: 4 },
					remove: { particles_nb: 2 },
				},
			},
			retina_detect: true,
		},
	});
}
