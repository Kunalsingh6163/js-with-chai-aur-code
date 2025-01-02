"use strict";
function strictFunction() {
    console.log(this); // undefined
}
strictFunction();
