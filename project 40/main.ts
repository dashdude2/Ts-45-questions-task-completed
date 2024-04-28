function my_album(artistname: string, albumtitle: string){
    return {artistname , albumtitle}
}
let album1 = my_album('justinbieber',"baby")
let album2 = my_album( 'shanmandes', "treat you")
let album3 = my_album('onedirection', "story of my life")


console.log(album1);
console.log(album2);
console.log(album3);


// adding numbers of track

function my_album2(artistname: string, albumtitle: string , numberoftracks?:number){
    return {artistname , albumtitle, numberoftracks}
}

let album4 = my_album2("justinbieber","baby",21 );
let album5 = my_album2( "shanmandes","treat you",13);
let album6 = my_album2("onedirection","story of my life",44);

console.log(album4);
console.log(album5);
console.log(album6);