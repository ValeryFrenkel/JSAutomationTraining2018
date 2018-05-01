// The numeric array is given. You should find amount of reps for each element in the array and log it on
// console. For example: for the array [ 1, 2, 1, 2, 3.14, 4, 2, 1] you should log:
// 1 - 3, 2 - 3, 3.14 - 1, 4 - 1 (not necessary in this order)

var A = [ 1, 2, 1, 2, 7, 9, 2, 7]; 

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
if(i=A.length){
if(A[i] == A[i-1]){count++}
console.log(A[i],'количество:', count);
} 
}