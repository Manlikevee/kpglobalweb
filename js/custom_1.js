(function( $ ) {

	"use strict";

	/* Document ready event */
	$( document ).ready(function() {
      
		$(".acc__title").click(function (j) {
			var dropDown = $(this).closest(".acc__card").find(".acc__panel");
			$(this).closest(".acc").find(".acc__panel").not(dropDown).slideUp();
			if ($(this).hasClass("active")) {
				$(this).removeClass("active");
			} else {
				$(this).closest(".acc").find(".acc__title.active").removeClass("active");
				$(this).addClass("active");
			}
			dropDown.stop(!1, !0).slideToggle();
			j.preventDefault();
		});
		
   });
      
}( jQuery ));



document.addEventListener('DOMContentLoaded', function () {
  const fileInput = document.querySelector('input[type="file"]');
  fileInput.addEventListener('change', function () {
    if (!fileInput.files.length) {
      alert("Please select a file."); // or show a custom message near the field
    }
  });
});