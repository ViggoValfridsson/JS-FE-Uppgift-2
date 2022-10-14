// you should use a loop ...

let accordionContainer = document.getElementsByClassName("accordian-container");

for (let i = 0; i < accordionContainer.length; i++) {
  accordionContainer[i].addEventListener("click", function() {
    openAndClose(accordionContainer[i]);
  });
}

function openAndClose(accordion) {
  for (let i = 0; i < accordionContainer.length; i++) {
    if (accordionContainer[i] != accordion) {
      accordionContainer[i].classList.remove("active");
    }
  }
   accordion.classList.toggle("active");
}