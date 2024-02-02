let div = document.getElementById('container');


fetch('https://openlibrary.org/subjects/astronomy.json')  // ye promise return krta hai
.then(function (response){
    return response.json();
})
.then(function (obj){
    return obj.works;
})
.then(function (works){
    for (let item of works) {
        let p = document.createElement('p');
        p.innerText=item.title;
        div.appendChild(p);
    }
    
})
.catch(function(err){
    console.log(err);
})