//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 

function checkTemp(currentTemp)
{   
    if (currentTemp > 30) {
        return false
    } else if (currentTemp < -10){
        return false
    } else {
        return true
    }
}

var currentTemp = prompt("What is the current temprature?");

var currentFloatTemp = parseFloat(currentTemp);

var isSuitableTemp = checkTemp(currentFloatTemp); 

if (isSuitableTemp == true) {
    alert("You’re good, have a nice walk!")
} else {
    alert("“Yikes! This is no weather for dog walking!")
}
