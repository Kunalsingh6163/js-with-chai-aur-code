const arr = [1,2,3,4,5,6,7,8,9,10];

function even(arr){
    return arr.filter(i => i%2 == 0)
}

const evenNum = even(arr);
 console.log("🚀 ~ evenNum:", evenNum)
 
const evenNumber = arr.filter(i=> i%2 == 0 );
console.log(evenNumber);



function EvenNum(ar){
    let evenNum = [];
    for(let i = 0; i < ar.length; i++){
        if(ar[i]%2 == 0){
            evenNum.push(ar[i])
        }
    }
    return evenNum;
};

console.log("this is array of even num",EvenNum(arr))