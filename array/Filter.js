const arrayFilter = [2, 4, 5, 18, 24, 51, 15];

let adultAge = arrayFilter.filter((i) => i >= 18);

console.log(adultAge);

//even no

const even = arrayFilter.filter((i) => {
  return i % 2 === 0;
});

const odd = arrayFilter.filter((i) => {
  return i % 2 !== 0;
});

console.log("🚀 ~ even ~ 0:", even);
console.log("🚀 ~ odd ~ 0:", odd);

//// less code///////

console.log(arrayFilter.filter((i) => i < 4)); ///////inline apply filter()

const user = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob1", age: 35 },
  { name: "Jane1", age: 30 },
  { name: "Bob", age: 35 },
  { name: "Kunal", age: 26 },
];

//expacted like ages{25:1, 30:2, 35:2, 26:1}

const output = user.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
},{});

console.log("ages:-", output)
