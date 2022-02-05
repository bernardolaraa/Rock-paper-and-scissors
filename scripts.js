let chooseDiv = document.getElementById("choose")
let onePlayerDiv = document.getElementById("one-player")
let twoPlayerDiv = document.getElementById("two-players")
let oneResultDiv = document.getElementById("result1")
let twoResultDiv = document.getElementById("result2")

function onePlayer(){
    let div = chooseDiv;
    div.style.display = "none";
    div = twoPlayerDiv;
    div.style.display = "none";
    div = oneResultDiv;
    div.style.display = "none";
    div = onePlayerDiv;
    div.style.display = "flex";
}

function twoPlayers(){
    let div = chooseDiv;
    div.style.display = "none";
    div = onePlayerDiv;
    div.style.display = "none";
    div = oneResultDiv;
    div.style.display = "none";
    div = twoPlayerDiv
    div.style.display = "flex";
}

function play1(){
    if(document.getElementById("rock").checked == false && document. getElementById("paper").checked == false && document.getElementById("scissors").checked == false){
        text = "É preciso fazer uma jogada!";
    } else{
        let raffle = Math.floor(Math.random() * 3);
        switch(raffle){
            case 0:
                document.getElementById("rockPc")
                break;
            case 1:
                document.getElementById("paperPc")
                break;
            case 2:
                document.getElementById("scissorsPc")
                break;
        }
        console.log(raffle)
        if ((document.getElementById("rock").checked == true && raffle == 0) || (document.getElementById("paper").checked == true && raffle == 1) || (document.getElementById("scissors").checked == true && raffle == 2)){ 
            text = "Empate";
        } else if ((document.getElementById("rock").checked == true && raffle == 2) || (document.getElementById("paper").checked == true && raffle == 0) || (document.getElementById("scissors").checked == true && raffle == 1)){
            text = "Jogador venceu";
        } else { 
            text = "Computador Venceu"
        }
    }
    let div = oneResultDiv;
    div.style.display = "flex";
    div = onePlayerDiv;
    div.style.display = "none";
    let h2 = document.getElementById("winner");
    h2.innerHTML = text;
}

function play2(){
    if(document.getElementById("rock1").checked == false && document. getElementById("paper1").checked == false && document.getElementById("scissors1").checked == false && document.getElementById("rock2").checked == false && document.getElementById("paper2").checked == false && document.getElementById("scissors2").checked == false) {
        text = "É preciso fazer uma jogada!";
    }  
        else if ((document.getElementById("rock1").checked == true && document.getElementById("rock2").checked == true) || (document.getElementById("paper1").checked == true &&document.getElementById("paper2").checked == true) || (document.getElementById("scissors1").checked == true && document.getElementById("scissors2").checked == true)){ 
            text = "Empate";
        } else if ((document.getElementById("rock1").checked == true && document.getElementById("scissors2").checked == true) || (document.getElementById("paper1").checked == true && document.getElementById("rock2").checked == true) || (document.getElementById("scissors1").checked == true && document.getElementById("paper2").checked == true)){
            text = "Jogador 1 venceu";
        } else if((document.getElementById("rock1").checked == true && document.getElementById("paper2").checked == true) || (document.getElementById("paper1").checked == true && document.getElementById("scissors2").checked == true) || (document.getElementById("scissors1").checked == true && document.getElementById("rock2").checked == true)){ 
            text = "Jogador 2 venceu"
        }
    
    let div = twoResultDiv;
    div.style.display = "flex";
    div = twoPlayerDiv;
    div.style.display = "none";
    let h3 = document.getElementById("winner2");
    h3.innerHTML = text;
}
