let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const compmsg = document.querySelector("#msg1");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompchoice = () =>{
    const options = ["stone","paper","scissors"];
    let random = Math.floor(Math.random()*options.length);
    return options[random];

};

const drawGame = () =>{
    msg.innerText = "Game was Drawn. Play Again";
    msg.style.backgroundColor = "black";

};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `You Win!🥳 Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        compmsg.innerText = `Computer Choice is ${compChoice}`;
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose.😣 Your ${userChoice} was beaten by ${compChoice}`
        msg.style.backgroundColor = "red";
        compmsg.innerText = `Computer Choice is ${compChoice}`;
    }
};

const playGame =(userChoice) =>{
    const compChoice = genCompchoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "stone"){
            userWin = compChoice === "paper" ? false: true;
         }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false: true;
        }
        else{
            userWin = compChoice === "stone" ? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


