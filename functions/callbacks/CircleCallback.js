const radius = [2, 4, 1, 3, 6];

// const circleArea = function (radius) {
//   output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * (radius[i] * radius[i]));
//   }
//   return output;
// };

// console.log(circleArea(radius));

// const circleCircumference = function (radius) {
//   output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };

// console.log(circleCircumference(radius));

///////////////////////////// with the help of HOF we make the code reusable/////////////////

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
    return 2 * Math.PI * radius;
  };

const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area)); //// understand we are doing same wat map function will do its my own map===calculate
console.log(calculate(radius, circumference));

console.log("map",radius.map(area));
