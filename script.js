
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

function rockpaperschissors(choice){
  
    let computerChoice = translateComputerChoice(Math.floor(Math.random() * 3))
    //translate choices
    
    console.log("computer: ",computerChoice)
    console.log("player: ", choice)
    //update pic
    document.getElementById("computerpic").src = setPic(computerChoice)
   // document.getElementById("playerpic").src = setPic(choice)
    
    

    //document.getElementById("result").innerText = "computer:" + fullDisplayChoice(translatedCPChoice) + "\r\n"+"Player:" + fullDisplayChoice(choice) + "\r\n"+ returnResult(choice, translatedCPChoice);

    if(returnResult(choice, computerChoice)==="Player won!"){
        console.log(document.getElementById("playerscore").innerText)
        document.getElementById("playerscore").innerText= parseFloat(document.getElementById("playerscore").innerText)+1
       
    }

    if(returnResult(choice, computerChoice)==="Computer won!"){
        console.log(document.getElementById("playerscore").innerText)
        document.getElementById("computerscore").innerText= parseFloat(document.getElementById("computerscore").innerText)+1
       
    }

  
    

}