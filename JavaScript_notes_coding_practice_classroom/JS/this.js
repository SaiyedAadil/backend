// This --> IT refers to the current object context, where it is being called from.

let obj = {
    name: "name1",
    print: () => {
        console.log(this.name); // why undefined: because this is not defined in lexical scope
    }
}
obj.print() // why undefined is consoling?: because of lexical scope

// what is lexical scope?: where this is defined, and where it is called from, 
// lexical scope> function scope> global scope
// lexical scope: when you are inside a function, this refers to the function's context
// global scope: when you are outside a function, this refers to the global context
// when you just do this: console.log(this): It refers to the global context
// global context: when you are outside a function, this refers to the global context
// behavior of this inside a function: when you are inside a function, this refers to the function's context
// behavior of this keyword in nodejs: when you are outside a function, this refers to the global context
// what's the behavior or default value of this: when you are outside a function, this refers to the global context
// behavior of this in your browser? : 
// lexical environment: 
// closures:
// what is closures in javascript ?
// what is lexical environment in javascript?
// what is closure in javascript? 
// what is lexical environment in javascript?

// this keword behavior differenation in depends in which scenario you are using: function, arrow function, object, class, static method, static property





