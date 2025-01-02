const ArrData = [1, 2, 3, 4, 5, 6, 5, 2, 3];

const FinalResult = [] // now required an array to store the newly array element that is FinalResult.

function RemoveDuplicateElem() {
  for (let i = 0; i < ArrData.length; i++) {
    if (!FinalResult.includes(ArrData[i])) {
      FinalResult.push(ArrData[i])
    }
  }
};

RemoveDuplicateElem();

console.log("Final Array after remove duplicate", FinalResult);
