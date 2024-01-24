let userScore = 0;
let comScore = 0;
let userWin;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score")

const compChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const playGame = (userChoice) => {
    console.log("userChoice is =", userChoice);
    const computerChoice = compChoice(); // Renamed the variable to avoid conflict
    console.log("comChoice is = ", computerChoice);

    if (computerChoice === userChoice) {
        draw();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, computerChoice);
    }
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win!  Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        comScore++;
        compScorepara.innerText = comScore;
        msg.innerText = `You Lose! ${computerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const draw = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw. Play again.";
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
