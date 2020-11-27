
function returnResult(player, computer){

    if (player === computer)
        return "Draw!"

    if (player==="r" && computer==="s" || player==="s" && computer==="p" || player==="p" && computer==="r")
        return "Player won!"


    return "Computer won!"


}

function setPic(choice){
    let pic
    switch (choice) {

        case "r":
            pic = "rock.png"
            break;
        case "p":
                pic= "paper.png"
                break;
        default:
            pic = "scissors.png"
            break;
    }

    return pic
}

function translateComputerChoice(choice){
    let translatedCPChoice

    switch (choice) {
        case 0:
            translatedCPChoice = "r";
            break;
            case 1:
                translatedCPChoice = "p";
                break;
        default:
            translatedCPChoice = "s";
            break;
    }
    return translatedCPChoice
}

function reset(){
    document.getElementById("computerpic").src = "unnamed.png"
    //document.getElementById("playerpic").src = "unnamed.png"
    document.getElementById("playerscore").innerText="0"
    document.getElementById("computerscore").innerText="0"

}

let playerCurrentScore=0
let computerCurrentScore=0

printScoreBoard("playerscore", "Player", playerCurrentScore)
printScoreBoard("computerscore","Computer",computerCurrentScore)

function printScoreBoard(name, nameText, score){
    document.getElementById(name).innerText = `${nameText}: ${score}`
}

function rockpaperschissors(choice){
  
    let computerChoice = translateComputerChoice(Math.floor(Math.random() * 3))
    document.getElementById("computerpic").src = setPic(computerChoice)
    
    if(returnResult(choice, computerChoice)==="Player won!"){
        playerCurrentScore++;
        printScoreBoard("playerscore", "Player", playerCurrentScore)    
    }

    if(returnResult(choice, computerChoice)==="Computer won!"){
        computerCurrentScore++;
        printScoreBoard("computerscore","Computer",computerCurrentScore)
       
    }

  
    

}