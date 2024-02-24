//Tests for equality and 
let personName: string = 'Imran Khan'
let personName2 : string = 'Nawab Shareef'
if(personName == personName2){
    console.log('we are not vote')
}
else{
    console.log('we are  vote')
}
//inequality with strings
let car: string = 'Carola'
let car2: string = 'Sozo'

if(car != car2){
    console.log('not purchase');
}
else{
    console.log(' purchase');
}
//Tests using the lower case function

let admin : string = 'bilal'
if(admin.toLowerCase()){
    console.log('good ')
}
else{
    console.log('not good')
}
//Numerical tests involving equality and inequality
let age : number = 20
let age_2 : number = 18
if(age == age_2){
    console.log('vote')
}
else{
    console.log('not vote')
}if(age != age_2){
    console.log('vote')
}
else{
    console.log('not vote')
}
//greater than and less than
if(age < age_2){
    console.log('vote')
}
else{
    console.log('not vote')
}
if(age > age_2){
    console.log('vote')
}
else{
    console.log('not vote')
}
//greater than or equal to, and less than or equal to
if(18 <= age_2){
    console.log('vote')
}
else{
    console.log('not vote')
}
if(18 >= age){
    console.log('vote')
}
else{
    console.log('not vote')
}
//Tests using "and" and 
let score : number = 75
if(score >= 80 && score <= 90){
    console.log('Grade A')
}
else if(score > 60 && score <= 80) {
    console.log('Grade B')
}
//"or" operators
if(score < 80 || score <= 70){
    console.log('good')
}
else {
    console.log('keep it up')
}
//Test whether an item is in a array
// Test whether an item is not in a array
let items: string[] = ['chip','USB','VG cable','Headphone']
console.log('list of items');

if(items.includes('USB')){
    console.log('purchase')
}
// Test whether an item is not in a array
 if(items.includes('wifi devise')) {
    console.log('purchase')
}
else {
    console.log('not purchase')
}

