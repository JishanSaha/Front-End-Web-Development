//######## LAB 2-3 EMAIL SIGNUP ########
//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var email;



//==== LOGIC =============
var email = confirm("Would you like to join the mailing list?");
if(email === true){
   var email =  prompt("Please write your email", "me@example.com");

 if(email === "" || email === null || email === "me@example.com")
alert("Thank you, but your email was not valid.");
 else {
    alert("Thank you, our next newsletter will be sent to " + email);
}
} else{
    alert("Thank you, we will not bother you again");
}
