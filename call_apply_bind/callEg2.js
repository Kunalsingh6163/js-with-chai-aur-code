

//using the call we borrow the function.
// we can fallow DRY principle.

let name = {
    first_name: "Kunal",
    last_name: "Singh"
};

let printFullName = function(hometown, state){
    console.log(this.first_name + " " + this.last_name + " form " + hometown + "," + state);
};

let name2 = {
    first_name: "Pankaj",
    last_name: "Singh"
};

printFullName.call(name, "Dehri", "Bihar")
printFullName.call(name2, "Barun", "Bihar")



// Example 2 

function greet(name) {
    return `Hello, ${name}, my name is ${this.name}`;
}

const person = { name: 'John' };

greet.call(person, 'Alice'); // Returns: "Hello, Alice, my name is John"