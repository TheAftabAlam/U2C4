// write js code here corresponding to index.html
// You should add submit event on the form
 document.querySelector("#masaiForm").addEventListener("submit",masaifun)
  
  function masaifun(){
    event.preventDefault();
    var matchArr=JSON.parse(localStorage.getItem("schedule"))||[]
    var data={
        matchNum: document.querySelector("#matchNum").value,
        teamA: document.querySelector("#teamA").value,
        teamB: document.querySelector("#teamB").value,
        date: document.querySelector("#date").value,
        venue: document.querySelector("#venue").value,
    }
    matchArr.push(data)
   localStorage.setItem("schedule",JSON.stringify(matchArr))
  }

