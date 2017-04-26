function createTradeMarkup(item) {
	var tradeInformation = [
		symbolConverters.biasConverter(item.bias), 
		item.received,
		item.symbol,
		item.expiration,
		item.strikePrice,
		item.referencePrice,
		symbolConverters.alertConverter(item.alertType),
		item.betSize,
		symbolConverters.longShortConverter(item.longOrShort),
		symbolConverters.putCallConverter(item.putOrCall)
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
				'<td>bias</td>' +
				'<td>Recieved</td>' +
				'<td>symbol</td>' +
				'<td>expiration</td>' +
				'<td>strikePrice</td>' +
				'<td>referencePrice</td>' +
				'<td>alertType</td>' +
				'<td>betSize</td>' +
				'<td>longOrShort</td>' +
				'<td>putOrCall</td>' +
			'</tr>';
}