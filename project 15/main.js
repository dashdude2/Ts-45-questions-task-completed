var guest_list = ["daresh", "urwa", 'noman', "faizan", "arti "];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear ladies/gentleman:' + guest_list[i] + "\nrequest the pleasure of your accompany on tomorrow night dinner.\n\n Thank you");
}
var not_present = "urwa";
var new_guest = "aysha";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear ladies/gentleman:' + guest_list[i] + "\nrequest the pleasure of your accompany on tomorrow night dinner.\n\n Thank you");
}
console.log("Mrs. ".concat(not_present, " they are not coming for dinner"));
