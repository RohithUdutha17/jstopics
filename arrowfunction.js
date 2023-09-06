var simpleInterest = (principal,rate,time) => {
    return (principal*rate*time)/100;
}

console.log(simpleInterest(1000,2,3));

var arr =  [12,23,11,19,55]
var [n1,n2,n3,n4,n5] = arr;
console.log(n1,n2,n3,n4,n5);

var customer = {
    "customerName":"Erric Sans",
    "age":"23",
    "address":"23 old baker street",
    "available_for_call":true
}

var {customerName,age,address,available_for_call} = customer;

console.log(customerName,age,address,available_for_call);