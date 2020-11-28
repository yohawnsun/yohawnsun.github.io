let playerCurrentScore=0
let computerCurrentScore=0
let playerName ="Player"

function start(){

    playerName=document.getElementById("playername").value.length>0?document.getElementById("playername").value:"Player"
    document.getElementById("startdiv").remove()
    printScoreBoard()
}
function whoWon(player, computer){

    if (player === computer)
        return "Draw!"

    if (player==="r" && computer==="s" || player==="s" && computer==="p" || player==="p" && computer==="r")
        return "Player won!"

    return "Computer won!"
}
//removed two switch-cases 2020-11-27
function reset(){
    document.getElementById("computerpic").src = "unnamed.png"
    playerCurrentScore=0
    computerCurrentScore=0
}
//Changed 2020-11-27
const hands = [
    {"name": "rock", short: "r", "image":"rock.png"},
    {"name": "paper", short: "p", "image":"paper.png"},
    {"name": "scissors", short: "s", "image":"scissors.png"}
]

//added 2020-11-26
function printScoreBoard(){
    
        document.getElementById("playerscore").innerText = `${playerName}: ${playerCurrentScore}`
    
        document.getElementById("computerscore").innerText = `Computer: ${computerCurrentScore}`   
}



function rockpaperschissors(choice){
    let random = Math.floor(Math.random() * 3)
    console.log(random)
    let computerChoice = hands[random].short //Changed 2020-11-27 

    document.getElementById("computerpic").src = hands[random].image //Changed 2020-11-27 //.find(o => o.short === computerChoice)
    if(whoWon(choice, computerChoice)==="Player won!"){
        playerCurrentScore++;
   
    }

    if(whoWon(choice, computerChoice)==="Computer won!"){
        computerCurrentScore++;    
    }

    printScoreBoard()

}
