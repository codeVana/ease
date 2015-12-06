CheckinLog = new Mongo.Collection("checkin");
NotifyLog = new Mongo.Collection("notify");
UsageLog = new Mongo.Collection("usage");
if (Meteor.isClient) {

  Template.checkin.events({
    'submit .feelings': function(event){
      event.preventDefault();

      var physically = event.target.physical.value;
      var emotionally = event.target.emotional.value;

      console.log("Form submitted");
      console.log(physically);
      console.log(emotionally);
      CheckinLog.insert({
        physical: physically,
        emotional: emotionally,
        createdAt: new Date(),            // current time
        owner: Meteor.userId(),           // _id of logged in user
        //username: Meteor.user().username  // username of logged in user
      });

      if (physically > 6 || emotionally > 6){
          window.location = "ease.html#needhelp";
      } else {
          window.location = "#practice";
      }

      event.target.physical.value = 5;
      event.target.emotional.value = 5;
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
