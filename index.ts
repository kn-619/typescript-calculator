import inquirer from "inquirer";

let choices;
do{
let message1=await inquirer.prompt([{
    type:"number",
    name:"firstnum",
    message:"Enter first number"
}]);

let message2=await inquirer.prompt([{
    type:"number",
    name:"secondnum",
    message:"Enter second number"
}]);

let message=await inquirer.prompt([{
    type:"list",
    name:"operator",
    choices:["+","-","*","/"],
    message:"Select operation"  
}])


let numberone=message1.firstnum;
let numbertwo=message2.secondnum;
let op=message.operator;


if(op==="+"){
    console.log(`The addition of the ${numberone} + ${numbertwo} =  + ${numberone+numbertwo}`);
}else if(op==="-"){
    console.log(`The Subtraction of the ${numberone} - ${numbertwo} =  ${numberone-numbertwo}`);   
}else if(op==='*'){
    console.log(`The Multiplication of ${numberone} * ${numbertwo} = ${numberone*numbertwo}`);
}else{
    console.log(`The division of ${numberone} / ${numbertwo} = ${numberone/numbertwo}`);
}

choices=await inquirer.prompt([{
    type:"string",
    name:"choice",
    message:"If you wish to continue Enter Y or y"
}]);

}while(choices.choice==="Y" || choices.choice==="y");