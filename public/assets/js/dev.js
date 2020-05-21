window.addEventListener('load', function() {
 $(document).ready(function () {

 	// Copy to clipboard functionality
 	$('#temp-id-ctc').click(function() {
 		$('#temp-id-textinput').get(0).select();
 		$('#temp-id-textinput').get(0).setSelectionRange(0, 99999);
 		document.execCommand("copy");
 	});

 });
});

window.addEventListener('load', function() {
 $(document).ready(function () {

 	

 });
});

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

window.addEventListener('load', function() {
 $(document).ready(function () {

 		function openSocialPopup(platform){
			var e = "";
			switch(platform){
				case "fb":
				e = "https://www.facebook.com/sharer/sharer.php?u="+window.location.href;
				break;
				case "tw":
				e = "https://twitter.com/intent/tweet?text="+ $('meta[name="twitter:description"]').attr('content');
				break;
			}
			var i = window.screenX + (window.outerWidth - 650) / 2,
				a = window.screenY + (window.outerHeight - 500) / 2,
				r = "width=650,height=500,left=" + i + ",top=" + a + ",status=no,resizable=yes,toolbar=no,menubar=no,scrollbars=yes",
				l = window.open(e, "sharePopup" + Math.random(), r);
			return l;
		}

	 	$wrap = $('#share');

	 	$wrap.find('.share__i--facebook').click(function() {
	 		openSocialPopup('fb');
	 	});

	 	$wrap.find('.share__i--twitter').click(function() {
	 		openSocialPopup('tw');
	 	});

 });
});

