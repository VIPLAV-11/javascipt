// Creating a faulty calculator
const random= Math.random()
console.log(random);

let a = prompt("First Number")
let b = prompt("Second number")
let c = prompt("Enter Operation")

let opr={
    "+":"*",
    "-":"/",
    "*":"-",
    "/":"**",
}
if(random>0.1){
    alert(`the result is ${eval(`${a} ${c} ${b}` )}`)
}
else{
    c= opr[c];
    alert(`the result is ${eval(`${a} ${c} ${b}` )}`)
}