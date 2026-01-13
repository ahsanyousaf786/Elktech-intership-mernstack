const inquirer = require('inquirer');

// ================== Session Analytics ==================
let totalGames = 0;
let totalWins = 0;
let totalLosses = 0;
let totalGuesses = 0;

// ================== Helper Functions ==================

// Function to calculate win percentage
const winPercentage = () =>
    totalGames === 0 ? 0 : ((totalWins / totalGames) * 100).toFixed(2);

// Function to calculate average guesses per game
const averageGuesses = () =>
    totalGames === 0 ? 0 : (totalGuesses / totalGames).toFixed(2);


// Function to display session stats
const showStats = async () => {
    console.log('\n==== Session Statics ====');
    console.log('Total Games Played:', totalGames);
    console.log('Total Wins:', totalWins);
    console.log('Total Losses:', totalLosses);
    console.log('Win Percentage:', winPercentage(), '%');
    console.log('Total Guesses Made:', totalGuesses);
    console.log('Average Guesses per Game:', averageGuesses());
    console.log('=========================\n');

    // Press Enter to return to menu
    await inquirer.prompt([
        {
            type: 'input',
            name: 'continue',
            message: 'Press Enter to return to Main Menu...',
        },
    ]);
    mainMenu(); // Return to main menu
};

// ================== Game Logic ==================
const playGame = async () => {
    totalGames++;
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attemptsLeft = 5;
    let guesses = [];
    let gameOver = false;

    console.log('\n=== NEW GAME START ===');
    console.log('I have picked a number between 1 and 100.');
    console.log(`You have ${attemptsLeft} attempts.\n`);

    let attemptCount = 1;

    while (!gameOver && attemptsLeft > 0) {
        const { userGuess } = await inquirer.prompt([
            {
                type: 'input',
                name: 'userGuess',
                message: `> Attempt ${attemptCount}:`,
                validate: (input) => {
                    const num = Number(input);
                    if (input.trim() === '') {
                        return 'Invalid input: Please enter a  number.'; 
                        
                    }

                    if (isNaN(num)) {
                        return 'Invalid input: Please enter a number.';
                    }

                    if (num < 1 || num > 100) {
                        return 'Invalid input: Please choose between 1-100.';
                    }
                    return true;
                },
            },
        ]);

        const guess = Number(userGuess);

        // Repeat guess
        if (guesses.includes(guess)) {
            console.log('You already guessed this number! Try a different one.\n');
            continue; // Do not count attempt
        }

        guesses.push(guess);
        totalGuesses++;

        if (guess === secretNumber) {
            console.log(`\nCorrect! You won in ${attemptCount} attempts.: \n`);
            totalWins++;
            gameOver = true;
            break;
        } else if (guess < secretNumber) {
            console.log('Too Low!\n');
        } else {
            console.log('Too High!\n');
        }

        attemptsLeft--;
        attemptCount++;


    }

    if (!gameOver) {
        console.log(`GAME OVER! You ran out of moves.`);
        console.log(`The number was: ${secretNumber}\n`);
        totalLosses++;
    }

    // Press Enter to return to menu
    await inquirer.prompt([
        {
            type: 'input',
            name: 'continue',
            message: 'Press Enter to return to Main Menu...',
        },
    ]);

    mainMenu();
};

// ================== Main Menu ==================
const mainMenu = async () => {
    console.log('1. Play New Game');
    console.log('2. View Session Stats');
    console.log('3. Exit');

    const { choice } = await inquirer.prompt([
        {
            type: 'input',
            name: 'choice',
            message: 'Select an option:',
            validate: (input) => {
                if (!['1', '2', '3'].includes(input.trim())) {
                    return 'Please select 1, 2, or 3.';
                }
                return true;
            },
        },
    ]);

    switch (choice.trim()) {
        case '1':
            playGame();
            break;
        case '2':
            showStats();
            break;
        case '3':
            console.log('Goodbye! Thanks for playing.');
            process.exit();
            break;
    }
};


// ================== Start Application ==================
console.log('============================')
console.log('GUESS THE NUMBER: ANALYTICS')
console.log('============================')
mainMenu();
