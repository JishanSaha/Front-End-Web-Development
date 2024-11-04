//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function calculateAverage (numb1, numb2, numb3, numb4, numb5)
{
var total = (numb1 + numb2 + numb3 + numb4 + numb5) /5;
//var average = total / 5;
return total.toFixed(1);
}

//var testAverage = calculateAverage(5, 10, 15, 20, 25);
//console.log(testAverage)

var course1 = 85; 
var course2 = 75;
var course3 = 65;
var course4 = 70;
var course5 = 65;

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
var overallAverage = calculateAverage(course1, course2, course3, course4, course5);

if (overallAverage >= 70) {
    alert("Successfull ! Your average is " + overallAverage);
} else {
    alert("Review Your average is " + overallAverage);
}