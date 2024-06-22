// Step 1: Make a list of current_users
var current_users = ['Ali', 'Babar', 'Jabbar', 'Saad', 'Khan'];
// Step 2: Make another list of new_users
var new_users = ['Jabbar', 'Emran', 'Fahad', 'Ali', 'Ghayas'];
var _loop_1 = function (newUsername) {
    // Check for case-insensitive uniqueness
    var isUsernameTaken = current_users.some(function (currentUsername) { return currentUsername.toLowerCase() === newUsername.toLowerCase(); });
    // Print messages based on the check
    if (isUsernameTaken) {
        console.log("Username '".concat(newUsername, "' is not available. Please enter a new username."));
    }
    else {
        console.log("Username '".concat(newUsername, "' is available."));
    }
};
// Step 3: Loop through new_users to check for unique usernames
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var newUsername = new_users_1[_i];
    _loop_1(newUsername);
}
/*
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will
need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
/*
let current_users: string[] = ['Uzair', 'Umair', 'Ali', 'Saad', 'Farhan'];

let new_users: string[] = ['Uzair', 'Nabeel', 'Ammar', 'Subhan', 'Ali'];

for (let i=0; i < new_users.length; i++){

    
}
*/
