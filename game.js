const choose=["Rock","Paper","Scissors"]
const result=document.getElementById("result")
const fail=document.getElementById("fail")
const scoreSend=document.getElementById("scoreSend")
const scoreBoard=document.getElementById("scoreBoard")
const move=document.getElementById("move")
let score=0;
let movevalue=15
move.innerText=`${movevalue}`

const start=()=>{
    movevalue-=1;
    move.innerText=`Chance left  : ${movevalue}`
}

const play=(userChoose)=>{                                //display function
const computerChoose=choose[Math.floor(Math.random()*3)]

if(movevalue>0){
  if(userChoose==computerChoose){
    alert("Its a draw..Play again....😊😊")
     result.hidden=true;
     fail.hidden=true; 
    start()
  }
 else if(
 (userChoose=="Rock"&& computerChoose=="Scissors")||
 (userChoose=="Paper"&& computerChoose=="Rock")|| 
 (userChoose=="Scissors"&& computerChoose=="Paper"))
  {
  result.innerText="You win 🔥🔥🔥🔥🔥🔥"
  result.hidden=false;

  fail.hidden=true;  
  score+=1
  start()
 }
 else{
  fail.innerText="You Lost....."
  fail.hidden=false;  
  result.hidden=true;
  
    start()
 }
 scoreBoard.innerHTML=
`<p>User Choose  :${userChoose}</p>
<p>Computer Choose  :${computerChoose}</p>
<p>Score   :${score}</p>
`
}
else{
    alert("Time is Over!!!!!!!!!!!!")
}
  scoreSend.hidden=false;



}
function sendScore(){
    localStorage.setItem("finalScore",score)
    window.location.href="score.html"
}