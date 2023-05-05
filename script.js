let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');


let user_win_board = document.getElementById("user_score");
let computer_win_board = document.getElementById("computer_score");


rock.addEventListener('click', () => {
    check_win("rock");
})


paper.addEventListener('click', () => {
    check_win("paper");
})



scissor.addEventListener('click', () => {
    check_win("scissor");
})







let lose_sound = document.getElementById('lose_sound');
let win_sound = document.getElementById('win_sound');


//check win here 
let check_win = (user_choice) => {
    let state = ["rock", "paper", "scissor"];
    let computer_choice = state[Math.floor(Math.random() * 3)]

    if (user_choice === computer_choice) {
        user_win_board.innerText = 'Match Tie';
        user_win_board.style.color = "white"
        computer_win_board.innerText = "";
    } else if (user_choice === "rock" && computer_choice === "scissor") {
        user_win_board.innerText = `You Win with ${user_choice}`;
        user_win_board.style.color = "lime";
        win_sound.play();
        computer_win_board.innerText = `Computer Lose with ${computer_choice}`;
        computer_win_board.style.color = "red";
    } else if (user_choice === 'rock' && computer_choice === "paper") {
        user_win_board.innerText = `You Lose with ${user_choice}`;
        user_win_board.style.color = "red";
        lose_sound.play();
        computer_win_board.innerText = `Computer Win with ${computer_choice}`;
        computer_win_board.style.color = "lime"
    } else if (user_choice === 'paper' && computer_choice == "rock") {
        user_win_board.innerText = `You Win with ${user_choice}`;
        user_win_board.style.color = "lime";
        win_sound.play();
        computer_win_board.innerText = `Computer Lose with ${computer_choice}`;
        computer_win_board.style.color = "red";
    } else if (user_choice === 'paper' && computer_choice == "scissor") {
        user_win_board.innerText = `You Lose with ${user_choice}`;
        user_win_board.style.color = "red";
        lose_sound.play();
        computer_win_board.innerText = `Computer Win with ${computer_choice}`;
        computer_win_board.style.color = "lime"
    } else if (user_choice == "scissor" && computer_choice == "rock") {
        user_win_board.innerText = `You Lose with ${user_choice}`;
        user_win_board.style.color = "red";
        lose_sound.play();
        computer_win_board.innerText = `Computer Win with ${computer_choice}`;
        computer_win_board.style.color = "lime"
    } else if (user_choice === 'scissor' && computer_choice == "paper") {
        user_win_board.innerText = `You Win with ${user_choice}`;
        user_win_board.style.color = "lime";
        win_sound.play();
        computer_win_board.innerText = `Computer Lose with ${computer_choice}`;
        computer_win_board.style.color = "red";
    } else {
        alert("Something Went Wrong..! Play again..!");
    }
}