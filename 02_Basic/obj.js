// singleton 

 mySym = Symbol("key1")




const jsUser = {
    name: "real_dkc",
    "full name" : "Hi, i am Divyanshu",
    [mySym]: "mykey1",
    age: 21,
    location: "india",
    email:"Div@gmail.com",
    isLoggedIn:false,
    lastloginDays: ["Monday", "Saturday"]
}

/*console.log(jsUser["email"]);

console.log(jsUser["full name"]);
console.log(typeof jsUser.mySym);*/

jsUser.email = "Div@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email = "Div@app.com"
console.log(jsUser);
jsUser.greeting = function(){
   console.log(`hello js user, ${this.name}`);
   
}
    jsUser.greetingtwo = function() {
        console.log(`hello js user, ${this.name}`);
        
    }
//console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());
