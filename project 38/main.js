function describe_city(nameofcity, counrty) {
    if (counrty === void 0) { counrty = "pakistan"; }
    return "".concat(nameofcity, " is in ").concat(counrty);
}
var city1 = describe_city("karachi");
var city2 = describe_city('multan');
var city3 = describe_city("islamabad");
var city4 = describe_city("balochistan");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
