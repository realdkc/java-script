


function sayMyName() {
    console.log("R");
    console.log("D");
    console.log("K");
    console.log("C");
}
//sayMyName
/*function addTwoNumbers(number1, Number2){
    console.log(number1 + Number2);
    
}*/
function addTwoNumbers(number1, Number2){
    /*let result = number1 + Number2
    return result*/
   return number1 + Number2
    
}
//addTwoNumbers(3, 4)
//addTwoNumbers(3, null)
/*const result = addTwoNumbers(3, 5)
console.log("Result: ", result);*/

function loginUserMessage(username){
    if (username === undefined) {
        console.log("please enter a username");
        return 
    }
    return`${username} just loggedin`
}
//console.log(loginUserMessage("real_dkc"))
//console.log(loginUserMessage(""))
console.log(loginUserMessage())