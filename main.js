$(document).ready(function () {
	$('.carousel__inner').slick({
			infinite: true,
			speed: 500,
			prevArrow: '<button type="button" class="slick-prev"><img src="build/img/arrow-prev.png"></button>',
			nextArrow: '<button type="button" class="slick-next"><img src="build/img/arrow-next.png"></button>',
	});
});