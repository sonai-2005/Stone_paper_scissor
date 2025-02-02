let choices = document.querySelectorAll(".choice");
let computer =0,you  =0;
function getName(click){
    if(click.innerText=="1st"){
        return "rock";
    }
    else if(click.innerText=="2nd")return "paper";
    else return "scissors";
}


function getRandomChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
let whoWon;
let choosing = document.querySelector("#choose");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        document.querySelector(".result").classList.remove("hide");
        let userChoice = getName(choice);
        console.log(`user choosed:  ${userChoice}`);
        let compChoice = getRandomChoice();
        console.log(`comuter choose: ${compChoice}`);
        if((userChoice=="paper" && compChoice=="scissors" )|| (userChoice=="rock" && compChoice=="paper") || (userChoice=="scissors" && compChoice=="rock")||(userChoice=="rock" && compChoice=="paper")){
            whoWon = "computer";
            console.log("computer won");
            computer++;
        }
        else if(compChoice===userChoice){
            console.log("draw");
            whoWon = "no one";
        }
        else{
            whoWon ="you";
            console.log("you won");
            you++;
        }
        document.querySelector(".winner").innerText =`${whoWon} won the match` ;
        document.querySelector(".score").innerHTML = `SCORE <br> YOU: ${you} <br> COMPUTER: ${computer}`;
        choosing.innerHTML=`you: ${userChoice}<br>computer: ${compChoice}`;



    })
})

