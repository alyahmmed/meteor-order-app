Template.restaurants.helpers({
  rests: function () {
    return Restaurants.find({});
  }
});

Template.restaurants.events({
  "click .edit-rest,.new-rest": function (event) {
    if (! Meteor.userId()) {
      event.preventDefault();
      $('.user-access').show().delay(3000).fadeOut();
    }
  },
  "click .remove-rest": function (event) {
    if (!! Meteor.userId()) {
      id = $(event.target).data('id');
      Meteor.call('removeRest', id);
    } else {
      $('.user-access').show().delay(3000).fadeOut();
    }
  },
});
