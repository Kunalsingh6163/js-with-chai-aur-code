const arrayElem = [2, 4, 5, 8, 4, 5, 6, 9, 5, 22, 11, 152, 24];

const RemoveDuplicate = new Set(arrayElem);
console.log("🚀 ~ RemoveDuplicate:", RemoveDuplicate);

const assending = arrayElem.filter(i=> i>=20);
console.log("🚀 ~ assending:", assending);


//////////////////////////Eg-2/////////////////////////
let s = new Set("foooodiiiieee");

// deleting e from the set
// it prints true
console.log(s.delete('e'));

console.log(s);

// deleting an element which is 
// not in the set
// prints false
console.log(s.delete('g'));