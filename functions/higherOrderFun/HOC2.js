// const square = (number) =>{
//     console.log("Square");
//     return number * number;
// };

function HOCPower(multiplier){
    return function Power(num){
        return num * multiplier;
    }
};

const squre = HOCPower(2);
// const cube  = HOCPower(3);

console.log(squre(5));