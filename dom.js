const body = document.getElementsByTagName('#body');

// testing out things
// console.log('body by tagname is: ',body);
// console.log("body by tagname siblings: ", body.nextSibling);
// console.log("body by element siblings: ", body.nextElementSibling);


// create needed elements for exercise 
const div = document.createElement('div');
const para = document.createElement('p');
const blueH3 = document.createElement('h3');
const h1 = document.createElement('h1');
const para2 = document.createElement('p');

// adding text to the elements 

para.textContent = "Hey I'm red!";
blueH3.textContent = "I'm a blue h3!";
h1.textContent = "I'm in a div.";
para2.textContent = "ME TOO!";


// placing elements in DOM in correct place
document.body.appendChild(para);
document.body.appendChild(blueH3);
document.body.appendChild(div);

// stylizing elements via JS 

para.setAttribute('style', 'color: red;');
blueH3.setAttribute('style', 'color: blue;');
div.setAttribute('id', 'container'); 
div.setAttribute('style', 'background-color: pink; border-style: solid; border-color: black');

// put h1 and para2 in container

const container = document.querySelector('#container');

container.appendChild(h1);
container.appendChild(para2);
