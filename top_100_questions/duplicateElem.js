const array = [5, 7, 8, 1, 15, 526, 857, 8, 15];

let duplicate = [];

for(let i = 0; i < array.length; i++){
    if(!duplicate.includes(array[i])){
        duplicate.push(array[i])
    }
};

console.log(duplicate);