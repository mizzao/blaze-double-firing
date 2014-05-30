if (Meteor.isClient) {
  Template.hello.foo = function () {
      foo = Session.get("foo");
      console.log("foo value: " + foo, "context: " + JSON.stringify(this));
      return foo;
  };

    Template.hello.bar = function () {
      bar = Session.get("bar");
      console.log("bar value: " + bar, "context: " + JSON.stringify(this));
      return bar;	
    };

  Template.hello.events({
    'click .changefoo': function () {
	Session.set("foo", Random.id());
    },
    'click .changebar': function () {
	Session.set("bar", Random.id());
    },
      'click .changeboth': function() {
	Session.set("foo", Random.id());
	Session.set("bar", Random.id());
      }
  });

    Meteor.startup(function() {
	Session.set("foo", Random.id());
	Session.set("bar", Random.id());
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
