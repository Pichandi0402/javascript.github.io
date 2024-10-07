
//Arrow Functions
//Single statement
let square = x => x * x;
let addNumer = (x,y) => x + y;
let msgUser =() =>console.log("This is without parameters Arrow function");
msgUser();

// Multiple Statements
const calculateSum = (a, b) => {
    const sum = a + b;
    console.log(`The sum of ${a} and ${b} is ${sum}`);
    return sum;
};

let result = calculateSum(6, 5); // output: The sum of 6 and 5 is 11
console.log(result); // output: 11



//Arrow function with callback
setTimeout(()=>
    {console.log("callback");






    },4000
)


// Returning an object 
const acterDetails =()=>({name:"vijay",movie:"68",professional:"acter"})


console.log(square(2)); // Output: 
console.log(addNumer(12,12));
