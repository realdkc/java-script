//const tinderUser = new Object()
const tinderUser = {}

 tinderUser.id = "a23"
tinderUser.name = "Sam"
tinderUser.isloggedin = false
//console.log(tinderUser);
const regularuser = {
    email: "sam@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sam",
            lastname: "goggins"
        }
    }
}
//console.log(regularuser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

/*const user = [
    {
        id
    }
]*/
user[1].email
console.log(tinderUser);


console.log(Object.keys(tinderUser));
