function calculateCardprice(...num1){
   return num1
}
//console.log(calculateCardprice(2));
//console.log(calculateCardprice(200,300,400,500));
const user = {
    username: "dkc",
    price:199
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
handleObject({
    username:"sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[3]
}
console.log(returnSecondValue(myNewArray));
