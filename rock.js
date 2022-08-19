
var rockVal = null;
var clicks = 0;
let compCount = 0;
let userCount = 0;
let tieCount = 0;

const elements =  Array.from(document.querySelectorAll('button'));
console.log(elements);

elements.forEach(btn=>{
    btn.addEventListener('click',e=>{
         clicks+=1
         if(clicks <=5){
            document.getElementById('selection').innerHTML = `You have selected`+' '+e.target.outerText+'!!';
            rockVal = e.target.outerText;
            let computerSelection =  getComputerChoice();
            document.getElementById('compSelection').innerHTML = `Computer have selected` + ' '+computerSelection+'!!';
            document.getElementById('winner').textContent = `Match is Inprogress`;
            play(rockVal,computerSelection,clicks)
         }
         else{  
              
            setCount();
            localStorage.removeItem('userCount');
            localStorage.removeItem('computerCount');
            localStorage.removeItem('tieCount');
            alert(`Mate Game is Over`);
            document.getElementById('inpR').removeAttribute('disabled')
            document.getElementById('rock').setAttribute('disabled',true)
            document.getElementById('paper').setAttribute('disabled',true)
            document.getElementById('scissor').setAttribute('disabled',true)
            btn.removeEventListener("click",function(){
                   
            },false);
         }
         
    })
    
})


function setCount () {
    localStorage.setItem('computerCount',compCount);
    localStorage.setItem('userCount',userCount);
    localStorage.setItem('tieCount',tieCount);
    var retrievedCount1 = localStorage.getItem('computerCount');
    var retrievedCount2 = localStorage.getItem('userCount');
    var retrievedCount3 = localStorage.getItem('tieCount');

    if(retrievedCount1>retrievedCount2 && retrievedCount1>=retrievedCount3)
    {
        document.getElementById('winner').textContent = `Computer is Winner!`;
    }
    else if (retrievedCount2>retrievedCount1 && retrievedCount2>=retrievedCount3)
    {
        document.getElementById('winner').textContent = `Hey Buddy you are the Winner!!`;
    }
    else{
        document.getElementById('winner').textContent = `Match is tied`;
    }
}

function restart()
{
    location.reload();
}

function getComputerChoice()
{
   let number= Math.random()*3;
   let check = Math.floor(number);
   
   if(check===0)
   {
    return 'Rock';
   }
   else if(check===1)
   {
    return 'Paper';
   }
   else{
    return 'Scissor';
   }
}


function play(playerSelection,computerSelection,x)
{
    let pl = playerSelection.charAt(0).toUpperCase();
    let player = pl.concat(playerSelection.slice(1));

    let com = computerSelection.charAt(0).toUpperCase()
    let computer= com.concat(computerSelection.slice(1));
    let result = calc(player,computer)
    
    if(result==='comp')
    {
     
        compCount+=1;
        document.getElementById('compId').innerHTML = compCount;
        console.log(`You Lose! ${computer} beats ${player}`,compCount)
    }
    else if(result==='user')
    {
        userCount+=1;
        document.getElementById('scoreId').innerHTML = userCount;
        console.log(`You Won! ${player} beats ${computer}`)
    }
    else
    {
        tieCount+=1;
        console.log(`Match is Tie!!`);
    }
}

function calc(x,y)
{
    let rockUrl = "https://www.wikihow.com/images/thumb/1/1e/Play-Rock%2C-Paper%2C-Scissors-Step-6-Version-4.jpg/aid42597-v4-728px-Play-Rock%2C-Paper%2C-Scissors-Step-6-Version-4.jpg.webp"
    let paperUrl = "https://www.wikihow.com/images/thumb/4/49/Play-Rock%2C-Paper%2C-Scissors-Step-7-Version-4.jpg/aid42597-v4-728px-Play-Rock%2C-Paper%2C-Scissors-Step-7-Version-4.jpg.webp";
    let scissorUrl = "https://www.wikihow.com/images/thumb/b/b2/Play-Rock%2C-Paper%2C-Scissors-Step-8-Version-4.jpg/aid42597-v4-728px-Play-Rock%2C-Paper%2C-Scissors-Step-8-Version-4.jpg.webp";

    if(x==='Rock')
    {
        document.getElementById('user-choice').src = rockUrl;
        console.log(document.getElementById('user-choice').src);

        if(y==='Paper')
        {
            document.getElementById('comp-choice').src = paperUrl;
           return 'comp';
        }

        else if(y==='Scissor')
        {
            document.getElementById('comp-choice').src = scissorUrl;
            return 'user';
        }
        else{
            document.getElementById('comp-choice').src = rockUrl;
            return 'tie';
        }
    }
    else if(x==='Paper')
    {
        document.getElementById('user-choice').src = paperUrl;

        if(y==='Rock')
        {
            document.getElementById('comp-choice').src = rockUrl;
           return 'user';
        }

        else if(y==='Scissor')
        {
            document.getElementById('comp-choice').src = scissorUrl;
            return 'comp';
        }
        else{
            return 'tie';
        }
    }
    else{

        document.getElementById('user-choice').src = scissorUrl;
        if(y==='Rock')
        {
            document.getElementById('comp-choice').src = rockUrl;
           return 'comp';
        }

        else if(y==='Paper')
        {
            document.getElementById('comp-choice').src = paperUrl;
            return 'user';
        }
        else{

            document.getElementById('comp-choice').src = scissorUrl;
            return 'tie';
        }
    }
}








