describe("Pizza", function() {
  it("creates a new pizza order with the given properties", function() {
    var newOrder = new Pizza("medium", ["pepperoni", "onions"], "delivery");
    expect(newOrder.pizzaSize).to.equal("medium");
    expect(newOrder.toppingsList).to.eql(["pepperoni", "onions"]);
    expect(newOrder.delivery).to.equal("delivery");
  });
  it("pushes toppings to toppingsList", function() {
    var newOrder = new Pizza("medium", ["pepperoni"], "delivery");
    expect(newOrder.toppingAdder()).to.eql(["pepperoni"]);
  });

  it("add the fullDetails method to new orders", function() {
    var newOrder = new Pizza("medium", ["pepperoni"], "delivery");
    expect(newOrder.fullDetails()).to.equal("medium pizza for delivery with ");
  });
  it("determines the final price of a new pizza order", function() {
    var newOrder = new Pizza("medium", ["pepperoni", "onion", "mushrooms"], "delivery");
    expect(newOrder.pricer()).to.equal(595);
  });
});
