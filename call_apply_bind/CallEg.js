const person = {
  firstName: "John",
  lastName: "Doe",
};

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
}

greet.call(person, "Hello", "!");
// Output: "Hello, John Doe!"
////////////////////////////////////////////////////
const person2 = {
  firstName: "Tiger",
  lastName: "Singh",
};

let fullName = function () {
  console.log(this.firstName + " " + this.lastName) ;
};

fullName.call(person2);

const person3 = {
    firstName: "Ujjwal",
    lastName: "Singh",
}

fullName.call(person3);