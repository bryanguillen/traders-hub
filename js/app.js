//DATA

//API LAYER
function getDataFromAPI() {
	//AUTOMATE THIS!
	var settings = {
		type: 'GET',
		url: 'http://api.echofin.co/wga/alerts?limit=50&undefined',
		dataType: 'json',
		success: renderData
	}
	$.ajax(settings);
}

//DOM MANIPULATION
function renderData(json) {
	var html = '';
	json.forEach(function(item) {
		var stock = createTradeMarkup(item);
		html += stock;
	})
	var mainMarkup = getHeaderMarkup() + html;
	return $('main').html('<table>' + mainMarkup + '</table>');
}

$(function() {
	getDataFromAPI();
})