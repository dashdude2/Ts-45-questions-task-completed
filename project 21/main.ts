interface item {
   name: string
   price:number
}
// create two object
const book: item ={
    name: " physic book"
    price: " 580"
}
const copy: item ={
    name: "registor"
    price:"250"
}
console.log(`book name : ${book.name}, price : Rs${book.price}`);
console.log(`copy name : ${copy.name}, price : Rs${copy .price}`);

