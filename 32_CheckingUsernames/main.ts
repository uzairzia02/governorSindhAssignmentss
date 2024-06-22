// Step 1: Make a list of current_users
let current_users: string[] = ['Ali', 'Babar', 'Jabbar', 'Saad', 'Khan'];

// Step 2: Make another list of new_users
let new_users: string[] = ['Jabbar', 'Emran', 'Fahad', 'Ali', 'Ghayas'];

// Step 3: Loop through new_users to check for unique usernames
for (let newUsername of new_users) {
    // Check for case-insensitive uniqueness
    let isUsernameTaken = current_users.some(
        (currentUsername) => currentUsername.toLowerCase() === newUsername.toLowerCase()
    );

    
    // Print messages based on the check
    if (isUsernameTaken) {
        console.log(`Username '${newUsername}' is not available. Please enter a new username.`);
    } else {
        console.log(`Username '${newUsername}' is available.`);
    }
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
