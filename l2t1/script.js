// The numeric array A is given. You should move elements > 0 to the array В, elements < 0 to the array С. Log
// on console both arrays.

var A = [-1, -2, 3, 4, 5, -7, -8];

var B = A.filter(function(number) {
	return number > 0;
});

var C = A.filter(function(number) {
	return number < 0;
});

console.log("B:", B, "C:", C );