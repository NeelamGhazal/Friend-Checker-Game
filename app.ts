#! /usr/bin/env node
import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(chalk.cyanBright.bold("\t\t\t➖➖➖➖➖➖➖➖➖➖➖➖"));
console.log(chalk.cyanBright.bold("\t\t\t🌟 Friend Checker Game 🌟"));
console.log(chalk.cyanBright.bold("\t\t\t➖➖➖➖➖➖➖➖➖➖➖➖"));

const friendsList: string[] = ["Aina", "Anabiya", "Haya", "Hashir", "Salar", "Usman"];

function isFriend(name: string): boolean {
    return friendsList.includes(name);
}

function askAnotherName(): void {
    rl.question(chalk.magentaBright('Do you want to check another name? (y/n): '), (answer: string) => {
        if (answer.trim().toLowerCase() === 'y') {
            playFriendCheckerGame();
        } else {
            console.log(chalk.cyanBright.bold("\t\t\t➖➖➖➖➖➖➖➖"));
            console.log(chalk.cyanBright.bold("\t\t\t 🌟 Good Bye 🌟"));
            console.log(chalk.cyanBright.bold("\t\t\t➖➖➖➖➖➖➖➖"));
            rl.close();
        }
    });
}

function playFriendCheckerGame(): void {
    rl.question(chalk.magentaBright('Enter a name to check if they are a friend: '), (inputName: string) => {
        if (inputName.trim() === '') {
            console.log(chalk.red('You must enter a valid name.'));
            playFriendCheckerGame();
        } else {
            const formattedName = chalk.yellowBright(inputName.trim());
            if (isFriend(inputName)) {
                console.log(chalk.yellowBright(`${formattedName} is your friend!`));
            } else {
                console.log(chalk.redBright(`${formattedName} is not your friend.`));
            }
            askAnotherName();
        }
    });
}

playFriendCheckerGame();
