const myArray = [1,2,5,8,2,6,9,4,5,6,2];

function findIndex(arr, elem){
    for(let i = 0; i < myArray.length; i++){
        if(arr[i] === elem){
            return i;
        }
    }return console.log(`Not in array`)
};

console.log(findIndex(myArray, 7))