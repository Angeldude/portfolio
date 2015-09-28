var main = function(){
$('#projects').hide();
//
$('.about').on('click', function(){
  $('#content').show();
  $('#projects').hide();

});

$('.project').on('click', function(){
  $('#projects').show();
  $('#content').hide();
});

};

$(main);
