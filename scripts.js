let names = ["Jane", "Alex", "Fiona", "<strong>Lenka</strong>"];

// for (let i = 0; i < names.length; i++) {
//     $("li").append(" " + names[i]); 
// }

names.forEach(name => {
    $("ul li").append(" " + name);
});


// NOT FINISHED:
// let additionalBlock = {
//     title: "Added with javascript",
//     text: "This block was added using JavaScript's jQuery library. How awesome!"
// };

let title = document.createElement("h3");
let titleText = document.createTextNode("Added with javascript");
title.appendChild(titleText);
$('body').append(title);

let text = document.createElement("p");
let textText = document.createTextNode("This block was added using JavaScript's jQuery library. How awesome!");
text.appendChild(textText);
$('body').append(textText);


