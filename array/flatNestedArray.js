const arr = [1,2,[3,4,[5,6]]];

//using Array method
const nastedArr = arr.flat(Infinity);
console.log(nastedArr);

//using for loop and isArray method
function flatArr(arr){
    let result = [];
    
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flatArr(arr[i]))
        }else{
            result.push(arr[i])
        }
    }return result;
};

console.log(flatArr(arr))