const EmployeeData = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer',
    add: function (street, city, state){
        return `${street}, ${city}, ${state}`
    }
};

const {name, age, occupation, add} = EmployeeData;

console.log(EmployeeData.name, ",", EmployeeData.age);

const Address = add("sp colony", "manpur", "Gaya");

console.log(Address);