let usernames = ["Peter","Sam","Edgar","Mathew","Simond","William","Erric"];

let len = usernames.map((e)=>e.length)

console.log(len);

class User{
    constructor(username,age){
        this.username = username;
        this.age = age;
    }
}

var user1 = new User("Rohith",22);
var user2 = new User("Ram",33);
var user3 = new User("Rahul",12);

var users = [user1,user2,user3]

console.log(users.filter((e)=>e.age < 18));