let playerCurrentScore=0
let computerCurrentScore=0
let playerName ="Player"

function start(){

    playerName=document.getElementById("playername").value.length>0?document.getElementById("playername").value:"Player"

    document.getElementById("startdiv").remove()
    printScoreBoard("playerscore", playerName, playerCurrentScore)
    printScoreBoard("computerscore","Computer",computerCurrentScore)
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
    printScoreBoard("playerscore", playerName, 0)
    printScoreBoard("computerscore","Computer",0)
}
//Changed 2020-11-27
const hands = [
    {"name": "rock", short: "r", "image":"rock.png", num:0},
    {"name": "paper", short: "p", "image":"paper.png", num:1},
    {"name": "scissors", short: "s", "image":"scissors.png",num:2}
]

//added 2020-11-26
function printScoreBoard(name, nameText, score){
    document.getElementById(name).innerText = `${nameText}: ${score}`
}

function rockpaperschissors(choice){
    let random = Math.floor(Math.random() * 3)
    console.log(random)
    let computerChoice = hands.find(o => o.num === random).short //Changed 2020-11-27 

    document.getElementById("computerpic").src = hands.find(o => o.short === computerChoice).image //Changed 2020-11-27
    if(whoWon(choice, computerChoice)==="Player won!"){
        playerCurrentScore++;
        printScoreBoard("playerscore", playerName, playerCurrentScore)    
    }

    if(whoWon(choice, computerChoice)==="Computer won!"){
        computerCurrentScore++;
        printScoreBoard("computerscore","Computer",computerCurrentScore)     
    }
}