//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
//write an if-else chain.
  let alienColor : string[] = ['Green','Red','yellow']

//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
 if(alienColor[0] == 'Green'){
    console.log('player just earned 5 points for shooting the alien.')
 }
else {
    console.log('0 points.')
}
//If the alien’s color isn’t green, print a statement that the player just earned 10 points.
if(alienColor[0] != 'Green'){
    console.log('player just earned 5 points for shooting the alien.')
 }
else {
    console.log('the player just earned 10 points.')
}
// Write one version of this program that runs the if block and another that runs the else block.
if(alienColor[0] == 'Green'){
    console.log('player just earned 5 points for shooting the alien.')
 }
 else {
    console.log('player just earned 10 points.')
}