var teamnumber = '3'; //Pre-uploaded group number
var saha = "Jishan";
var laur = "Shashank";
var patel = "Digna";
var firstname;
var group;

var group = prompt("Which group do you belong from?");

  //Asking the user to enter the group number they belong to  
if(group === teamnumber){
    var firstname = prompt("Enter Your First Name");
}
//Switch command if the group number matches and asks for their fist name
    switch(firstname){
        case "Jishan":
            alert("You are welcome to the group 3," + " " + "Jishan Saha.");
            break;
        case "Shashank":
            alert("You are welcome to the group 3," + " " + " Shashank Virendra Laur.");
            break;
        case "Digna":
            alert("You are welcome to the group 3," + " " + " Digna Patel.");
            break; 

            //If none of them matches, it's denied
        default:
            alert("Access Denied!");
    }
    
    


    

    

    



