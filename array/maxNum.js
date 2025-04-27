const arr = [4, 5, 8, 2, 11, 55, 41, 2, 99];

let max = arr[0];

for(let i=0; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
};

let min = arr[0];

for(let i=0; i<arr.length; i++){
    if(arr[i] < min){
        min = arr[i]
    }
};
console.log(`max No is: `,max, 'min No is: ', min);