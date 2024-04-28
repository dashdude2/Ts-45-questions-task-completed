function my_album(artistname, albumtitle) {
    return { artistname: artistname, albumtitle: albumtitle };
}
var album1 = my_album('justinbieber', "baby");
var album2 = my_album('shanmandes', "treat you");
var album3 = my_album('onedirection', "story of my life");
console.log(album1);
console.log(album2);
console.log(album3);
// adding numbers of track
function my_album2(artistname, albumtitle, numberoftracks) {
    return { artistname: artistname, albumtitle: albumtitle, numberoftracks: numberoftracks };
}
var album4 = my_album2("justinbieber", "baby", 21);
var album5 = my_album2("shanmandes", "treat you", 13);
var album6 = my_album2("onedirection", "story of my life", 44);
console.log(album4);
console.log(album5);
console.log(album6);
