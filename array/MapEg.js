console.log("lets see map method");

const arr = [5, 8, 10, 44, 3, 32,28];

const updateArray = arr.map((value, index, array)=>{
    console.log(value);
    return value+2;
});
console.log("The arraye elem after map method", updateArray)