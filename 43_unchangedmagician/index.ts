/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to 
show that you have one array of the original names and one array with the Great added to each magician’s name.
*/

let magicians: string[] = ["Harry", "Ron", "Hermione"];

function copyArray(arr:string[]): string[] {
 return magicians
}

function make_great(magicians:string[]){
    for(let i=0; i<magicians.length; i++){
        magicians[i] = "The Great " + magicians[i];
    }
}

function show_magicians(magicians:string[]){
    for(let magician of magicians){
        console.log(magician);
    }
}
let coppiedArray = copyArray(magicians);
make_great(coppiedArray);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("Modified Magicians:");
show_magicians(coppiedArray);



