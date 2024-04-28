var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ['daresh', 'noman', 'harrypotter', 'ericjohn'];
function copyarray(arr) {
    return __spreadArray([], arr, true);
}
function make_great(magiciansarry) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "great" + magiciansarry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
var copymagicianarry = copyarray(magicians);
make_great(copymagicianarry);
console.log('\n\nthis is my orignal arry:');
show_magicians(magicians);
console.log('\n\nthis is my modfied copy of the array:');
show_magicians(copymagicianarry);
