require.config({
	paths: {
		jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
		underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min',
		backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min'
	},
	shim: {
		backbone: {
			deps: ['jquery', 'underscore']
		},
		jquery: {
			exports: '$'
		},
		underscore: {
			exports: '_'
		}
	}
});

require(['jquery', './views/testView'], function($, TestView) {
	$(function() {
		var view = new TestView();

		//console.log('Doc loaded MOFO!!!');
	});
});