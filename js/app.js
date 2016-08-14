/* $(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
	$('.ryu-still').show();
  });
});

*/

$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})

	.mousedown(function() {
		console.log('Mouse down')
			playHadouken()
			$('.ryu-ready').hide();
			$('.ryu-throwing').show();
			$('.hadouken').finish().show().animate(
        {'left': '300px'},
        500,
        function() {
          $('.hadouken').stop();
          $('.hadouken').hide();
          $('.hadouken').css('left', '-212px');
        }
      );

	// Ryu drops and fires hadouken
	//hadouken noise plays	
	})

	.mouseup(function() {
		console.log("Mouse up")
			$('.ryu-throwing').hide();
			$('.hadouken').hide();
			$('.ryu-ready').show();
	//Ryu returns to ready stance
	})

	$(document).keydown(function(e){
		if (e.keyCode == 88){
			rickrolled();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	})
		.keyup(function(e) {
    if (e.keyCode == 88) {
      $('.ryu-cool').hide();
      $('.ryu-ready').hide();
      $('.ryu-still').show();
    }
  });

});

function playHadouken(){
	$('#playHadouken')[0].volume = 0.5;
	$('#playHadouken')[0].load();
	$('#playHadouken')[0].play();
};
function rickrolled(){
	$('#rickrolled')[0].volume = 0.5;
	$('#rickrolled')[0].load();
	$('#rickrolled')[0].play();
}
