//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

 //If the alien is green, print a message that the player earned 5 points.
  let alienColor : string[] = ['Green','Red','yellow']


console.log('Green Alien'); 
if(alienColor[0] == 'Green'){
    console.log('player just earned 5 points.')
 }
else {
    console.log('0 points.')
}
// If the alien is yellow, print a message that the player earned 10 points.

console.log('Yellow Alien'); 
if(alienColor[2] == 'yellow'){
    console.log('player just earned 10 points.')
 }
else {
    console.log(' player just earned 0 points.')
}
//If the alien is red, print a message that the player earned 15 points.

console.log('Red Alien'); 
if(alienColor[1] == 'Red'){
    console.log('player just earned 15 points.')
 }
 else {
    console.log('player just earned 10 points.')
}
//Write three versions of this program, making sure each message is printed for the appropriate color alien.