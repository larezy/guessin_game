'use strict';

// console.log(document.querySelector('.message').textContent);
// const upDate= (document.querySelector('.message').textContent='🎉Correct Number!');
// console.log(upDate);

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;

// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);

let secertNumber = Math.trunc(Math.random()*20)+1; 


let score =  20;


document.querySelector('.check').addEventListener('click', function() {
    const guess=Number(document.querySelector('.guess').value);
    //console.log(guess, typeof guess);


    //when there is value
    if(!guess){
        document.querySelector('.message').textContent='⛔No value';

    }
    //when the value is correct
    else if(guess === secertNumber){
//display secret number
document.querySelector('.number').textContent=secertNumber;

//congralation message
console.log(document.querySelector('.message').textContent='🎉Correct Number!');

//styling the css
document.querySelector('body').style.backgroundColor ='#60b347';
document.querySelector('.number').style.width = '30rem'



    }

    //when the value is too High
    else if(guess > secertNumber){
        
        if(score>0){
            document.querySelector('.message').textContent='📈Too High!';
            
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='Game over';
        }
        
    }
    //when the value is too low
    else if(guess < secertNumber){
        if(score>0){
            document.querySelector('.message').textContent='📉Too Low!';
            
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='Game over';
        }
    }


});

document.querySelector('.again').addEventListener('click', function (){
    //score
score =20;
document.querySelector('.score').textContent='20';

//secretnumber
secertNumber = Math.trunc(Math.random()*20)+1;

document.querySelector('.number').textContent='?';

//body backgroundColor
document.querySelector('body').style.backgroundColor='#222';

//numberwidth
document.querySelector('.number').style.width='15rem';

//input empty
document.querySelector('.guess').value='';









})