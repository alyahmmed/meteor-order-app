Meteor.methods({
  'makeOrder': function (data) {
    var rest = Restaurants.findOne(data.rest_id);
    if (rest) {
      return Orders.insert({
        user: {id: Meteor.userId(), name: Meteor.user().profile.name},
        restaurant: {id: rest._id, name: rest.name},
        details: data.details,
        createdAt: new Date()
      });
    }
  }
  ,'testOrder': function (data) {
    return Orders.insert({
      user: {id: Meteor.userId(), name: Meteor.user().profile.name},
      restaurant: {id: 12313, name: 'king pizza'},
      details: data.details,
      createdAt: new Date()
    });
  }
});
