$('#rt').click(function(){
  $('.settingLinks').slideToggle('easing');
});

$('.add').click(function(){
  $('.input').slideToggle('easing');
});

$('inputText').click(function(){
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

//$('#result').load('ajax/test.html #container');