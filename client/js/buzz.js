define([], function() {
	function Buzz() {

	};

	Buzz.prototype.foo = function() {
		console.log('Buzz says foo!');
	};

	return Buzz;
});