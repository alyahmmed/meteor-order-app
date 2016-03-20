Template.order.helpers({
  rests: function () {
    return Restaurants.find({});
  }
});

Template.order.events({
  "submit #FormOrder": function (event) {
    event.preventDefault();
    var data = {
      rest_id: $('#InputRestId').val(),
      details: $('#InputDetails').val(),
    };
    if (data.rest_id == '0' || ! data.details) {
      $('.data-required').show().delay(3000).fadeOut();
    } else {
      if (Meteor.userId()) {
        Meteor.call('makeOrder', data);
      }
      Router.go('/orders');
    }
  }
});
