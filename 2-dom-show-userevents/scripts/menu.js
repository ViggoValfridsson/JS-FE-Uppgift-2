"use strict";

let linkArray1 = [{link:"https://google.com", text:"google"}, {link:"https://www.w3schools.com/", text:"w3"}];
let linkArray2 = [{link:"https://javascript.info", text:"JS.info"}, {link:"https://amazon.com", text:"amazon"}];
let linkArray3 = [{link:"https://github.com", text:"github"}, {link:"https://www.discord.com/", text:"discord"}];
let arrayOfArrays = [linkArray1, linkArray2, linkArray3];

createNavElements(arrayOfArrays);

function createNavElements() {
  let nav = document.createElement("nav");

  for (let i = 0; i < arrayOfArrays.length; i++) {
    let ul = document.createElement("ul");
    let listItemArray = createListItems(arrayOfArrays[i])

    ul.append(listItemArray[0], listItemArray[1]);

    nav.append(ul);
  }

  let header = document.querySelector("header");
  header.append(nav);
}

function createListItems(linkArray) {
  let listItemArray = [];

  for (let i = 0; i < linkArray.length; i++) {
    let object = linkArray[i];
    let aElement = document.createElement("a");
    let li = document.createElement("li");
    aElement.textContent = object.text;
    aElement.setAttribute("href", object.link);
    li.append(aElement);
    listItemArray[i] = li;
  }

  return listItemArray;
}


