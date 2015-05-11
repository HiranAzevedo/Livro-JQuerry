function moneyTextToFloat(text) {
	var cleanText = text.replace("R$ ", "").replace(",", ".");
	return parseFloat(cleanText);
}
function floatToMoneyText(value) {
	var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
	text = "R$ " + text;
	return text.substr(0, text.length - 2) + "," + text.substr(-2);
}
function readTotal() {
	var total = $("#total").text();
	return moneyTextToFloat(total);
}
function writeTotal(value) {
	var total = floatToMoneyText(value);
	$("#total").text(total);

}

function calculaTotalProducts() {
	var produtos = $(".products");
	var total = 0;

	for (var pos = 0; pos < produtos.length; pos++) {
		var $produto = $(produtos[pos]);
		var quantity = moneyTextToFloat($produto.find(".quantity").val());
		var price = moneyTextToFloat($produto.find(".price").val());
		total += quantity * price;
	}

	return total;
}

function onDocumentLoad() {
	var textEdits = document.getElementsByClassName("quantity");

	for (var i = 0; i < textEdits.length; i++) {
		textEdits[i].onchange = function () {
			writeTotal(calculaTotalProducts());
		};
	}
}


window.onload = onDocumentLoad;