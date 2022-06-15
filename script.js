document
  .querySelector(".hamburguer")
  .addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
  );

function exibValor(newValue) {
  document.getElementById("exibPercent").innerHTML = newValue;
}
