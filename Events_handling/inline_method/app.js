let div  = document.querySelector('div');
let btn = document.querySelector('button');

function print(){
    let p = document.createElement('p');
    p.innerText ="Hello World muskuraiya 😊";
    div.appendChild(p);
}



// inline event  --> aap ek element pr ek  hi  event lga sakte hai hai 

// jada event lgane ke liye addEventListener ka use kro 


// other method of inline event
// ---------------------------------------------

btn.onclick = print();

// aap ya to index.html mein clha lo ya yha chla lo