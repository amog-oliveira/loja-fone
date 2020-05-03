/*
1 - Ter a janela (browser) na mão
2 - Localizar o HTML (ter o HTML na mão)
3 - Pegar o coração
4 - Pegar o click no coração
5 - No momento que o usuário clicar, devemos mostrar um texto "ae" na tela
*/

const $heart = window.document.querySelector(".-heart");

// console.log("$heart");

$heart.addEventListener("click", handleClick);

function handleClick() {  
  console.log("ae");
}