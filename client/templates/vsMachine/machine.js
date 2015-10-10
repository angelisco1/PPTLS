Template.vsmachine.events({
	'click .rock': function (event) {
		Session.set('resultP', "Rock");
		Meteor.call("play", 1, function(err, res){
			if(!err){
				Session.set('result', res);
			}
		});
	},
	'click .paper': function (event) {
		Session.set('resultP', "Paper");
		Meteor.call('play', 2, function(err,res) {
			if (!err){
				Session.set('result', res);
			}
		});
	},
	'click .scissors': function (event) {
		Session.set('resultP', "Scissors");
		Meteor.call('play', 3, function(err,res) {
			if (!err){
				Session.set('result', res);
			}
		});
	},
	'click .lizard': function (event) {
		Session.set('resultP', "Lizard");
		Meteor.call('play', 4, function(err,res) {
			if (!err){
				Session.set('result', res);
			}
		});
	},
	'click .spock': function (event) {
		Session.set('resultP', "Spock");
		Meteor.call('play', 5, function(err,res) {
			if (!err){
				Session.set('result', res);
			}
		});
	}
});

Template.vsmachine.helpers({
	winner: function(){
		return Session.get('result').res;
	},
	resultPlayer: function(){
		return Session.get('result').p1;
	},
	resultMachine: function(){
		return Session.get('result').p2;
	}
});