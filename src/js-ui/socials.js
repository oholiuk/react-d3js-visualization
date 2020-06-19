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
