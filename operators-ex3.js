var sum = 0;
for(let i=1;i<11;i++){
    sum+=i;
}
console.log("Sum of first 10 natural numbers "+sum);

function compare(a,b){
    return a-b;
}

var nums = [1,5,2,9,3,87]

var sortednums = nums.sort(compare);
console.log(sortednums);

var max_value = 0;
for(i of nums){
    if(i>max_value){
        max_value = i;
    }
}
console.log("max value:"+max_value);