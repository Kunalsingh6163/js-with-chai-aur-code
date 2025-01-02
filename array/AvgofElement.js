let marks = [95, 55, 68, 82, 91, 45];

let sum = 0;

for(index=0; index<marks.length; index++){
    sum += marks[index];
    console.log(marks[index]);    
};

console.log(`Add of the all numbers ${sum}`);

console.log("average of marks:- ",sum/marks.length+1);