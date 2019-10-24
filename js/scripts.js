$('document').ready(function() {
  $('#formOne').submit(function(event){
    //some stuff
    var name1 = $('input#name1').val();
    var name2 = $('input#name2').val();
    var color = $('input#color').val();
    var birthdate = $('input#birthdate').val();
    var pet = $('select#pet').val();
    var iceCream = $('select#iceCream').val();

    $('#name1Output').text(name1);
    $('#name2Output').text(name2);
    $('#colorOutput').text(color);
    $('#dateOutput').text(birthdate);
    $('#petOutput').text(pet);
    $('#iceCreamOutput').text(iceCream);
    $('.show').removeClass('show');

    if (pet === "Dog" && iceCream === "Chocolate") {
      $('.finalSesame').text("Cookie Monster");
    } else if (pet === "Dog" && iceCream === "Strawberry") {
      $('.finalSesame').text("Big Bird");
    } else if (pet === "Cat" && iceCream === "Chocolate") {
      $('.finalSesame').text("Kermit The Frog");
    } else if (pet === "Cat" && iceCream === "Strawberry") {
      $('.finalSesame').text("Grover");
    } else if (pet === "Bird" && iceCream === "Chocolate") {
      $('.finalSesame').text("Oscar The Grouch");
    } else if (pet === "Bird" && iceCream === "Strawberry") {
      $('.finalSesame').text("Elmo");
    } else {
      $('.finalSesame').text("It's Broken"); 
    }

        event.preventDefault();
  });
});
