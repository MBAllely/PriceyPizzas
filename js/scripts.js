function Pizza (pizzaSize, toppingsList, delivery) {
  this.pizzaSize = pizzaSize;
  this.toppingsList = toppingsList;
  this.delivery = delivery;

  this.toppingsList = this.toppingAdder();
};

Pizza.prototype.toppingAdder = function(topping) {
  var toppings = ["pepperoni", "olives", "anchovies", "mushrooms", "green peppers", "onions"];
  var toppingsList = [];
  for (var i = 0; i < toppings.length; i++) {
    if (toppings[i] = topping) {
      this.toppingsList.push(toppings[i]);
    }
  }
  return this.toppingsList;
};

Pizza.prototype.fullDetails = function() {
  return this.pizzaSize + ' with ' + this.toppingsList + " for " + this.delivery;
};

Pizza.prototype.pricer = function(){
  var price = 10 //base price = 10

    if (this.pizzaSize === "large") {
    price += 4;
  } else if (this.pizzaSize === "medium") {
    price += 2;
  }

  if (this.toppingsList.length > 3) {
    price += 6;
  } else if (this.toppingsList.length > 2) {
    price += 4;
  }

  if (this.delivery === "delivery") {
    price += 5;
  }

  return price;
};


$(function() {
  $("form.pizza-form").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("select#pizza-size").val();
    var inputtedToppings = $("input:checked").val();
    var inputtedDelivery = $("select#delivery-option").val();

    var newPizza = new Pizza(inputtedSize, inputtedToppings, inputtedDelivery);

    $(".result").text(newPizza.fullDetails() + " with " + inputtedToppings +  " will be $" + newPizza.pricer() + ".00");
  });


})
