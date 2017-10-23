$(document).ready(function() {
  $("#form").submit(function() {

    var color = $("input#color").val();
    var food = $("input#food").val();
    var animal= $("input#animal").val();

    var favorites=[color,food,animal];

    var newArray = []

    newArray.push(favorites[0]);
    newArray.push(favorites[2]);

    $(".newFavorites").text("newArray");

    event.preventDefault();
  });
});
