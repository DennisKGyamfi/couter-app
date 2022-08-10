let countEl = document.getElementById("count-el")

 let count = 0

 function increment() {
   // alert('Increased')
    count += 1;
    countEl.textContent = count
    console.log(count)
    document.getElementById("count-el").style.color = "green"
 }

function decrement() {
   // alert('Decreased')
    count -= 1;
    countEl.textContent = count
    console.log(count)
    document.getElementById("count-el").style.color = "red"
}






 /*
function increment() {
console.log("The button was clicked")
count += 1;
countEl.textContent = count
console.log(count)
}

let saveEl = document.getElementById("save-el")

function save() {
    let countLog = count + " - ";
    saveEl.textContent += countLog
    console.log(count)
    countEl.textContent = 0
    count = 0
}
*/