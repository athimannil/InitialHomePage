/*$(function() {
  $('#move-top').click(function() {
    $('html,body').animate({
      scrollTop: 0
    }, 'slow');
  });
});*/
$("#move-top").hide();
// fade in #move-top
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('#move-top').fadeIn();
		} else {
			$('#move-top').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('#move-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		// return false;
	});
});
