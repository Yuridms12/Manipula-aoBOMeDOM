// comandos para executar no console

/*


alert("Mensagem de alerta");
console.log("Mensagem no console");

console.log(window.innerWidth);
console.log(window.innerHeight);

localStorage.setItem("Item", "Valor do item");
let valor = localStorage.getItem("Item");
console.log(valor);
*/

const novoDiv = document.createElement("div");
novoDiv.id = "meuDiv";
document.body.appendChild(novoDiv);

novoDiv.innerText = "Meu Div inserido";
novoDiv.style.backgroundColor = "slategrey";

let textP = document.querySelector("p");
textP.style.color = "white";
textP.style.backgroundColor = "black";

const buttonChange = document.querySelector("button");
buttonChange.addEventListener("click", () => {
  textP.style.backgroundColor = "blue";
  textP.innerText = "Texto e cor alterados";
});

document.body.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    console.log("Enter foi pressionado");
  }
});

const imagem = document.querySelector("#imagem");
imagem.setAttribute("title", "Imagem dinâmica");
console.log(imagem.title);

let lista = document.createElement("ul");
document.body.appendChild(lista);
function adicionarNaLista(texto) {
  let item = document.createElement("li");
  item.innerText = texto;
  lista.appendChild(item);

  let botaoRemover = document.createElement("button");
  botaoRemover.innerText = "Remover";

  botaoRemover.addEventListener("click", () => {
    lista.removeChild(item);
  });

  item.appendChild(botaoRemover);
}

adicionarNaLista("1");
adicionarNaLista("2");
adicionarNaLista("3");
