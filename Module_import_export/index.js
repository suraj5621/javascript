let firstname = "Samarth"
let lastname = "vohra"
let username = "sam vohra"


function sum(a,b){
    return a+b;
}

console.log("mera naam joker");


// export default firstname;

// export default se keval ek hi cheej bhej sakte hai
// koi {} currly braces ki need nhi hoti 

// import kisi bhi name se kr sakte hai doosri file mein



export {firstname, lastname, username, sum};

// ye named export hota hai
// isme curly braces ki jarorat hoti hai
// multiple valiable send kr sakte hai

// import usi hi name se kr sakte hai doosri file mein jis name se export kiya ho
// import krte time d-structuring ki jati hai