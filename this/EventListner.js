// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//     console.log(this); // The button element
// });

//call, Apply and bind method

function greet() {
    console.log(this.name);
}

const user = { name: "Alice" };
greet.call(user); // Alice
greet.apply(user); // Alice

const boundGreet = greet.bind(user);
boundGreet(); // Alice
