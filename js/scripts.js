// Business Logic
function Pizza(toppings, size) {
  this.pizzaToppings = toppings;
  this.pizzaSize = size;
}
Pizza.prototype.orderInfo= function () {
  return "So that's a" + this.pizzaSize + this.pizzaToppings + ". Yeah, we'll get right on that.. See you in 4 to 5 hours!" ;
}

Ticket.prototype.getPrice = function () {
  var standardPrice = 10;
  if (this.pizzaToppings.match(/[V]\w+/g)) {
    alert("You're winner!")
  }
//   else if (this.movieTime <= 4) {
//     price /= 2;
//   }
//   else {
//   price *= 2;
//   };
//   return price;
// }

// UI Logic
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var inputtedToppings = $("#pizzaToppings").val();
    var inputtedSize = $("#movieTime").val();
    var pizza = new Pizza (inputtedToppings, inputtedSize);
    $(".output").text(pizza.orderInfo());
    // $(".output").text("<p>" + ticket.allStuff() + "</p>");
    // var price = ticket.getPrice();
    // $(".output").text(price);

  });
});
