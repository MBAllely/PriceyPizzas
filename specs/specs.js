
describe("Pizza", function() {
  it("creates a new pizza order with the given properties", function() {
    var newOrder = new Pizza("medium", ["pepperoni"], "delivery");
    expect(newOrder.pizzaSize).to.equal("medium");
    expect(newOrder.toppingsList).to.eql(["pepperoni"]);
    expect(newOrder.delivery).to.equal("delivery");
  });
  it("add the fullDetails method to new orders", function() {
    var newOrder = new Pizza("medium", ["pepperoni"], "delivery");
    expect(newOrder.fullDetails()).to.equal("medium with pepperoni for delivery");
  });
  it("determines the final price of a new pizza order", function() {
    var newOrder = new Pizza("medium", ["pepperoni"], "delivery");
    expect(newOrder.pricer()).to.equal(17);
  });
});
