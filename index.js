let name = "Ahsanul huq shibu";
let age = 21;
let website = "ahsan the iGo Moon";
let fb = "Ahsanul huq";
let occation  = " wordPress developer";

let html;
function hello(){

    return " Hello every one this is ahsanul huq before you"
}
html = `
    <ul>
    
        <li>name : ${name}</li>
        <li>age : ${age}</li>
        <li>website : ${website}</li>
        <li>fb : ${fb}</li>
        <li>occation: ${occation}</li> 
        <li>function : ${hello()}</li> 
    </ul>

`
document.body.innerHTML = html;


