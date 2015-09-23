var main = function(){
$('#projects').hide();
//
$('.about').on('click', function(){
  $('#content').show(this);
  $('#projects').hide();

});

$('.project').on('click', function(){
  $('#projects').show(this);
  $('#content').hide();
});

};

$(main);
