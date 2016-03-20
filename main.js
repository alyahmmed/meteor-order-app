if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

    // first, remove configuration entry in case service is already configured
    Accounts.loginServiceConfiguration.remove({
      service: "facebook"
    });
    Accounts.loginServiceConfiguration.insert({
      service: "facebook",
      appId: "fb-app-id",
      secret: "fb-app-secret"
    });
  });
}
