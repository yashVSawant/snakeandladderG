class Players{
        
        constructor(color){
        this.player=0;
        this.color= color;
        this.snakes = new Set([11,27,46,59,68,72,89,98]);
        this.ladders = new Set ([5,18,24,45,64,74,88]);
        }
        snake(down){
            switch(down){
                case 11: this.movePieces(-3);
                break;
                case 27: this.movePieces(-15);
                break;
                case 46: this.movePieces(-26);
                break;
                case 59: this.movePieces(-33);
                break;
                case 68: this.movePieces(-18);
                break;
                case 72: this.movePieces(-4);
                break;
                case 89: this.movePieces(-72);
                break;
                case 98: this.movePieces(-33);
                break;
                defalult: console.log(err);
            }
        }
        ladder(up){
            switch(up){
                case 5:  this.movePieces(9);
                break;
                case 18: this.movePieces(7);
                break;
                case 24: this.movePieces(46);
                break;
                case 45: this.movePieces(10);
                break;
                case 64: this.movePieces(19);
                break;
                case 74: this.movePieces(14);
                break;
                case 88: this.movePieces(4);
                break;
                defalult: console.log(err);
            }
        }
        snakeOrLadder(position){
            if(this.snakes.has(this.player)){
                this.snake(this.player);
            }
            if(this.ladders.has(this.player)){
                this.ladder(this.player);
            }
        }

        movePieces(moves){
            const newPosition = this.player + moves ;
            if(newPosition > 100){
                return;
            }
            if(newPosition == 100){
               const winner = document.createElement('li');
               winner.innerText=`${++count} is ${this.color}`;
               ul.append(winner);
            }
            this.player += moves;
            this.gotoNewPosition(newPosition-moves);
            this.snakeOrLadder();
        }
        gotoNewPosition(box){
                        
                    const prevBlock = document.getElementById(`${box}`);    
                    const block = document.getElementById(`${this.player}`);
                    prevBlock.style.backgroundColor = 'white' ; 
                    block.style.backgroundColor = `${this.color}`;
        }
        
}

let count=0;
let diceCount=4;
let flag1=true;
let flag2=true;
let flag3=true;
let flag4=true;
const ul = document.getElementById('list');
const dice = document.getElementById('dice');
const play1 = document.getElementById('player1');
play1.style.backgroundColor='red';
const start1 = new Players('red');
const play2 = document.getElementById('player2');
const start2 = new Players('yellow');
const play3 = document.getElementById('player3');
const start3 = new Players('blue');
const play4 = document.getElementById('player4');
const start4 = new Players('green');

dice.addEventListener('click',(e)=>{
    active = diceCount%4;
    diceCount++;
    if(active==0){
        play4.style.backgroundColor='white';
        play1.style.backgroundColor='red';
        player1();
    } else if(active==1){
        play1.style.backgroundColor='white';
        play2.style.backgroundColor='yellow';
        player2();
    } else if(active==2){
        play2.style.backgroundColor='white';
        play3.style.backgroundColor='blue';
        player3();
    } else if(active==3){
        play3.style.backgroundColor='white';
        play4.style.backgroundColor='green'
        player4();
    }
})

function randomDice(){
    let roll = (Math.floor((Math.random() * 10) + 1))%6;
    return roll;
}
function player1() {
        let roll = randomDice();
        if(roll==0){roll=6}
        if(roll==6 && flag1){
            start1.movePieces(0)
            flag1=false;
        }else if(!flag1){
        start1.movePieces(roll);
        }         
}
function player2(){
    let roll = randomDice();
    if(roll==0)roll=6;
    if(roll==6 && flag2){
        start2.movePieces(0)
        flag2=false;
    }else if(!flag2){
    start2.movePieces(roll);
    }    
}
function player3() {
    let roll = randomDice();
    if(roll==0)roll=6;
    if(roll==6 && flag3){
        start3.movePieces(0)
        flag3=false;
    }else if(!flag3){
    start3.movePieces(roll);
    }    
}
function player4(){
    let roll = randomDice();
    if(roll==0)roll=6;
    if(roll==6 && flag4){
        start4.movePieces(0)
        flag4=false;
    }else if(!flag4){
    start4.movePieces(roll);
    }  
}


