let magicians: string[]=['daresh','noman','harrypotter','ericjohn']
function copyarray(arr: string[]){
    return[...arr]
}


function make_great (magiciansarry:string[]){
    for(let i=0; i<magicians.length; i++){
        magicians[i] =`great`+ magiciansarry[i]
    }
}

function show_magicians(magicians: string[]){

magicians.forEach(element => {
    console.log(element)
});
}


const copymagicianarry = copyarray(magicians)

make_great(copymagicianarry)

console.log('\n\nthis is my orignal arry:')
show_magicians(magicians)
console.log('\n\nthis is my modfied copy of the array:')
show_magicians(copymagicianarry)