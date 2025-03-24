const arrData = [3,5,7]; // undefined
const arr = [2, 4, 5, 8, 10, 11,  12];


console.log("Below uses find method")
const findage = arr.filter((elem)=>{
    return elem > 10
    });
    console.log("finding age",findage);

const evenNumber = arr.find((i)=> i%2==0);
console.log(evenNumber);

////////////////////////Eg.-2///////////////////
let array = [-10, -0.20, 0.30, -40, -50];

let positiveNum = array.find(function (element) {
    return element > 0;
});

console.log(positiveNum);

//////////////////////Eg-3///////////
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  
  const userToFind = users.find(user => user.id === 2);
  
  console.log(userToFind); 
  // Output: { id: 2, name: 'Bob' }

  ////////////////////////////////////////Eg-4/////////////////////////
  const myObject = {
    name: 'John',
    numbers: [1, 4, 9],
    findNumber: function(number) {
      return number > this.name.length; 
    }
  };
  
  const foundNumber = myObject.numbers.find(myObject.findNumber, myObject); 
  
  console.log(foundNumber); // Output: 9