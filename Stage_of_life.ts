//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let personAges : number[] = [1,2,3,4,11,13,20,65] 
//If the person is less than 2 years old, print a message that the person is a baby.

if(personAges[0] == 1 && personAges[0]  <= 2){
    console.log('Is a baby')
}
else{
    console.log()
}
//If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

 if(personAges[1] == 2 && personAges[1] <= 4){
    console.log('Is a toddler')
}
else{
    console.log()
}
//If the person is at least 4 years old but less than 13, print a message that the person is a kid.
 if(personAges[3] == 4 && personAges[3] <= 13){
    console.log('Is a kid')
}
else{
    console.log()
}
//If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
 if(personAges[5] == 13 && personAges[5] <= 20){
    console.log('Is a teenager')
}
else{
    console.log()
}
//If the person is at least 20 years old but less than 65, print a message that the person is an adult.
 if(personAges[6] == 20 && personAges[6] <= 65){
    console.log('Is an adult')
}
else{
    console.log()
}
//If the person is age 65 or older, print a message that the person is an elder.
if(personAges[7] == 65 && personAges[7] <= 70){
    console.log('Is an elder')
}
else{
    console.log()
}