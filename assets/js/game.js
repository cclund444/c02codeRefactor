var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var playerMoney = 10;

var fight = function() {
window.alert("Welcome to Robot Gladiators!");

enemyHealth = enemyHealth - playerAttack;
 
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
playerHealth = playerHealth - enemyAttack;

console.log(
    playeryName + "attacked" + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);
    if (enemyHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(enemyName + "still has " + playerHealth + "health left.");
    }

fight();
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
{ enemyHealth = enemyHealth - playerAttack;
console.log(
    playerName + " attcked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining."
);
// check enemy's health
if (enemyHealth <= 0) {
    winddow.alert(enemyName + "has died!");
} else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

//remove player's health by subtracting the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
console.log(
    enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining.");

// check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
} else {
    window.alert(playerName + " still has " + playerHealth + "  health left.");
}
// if player choses to skip
} if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney -2;
    }
    // if no (false), ask question again by running fight() again
    else {
        fight();
    }

    window.alert(playerName + " has chosen to skip fight!");
} else {
    window.alert("You need to choose a valid option. Try again!");
}

console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);
    if (playerHealth <= o) {
        winddow.alert(playerName + " has died!");
    }
    else {
        winddow.alert(playerName + "still has " + playerHealth + "health left.");
    }
}