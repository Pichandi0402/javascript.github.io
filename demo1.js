var x =1;
a();
b();
console.log(x);

function a(){
    var x=10;
    console.log(x);
}
function b(){
    var x=200;
    console.log(x);
}

// creation phase

GlobalExecutiveContext = {
    LexicalEnVironment:{
        EnvironmentRecord:{
            Type: "Object",
            x: undefined,
            a: undefined,
            b: undefined
        },
        Outer: "null",
        ThisBinding: "Global object or window object"
    },
    VariableEnvironment:{
        EnvironmentRecord:{
            Type: "Object",
            x: undefined,
            a: undefined,
            b: undefined
        },
        Outer: "null",
        ThisBinding: "Global Object or Window object"
    }
}

// Execution phase
GlobalExecutiveContext = {
    LexicalEnVironment:{
        EnvironmentRecord:{
            Type: "Object",
            x: 1,
            a: undefined,
            b: undefined
        },
        Outer: "null",
        ThisBinding: "Global object or window object"
    },
    VariableEnvironment:{
        EnvironmentRecord:{
            Type: "Object",
            x: 1,
            a: 10,
            b: 200
        },
        Outer: "null",
        ThisBinding: "Global Object or Window object"
    }
}