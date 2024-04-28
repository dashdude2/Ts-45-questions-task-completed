// Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great()
//   that modifies the array of magicians by adding the phrase the Great to each magician’s
//    name. Call show_magicians() to see that the list has actually been modified.
var magicians = ['daresh', 'noman', 'harrypotter', 'eric john'];
// print the name of variable
for (var i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
    "\n/bw/";
}
// print great with the name of variable
for (var i = 0; i < magicians.length; i++) {
    console.log("great ".concat(magicians[i]));
}
