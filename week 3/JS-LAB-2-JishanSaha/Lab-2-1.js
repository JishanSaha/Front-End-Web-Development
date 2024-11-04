//######## LAB 2-1 FILE DELETE CONFIRMATION ########
// alert("Thank you, your file has been successfully uploaded");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES ========
var userChoice;
var messageOut = "Thank you, your file has ";
var yesMessage = "been successfully deleted.";
var noMessage = "not been altered.";

//==== LOGIC ========

//1. CREATE POPUP TO ASK FOR PERMISSION TO PROCEED WITH DELETION OF FILE.
var userInput = confirm("Are you want to delete this file?") ;

//2. IF USER CLICKS OKAY, POPUP messageOut WITH yesMessage.
if(userInput === true){alert (yesMessage)} else {alert ("You dont want to delete this file?")}

//3. IF USER CLICKS ANYTHING BUT OKAY, POPUP messageOut WITH noMessage.
if(userInput === false){alert (noMessage)}


