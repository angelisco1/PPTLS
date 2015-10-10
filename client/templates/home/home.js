Template.home.events({
	'click .vsmachine': function (event) {
	  var pathDef = "/vsmachine";
      var params = {};
      var queryParams = {};
      return FlowRouter.go(pathDef, params, queryParams);
	},
	'click .vsplayer': function (event) {
	  var pathDef = "/vsplayer";
      var params = {};
      var queryParams = {};
      return FlowRouter.go(pathDef, params, queryParams);
	}
});