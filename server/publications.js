if (Meteor.isServer) {
  Meteor.publish("Restaurants", function () {
    return Restaurants.find();
  });
  Meteor.publish("Orders", function () {
    return Orders.find();
  });
}
