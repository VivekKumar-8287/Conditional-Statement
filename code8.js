//Code 8 : Solve the Marriage Problem
//Legal Age in India Males ----> 21
//Females ----> 18

let gender = "male";
let age = "25";
if(gender == "male")
{
  if(age>=21){
    console.log("Males: get marry");
  }else{
    console.log("Males: can't marry");
  }
}
else {
  if(age>=18){
    console.log("Females: get marry");
  }
  else{
    console.log("Females: can't get marry");
  }
}