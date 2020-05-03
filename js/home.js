let valorIncial = 10;
const $second = document.querySelector(".-second");

$second.addEventListener("click", handleClick);

function handleClick() {
  const $car  = document.querySelector(".-last");
  $car.textContent = `Carrinho (${++valorIncial})`;
}