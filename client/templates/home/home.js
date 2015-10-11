Template.home.events({
	'click .vsmachine': function (event) {
	  var pathDef = "/vsmachine";
      var params = {};
      var queryParams = {};
      return FlowRouter.go(pathDef, params, queryParams);
	},
	'click .vsplayer': function (event) {
	  var pathDef = "/vsplayer/:roomId";
	  Meteor.call("getRoomId", function(err, res){
	  	if(!err){
	  		var room = res;
		  	var params = {roomId: room};
	        var queryParams = {};
	        return FlowRouter.go(pathDef, params, queryParams);
	  	}
	  });      
	}
});