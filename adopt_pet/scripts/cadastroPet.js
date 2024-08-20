function adicionarPet(event) {
  event.preventDefault();

  const foto = document.getElementById("foto").value;
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const cor = document.getElementById("cor").value;
  const descricao = document.getElementById("descricao").value;
  const tipo = document.getElementById("tipo").value;

  if (!foto) {
    document.getElementById("foto").style.border = "2px solid red";
    document.getElementById("foto-erro").innerText = "Campo obrigatório";
  } else {
    document.getElementById("foto").style.border = "1px solid #a9480b";
    document.getElementById("foto-erro").innerText = "";
  }

  if (!nome) {
    document.getElementById("nome").style.border = "2px solid red";
    document.getElementById("nome-erro").innerText = "Campo obrigatório";
  } else {
    document.getElementById("nome").style.border = "1px solid #a9480b";
    document.getElementById("nome-erro").innerText = "";
  }

  if (!idade) {
    document.getElementById("idade").style.border = "2px solid red";
    document.getElementById("idade-erro").innerText = "Campo obrigatório";
  } else {
    document.getElementById("idade").style.border = "1px solid #a9480b";
    document.getElementById("idade-erro").innerText = "";
  }

  if (!tipo) {
    document.getElementById("tipo").style.border = "2px solid red";
    document.getElementById("tipo-erro").innerText = "Campo obrigatório";
  } else {
    document.getElementById("tipo").style.border = "1px solid #a9480b";
    document.getElementById("tipo-erro").innerText = "";
  }

  if (nome && idade && tipo) {
    const pet = {
      id: Date.now(),
      foto,
      nome,
      idade,
      cor,
      descricao,
      tipo,
    };

    const listaPets = JSON.parse(localStorage.getItem("pets")) || [];
    listaPets.push(pet);
    localStorage.setItem("pets", JSON.stringify(listaPets));
    document.getElementById("form-pet").reset();
  }
}

document.getElementById("form-pet").addEventListener("submit", adicionarPet);
