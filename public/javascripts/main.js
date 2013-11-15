/*
  Input Form 
*/

$('inputText').on('click',function(){
  $('inputText').datepicker();
});

$('form').on('submit', function(){
    var input = $('#inputText').val();
    $('#list').append('<li>'+input+'<a class="remove">&#10007;</a></li>');
    $('#entry').val('');
    return false;
  });

$('#list').on('click', 'li', function(){
  $(this).toggleClass('completed');
  var completed = true;
  $('#list li').each(function(){
    if($(this).hasClass('completed')) {
      // Do nothing
    } else {
      completed = false;
    }
  });
  if(completed) {
    $('#message').text("This list is done!");
  } else {
    $('#message').text("More to go!");
  }
});

$('#list').on('click', 'a.remove', function(){
  $(this).parent().remove();
});

/*
  Slidemenu
*/

(function() {
	var body = document.body
	, menu_trigger = body.getElementsByClassName('menu-trigger')[0];

	if ( typeof menu_trigger !== 'undefined' ) {
		menu_trigger.addEventListener('click', function() {
			body.className = ( body.className == 'menu-active' )? '' : 'menu-active';
		});
	}

}).call(this);

/*
menu
*/

$('.setting-icon').click(function(){
  $('.sub-menu').slideToggle();
});
