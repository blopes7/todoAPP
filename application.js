const tarefaInput = document.getElementById('tarefa-input');
const tarefaForm = document.getElementById('tarefa-form');
const concluirTarefa = document.getElementById('concluir-btn');
const tarefas = document.getElementById('tarefas');
let contador = 0

// fetch ('https://jsonplaceholder.typicode.com/todos')
//     //convertemos Json em objeto/array JS
//     .then(response => response.json())
//     .then(json => {
//             json.forEach(todo => addTarefa(todo.completed, todo.title) );
//         }
//     });
// });


// addEventListener deixa colocarmos multiplos eventos
// no mesmo elemento, rodando todos ao mesmo tempo quando disparados
tarefaForm.addEventListener('submit', function (event) {
    event.preventDefault();

    //verificar se o campo tem nenhum char
    if (tarefaInput.value.length <= 3){
        tarefaInput.classList.add('is-invalid')
        tarefaInput.focus();
        
        const feedback = tarefaInput.parentNode.querySelector('.invalid-feedback');  //
        feedback.innerText = "Digite 4 caracteres ou mais para a tarefa"

        const totalDigitado = tarefaInput.value.length;

        feedback.innerText = `Você digitou ${totalDigitado} char, digite 4 caracteres`

        return false;
    }
    tarefaInput.classList.remove('is-invalid')

    contador++;

    //console.log(tarefaInput.value);

        const tarefaTexto =`
        <li class="list-group-item">
        <div class="form-check d-flex justify-content-between align-items-center">
        <input type="checkbox" id="tarefa-${contador}" class="form-check-input">
        <label for="tarefa-${contador}" class="form-check-label" flex-grow ms-3>
        ${tarefaInput.value}
        </label>
        <button class="btn btn-danger" onclick="deletar(this);">Excluir</button>
        </div>
        </li>
        </li>
        `;

    //console.log(tarefaTexto);
    tarefas.innerHTML += tarefaTexto;

    //Atua como um limpador dos dados
    tarefaForm.reset();

});
////////////////////////////////////FIM DO BLOCO

//estamos usando arrow funciton - mesma coisa que funciton ()
//salvo algumas situações que são diferente

concluirTarefa.onclick = () =>{
    const checks = document.querySelectorAll('#tarefas input:checked');
    
    checks.forEach(elemento =>{
        elemento.parentNode
            .parentNode
            .remove();
    });

}
function deletar (elemento) {
    elemento.parentNode
    .parentNode
    .remove();
}

/////////////////////////// FIM DO BLOCO

