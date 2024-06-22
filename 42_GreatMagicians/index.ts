/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians 
by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/

let magicians: string[] = ["Harry Houdini", "David Blaine", "Teller"];

function make_great(magician: string[]): string[] {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = "the Great " + magician[i];
    }
    return magician;
}
function show_magicians(magicians: string[]): void{
    for (const magician of magicians) {
        console.log(magician);
    }
}
make_great(magicians);
show_magicians(magicians);


