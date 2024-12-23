//Given boxes fill the background color using dom.
//<!DOCTYPE html>
// {/* <html lang="en">
{/* <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 23px;
        }
        .box{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 45px;
            width: 45px;
            border: 2px solid black; 
        }
    </style>
</head>
<body>
    <!-- 
        Given 5 boxes, Assign a random color and a random background to each box using DOM concepts
     -->
     <div class="container">
        <div class="box">Box</div>
        <div class="box">Box</div>
        <div class="box">Box</div>
        <div class="box">Box</div>
        <div class="box">Box</div>
     </div>
</body>
</html> */} 
// let boxes = document.getElementsByClassName("box")
let boxes=document.querySelector(".container").children
// console.log(boxes)
function randomcolor(){
let val1= Math.ceil(0+Math.random()*255)
let val2= Math.ceil(0+Math.random()*255)
let val3= Math.ceil(0+Math.random()*255)

return `rgb(${val1}, ${val2}, ${val3})`
    
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor=randomcolor()
    e.style.color=randomcolor()
})