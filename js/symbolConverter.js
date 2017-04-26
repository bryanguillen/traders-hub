var symbolConverters = {
	biasConverter: function(bias) {
		bias = parseInt(bias);
		var biasLookup = {
			"1": "Bullish",
			"-1": "Bearish"
		};
		return biasLookup[bias];
		//what happens if bias is not one of two choices? 
	},
	
	alertConverter: function(alert) {
		alert = parseInt(alert);
		var alertLookup = {
			"1": "Sweep",
			"2": "Multi-Sweep",
			"3": "Block",
			"4": "Split"
		};
		return alertLookup[alert];
	},

	putCallConverter: function(value) {
		value = parseInt(value);
		var putCallLookup = {
			"1": "Call",
			"-1": "Put"
		};
		return putCallLookup[value];
	},

	longShortConverter: function(value) {
		value = parseInt(value);
		var longShortLookup = {
			"1": "Long",
			"-1": "Short"
		};
		return longShortLookup[value];
	}
}