const dupicateArray = [1,2,3,3,2];
 
// function RemoveDuplicate(){
//     var uniqueArray = [...new Set(DupicateArray)];
//     console.log("🚀 ~ RemoveDuplicate ~ uniqueArray:", uniqueArray)
// }
// RemoveDuplicate();

const FinalArray = []

function RemoveDuplicateElement(){
    for(let i = 0; i < dupicateArray.length; i++){
        if(!FinalArray.includes(dupicateArray[i])){
            FinalArray.push(dupicateArray[i])
        }
    }

};
RemoveDuplicateElement()
console.log(`This FinalArray have no duplicates Data:-`, FinalArray);