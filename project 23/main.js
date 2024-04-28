var car = 'subaru';
// test 1 equality comprasion (true)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //(TRUE)
//  test 2 strict equality comprasion (test)
console.log("Is car ==='subaru'? I predict True.");
console.log(car === 'subaru'); // (TRUE)
//test 3 inequality comprasion (test)
console.log("Is car !='subaru'? I predict True.");
console.log(car != 'subaru'); //(FALSE)
//test 4 strict inequality comprasion (test)
console.log("Is car !=='subaru'? I predict True.");
console.log(car !== 'subaru'); // (FALSE)
// test 5 less then comprasion (test)
console.log("Is car <'subaru'? I predict True.");
console.log(car < 'subaru'); //(FALSE)
// test 6 Grator then comprasion (test)
console.log("Is car >'subaru'? I predict True.");
console.log(car > 'subaru'); // (FALSE)
// test 7 less then OUR equal comprasion (test)
console.log("Is car <='subaru'? I predict True.");
console.log(car <= 'subaru'); //(TRUE)
// test 8 Greator then equal comprasion (test)
console.log("Is car <'subaru'? I predict True.");
console.log(car < 'subaru'); //(FALSE)
// test 9 checking trusthiness (test)
console.log("Is car? I predict True.");
console.log(car); // (non empty string is truethy)
// test 10 checking falseness (test)
console.log("Is !car? I predict True.");
console.log(!car); // FALSE (navigation of a truethy value)
