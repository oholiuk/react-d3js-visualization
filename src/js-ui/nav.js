window.addEventListener('load', function() {
 $(document).ready(function () {

	var $nav = $("#nav");

	$nav.find('.nav__top-level__i').each(function(i, ele) {

		var $navItem = $(ele);

		$navItem.find('.nav__top-level__i__inner').click(function() {
			$nav.addClass('nav--open');
			$nav.find('.nav__top-level__i').removeClass('nav__top-level__i--open');
			$navItem.addClass('nav__top-level__i--open');
		});

	});

	$('body').find('#header__home').click(function() {

		$nav.removeClass('nav--open');
		$nav.find('.nav__top-level__i').removeClass('nav__top-level__i--open');

	});

 });
});
