// Business Logic
function Pizza(toppings, size) {
  this.pizzaToppings = toppings;
  this.pizzaSize = size;
}
Pizza.prototype.orderInfo= function () {
  return "So that's a " + this.pizzaSize + this.pizzaToppings + ". Yeah, we'll get right on that.. See you in 4 to 5 hours!" ;
}

Pizza.prototype.getPrice = function () {
  var standardPrice = 10;
  if (this.pizzaToppings.match(/[V]\w+/g)) {
    alert("You're winner!")
  }
  if (this.pizzaToppings.match(/[C]\w+/g)) {
    alert("Cheesey!")
  }
  if (this.pizzaToppings.match(/[Y]\w+/g)) {
    alert("Yep yep yep!")
  }
  if (this.pizzaToppings.match(/[R]\w+/g)) {
    alert("Go have a feast at lunch!")
  }
  else {
    alert("Flyin Hawaiian huh?")
  };
};
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
    var inputtedSize = $("#pizzaSize").val();
    var pizza = new Pizza (inputtedToppings, inputtedSize);
    $(".output").text(pizza.orderInfo());
    // $(".output").text("<p>" + ticket.allStuff() + "</p>");
    // var price = ticket.getPrice();
    // $(".output").text(price);

  });
});
