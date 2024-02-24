"use strict";
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a
//variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// Write an if statement to test whether the alien’s color is green. If it is, print
// message that the player just earned 5 points.
let alien_Color = ['Green', 'yellow', 'red'];
if (alien_Color[0] == 'Green') {
    console.log('Earned 5 points for shooting alien');
}
else {
    console.log('Earned 0 points');
}
//Write one version of this program that passes the if test and another that
//fails. (The version that fails will have no output.)
if (alien_Color[2] !== 'Green') {
    console.log();
}
else {
    console.log('Earned 0 points');
}
