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
