let enviar = document.getElementById("enviar");
let input = document.getElementById("input");

let lista = document.getElementById("lista");

let itens = JSON.parse(localStorage.getItem("itens")) ?? [];

for (let index = 0; index < itens.length; index++) {
    let item = document.createElement("li");
    item.textContent = itens[index];
    lista.appendChild(item);
}

input.value = localStorage.getItem("teste");

enviar.addEventListener("click", function () {
  if (input.value != "") {
    //lista.innerHTML += `<li>${input.value}</li>`;
    //localStorage.setItem('teste', input.value);
    let item = document.createElement("li");
    item.textContent = input.value;
    lista.appendChild(item);
    itens.push(input.value);
    localStorage.setItem("itens", JSON.stringify(itens));
  }
  input.value = "";
});
