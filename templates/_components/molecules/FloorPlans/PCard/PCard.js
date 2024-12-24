import PubSub from "underpub-js";

var PCard = function(options) {

	this.options = {
		$el: false,
		baseClass: 'mol-PCard',
	};

	$.extend(true, this.options, options);

};

PCard.prototype.init = function() {

	var self = this;

};

export default PCard;
