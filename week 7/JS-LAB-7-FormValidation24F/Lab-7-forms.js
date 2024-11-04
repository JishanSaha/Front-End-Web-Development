/* LAB 7 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)

window.onload = function(){

	var formShipping = document.forms.form_ship;
	
	// console.log(formShipping);
	
	formShipping.onsubmit = formSubmit;
	
	function formSubmit(e){
	e.preventDefault();
	
	var name   = document.getElementById("in_Name").value;
	var postal = document.getElementById("in_pc").value;
	
	
	
	var shipInfo = {
	cid: 0,
	name: name,
	pc: postal,
	speed: "",
	cost: 0,
	};
	
	
	if (shipInfo.name == "") {
	document.getElementById("in_Name").style.background = "red";
	document.getElementById('in_Name').focus();
	}else if(shipInfo.pc == ""){
	document.getElementById("in_pc").style.background = "red";
	document.getElementById('in_pc').focus();
	}else{
	document.getElementById("thanksCustomer").innerHTML = shipInfo.name;
	document.getElementById("thanksPC").innerHTML = shipInfo.pc;
	
	
	
	document.getElementById("shippingForm").style.display = "none";
	document.getElementById("thanks_msg").style.display = "block";
	}
	}
	
	}