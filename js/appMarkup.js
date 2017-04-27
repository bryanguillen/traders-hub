function createTradeMarkup(item) {
	var tradeInformation = [
		converters.biasConverter(item.bias), 
		converters.receivedConverter(item.received),
		item.symbol,
		item.expiration,
		item.strikePrice,
		item.referencePrice,
		converters.alertConverter(item.alertType),
		item.betSize,
		converters.longShortConverter(item.longOrShort),
		converters.putCallConverter(item.putOrCall)
	]
	
	var tableData = ''
	for (var i=0, length=tradeInformation.length; i<length; i++) {
		var individualKey = tradeInformation[i];
		tableData += '<td>' + individualKey + '</td>';
	}
	return '<tr>' + tableData + '</tr>';
}

function getHeaderMarkup() {
	return '<tr class="header">' +
				'<td>Bull|Bear</td>' +
				'<td>Recieved</td>' +
				'<td>Symbol</td>' +
				'<td>Expiration</td>' +
				'<td>Strike Price</td>' +
				'<td>Reference Price</td>' +
				'<td>Alert Type</td>' +
				'<td>Bet Size</td>' +
				'<td>Long|Short</td>' +
				'<td>Put|Call</td>' +
			'</tr>';
}