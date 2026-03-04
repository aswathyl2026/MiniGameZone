const scoreResult=document.getElementById("scoreResult")
let finalScore=localStorage.getItem("finalScore")
scoreResult.innerText=`Score is : ${finalScore}`
function reset(){
scoreResult.innerText="Score is :"
}
