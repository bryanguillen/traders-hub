//DATA
//API LAYER
function getDataFromAPI() {
	var settings = {
		type: 'GET',
		url: baseUrl,
		dataType: 'json',
		success: renderData
	}
	return $.ajax(settings);
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