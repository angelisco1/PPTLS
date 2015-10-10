FlowRouter.route('/', {
	subscriptions: function(params){

	},
	action: function(params, queryParams){
		FlowLayout.render("layout", {main: "home"});
	},
	name: 'home'
});