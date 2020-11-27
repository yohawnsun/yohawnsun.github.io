let playerCurrentScore=0
let computerCurrentScore=0
let playerName ="Player"

function start(){

    playerName=document.getElementById("playername").value.length>0?document.getElementById("playername").value:"Player"
    document.getElementById("startdiv").remove()
    printScoreBoard(playerCurrentScore, true)
    printScoreBoard(computerCurrentScore, false)
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
    printScoreBoard(0, true)
    printScoreBoard(0, false)
}
//Changed 2020-11-27
const hands = [
    {"name": "rock", short: "r", "image":"rock.png", num:0},
    {"name": "paper", short: "p", "image":"paper.png", num:1},
    {"name": "scissors", short: "s", "image":"scissors.png",num:2}
]

//added 2020-11-26
function printScoreBoard(score, isPlayer){
    if (isPlayer)
        document.getElementById("playerscore").innerText = `${playerName}: ${score}`
    else
        document.getElementById("computerscore").innerText = `Computer: ${score}`   
}

function rockpaperschissors(choice){
    let random = Math.floor(Math.random() * 3)
    console.log(random)
    let computerChoice = hands[random].short //Changed 2020-11-27 

    document.getElementById("computerpic").src = hands[random].image //Changed 2020-11-27 //.find(o => o.short === computerChoice)
    if(whoWon(choice, computerChoice)==="Player won!"){
        playerCurrentScore++;
        printScoreBoard(playerCurrentScore, true)    
    }

    if(whoWon(choice, computerChoice)==="Computer won!"){
        computerCurrentScore++;
        printScoreBoard(computerCurrentScore, false)     
    }
}
