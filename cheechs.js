//cheech's scripts

//quantity arrays
var pizzaQty = ["1 pie", "2 pies", "3 pies", "4 pies", "5 pies", "6 pies",
 "7 pies", "8 pies", "9 pies", "10 pies"];
var qtyID = ["qty0", "qty1", "qty2", "qty3", "qty4", "qty5", "qty6", "qty7",
 "qty8", "qty9"];
var qtyValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

//options arrays
var pizzaStyle = ["The Cheapskate - cheese pizza  $12",
 "All-Veggie Naan Pizza - veggie curry on naan bread crust $14",
 "The Tortizza - Mexican-style pizza $16",
 "The Whatsa Matter for You? - spicy Sicilian-style with lotsa anchovies! $18",
 "Chicago-Style Heart Attack Meat Pie - da' works! $20"];
var pID = ["pie0", "pie1", "pie2", "pie3", "pie4"];
var pValue = ["12", "14", "16", "18", "20"];
var pizzaName =["cheapskate", "naan", "tortizza", "whatsa", "chicago"]

//function to fill qty box
var select = document.getElementById("qty");
function fillQty() {
	var arrayLength = pizzaQty.length;
	for (var i = 0; i < arrayLength; i++) {
	var htmlString = "<option id='" + qtyID[i] +"' value='" + qtyValue[i] + "'> "
	 + pizzaQty[i] + " </option>";
	select.innerHTML += htmlString;
    }
}

//event listener for fillQty
window.addEventListener("load", fillQty, false);

//function to fill options box
var select2 = document.getElementById("styles")
function fillStyles() {
	var arrayLength = pizzaStyle.length;
	for (var i = 0; i < arrayLength; i++) {
	var htmlString = "<option id='" + pID[i] +"' value='" + pValue[i] + "' name='" + pizzaName[i] + "'> "
	+ pizzaStyle[i] + " </option>";
	select2.innerHTML += htmlString;
    }
}
//event listener for fillOptions
window.addEventListener("load", fillStyles, false);

//function to add values of selected check boxes and display total
function calcTotal() {
	var customer = document.getElementById("name").value;
	var cell = document.getElementById("phone").value;
	var tax = .076;
  var quantity = document.getElementById("qty").value;
  var pizza = pizzaStyle[document.getElementById("styles").selectedIndex];
	var style = document.getElementById("styles").value;
	var subTotal = (quantity * style);
	var orderTotal = subTotal + (subTotal * tax);
    document.getElementById("cust").innerHTML = "Customer: " + customer;
    document.getElementById("ph").innerHTML = "Phone: " + cell;
    document.getElementById("q").innerHTML = "Qty: " + quantity;
    document.getElementById("sty").innerHTML = "Style: " + pizza;
    document.getElementById("sub").innerHTML = "Subtotal: $" + subTotal.toFixed(2) + " + 7.6% tax";
    document.getElementById("total").innerHTML = "Your order total is $"
    + orderTotal.toFixed(2);
}

//event listener for submit button
var orderButton = document.getElementById("order");
orderButton.addEventListener("click", calcTotal, false);
