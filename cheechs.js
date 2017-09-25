//cheech's scripts

//quantity arrays
var pizzaQty = ["1 pie", "2 pies", "3 pies", "4 pies", "5 pies", "6 pies", "7 pies", "8 pies", "9 pies", "10 pies"];
var qtyID = ["qty1", "qty2", "qty3", "qty4", "qty5", "qty6", "qty7", "qty8", "qty9", "qty10"];
var qtyValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

//options arrays
var pizzaOptions = ["pizza #1 - The Cheapskate", "pizza #2 - All-Veggie Naan Pie", "pizza #3 - The Tortizza", "pizza #4 - The Whatsa Matter for You?", "pizza #5 - Chicago-Style Heart Attack Meat Pie"];
var pID = ["pie1", "pie2", "pie3", "pie4", "pie5"];
var pValue = ["12", "14", "16", "18", "20"];

//function to fill qty box       //"<li id='" + qtyID[i] +"' value='" + qtyValue[i] + "'> " + pizzaQty[i] + " </li>";
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
var select2 = document.getElementById("options")
function fillOptions() {
	var arrayLength = pizzaOptions.length;
	for (var i = 0; i < arrayLength; i++) {
	var htmlString = "<option id='" + pID[i] +"' value='" + pValue[i] + "'> " + pizzaOptions[i] + " </option>";
	select2.innerHTML += htmlString;
    }
}
//event listener for fillOptions
window.addEventListener("load", fillOptions, false);


