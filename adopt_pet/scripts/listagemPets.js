function carregarDados() {
  const petsNaMemoria = JSON.parse(localStorage.getItem("pets"));

  const lista = document.getElementById("lista-pets");

  petsNaMemoria.forEach((pet) => {
    const div = document.createElement("div");
    div.classList.add("item-pet");

    const img = document.createElement("img");
    img.setAttribute("width", "150px");
    img.setAttribute("height", "150px");
    img.style.objectFit = "cover";
    img.setAttribute("src", pet.foto);
    div.append(img);

    const h2 = document.createElement("h2");
    h2.innerText = pet.nome;
    div.append(h2);

    const button = document.createElement("button");
    button.innerText = "Deletar";
    button.onclick = deletarPet;
    div.append(button);

    lista.append(div);
  });
}

function deletarPet(event) {
  const div = event.target.parentNode;
  const nome = div.querySelector("h2").innerText;

  const petsNaMemoria = JSON.parse(localStorage.getItem("pets"));
  const index = petsNaMemoria.findIndex((p) => p.nome === nome);
  petsNaMemoria.splice(index, 1);
  localStorage.setItem("pets", JSON.stringify(petsNaMemoria));
  div.remove();
}

document.addEventListener("DOMContentLoaded", carregarDados);
