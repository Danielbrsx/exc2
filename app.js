// app.js

document.addEventListener("DOMContentLoaded", function () {
    carregarRegistros();

    const form = document.getElementById("formCadastro");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const idade = document.getElementById("idade").value;

        if (nome && idade) {
            const registro = { nome, idade };

            adicionarRegistro(registro);
            limparFormulario();
        }
    });
});

function obterRegistros() {
    let registros = localStorage.getItem("registros");
    return registros ? JSON.parse(registros) : [];
}

function adicionarRegistro(registro) {
    const registros = obterRegistros();
    registros.push(registro);

    localStorage.setItem("registros", JSON.stringify(registros));
    carregarRegistros();
}

function carregarRegistros() {
    const listaRegistros = document.getElementById("listaRegistros");
    listaRegistros.innerHTML = "";

    const registros = obterRegistros();
    registros.forEach(function (registro) {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = `${registro.nome} - ${registro.idade} anos`;
        listaRegistros.appendChild(li);
    });
}

function limparFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
}
