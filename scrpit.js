var time=60;
var score=0;
var hitrn=0
function makeBubble(){
    
var counter="";

for(var i=0; i<120;i++){
    var rn= Math.floor(Math.random()*20);
    counter +=`<div class="bubble"> ${rn} </div>`;
  
}

document.querySelector("#pbuttom").innerHTML=counter;
}

function getHit(){
    hitrn=Math.floor(Math.random()*20);
    document.querySelector("#hitval").textContent=hitrn;
}

function runTimer(){
 var timer=  setInterval(function(){
    if(time > 0){
        time--;
        document.querySelector("#timervalue").textContent=time;
    }else{
        clearInterval(timer);
        document.querySelector("#pbuttom").innerHTML=`<h1>Game Over! Your Score ${score}</h1>`;

    }
    
       
    },1000)
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}

document.querySelector("#pbuttom")
.addEventListener("click",function(details){
    var clicked=Number(details.target.textContent);
    if(clicked===hitrn){
        increaseScore();
        makeBubble();
        getHit();
    }
})

runTimer();
makeBubble();
getHit();
