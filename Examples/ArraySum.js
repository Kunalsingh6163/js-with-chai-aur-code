
const myArray = [1,2,3,4,5,8]

const flatenArray = myArray.map((num)=> num );

const sum = flatenArray.reduce((acc, cur)=> sumElem = acc + cur, 0)

console.log(sum);
