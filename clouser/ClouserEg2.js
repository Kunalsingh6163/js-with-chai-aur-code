function myFun1(){
    const name = "Kunal Singh";

    function user(){
        console.log(name);
    }
    return user;
};

const checkingClouser = myFun1();

checkingClouser();