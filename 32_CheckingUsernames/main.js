"use strict";
// Step 1: Make a list of current_users
const current_users = ['Alice', 'Bob', 'John', 'Charlie', 'David'];
// Step 2: Make another list of new_users
const new_users = ['John', 'Eric', 'Frank', 'Alice', 'Grace'];
// Step 3: Loop through new_users to check for unique usernames
for (const newUsername of new_users) {
    // Check for case-insensitive uniqueness
    const isUsernameTaken = current_users.some((currentUsername) => currentUsername.toLowerCase() === newUsername.toLowerCase());
    // Print messages based on the check
    if (isUsernameTaken) {
        console.log(`Username '${newUsername}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`Username '${newUsername}' is available.`);
    }
}
