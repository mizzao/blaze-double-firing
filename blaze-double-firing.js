if (Meteor.isClient) {
  Template.hello.greeting = function () {
      greeting = Session.get("greeting");
      console.log("value: " + greeting, "context: " + JSON.stringify(this));
      return greeting;
  };

  Template.hello.events({
    'click button': function () {
	Session.set("greeting", Random.id());
    }
  });

    Meteor.startup(function() {
	Session.set("greeting", Random.id());
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
