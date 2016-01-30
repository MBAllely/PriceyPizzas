function Pizza (pizzaSize, toppingsList, delivery) {
  this.pizzaSize = pizzaSize;
  this.toppingsList = toppingsList;
  this.delivery = delivery;

  this.toppingsList = this.toppingAdder();
};

Pizza.prototype.toppingAdder = function(topping) {
  var toppings = ["saffron", "caviar", "truffle", "kobe", "mushrooms"];
  var toppingsList = ["nil"];
  for (var i = 1; i < toppings.length; i++) {
    if (toppings[i] = topping) {
      this.toppingsList.push(toppings[i]);
    }
  }
  return this.toppingsList;
};

Pizza.prototype.fullDetails = function() { //returns full details
  return this.pizzaSize + " pizza for " + this.delivery + " with ";
};

Pizza.prototype.pricer = function(){
  var price = 500 //base price = 500
    if (this.pizzaSize === "large") {
    price += 50;
  } else if (this.pizzaSize === "medium") {
    price += 25;
  }

  if (this.toppingsList.length > 4) {
    price += 40;
  } else if (this.toppingsList.length > 3) {
    price += 30;
  } else if (this.toppingsList.length > 2) {
    price += 20;
  } else if (this.toppingsList.length > 1) {
    price += 10;
  }

  if (this.delivery === "delivery") {
    price += 50;
  }

  return price;
};


$(document).ready(function() {
  $("form.pizza-form").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("select#pizza-size").val();
    var inputtedToppings = [];
      $('#checkboxes input:checked').each(function() {
        inputtedToppings.push($(this).attr('value'));
      });
    var inputtedDelivery = $("select#delivery-option").val();

    var newPizza = new Pizza(inputtedSize, inputtedToppings, inputtedDelivery);

    $("#result").show();
    $(".result").text(newPizza.fullDetails() + inputtedToppings.join(" & ") +  " will be $" + newPizza.pricer() + ".00");
  });


})
