function Pizza (pizzaSize, toppingsList, delivery) {
  this.pizzaSize = pizzaSize;
  this.toppingsList = toppingsList;
  this.delivery = delivery;
};

Pizza.prototype.fullDetails = function() {
  return this.pizzaSize + ' with ' + this.toppingsList + " for " + this.delivery;
};
