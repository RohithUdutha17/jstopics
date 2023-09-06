var str1 = "Peter goes to school today ";
var str2 = "It is raining ";

console.log(str1.concat(str2));
var str3 =  "Betty Botter bought som butter ,But this butter was bitter ,If she put's it in batter ,the batter will be bitter ";
console.log(str3.slice(5,15));
console.log(str3.lastIndexOf("butter"));
console.log(str3.split(" "));
console.log(str3.slice(32,58));

var strnum = "133.45454";
var num  = parseFloat(strnum);
console.log(num);
console.log(num.toFixed(3));