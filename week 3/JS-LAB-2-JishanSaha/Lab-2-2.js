//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		var username = "dart";
		// Correct password
		var password = "vader";
		// user name input
		var username ;
		// password input
		var yourpasswordd ;



//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
var abc = prompt("Enter your username")

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log(abc);
//5. CREATE POPUP BOX FOR PASSWORD
var pass = prompt("Enter your password")
//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log(pass);
//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if(abc === username && pass === password)
//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
{alert("Welcome Back" + " " + username);
	console.log("Login Successful");
}



//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
else {
	alert("Invalid Username/password");
	console.log("Login Fail");
}