var x = 1;
fun1();
fun2();
console.log(x);
function fun1(){
    var x = 10
    console.log( x);
};
function fun2(){
    var x = 100
    console.log(x);
};

/////////////////Eg-2//////////////////

function one(){
    console.log("hello I am one");
    function two(){
        console.log("hello I am two");
        function three(){
            console.log("hello I am three");
        };
        three();
    };
    two();
};
one();