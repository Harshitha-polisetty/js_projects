document.getElementById("heading").style.color="brown"
function increment(){
    let currentvalue=document.getElementById("counter").textContent
    currentvalue=parseInt(currentvalue)
    let count=document.getElementById("counter").textContent=currentvalue+1
    count=parseInt(count)
    if (count>0){
        document.getElementById("counter").style.color="blue"
    }
    else if(count<0){
        document.getElementById("counter").style.color="red"
    }
    else{
        document.getElementById("counter").style.color="black"
    }
}
function decrement(){
     let currentvalue=document.getElementById("counter").textContent
     currentvalue=parseInt(currentvalue)
     let count=document.getElementById("counter").textContent=currentvalue-1
      count=parseInt(count)
    if (count>0){
        document.getElementById("counter").style.color="blue"
    }
    else if(count<0){
        document.getElementById("counter").style.color="red"
    }
    else{
        document.getElementById("counter").style.color="black"
    }
}
function reset(){
    document.getElementById("counter").textContent=0
    document.getElementById("counter").style.color="black"
}