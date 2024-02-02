let div = document.getElementById('container');


axios.get('https://openlibrary.org/subjects/astronomy.json') // fetch ki jgh axios.get rhega bss
.then(function (response){
    return response.data;                                  // response.json() nhi hota hai axios mein  is me response .data chlta hai
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