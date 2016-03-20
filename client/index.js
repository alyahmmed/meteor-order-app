if(Meteor.isClient){
   Meteor.subscribe("Restaurants", function(){
   });
   Meteor.subscribe("Orders", function(){
   });
}
