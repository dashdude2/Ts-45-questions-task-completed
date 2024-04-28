let current_user: string[]=['daresh','aliza','usma','danish','fahad']
let new_user: string[]=['daresh','fizan','daniyal','aliza','admin']


new_user.forEach ((new_user) =>{
if (
    current_user.some(
        (current_user)=> current_user.toLocaleLowerCase()===new_user.toLowerCase()
    ) 
) {
    console.log(`${new_user} will need to enter a new username.`)
} else{
    console.log(`${new_user} is available.`);
}

}
);