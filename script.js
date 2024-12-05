let input = document.getElementById('barra');
let button = document.getElementById('btn');
let Lista = document.getElementById('lista');
let tarefas = [];

function NewWork() {
    if (input.value.trim() === "") {
        alert("Não possui nenhuma tarefa pendente");
        return;
    }

    tarefas.push({
        tarefa: input.value.trim(),
        concluir: false,
    });

    input.value = ""; 
    ShowWork();
}

function ShowWork() {
    let novoItem = '';

    tarefas.forEach((quest, indice) => {
        novoItem += `
        <li>
            <input type="checkbox" ${quest.concluir ? "checked" : ""} onclick="ToggleConcluir(${indice})">
            <p style="${quest.concluir ? "text-decoration: line-through; color: gray;" : ""}">${quest.tarefa}</p>
            <img src="https://cdn.icon-icons.com/icons2/1141/PNG/512/1486395883-edit_80608.png" alt="Editar" onclick="Editar(${indice})">
            <img src="https://cdn-icons-png.flaticon.com/512/6048/6048004.png" alt="Deletar" onclick="Deletar(${indice})">
        </li>
        `;
    });

    Lista.innerHTML = novoItem;

    localStorage.setItem('tasks', JSON.stringify(tarefas));
}

function ToggleConcluir(indice) {
    tarefas[indice].concluir = !tarefas[indice].concluir;
    ShowWork();
}

function Deletar(indice) {
    tarefas.splice(indice, 1);
    ShowWork();
}

function Editar(indice) {
    let novoNome = prompt("Renomeie a tarefa:", tarefas[indice].tarefa);
    if (novoNome && novoNome.trim() !== "") {
        tarefas[indice].tarefa = novoNome.trim();
        ShowWork();
    } else if (novoNome !== null) {
        alert("O nome da tarefa não pode estar vazio.");
    }
}

function Refresh() {
    let storage = localStorage.getItem('tasks');

    if (storage) {
        tarefas = JSON.parse(storage);
    }

    ShowWork();
}

Refresh();
button.addEventListener('click', NewWork);


function UpdateProgressBar() {
    const totalTarefas = tarefas.length;
    const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluir).length;

    // Atualizando o preenchimento da barra de progresso
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');

    if (totalTarefas > 0) {
        const porcentagem = (tarefasConcluidas / totalTarefas) * 100;
        progressFill.style.width = `${porcentagem}%`;
        progressText.textContent = `${tarefasConcluidas} / ${totalTarefas} tarefas concluídas`;
    } else {
        progressFill.style.width = "0%";
        progressText.textContent = "0 / 0 tarefas concluídas";
    }
}

// Atualize a barra sempre que as tarefas forem modificadas
function ShowWork() {
    let novoItem = '';

    tarefas.forEach((quest, indice) => {
        novoItem += `
        <li>
            <input type="checkbox" ${quest.concluir ? "checked" : ""} onclick="ToggleConcluir(${indice})">
            <p style="${quest.concluir ? "text-decoration: line-through; color: gray;" : ""}">${quest.tarefa}</p>
            <img src="https://cdn.icon-icons.com/icons2/1141/PNG/512/1486395883-edit_80608.png" alt="Editar" onclick="Editar(${indice})">
            <img src="https://cdn-icons-png.flaticon.com/512/6048/6048004.png" alt="Deletar" onclick="Deletar(${indice})">
        </li>
        `;
    });

    Lista.innerHTML = novoItem;

    localStorage.setItem('tarefa', JSON.stringify(tarefas));

    
    UpdateProgressBar();
}
