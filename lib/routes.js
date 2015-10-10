FlowRouter.route('/', {
	subscriptions: function(params){

	},
	action: function(params, queryParams){
		FlowLayout.render("layout", {main: "home"});
	},
	name: 'home'
});

FlowRouter.route('/vsmachine', {
	subscriptions: function(params){

	},
	action: function(params, queryParams){
		FlowLayout.render("layout", {main: "vsmachine"});
	},
	name: 'vsmachine'
});

FlowRouter.route('/vsplayer', {
	subscriptions: function(params){

	},
	action: function(params, queryParams){
		FlowLayout.render("layout", {main: "vsplayer"});
	},
	name: 'vsmachine'
});