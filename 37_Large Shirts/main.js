/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message,
and a shirt of any size with a different message.
*/
function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The shirt size is \"".concat(size, "\" and it says \"").concat(message, "\""));
}
// Large shirt with default message
make_shirt();
// Output: The shirt size is large and it says "I love TypeScript"
// Medium shirt with default message
make_shirt('medium');
// Output: The shirt size is medium and it says "I love TypeScript"
// Custom shirt with different message
make_shirt('small', 'I love coding');
