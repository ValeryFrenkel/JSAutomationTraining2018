var string = "123", stringRev = "";

for (i = string.length - 1 ; i >= 0 ; i--) {
	stringRev += string[i];
}
console.log(stringRev);