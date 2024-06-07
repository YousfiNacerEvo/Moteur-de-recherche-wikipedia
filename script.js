const input = document.querySelector("input");
const button = document.querySelector("button");
const output = document.querySelector(".output");

button.addEventListener("click",SEARCH);



function SEARCH(){
    let url = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8&format=json&origin=*&srlimit=20&srsearch="+input.value;;
    let R = fetch(url);
    R.then(r=>r.json())
     .then(data =>{
        try{
            let contenue = data.query.search;
            
            for (let i = 0; i < contenue.length; i++) {
                let newElement = document.createElement("div");
                newElement.classList.add("div-styling");
                newElement.innerHTML = `
                    <a href="https://en.wikipedia.org/?curid=${contenue[i].pageid}" target="_blank"><h3 >${contenue[i].title}</h3></a>
                    <p>${contenue[i].snippet}</p>
                   
                `;
                output.appendChild(newElement);
            }
        }catch{
            console.log("err de recuperation des donner")
        }
     })
     .catch(err=>console.log("ERREUR CNX SERVEUR"))
}