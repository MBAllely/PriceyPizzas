// Pizza.prototype.toppingAdder = function(topping) {
//   var toppings = ["pepperoni", "olives", "anchovies", "mushrooms", "green peppers", "onions"];
//   var toppingsList = [];
//   debugger;
//   for (var i = 0; i < toppings.length; i++) {
//     if (toppings[i] = topping) {
//       toppingsList.push(toppings[i])
//     }
//   }
//   return toppingsList;
// };


Pizza.prototype.toppingAdder = function (topping) {
  var pepperoni = { name: "pepperoni"};
  var onions = { name: "onions"};
  var anchovies = { name: "anchovies"};
  var mushrooms = { name: "mushrooms"};
  var peppers = { name: "green peppers"};

  var toppings = [pepperoni, onions, anchovies, mushrooms, peppers]
  var toppingsList = [];
    for (var i = 0; i < toppings.length; i++) {
      if (toppings[i] = topping) {
       this.toppingsList.push(topping[i])
    }
  }debugger;
  return this.toppingsList;
};
