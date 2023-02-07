
// Prompt for a max number
let valid_input = false;
let max_num, input;
let guesses = []; // empty array

while(!valid_input){
    input = window.prompt("Please enter the max number for this game");

    max_num = Math.round(Number(input));


    if(!isNaN(max_num) && max_num > 0) {
        valid_input = true;
    }
}

console.log(max_num);

if (max_num != null) {
  document.getElementById("max-num").innerHTML =
  "Pick a number between 1 and " + max_num;
}



let num = Math.floor(Math.random() * max_num) +1;
console.log(num);

// Get the value that's guessed from input text

function do_guess() {
    // Get the value that's guessed from input text
    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");

    let invalid_guess = document.getElementById("invalid-guess")
    
    // Set conditions for invalid guesses
    if(isNaN(guess)) {
        invalid_guess.innerHTML =
        "This is not a number";
    }
    else if(guess > max_num) {
        invalid_guess.innerHTML = 
        "This number is out of the range, try again";
    }

    // Set the conditions if the guess is correct, or if incorrect add it to a list of guesses
    if(guess == num){
        message.innerHTML = `You got it! It took ${guesses.length + 1} tries and your guesses were ${guesses}`;
        //console.log(`It took you ${{guessesindexOf(guess)}} tries and your guesses were ${{}} times`)
        
    } 
    else if (guess > num && guess < max_num) {
        message.innerHTML = "No, try a lower number";
        if(!guesses.includes(guess)) {
            guesses.push(guess);
        }
        else if(guesses.includes(guess)) {
            invalid_guess.innerHTML = `You've already guessed ${guess}`;
        }
    }
    else if (guess < num ) {
        message.innerHTML = "No, try a higher number";
        if(!guesses.includes(guess)) {
            guesses.push(guess);
        }
        else if(guesses.includes(guess)) {
            invalid_guess.innerHTML = `You've already guessed ${guess}`;
        }
    }
    else {
        message.innerHTML = "Enter a number in the range";
    }
    console.log(guesses);

}