(function() {

	String.prototype.replaceAll = function(search, replacement) {
		var target = this;
		return target.replace(new RegExp(search, 'g'), replacement);
	};

	if( typeof jQuery == 'object' ) {
		jQuery.fn.outerHTML = function(s) {
		    return s
		        ? this.before(s).remove()
		        : jQuery("<p>").append(this.eq(0).clone()).html();
		};
	}

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYmVkLXBvcHVwLmpzIiwiZ2xvYmFsLmpzIiwibmF2LmpzIiwic29jaWFsLmpzIiwidXRpbGl0aWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiBcdC8vIENvcHkgdG8gY2xpcGJvYXJkIGZ1bmN0aW9uYWxpdHlcbiBcdCQoJyN0ZW1wLWlkLWN0YycpLmNsaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHQkKCcjdGVtcC1pZC10ZXh0aW5wdXQnKS5nZXQoMCkuc2VsZWN0KCk7XG4gXHRcdCQoJyN0ZW1wLWlkLXRleHRpbnB1dCcpLmdldCgwKS5zZXRTZWxlY3Rpb25SYW5nZSgwLCA5OTk5OSk7XG4gXHRcdGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiBcdH0pO1xuXG4gfSk7XG59KTtcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gXHRcblxuIH0pO1xufSk7XG4iLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuXHR2YXIgJG5hdiA9ICQoXCIjbmF2XCIpO1xuXG5cdCRuYXYuZmluZCgnLm5hdl9fdG9wLWxldmVsX19pJykuZWFjaChmdW5jdGlvbihpLCBlbGUpIHtcblxuXHRcdHZhciAkbmF2SXRlbSA9ICQoZWxlKTtcblxuXHRcdCRuYXZJdGVtLmZpbmQoJy5uYXZfX3RvcC1sZXZlbF9faV9faW5uZXInKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdCRuYXYuYWRkQ2xhc3MoJ25hdi0tb3BlbicpO1xuXHRcdFx0JG5hdi5maW5kKCcubmF2X190b3AtbGV2ZWxfX2knKS5yZW1vdmVDbGFzcygnbmF2X190b3AtbGV2ZWxfX2ktLW9wZW4nKTtcblx0XHRcdCRuYXZJdGVtLmFkZENsYXNzKCduYXZfX3RvcC1sZXZlbF9faS0tb3BlbicpO1xuXHRcdH0pO1xuXG5cdH0pO1xuXG5cdCQoJ2JvZHknKS5maW5kKCcjaGVhZGVyX19ob21lJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cblx0XHQkbmF2LnJlbW92ZUNsYXNzKCduYXYtLW9wZW4nKTtcblx0XHQkbmF2LmZpbmQoJy5uYXZfX3RvcC1sZXZlbF9faScpLnJlbW92ZUNsYXNzKCduYXZfX3RvcC1sZXZlbF9faS0tb3BlbicpO1xuXG5cdH0pO1xuXG4gfSk7XG59KTtcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gXHRcdGZ1bmN0aW9uIG9wZW5Tb2NpYWxQb3B1cChwbGF0Zm9ybSl7XG5cdFx0XHR2YXIgZSA9IFwiXCI7XG5cdFx0XHRzd2l0Y2gocGxhdGZvcm0pe1xuXHRcdFx0XHRjYXNlIFwiZmJcIjpcblx0XHRcdFx0ZSA9IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9XCIrd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwidHdcIjpcblx0XHRcdFx0ZSA9IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD1cIisgJCgnbWV0YVtuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiXScpLmF0dHIoJ2NvbnRlbnQnKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR2YXIgaSA9IHdpbmRvdy5zY3JlZW5YICsgKHdpbmRvdy5vdXRlcldpZHRoIC0gNjUwKSAvIDIsXG5cdFx0XHRcdGEgPSB3aW5kb3cuc2NyZWVuWSArICh3aW5kb3cub3V0ZXJIZWlnaHQgLSA1MDApIC8gMixcblx0XHRcdFx0ciA9IFwid2lkdGg9NjUwLGhlaWdodD01MDAsbGVmdD1cIiArIGkgKyBcIix0b3A9XCIgKyBhICsgXCIsc3RhdHVzPW5vLHJlc2l6YWJsZT15ZXMsdG9vbGJhcj1ubyxtZW51YmFyPW5vLHNjcm9sbGJhcnM9eWVzXCIsXG5cdFx0XHRcdGwgPSB3aW5kb3cub3BlbihlLCBcInNoYXJlUG9wdXBcIiArIE1hdGgucmFuZG9tKCksIHIpO1xuXHRcdFx0cmV0dXJuIGw7XG5cdFx0fVxuXG5cdCBcdCR3cmFwID0gJCgnI3NoYXJlJyk7XG5cblx0IFx0JHdyYXAuZmluZCgnLnNoYXJlX19pLS1mYWNlYm9vaycpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHQgXHRcdG9wZW5Tb2NpYWxQb3B1cCgnZmInKTtcblx0IFx0fSk7XG5cblx0IFx0JHdyYXAuZmluZCgnLnNoYXJlX19pLS10d2l0dGVyJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdCBcdFx0b3BlblNvY2lhbFBvcHVwKCd0dycpO1xuXHQgXHR9KTtcblxuIH0pO1xufSk7XG4iLCIoZnVuY3Rpb24oKSB7XG5cblx0U3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlQWxsID0gZnVuY3Rpb24oc2VhcmNoLCByZXBsYWNlbWVudCkge1xuXHRcdHZhciB0YXJnZXQgPSB0aGlzO1xuXHRcdHJldHVybiB0YXJnZXQucmVwbGFjZShuZXcgUmVnRXhwKHNlYXJjaCwgJ2cnKSwgcmVwbGFjZW1lbnQpO1xuXHR9O1xuXG5cdGlmKCB0eXBlb2YgalF1ZXJ5ID09ICdvYmplY3QnICkge1xuXHRcdGpRdWVyeS5mbi5vdXRlckhUTUwgPSBmdW5jdGlvbihzKSB7XG5cdFx0ICAgIHJldHVybiBzXG5cdFx0ICAgICAgICA/IHRoaXMuYmVmb3JlKHMpLnJlbW92ZSgpXG5cdFx0ICAgICAgICA6IGpRdWVyeShcIjxwPlwiKS5hcHBlbmQodGhpcy5lcSgwKS5jbG9uZSgpKS5odG1sKCk7XG5cdFx0fTtcblx0fVxuXG59KSgpOyJdfQ==
