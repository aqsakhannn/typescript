"use strict";
let personName = '';
personName = prompt('what is your name?') || '';
let lowerCase = personName.toLowerCase();
let upperCase = personName.toLocaleUpperCase();
let titleCase = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if (personName !== null && personName !== '') {
    alert(`Hello ${personName},Here are your name in:
    lowerCase: ${lowerCase}
    upperCase: ${upperCase}
    titleCase: ${titleCase}`);
}
else {
    alert('please! fill your name !');
}
