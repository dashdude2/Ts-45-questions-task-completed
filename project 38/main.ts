function describe_city(nameofcity: string, counrty: string = "pakistan"){
    return `${nameofcity} is in ${counrty}`
}
let city1 = describe_city ("karachi")
let city2 = describe_city ('multan')
let city3 = describe_city ("islamabad")
let city4 = describe_city ("balochistan")

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);