// let fontStyle = document.getElementsByClassName("FontStyle");
// let editInputSize = document.getElementsByClassName("EditInputSize");

let div = document.createElement("div");
// h1.innerHTML = "Hello";

// Object.assign(h1.style, {
//     color: "red"
// })

document.body.appendChild(div);
let boderOutsider = document.getElementsByClassName("borderOutsider");
div.className = "boderOutsider";
div.className ="editInputSize";
let input = document.createElement("input");
div.appendChild(input);
div.innerHTML = "Google"
Object.assign(div.style, {
    color: "#cc0000"
    fontSize: "40px"

})
