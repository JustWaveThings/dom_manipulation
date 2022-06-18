const list = document.createElement("ul");
const info = document.createElement("p");
const info2 = document.createElement("p");
const html = document.querySelector("html");


info.textContent =
  "Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.";

info2.textContent = "this is a test";

document.body.appendChild(info);
// document.body.appendChild(list);
document.body.appendChild(info2);

// html.onclick = function () {
//   const listItem = document.createElement("li");
//   const listContent = prompt("What content do you want the list item to have?");
//   listItem.textContent = listContent;
//   list.appendChild(listItem);

//   listItem.onclick = function (e) {
//     e.stopPropagation();
//     const listContent = prompt("Enter new content for your list item");
//     this.textContent = listContent;
//   };
// };
