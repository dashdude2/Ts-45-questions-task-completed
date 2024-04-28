// create averiable called alien_colour
var alien_colour = " YELLOW";
// Write an if statement to test whether the alien’s color is green. If it is,
// print a message that the player just earned 5 points.
if (alien_colour == "YELLOW") {
    console.log("the player just earned 5 points.");
}
// Write one version of this program that passes the if test and another that fails.
// ( The version that fails will have no output.)
alien_colour = "RED";
if (alien_colour == "YELLOW") {
    console.log("the player just earned 5 points.");
}
