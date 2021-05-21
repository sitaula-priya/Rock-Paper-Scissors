//your age in days

function ageInDays (){
    var birthYear= prompt ('What year were you born.....good fellow?');
    var ageInDayss = (2018- birthYear)*365;
    var h1= document.createElement('h1');
    var textAnswer = document.createTextNode('You are'+ ageInDayss + 'days old' );
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}

function reset(){
    document.getElementById('ageInDays').remove();
}

//challenge-2: age generator
function generateAge (){
    var image = document.createElement('img');
    var div= document.getElementById('flex-age-gen')
    image.src= "giphy.gif" 
    div.appendChild(image);  
}

// challenge-3: rock, scissors, paper
function rpsGame(yourChoice){
    console.log(yourChoice);

    var humanChoice, botChoice;
    humanChoice= yourChoice.id;
    botChoice= numberToChoice(randToRpsInt ());
    console.log('Computer Choice:',botChoice);

    results= decideWinner(humanChoice,botChoice);// (0,1)
    console.log(results);

    message = finalMessage(results);
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt (){
    return Math.floor(Math.random() * 3 );
}

function numberToChoice(number){
    return['rock','paper','scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase ={
        'rock':{'scissors':1, 'rock':0.5, 'paper':0},
        'paper':{'paper':0.5,'scissors':0,'rock':1 },
        'scissors':{'scissors':0.5, 'paper':1, 'rock':0}
    };

    var yourScore= rpsDatabase[yourChoice][computerChoice];
    var computerScore= rpsDatabase [computerChoice] [yourChoice];

    return[yourScore, computerScore];
}
function finalMessage ([yourScore, computerScore]){
    if (yourScore ===0) {
        return{'message':'you lost !', 'color':'blue'};
    } else if (yourScore=== 0.5){
        return{'message':'you tied !', 'color':'green'};
    } else {
        return{ 'message':'you won !', 'color':'red'};
    }

}
 
function rpsFrontEnd (humanImageChoice, botImageChoice, finalMessage){
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    //removing image
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    
    var humanDiv = document.createElement ('div');
    var botDiv = document.createElement ('div');
    var messageDiv = document.createElement ('div');

    humanDiv.innerHTML= "<img src ='"+ imageDatabase[humanImageChoice]+ "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50,233,1);'>"
    messageDiv.innerHTML= "<h1 style='color:"+finalMessage['color']+" ; font-size: 60px; padding: 30px;'>"+ finalMessage['message']+"</h1>"
    botDiv.innerHTML= "<img src ='"+ imageDatabase[botImageChoice]+ "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}
//challenge 4: change the color of all buttons
var all_buttons= document.getElementsByTagName('button');


var copyAllButtons = [];
for(let i=0; i<all_buttons.length; i++) {

    copyAllButtons.push(all_buttons[i].classList[1]);
}

 function buttonColorChange(buttonThingy){
     if (buttonThingy.value==='red'){
         buttonsRed();
     } else if(buttonThingy.value==='blue'){
         buttonsBlue();
     } else if(buttonThingy.value==='yellow'){
         buttonsYellow();
     } else if(buttonThingy.value==='reset'){
         buttonColorReset();
     }else (buttonThingy.value==='random')
         randomColors();
     }
    

 function buttonsRed (){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }

 }

 function buttonsYellow (){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    }

 }

 function buttonColorReset(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[i]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
 }

 function randomColors(){
     var choices= ['btn-primary','btn-danger','btn-warning']

     for(let i=0; i<all_buttons.length; i++){
         var randomNumber= Math.floor(Math.random()*4);
         all_buttons[i].classList.remove(all_buttons[i].classList[1]);
         all_buttons[i].classList.add(choices[randomNumber]);
     }
 }
 //challenge 5:blackjack
 let blackjackGame={
     'you':{'scoreSpan':'#your-blackjack-result','div': '#your-box', 'score':0},
     'dealer':{'scoreSpan':'#dealer-blackjack-result','div': '#dealer-box', 'score':0},
 };

const YOU =blackjackGame['you']
const DEALER =blackjackGame['dealer']

 document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

 function blackjackHit(){
    let cardImage= document.createElement('img');
    cardImage.src= 'challenge-1/images/q.png';
    document.querySelector(YOU['div']).appendChild(cardImage);
    
}


