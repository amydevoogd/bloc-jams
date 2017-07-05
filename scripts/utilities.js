//write a function named forEach
//use a loop to go through all 
//the elements in the points array
//execute a callback for each element

//var forEach = function(callback) {
//    for (var i = 0; i < points.length; i++) {
//        callback(i);
//    }
//    forEach(revealPoint);
//

function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
    };
}