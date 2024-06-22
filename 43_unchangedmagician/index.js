/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to
show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
var magicians = ["Harry", "Ron", "Hermione"];
function copyArray(arr) {
    return magicians;
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var coppiedArray = copyArray(magicians);
make_great(coppiedArray);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("Modified Magicians:");
show_magicians(coppiedArray);
