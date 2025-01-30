const myArrayData = [2, 4, 5, 6, 8, 10];

// Adding a custom method to Array prototype
Array.prototype.addData = function (newData) {
    this.push(newData);
};

// Using the custom method to add a new item
myArrayData.addData("kunal");

// Logging the array to verify the addition
//i am using the .hasOwnProperty() method so it will ignore that element from the array which is added with the help of Array.Prototype
for (let i of myArrayData) {
    if(myArrayData.hasOwnProperty(i)){
        console.log(i);
    }
}
