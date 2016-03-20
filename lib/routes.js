Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function () {
  this.render('home');
});

// Orders
Router.route('/orders');
Router.route('/order');

// Restaurants
Router.route('/restaurants');
Router.route('/restaurants/new', function () {
  if (!! Meteor.userId()) {
    this.render('restaurantEdit');
  } else {
    this.redirect('/restaurants');
  }
});
Router.route('/restaurants/:_id/edit', function () {
  if (!! Meteor.userId()) {
    var item = Restaurants.findOne(this.params._id);
    this.render('restaurantEdit', {data: item});
  } else {
    this.redirect('/restaurants');
  }
});
