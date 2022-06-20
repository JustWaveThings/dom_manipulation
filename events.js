// // Method 2

// // const btn = document.querySelector("#btn");
// // btn.onclick = () => alert("Hello World");

// // Method 3

// // const btn2 = document.querySelector("#btn2");
// // btn2.addEventListener("click", () => {
// //   alert("Hello World");
// // });

// // with a named function 

// function alertFunction() {
//     alert("Yay, you did it.");
// }

// // method #2

// btn2.onclick = alertFunction;

// // method #3

// btn.addEventListener('click', alertFunction);

// //

// btn.addEventListener("click", function (e) {
//   console.log(e);
// });

// btn.addEventListener("click", function (e) {
//   console.log(e.target);
// });

// btn.addEventListener("click", function (e) {
//   e.target.style.background = 'blue';
// });

// buttons is a node list. It looks and acts much like an array.
//const buttons = document.querySelectorAll('button');

// // we use the .forEach method to iterate through each button
// buttons.forEach((button) => {

// //   // and for each one we add a 'click' listener
//   button.addEventListener('click', () => {
//     console.log(button.id);
//   });
// });

// creates input field on page 
const input = document.createElement("input");
input.setAttribute("type", "text");
document.body.appendChild(input);

// creates event listener for input into textbox
input.addEventListener("keydown", logKey);

// logs 1 press to console, then removes listener -- works
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
  input.removeEventListener("keydown", logKey);
}

// this is a test to figure out how to remove an event listener based on a conditional.

// assign btn3 to a const... 
const btn3 = document.querySelector('#btn3');
// assign a boolean for use in function
let game = true;

//1  prove that function logs btn3 to console - this works 

// function eventListenClick() {
//   btn3.addEventListener('click', () => {
//     console.log(btn3.id);
//   })
// }

// 2 Prove that the true part of the if function is not impacting logging btn3 to console

function eventListenClick(game1 = game) {
  if (game1 === 'true') {
    btn3.addEventListener('click', () => {
      console.log(btn3.id);
      game = 'false';
    })
  }
}

  // 3 prove that btn3 will only be logged once to console
  
// function eventListenClick() {
//   if (game === "true") {
//     btn3.addEventListener("click", () => {
//       console.log(btn3.id);
//       game = "false";
//     });
//   } else {
//     btn3.removeEventListener("click", () => {
//       console.log(btn3.id);
//     });
//   }
// }


eventListenClick();