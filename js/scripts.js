$(document).ready(function() {
  $("#form").submit(function() {

    var color = $("input#color").val();
    var food = $("input#food").val();
    var animal= $("input#animal").val();

    var favorites=[color,food,animal];

    var newArray = []

    newArray.push(favorites[0]);
    newArray.push(favorites[2]);

    // $(".newFavorites").text("newArray");

    var item1 = newArray[0];
    var item2 = newArray[1];

    // $("ul#items").text("item1");
    $("li#item1").text(item1);
    $("li#item2").text(item2);
    $(".hide").show();





    event.preventDefault();
  });
});
