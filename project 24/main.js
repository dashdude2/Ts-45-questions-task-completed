var car = "subaru";
var age = 25;
var number = [1, 2, 3, 4];
// test 1 equality  (TRUE)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //(TRUE)
//  test 2 strict equality  (FALSE)
console.log("Is car ==='subaru'? I predict false.");
console.log(car === 'subaru'); //(FALSE)
// test 3 inequality  (TRUE)
console.log("Is car != 'civic'? I predict True.");
console.log(car != 'civic'); //(TRUE)
//  test 4 inequality  (FALSE)
console.log("Is car !=='subaru'? I predict false.");
console.log(car !== 'subaru'); //(FALSE)
// **LOWERCASE FUNCTION TEST**
// test 5 lowercase conversion (FALSE)
console.log("Is car  to.lowercase() =='subaru'? I predict true.");
console.log(car.toLocaleLowerCase() == 'subaru');
// test 6 lowercase conversion (TRUE)
console.log("Is car === to.lowercase() =='subaru'? I predict false.");
console.log(car === car.toLocaleLowerCase());
// **nurmericl test**
// test 7 equality (TRUE)
console.log("is age == 25? i predict true.");
console.log(age == 25);
// test 8 inequality (FALSE)
console.log("is age != 30? i predict true.");
console.log(age != 25);
// test 9 Greator then (FALSE)
console.log("is age > 25? i predict true.");
console.log(age < 24);
// test 10 less then (TRUE) 
console.log("is age <= 25? i predict true.");
console.log(age <= 26);
// **LOGICAL OPERATOR**
// test 11 AND (TRUE)
console.log("is age > 25 && age < 30? i predict true.");
console.log(age < 26 && age < 31);
// test 12 OR ()
console.log("is age > 25 || age < 20? i predict false.");
console.log(age < 25 || age < 20);
// **ARRAY TEST**
// test 13 IN ARRAY (TRUE)
console.log("is 3 in number? i predict true.");
console.log(3 in number);
//  test 14 NOT IN ARRAY (false)
console.log("is 5 not in number? i predict true.");
console.log(number);
