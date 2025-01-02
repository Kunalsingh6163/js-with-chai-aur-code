const person1 = {
    firstName: "Kunal",
    lastName: "Singh"
};

function greet(greeting, stopping) {
    console.log(`${this.firstName} ${this.lastName}, ${greeting} ${stopping}`);
}

// Bind the `person` context and arguments to the greet function
const completeBind = greet.bind(person1, "Good Morning", "!");

// Call the bound function
completeBind();



//////////////////////////////////////Eg-2//////////////
function greet(greeting) {
    console.log(`${greeting}, ${this.name}!`);
  }
  
  const person = { name: "Bob" };
  const greetBob = greet.bind(person, "Hi"); 
  
  greetBob(); // Output: "Hi, Bob!"