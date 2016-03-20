Template.restaurantEdit.events({
  "submit #FormRest": function (event) {
    event.preventDefault();
    var data = {
      id: $('#InputId').val(),
      name: $('#InputName').val(),
      phone: $('#InputPhone').val(),
      address: $('#InputAddress').val()
    };
    if (! data.name || ! data.phone || ! data.address) {
      $('.data-required').show().delay(3000).fadeOut();
    } else {
      if (Meteor.userId()) {
        if (data.id) {
          Meteor.call('editRest', data);
        } else {
          Meteor.call('newRest', data);
        }
      }
      Router.go('/restaurants');
    }
  }
});
