/*Chiedi all’utente la sua email
controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.*/


//email
var emails = ["mrmarcodivita@gmail.com", "sarahproietti1@gmail.com", "miriam.depace@gmail.com", "brunorossi@gmail.com"];
console.log(emails);

//insert value
var logIn = prompt ("Sign in with your email").toLowerCase();
console.log(logIn);

var logInOk = false;


/*FOR: 0 is the starting value of an array,
emails is 0123 lenght is the numbers of elements within the array,
in this case i++ to increase the value by 1*/
for (var i = 0; i < emails.length; i++) {
    if (emails [i] === logIn) {
        logInOk = true;
    }
}

if (logInOk === true) { //correct value
    console.log("Welcome");
} else {
    console.log("Error"); //incorrect value
}