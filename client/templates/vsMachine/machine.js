Template.vsmachine.events({
	'click .btn-option': function(event){
		var id = event.currentTarget.attributes.id.value;
		Meteor.call("play", id, function(err, res){
			if(!err){
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
	},
	getDataVsMachineGanadas: function(){
		return Games.findOne({userId: Meteor.userId()}).mode.vsmachine.ganadas || 0;
	},
	getDataVsMachineEmpatadas: function(){
		return Games.findOne({userId: Meteor.userId()}).mode.vsmachine.empatadas || 0;
	},
	getDataVsMachinePerdidas: function(){
		return Games.findOne({userId: Meteor.userId()}).mode.vsmachine.perdidas || 0;
	}
});