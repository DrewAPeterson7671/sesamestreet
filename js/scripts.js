$('document').ready(function() {
  $('#formOne').submit(function(event){
    //some stuff
    var name1 = $('input#name1').val();
    var name2 = $('input#name2').val();
    var color = $('input#color').val();
    var birthdate = $('input#birthdate').val();

    $('#name1Output').text(name1);
    $('#name2Output').text(name2);
    $('#colorOutput').text(color);
    $('#dateOutput').text(birthdate);
    $('.show').removeClass('show')
    event.preventDefault();
  });
});
