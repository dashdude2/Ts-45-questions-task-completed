var current_user = ['daresh', 'aliza', 'usma', 'danish', 'fahad'];
var new_user = ['daresh', 'fizan', 'daniyal', 'aliza', 'admin'];
new_user.forEach(function (new_user) {
    if (current_user.some(function (current_user) { return current_user.toLocaleLowerCase() === new_user.toLowerCase(); })) {
        console.log("".concat(new_user, " will need to enter a new username."));
    }
    else {
        console.log("".concat(new_user, " is available."));
    }
});
