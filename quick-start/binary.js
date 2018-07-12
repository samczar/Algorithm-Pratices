"use strict";
exports.__esModule = true;
var prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var min = 0;
var max = 24;
function primenumber(value, arr) {
    var status = 'not exist';
    for (var i = 0; i <= arr.length; i++) {
        var val = arr[i];
        if (val == value) {
            status = 'Exist';
            break;
        }
    }
    console.log("status : " + status + " indexof: " + prime.indexOf(val) + "  ");
    return status;
}
primenumber(67, prime);
