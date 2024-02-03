let div  = document.querySelector('div');
let btn = document.querySelector('button');

function print(){
    let p = document.createElement('p');
    p.innerText ="Hello World muskuraiya 😊";
    div.appendChild(p);
}


btn.addEventListener('click' ,() =>{
    let p = document.createElement('p');
    p.innerText ="Hello World muskuraiya 😊";
    div.appendChild(p);
})

btn.addEventListener('click' ,() =>{
    let p = document.createElement('p');
    p.innerText ="iss duniya mein bhot dukh hai 😢";
    div.appendChild(p);
})