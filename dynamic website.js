function contentCard(title,cName,views,daysOld,duration,thumbnail){
    let view
    if(views<1000){
        view=views
    }
    else if(views>=1000000){
         view=views/1000000+"M"
    }
    else{
         view=views/1000 +"K"
    }
    let html=`<div class="card">

            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p> ${cName} . ${view} views . ${daysOld} day ago</p>
            </div>
        </div>`
        document.querySelector(".container").innerHTML= document.querySelector(".container").innerHTML + html
}contentCard("Introduction to Video | Vlog #2", "ViplavDixit", "8900000", "9", "31:20", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")