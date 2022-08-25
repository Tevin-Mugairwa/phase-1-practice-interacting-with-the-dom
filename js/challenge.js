function header(){
  return setInterval(() => {
    let header1 = document.querySelector("#counter")
    addInteg =parseInt(header1.innerText);
    header1.innerText=addInteg+1;
  },1000)
};
const minus = document.querySelector("#minus");
minus.addEventListener("click",() =>{
    let header1 = document.querySelector("#counter")
    addingInteg = parseInt(header1.innerText);
    header1.innerText= addingInteg-1 

})
console.log(minus);

const plus=document.getElementById("plus");
plus.addEventListener("click",() => {
    let header1 = document.querySelector("#counter")
    addingInteg = parseInt(header1.innerText);
    header1.innerText= addingInteg+1
})
console.log(plus);

let totalLikes = {};
heart = document.querySelector("#heart");
heart.addEventListener("click",(event) => {
    let header1 = document.querySelector("#counter")
    addingInt = parseInt(header1.innerText);
    totalLikes[addingInteg] ? totalLikes[addingInteg] += 1 : totalLikes[addingInt] = 1
    let ul =document.querySelector(".likes")
    event.preventDefault()
    if (document.getElementById(`like-${addingInteg}`)){
        document.getElementById(`like-${addingInteg}`).innerText =`${addingInteg} has been liked 1  times`    
    }
    else {
        let list = document.createElement("li")
        list.id = `like-${addingInteg}`
        list.innerText = `${addingInteg} has been like 1  time`
        ul.appendChild(list)
    }  
})
console.log(heart)

pause = document.querySelector("#pause");
pause.addEventListener("click",() => {
    pause.innerText = (pause.innerText === "pause") ? "resume" : "pause";
    btn = document.querySelector("#pause")
    header1 =document.querySelector("#counter")
    minusbtn = document.querySelector('#minus')
    submitbtn = document.querySelector('#submit')
    heartbtn = document.querySelector('#heart')
    let arrayOfButtons = [btn,header1, minusbtn, submitbtn, heartbtn];
    arrayOfButtons.forEach((button) => {"pause"!== button.id && (button.disabled =! pause)})

})
console.log(pause)

commentForm = document.querySelector("#comment-form");
commentForm.addEventListener("submit",(event) =>{
    event.preventDefault()
    let comment = document.querySelector('#comment-input').value
    let commentDiv = document.querySelector("#list")
    let newPara = document.createElement("p")
    commentDiv.appendChild(newPara) 
    newPara.innerText = comment
})