const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask for user input
rl.question("Enter your name: ", (userName) => {
    if (userName.trim()) {
        delayedGreeting(userName);
    } else {
        console.log("No name entered.");
        rl.close();
    }
});

function delayedGreeting(name) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
        rl.close(); // Close the readline interface after displaying the greeting
    }, 2000);
}


