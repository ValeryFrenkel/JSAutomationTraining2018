// Algorithms for tasks 1 and 2 implement as functions with one argument. Run both function with the same
// array in one script.js file.

var A = [-1,2,-3,-2,4,2,-3]; 

function Task1(A) {


var B = A.filter(function(number) {
	return number > 0;
});

var C = A.filter(function(number) {
	return number < 0;
});

console.log("B:", B, "C:", C );

}

function Task2(A) {

function compareNumeric(a, b) { 
return a - b; 
} 

A.sort(); 

var count = 1;
for (var i=0; i<A.length; i++) {

if(i!= A.length){

if(A[i] === A[i+1]) {
count++
} 
else { console.log(A[i],'количество:', count);
count=1;
}
}
if(i === A.length){
if(A[i] === A[i-1]){count++}
console.log(A[i],'количество:', count);
} 
}

}

console.log("Task 1:");
Task1(A)
console.log("Task 2:");
Task2(A)