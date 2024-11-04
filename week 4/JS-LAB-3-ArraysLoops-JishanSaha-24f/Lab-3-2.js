//LAB 3 - ARRAYS & LOOPS - PART 2


//TEAM MEMBER ARRAY
var Teammember = ['Jishan', 'Aniket', 'Harsh', 'Neeraj', 'Shashank'];


//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(Teammember);

//REMOVE LAST MEMBER
Teammember.pop();
console.log(Teammember);

//ADD SEAN TO FRONT OF ARRAY
Teammember.unshift("Sean");
console.log(Teammember);

//REARRANGE THE ARRAY ALPHABETICALLY
Teammember.sort();
console.log(Teammember);

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log(`We have total ${Teammember.length} people in our group.`);

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE

Teammember.forEach((member, index) => {
    console.log(`${member} is #${index + 1}.`);
});

