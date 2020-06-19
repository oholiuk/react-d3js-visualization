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