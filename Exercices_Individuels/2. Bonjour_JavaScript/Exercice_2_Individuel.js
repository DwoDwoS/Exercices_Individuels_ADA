let firstname = prompt("Quel est ton prénom ?");
let message = `Bonjour ${firstname} !`

function sayHello(firstname, hour) {
if(hour>=18) {
    console.log(`Bonsoir ${firstname} !`);
} else {
    console.log(`Bonjour ${firstname} !`);
}

document.querySelector('h1').innerText = message;
};

sayHello(firstname, 11);
sayHello(firstname, 18);
sayHello(firstname, 17);