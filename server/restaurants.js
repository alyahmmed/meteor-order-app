Meteor.methods({
  'removeRest': function (id) {
    return Restaurants.remove(id);
  },
  'editRest': function (data) {
    return Restaurants.update(data.id, {$set: {
      name: data.name,
      phone: data.phone,
      address: data.address
    }});
  },
  'newRest': function (data) {
    return Restaurants.insert({
      name: data.name,
      phone: data.phone,
      address: data.address,
      createdAt: new Date()
    });
  },
  'sampleData': function(params){
    return Restaurants.insert({
      name: params.name,
      phone: Math.round(Math.random()*100000),
      address: 'cairo',
      createdAt: new Date()
    });
  }
});
