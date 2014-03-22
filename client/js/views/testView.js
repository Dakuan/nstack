define(['backbone', '../buzz'], function(Backbone, Buzz) {
	return Backbone.View.extend({
		initialize: function() {
			var b = new Buzz();
			b.foo();

			//console.log('test backbone view initialized.');
		}
	});
});