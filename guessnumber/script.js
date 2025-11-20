
let randomNumber = Math.random()*100;
 randomNumber=Math.ceil(randomNumber)

function guessnum(){
    let currentval=document.getElementById("num").value
    currentval=parseInt(currentval)
    if (currentval==randomNumber){
        document.getElementById("answer").textContent="Yayy! you got it right"
    }
    else if(currentval<randomNumber){
        document.getElementById("answer").textContent="Go higher!!"
    }
    else if(currentval>randomNumber){
        document.getElementById("answer").textContent="Go lower!!"
    }
    else{
         document.getElementById("answer").textContent="Enter valid input"
    }

} 