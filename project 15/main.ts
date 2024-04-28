let guest_list: string[]=["daresh","urwa",'noman',"faizan","arti "];
for (let i = 0; i < guest_list.length; i++) {
      console.log('Dear ladies/gentleman:' + guest_list[i] + "\nrequest the pleasure of your accompany on tomorrow night dinner.\n\n Thank you");
 }
let not_present: string= "urwa";
let new_guest: string="aysha";
guest_list[1]=new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Dear ladies/gentleman:' + guest_list [i] + "\nrequest the pleasure of your accompany on tomorrow night dinner.\n\n Thank you");
}
console.log(`Mrs. ${not_present} they are not coming for dinner`)

