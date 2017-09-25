//cheech's scripts

//quantity arrays
var pizzaQty = ["1 pie", "2 pies", "3 pies", "4 pies", "5 pies", "6 pies", "7 pies", "8 pies", "9 pies", "10 pies"];
var qtyID = ["qty0", "qty1", "qty2", "qty3", "qty4", "qty5", "qty6", "qty7", "qty8", "qty9"];
var qtyValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

//options arrays
var pizzaStyle = ["pizza #1 - The Cheapskate", "pizza #2 - All-Veggie Naan Pie", "pizza #3 - The Tortizza", "pizza #4 - The Whatsa Matter for You?", "pizza #5 - Chicago-Style Heart Attack Meat Pie"];
var pID = ["pie0", "pie1", "pie2", "pie3", "pie4"];
var pValue = ["12", "14", "16", "18", "20"];

//function to fill qty box       
var select = document.getElementById("qty");
function fillQty() {
	var arrayLength = pizzaQty.length;
	for (var i = 0; i < arrayLength; i++) {
	var htmlString = "<option id='" + qtyID[i] +"' value='" + qtyValue[i] + "'> " + pizzaQty[i] + " </option>"; 
	select.innerHTML += htmlString;
    }	
}
//event listener for fillQty
window.addEventListener("load", fillQty, false);

//function to fill options box
var select2 = document.getElementById("style")
function fillStyles() {
	var arrayLength = pizzaStyle.length;
	for (var i = 0; i < arrayLength; i++) {
	var htmlString = "<option id='" + pID[i] +"' value='" + pValue[i] + "'> " + pizzaStyle[i] + " </option>";
	select2.innerHTML += htmlString;
    }
}
//event listener for fillOptions
window.addEventListener("load", fillStyles, false);

//function to add values of selected check boxes and display total

function calcTotal() {
	var tax = .076;
	var qtyTotal = 0;
	var styleTotal = 0;
	var orderTotal = 0;
	for (var i = 0; i < pizzaQty.length; i++) {
		var quantity = document.getElementById("qty" + i);
		if (quantity[i].selected) {
			qtyTotal += (quantity[i].value * 1);
		}
	}
	for (var i = 0; i < pizzaStyle.length; i++) {
		var style = document.getElementById("pie" + i)
		if (style[i].selected) {
			styleTotal += (style[i].value * 1);
		}
	var subTotal = qtyTotal * styleTotal;
	orderTotal += subTotal + (subtotal * tax);
	document.getElementById("total").innerHTML = "Your order total is $" + orderTotal + ".00";
	}
}
		//event listener for submit button
var orderButton = document.getElementById("order");
orderButton.addEventListener("click", calcTotal, false);
	
