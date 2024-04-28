var guest_list = ["daresh", "urwa", 'noman', "faizan",];
// for (let i = 0; i < guest_list.length; i++) {
//         console.log('Dear ladies/gentleman:' + guest_list[i] + "\nrequest the pleasure of your accompany on tomorrow night dinner.\n\n Thank you");
// }
var not_present = "urwa";
var new_guest = "aysha";
guest_list[1] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear ladies/gentleman:' + guest_list [i] + "\nrequest the pleasure of your accompany on tomorrow night dinner.\n\n Thank you");
// }
console.log("Mrs. ".concat(not_present, " they are not coming for dinner"));
guest_list.unshift("usman", "faiza", "bilal");
// for(let i=0; i<guest_list.length; i++){
//      console.log('Dear ladies/gentleman:' + guest_list [i] + "\nrequest the pleasure of your accompany on tomorrow night dinner.\n\n Thank you");
//  }
console.log("\nunfortunately we cant arrange big table , only two people are allow");
while (guest_list.length > 2) {
    var remove_guess = guest_list.pop();
    console.log("sorry ladies/Gentleman; ".concat(remove_guess, "you are not invited for dinner"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear ladies/gentleman:' + guest_list[i] + "\nrequest the pleasure of your accompany on tomorrow night dinner.\n\n Thank you");
}
guest_list.slice(0, 3);
console.log(guest_list);
