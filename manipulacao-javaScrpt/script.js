let titulo = document.getElementById("titulo");
let lista = document.getElementsByClassName("lista");

let mais = document.getElementById("mais");
let numero = document.getElementById("numero");
let menos = document.getElementById("menos");

titulo.textContent = " novo titulo via JavaScript";
titulo.innerHTML += "<sub> teste</sub>";

teste();

function teste() {
  for (let index = 0; index < lista.length; index++) {
    lista[index].textContent = "itens " + index;
    lista[index].addEventListener("click", function () {
      lista[index].style.color = "blue";
      alert("clicou no index " + index);
    });
  }
}

mais.addEventListener("click", function () {
  numero.textContent = parseInt(numero.textContent) + 1;
});

menos.addEventListener("click", function () {
  if (numero.textContent > 0) {
    numero.textContent = parseInt(numero.textContent) - 1;
  } else {
    alert("Não pode ter número menor que 0");
  }
});
