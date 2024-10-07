//Named function without argume
addNumbers() // here also we can call the function it works because function is already hoisted
function addNumbers() {
      console.log('Named function without argume');//'Named function without argume'
      
}

//2. Named Function with Arguments and No Return Type:

function printSum(a, b) {
    console.log(a + b); // prints the sum of a and b
}

printSum(5, 3); // Outputs: 8

//3.Named Function without Arguments and a Return Type:

function withReturn() {
    return 'Named Function without Arguments and a Return Type:';
    
}
let returnValue=withReturn();
console.log(returnValue);

//4.Named Function with Arguments and a Return Type:

function withArgument(argOne) {
     let fName=argOne;
     return fName;
}
let getArgument=withArgument('pradeep');
console.log(getArgument);