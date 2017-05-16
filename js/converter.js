var converters = {
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
	},

	//111K
	betsizeConverter: function(size) { 
		size += ''; //convert size to string. 
		var betsizeFormat = '';
		var numOfDigits = size.length;
		if (size.length <= 6) {
			var i = 0;
			while (numOfDigits>3) {
				betsizeFormat += size[i];
				i++;
				numOfDigits -= 1;
			} 
			return '$' + betsizeFormat + 'K';
		} 

		if (size.length <= 9) {
			var i = 0;
			while (numOfDigits>6) {
				betsizeFormat += size[i];
				i++;
				numOfDigits -= 1;
			}
			return '$' + betsizeFormat + 'M';
		}
	}, 

	// betsizeConverter: function(size) { 
	// 	size += ''; //convert size to string. 
	// 	function getIntegerValue(size) { 
	// 		var numOfDigits = size.length; 
	// 		var i = 0;
	// 		var betsizeFormat = '';
	// 		while (numOfDigits>3) {
	// 			betsizeFormat += size[i];
	// 			i++;
	// 			numOfDigits -= 1;
	// 		}   
	// 		return '$' + betsizeFormat + 'K';
	// 	}
		
	// 	return getIntegerValue(size)
	// },

	receivedConverter: function(date) {
		// 2017-05-02T20:00:04.529Z
		//need 04-26-2017 3:57 .. 
		var UTCLookup = {
			year: date.slice(0,4),
			month: date.slice(5,7),
			day: date.slice(8,10),
			format: function(hour, mins, meridian) {
				return hour + ':' + mins + meridian
			},
			time: function() {
				//we are four hours behind so subtract 4 from UTC
				var utcHours = parseInt(date.slice(11,13));
				var mins = date.slice(14,16);
				var standardHour = (utcHours - 4);  

				if (utcHours > 16) {
					var estHour = (utcHours - 4) - 12;
					return this.format(estHour, mins, 'pm'); 
				}

				if (utcHours === 16) {
					return this.format(standardHour, mins, 'pm'); 
				}
				
				if (utcHours <= 4) {
					//just incase something comes in over night and 
					if (standardHour === 0) {
						return this.format('12', mins, 'am');
					}
					var overNightLookup = {
							"-1": 11,
							"-2": 10,
							"-3": 9,
							"-4": 8
					}
					return this.format(overNightLookup[parseInt(standardHour)], mins, 'pm'); 
				}
				
				return this.format(standardHour, mins, 'am');
			}
		} 
		//maybe other way to implement this.?
		return UTCLookup.month + '-' + UTCLookup.day + '-' + UTCLookup.year + ' ' + UTCLookup.time(); 
	},

	expirationConverter: function(date) {
		var monthsLookup = {
			'01': 'Jan',
			'02': 'Feb',
			'03': 'Mar',
			'04': 'Apr',
			'05': 'May',
			'06': 'Jun',
			'07': 'Jul',
			'08': 'Aug',
			'09': 'Sep',
			'10': 'Oct',
			'11': 'Nov',
			'12': 'Dec'
		}
		var month = date.slice(5, 7);
		var year = date.slice(0, 4);
		if ( date.slice(8, 10) === '01') {
			return monthsLookup[month] + ' ' + year + ' ' + '(M)';
		}

		return monthsLookup[month] + ' ' + year + ' ' + '(W)'; 
		
	}
}