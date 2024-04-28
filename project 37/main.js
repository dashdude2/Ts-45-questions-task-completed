function make_tshirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'i love typescript'; }
    console.log("making a ".concat(size, ", tshirt with the ").concat(message, ", print on it"));
}
make_tshirt();
make_tshirt("medium large");
make_tshirt('medium', 'programing duniya');
