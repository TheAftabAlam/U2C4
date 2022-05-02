// write js code here corresponding to favourites.html

var favrtData=JSON.parse(localStorage.getItem("favourites"))||[]
display(favrtData)

function display(data){
    data.forEach(function(elem,index){
        var tr=document.createElement("tr");
        var td1=document.createElement("td")
        td1.innerText=elem.matchNum;
        var td2=document.createElement("td")
        td2.innerText=elem.teamA;
        var td3=document.createElement("td")
        td3.innerText=elem.teamB;
        var td4=document.createElement("td")
        td4.innerText=elem.date;
        var td5=document.createElement("td")
        td5.innerText=elem.venue;
        var fav=document.createElement("p")
        fav.innerText="Delete";
        fav.style.color="red"
        fav.style.cursor="pointer"
        fav.addEventListener("click",function(){
            removefav(elem,index)
        })

       tr.append(td1,td2,td3,td4,td5,fav)
       document.querySelector("tbody").append(tr)

    })
}
function removefav(index){
    document.querySelector("tbody").innerHTML=""
    favrtData.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(favrtData))
    display(favrtData)
}

