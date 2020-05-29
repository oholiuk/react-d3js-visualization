window.addEventListener('load', function() {
 $(document).ready(function () {

 	function mobile() {
 		return $(window).outerWidth() <= 992;
 	}

 	function desktop() {
 		return $(window).outerWidth() > 992;
 	}

	var $nav = $("#nav");

	$nav.find('.nav__top-level__i').each(function(i, ele) {

		var $navItem = $(ele);

		$navItem.find('.nav__top-level__i__inner').click(function() {
			var alreadyOpen = $navItem.hasClass('nav__top-level__i--open');

			// By clicking on a first level menu item open the navigation panel
			$nav.addClass('nav--open');
			// Remove open class from all first level menu items
			$nav.find('.nav__top-level__i').removeClass('nav__top-level__i--open');
			// Add open class to the clicked menu item - the functionality should be toggling for mobile
			if( mobile() ) {
				if( !alreadyOpen ) {
					$navItem.addClass('nav__top-level__i--open');
				}
			}
			else {
				$navItem.addClass('nav__top-level__i--open');
			}
		});

		$navItem.find('.nav__second-level .nav__second-level__i').click(function() {
			if( mobile() ) {
				// On mobile we will close the 2nd level menu
				$navItem.removeClass('nav__top-level__i--open');
				// But keep a selected class on 1st level menu item
				// But before that let's remove that class from all 1st level items
				$nav.find('.nav__top-level__i').removeClass('nav__top-level__i--selected');
				$navIem.addClass('nav__top-level__i--selected');
			}
		});

	});

	$('body').find('#header__home').click(function() {
		$nav.removeClass('nav--open');
		$nav.find('.nav__top-level__i').removeClass('nav__top-level__i--open');
	});

 });
});
