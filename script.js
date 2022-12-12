let progress = document.getElementById("progress")
let next = document.getElementById("next")
let prev = document.getElementById("prev")
let circle = document.querySelectorAll(".circle")



let currenActive = 1


next.addEventListener("click",() =>  {
    currenActive++

    if(currenActive > circle.length){
        currenActive = circle.length
    }
console.log(currenActive)
    update() 
})

prev.addEventListener("click",() =>  {
    currenActive--

    if(currenActive < 1){
        currenActive = 1
    }
    
    update() 
})

function update() {

    circle.forEach((circle,idx) =>{
        if(idx < currenActive){
            circle.classList.add("active")
        }
        else{
            circle.classList.remove("active")
        }
    })

let actives = document.querySelectorAll(".active")

console.log(progress.style.width = ((actives.length-1 )/(circle.length -1 ))* 100 + "%")
}


if(currenActive === 1)  {
    prev.disabled = true
}
else if (currenActive === circle.length){
    next.disabled = true 
}
else{
    prev.disables = false
    next.disabled = false
}




