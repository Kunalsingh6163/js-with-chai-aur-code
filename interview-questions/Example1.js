function test(){
    console.log(test.abc);
};

test();
test.abc = 100;
test.abc = 500;
test();