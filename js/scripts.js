// Business Logic
function Pizza(toppings, size, toppingsPrice, sizePrice) {
  this.pizzaToppings = toppings;
  this.pizzaSize = size;
}
Pizza.prototype.orderInfo= function () {
  return "So that's a " + this.pizzaSize + " " + this.pizzaToppings + ". Yeah, we got it. See you in 4 to 5 hours. ";
}

Pizza.prototype.toppingsPrice = function () {
  var price = 10;
  if (this.pizzaToppings.match(/[V]\w+/g)) {
    price += 2
    alert("Our seaweed is toxic!")
  }
  else if (this.pizzaToppings.match(/[C]\w+/g)) {
    alert("Cheesy!")
    price -= 2
  }
  else if (this.pizzaToppings.match(/[Y]\w+/g)) {
    alert("Yep yep yep!")
  }
  else if (this.pizzaToppings.match(/[R]\w+/g)) {
    alert("Have a feast for lunch or dinner!")
    price += 4
  }
  else {
    alert("Flyin Hawaiian huh?")
    price += 3
  };
  return price;
};

Pizza.prototype.sizePrice = function () {
  var price2 = 10
  if (this.pizzaSize.match(/[X]\w+/g)) {
    price2 += 20
    alert("Feeds 35 people-- It's 5 square feet!")
  }
  else if (this.pizzaSize.match(/[L]\w+/g)) {
    price2 += 5
    alert("Good choice; there'll be leftovers.")
  }
  else if (this.pizzaSize.match(/[M]\w+/g)) {
    alert("It's gonna be hot hot hot!")
  }
  else if (this.pizzaSize.match(/[S]\w+/g)) {
    alert("Classic Dio sized!")
    price2 -= 4
  }
  else {
    alert("Flyin Hawaiian huh?")
    price2 += 3
  };
  return price2;
};

// UI Logic
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var inputtedToppings = $("#pizzaToppings").val();
    var inputtedSize = $("#pizzaSize").val();
    var sizePrice = $("#pizzaSize").val();
    var pizza = new Pizza (inputtedToppings, inputtedSize);
    $(".output").text(pizza.orderInfo());
    $(".output").append("Oh.. and that'll be $" + ((pizza.toppingsPrice() + pizza.sizePrice()) - 10));

  });
});
