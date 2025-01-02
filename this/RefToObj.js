const obj = {
    name: "MyObject",
    showThis: function () {
        console.log(this.name); // Refers to obj
    },
};
obj.showThis();
