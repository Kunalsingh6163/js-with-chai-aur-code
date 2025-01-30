function test(){
    console.log(test.abc);
};

test();
test.abc = 100;
test.abc = 500;     ////override the 100 to 500;
test.abc = 300;
test();