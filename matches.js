// write js code here corresponding to matches.html
var matchArr=JSON.parse(localStorage.getItem("schedule"))||[]

display(matchArr)

function display(data){
    data.forEach(function(elem){
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
        fav.innerText="Favrouite";
        fav.style.color="green"
        fav.style.cursor="pointer"
        fav.addEventListener("click",function(){
            favrtFun(elem)
        })

       tr.append(td1,td2,td3,td4,td5,fav)
       document.querySelector("tbody").append(tr)

    })
    var favrtData=JSON.parse(localStorage.getItem("favourites"))||[]
    function favrtFun(elem){
        favrtData.push(elem)
        localStorage.setItem("favourites",JSON.stringify(favrtData))
    }

}
var selected=document.querySelector("#filterVenue")

selected.addEventListener("change",sort)

function sort()
{
    document.querySelector("tbody").innerHTML=""
 matchArr.filter(function (elem){
         return elem.venue=selected.value
         localStorage.setItem("schedule",JSON.stringify(matchArr))
     })
 display(matchArr)
  
  
}

