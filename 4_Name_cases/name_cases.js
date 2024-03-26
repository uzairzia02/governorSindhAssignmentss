"use strict";
let personname = "uzair aLi AhMed khaN";
console.log('Your name in lowercase: ', personname.toLowerCase());
console.log('Your name in Uppercase: ', personname.toUpperCase());
let titlecase = personname.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
console.log('Your name in titlecase: ', titlecase);
