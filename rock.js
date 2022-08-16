
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


function play(playerSelection,computerSelection)
{
    let pl = playerSelection.charAt(0).toUpperCase();
    let player = pl.concat(playerSelection.slice(1));

    let com = computerSelection.charAt(0).toUpperCase()
    let computer= com.concat(computerSelection.slice(1));


    let result = calc(player,computer)
    
    if(result==='comp')
    {   
        return `You Lose! ${computer} beats ${player}`
    }
    else if(result==='user')
    {
        return `You Won! ${player} beats ${computer}`
    }
    else
    {
        return `Match is Tie!!`
    }
}

function game()
{
    let count =0,count1=0,count2=0;
    for(let i=0;i<5;i++)
    {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt('Enter your choice')
        let res = play(playerSelection,computerSelection);
        console.log(res)
        if(res.includes('Won'))
        {
            count++;
        }
        else if (res.includes('Lose'))
        {
            count1++;
        }
        else
        {
            count2++;
        }
    }

    console.log(count,count1,count2);
    if(count > count1 && count >= count2)
    {
        return `Ultimately!!! You Won`
    }
    else if(count1>count && count1>=count2){
        return `You Lose!!!`
    }
    else{
        return `Match is a tie`
    }
    
}

function calc(x,y)
{
    if(x==='Rock')
    {
        if(y==='Paper')
        {
           return 'comp';
        }

        else if(y==='Scissor')
        {
            return 'user';
        }
        else{
            return 'tie';
        }
    }
    else if(x==='Paper')
    {
        if(y==='Rock')
        {
           return 'user';
        }

        else if(y==='Scissor')
        {
            return 'comp';
        }
        else{
            return 'tie';
        }
    }
    else{
        if(y==='Rock')
        {
           return 'comp';
        }

        else if(y==='Paper')
        {
            return 'user';
        }
        else{
            return 'tie';
        }
    }
}
console.log(game());



