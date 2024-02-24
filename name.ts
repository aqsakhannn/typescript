let personName :string = ''; 

personName = prompt('what is your name?') || '';
let lowerCase :string = personName.toLowerCase();

let upperCase :string = personName.toLocaleUpperCase();

let titleCase :string = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

if(personName !== null && personName !== ''){
    alert(`Hello ${personName},Here are your name in:
    lowerCase: ${lowerCase}
    upperCase: ${upperCase}
    titleCase: ${titleCase}`)
}
else{
    alert('please! fill your name !')
}