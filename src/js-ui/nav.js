window.addEventListener('load', function() {
 $(document).ready(function () {

 	function mobile() {
 		return $(window).outerWidth() <= 992;
 	}

 	function desktop() {
 		return $(window).outerWidth() > 992;
 	}

	var $nav = $("#nav"),
		 $firstLevelItems = $nav.find('.nav__top-level__i'),
		 $secondLevelItems = $nav.find('.nav__second-level__i');

	// when the page loads open up the menu and add selected classes if we are inside a screen
 	if( window.location.hash.length > 0 ) {

 		var designatedScreen = $('.nav__second-level__i>a[href*="'+ window.location.hash +'"]');

 		if( designatedScreen.length == 1 ) {
 			designatedScreen.parents('.nav__top-level__i').eq(0).addClass('nav__top-level__i--open');
 			designatedScreen.addClass('nav__second-level__i--selected');
 		}

 	};

	$firstLevelItems.each(function(i, ele) {

		var $navItem = $(ele);

		$navItem.find('.nav__top-level__i__inner').click(function() {
			var alreadyOpen = $navItem.hasClass('nav__top-level__i--open');

			// By clicking on a first level menu item open the navigation panel
			// Remove open class from all first level menu items
			$firstLevelItems.removeClass('nav__top-level__i--open');
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

	});

	$secondLevelItems.click(function() {
		$secondLevelItems.removeClass('nav__second-level__i--selected');
		$(this).addClass('nav__second-level__i--selected');

		if( mobile() ) {
			// On mobile we will close the 2nd level menu
			$(this).parents('.nav__top-level__i').eq(0).removeClass('nav__top-level__i--open');
			// But keep a selected class on 1st level menu item
			// But before that let's remove that class from all 1st level items
			$firstLevelItems.removeClass('nav__top-level__i--selected');
			$(this).parents('.nav__top-level__i').eq(0).addClass('nav__top-level__i--selected');
		}
	});

	$('body').find('#header__home').click(function() {
		$firstLevelItems.removeClass('nav__top-level__i--open');
		$secondLevelItems.removeClass('nav__second-level__i--selected');
	});

 });
});
